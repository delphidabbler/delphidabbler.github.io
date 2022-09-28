/**
 * Enables "flash" messages to persist their display state. Once user has
 * the close button a cookie is set that ensures the flash is not displayed
 * again.
 */

$( function() {
    const flash = $("#flash-popup");
    if ( flash.length === 0 ) {
        return;
    }
    const id = flash.data('flash-id');
    const cookieName = 'dd_flash_' + id;
    flash.on('closed.bs.alert', function () {
        // Set cookie for 1yr: can't set for more per EU regs
        Cookie.set(cookieName, "dismissed", 365);
    });
    if ( ! Cookie.isSet(cookieName) ) {
        flash.show();
    }
    else {
        flash.hide();
    }
});
