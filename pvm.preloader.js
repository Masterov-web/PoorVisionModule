var pvmPreloader = document.createElement( 'div' );
pvmPreloader.setAttribute( 'class', 'pvm-preloader' );

var pvmIcon = document.createElement( 'span' );
pvmIcon.setAttribute( 'class', 'pvm-icon' );

if( getCookieValue( 'PVMactivate' ) ){
  document.body.appendChild( pvmPreloader );
  pvmPreloader.appendChild( pvmIcon );
}

// Get value from cookie
function getCookieValue( name ) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
// Get value from cookie