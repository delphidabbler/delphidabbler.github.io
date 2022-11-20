/*
 * Cookie consent script
 * (C) 2022, Peter Johnson | MIT License | Part of github.com/delphidabbler/delphidabbler.github.io
 *
 * Requires cookies.js
 *
 * To style this item provide CSS for:
 *    #cookie-popup (bounding <div>)
 *    p.cookie-msg (message string <p>)
 *    p.cookie-btn (<p> containing close button)
 *    p.cookie-btn button (close <button> itself)
 */

var CookieConsent = {
    exec: function() {
        let cookieName = 'dd_inhibit_cookie_consent';
        if ( Cookie.isSet(cookieName) ) {
            return;
        }
        $(document.body).prepend(
            '<div id="cookie-popup" class="container-fluid">'
            + '<p class="cookie-msg">This website uses a minimum number of cookies. '
            + 'There are no trackers or advertising cookies. '
            + '<a href="/cookies">More info</a>.'
            + '</p>'
            + '<p class="cookie-btn"><button id="cookie-close-btn">Dismiss</button></p>'
            + '</div>'
        );
        $('#cookie-close-btn').click(function() {
            Cookie.set(cookieName, "dismissed", 91);  // expires in apx 3 mths
            $('#cookie-popup').hide();
        });
    }
}

$( function() {
    CookieConsent.exec();
});
