/**
 * Flash message script.
 *
 * Enables "flash" messages to persist their display state. Once user has clicked the close button
 * a cookie is set that ensures the flash is not displayed again (for 1 year).
 *
 * (C) 2022, Peter Johnson | MIT License | Part of github.com/delphidabbler/delphidabbler.github.io
 */


$( function() {
    const flash = $("#flash-popup");
    if ( flash.length === 0 ) {
        // there is no flash message in document: nothing to do
        return;
    }
    const id = flash.data('flash-id');
    const cookieName = 'dd-base--flash-' + id;
    flash.on('closed.bs.alert', function () {
        // set cookie for 1yr: can't set for more per EU regs
        Cookie.set(cookieName, "dismissed", 365);
    });
    if ( ! Cookie.isSet(cookieName) ) {
        flash.show();
    }
    else {
        flash.hide();
    }
});
