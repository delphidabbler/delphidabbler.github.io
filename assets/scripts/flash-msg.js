/**
 * Enables "flash" messages to persist their display state. Once user has 
 * the close button a cookie is set that ensures the flash is not displayed
 * again.
 */

$( function() {
    var flash = $("#flash-popup");
    if ( ! flash )
        return;
    var id = flash.data('flash-id');
    var cookieName = 'dd_flash_' + id;
    flash.on('closed.bs.alert', function () {
        Cookie.write(cookieName, "dismissed", 3650); 
    });
    if ( ! Cookie.read(cookieName) ) {
        flash.show();
    }
    else {
        flash.hide();
    }
});
