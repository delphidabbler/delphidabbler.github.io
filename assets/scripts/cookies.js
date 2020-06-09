/**
 * Cookies script
 * Based on code at https://www.w3schools.com/js/js_cookies.asp and variation by
 * seanjacob https://stackoverflow.com/users/1134275/seanjacob
 */
 
 var Cookie = {
   
    write: function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    
    read: function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return null;
    },
    
    delete: function (cname) {
        Cookie.write(cname, "", -1);
    }
};
