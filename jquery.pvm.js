(function( $ ) {
  $.fn.pvm = function( options ) {
  
    $( window ).load( function(){
      var body = $( 'body' );
      var bodyContent = $( 'body' ).contents();

      var pvm;
      var origView;

      var PVMopenButton = $( '.PVM-open-button' );

      // Default settings
      var settings = $.extend( true, {
        'PVM_fontSize': {
          'big': 'big__18',
          'bigger': 'bigger__22',
          'biggest': 'biggest__26'
        },

        'PVM_backgroundColor': {
          'theme1': 'theme1__#fff',
          'theme2': 'theme2__#000',
          'theme3': 'theme3__#ff0'
        },

        'PVM_color': {
          'theme1': 'theme1__#000',
          'theme2': 'theme2__#fff',
          'theme3': 'theme3__#0ff'
        },

        'PVM_borderColor': {
          'theme1': 'theme1__#000',
          'theme2': 'theme2__#fff',
          'theme3': 'theme3__#0ff'
        },

        'PVM_letterSpacing': {
          'ls1': 'ls1__0',
          'ls2': 'ls2__2',
          'ls3': 'ls3__4'
        },

        'PVM_fontFamily': {
          'sans': 'sans__sans-serif',
          'serif': 'serif__serif',
        }
      }, options);
      // Default settings


      // Array of attributes that should be deleted
      var attrArray = ['style'];
      // Array of attributes that should be deleted


      // If cookie PVMactivate exist activate PVM
      if( getCookieValue( 'PVMactivate' ) ){
        activatePVM();
        $( '.pvm-preloader' ).fadeOut();
      }
      // If cookie PVMactivate exist activate PVM


      // Add event to Activate PVM button
      PVMopenButton.on( 'click', activatePVM );
      // Add event to Activate PVM button

      // Activate PVM function
      function activatePVM( event ){
        
        if( event ){
          event.preventDefault();
        }


        if( !getCookieValue( 'PVMactivate' ) ){
          setCookie( 'PVMactivate', 'true' );
        }

        if( !setUserSettings() ){
          setCookie( 'PVM_fontSize', settings.PVM_fontSize.big );
          setCookie( 'PVM_backgroundColor', settings.PVM_backgroundColor.theme1);
          setCookie( 'PVM_color', settings.PVM_color.theme1 );
          setCookie( 'PVM_borderColor', settings.PVM_borderColor.theme1 );
          setCookie( 'PVM_letterSpacing', settings.PVM_letterSpacing.ls1);
          setCookie( 'PVM_fontFamily', settings.PVM_fontFamily.sans);
        }

        function setUserSettings(){
          var arrayCookieProps = document.cookie.match( /PVM_[^=]+/g );

          if( !arrayCookieProps ){
            return false;
          }
          
          var currentCookieValue;
          var currentArrayCookieValue;
          var currentSettigsValue;

          var i;
          for( i = 0; i < arrayCookieProps.length; i++ ){
            currentArrayCookieValue = getArrayCookieValue( getCookieValue( arrayCookieProps[i] ) );
            currentSettigsValue = settings[ arrayCookieProps[i] ][ currentArrayCookieValue[0] ];

            if( currentArrayCookieValue[1] != currentSettigsValue ){
              setCookie( arrayCookieProps[i], currentSettigsValue );
            }            
          }

          return true;
        }

        //console.log( document.cookie );

        /*
        If PVM was activeted and body has #pvm
        change css display and exit
        */
        if( $( '#pvm' ).children().length ){
          pvm.addClass( 'pvm-activate' );
          origView.addClass( 'hide-origView' );

          // Console message
          console.log( 'PVM activate' );
          // Console message

          return;
        }
        /*
        If PVM was activeted and body has #pvm
        change css display and exit
        */

        // Add PVM wrapper
        body.children().wrapAll( '<div id="origView"></div>' );
        origView = $( '#origView' );

        pvm = origView.find( '#pvm' );

        while( pvm.next().length ){
          body.append( pvm.next() );
        }

        pvm.insertAfter( origView );

        // Create PVM toolbar (HTML)
        pvm.append( '<div id="PVM_wrapper"><div class="PVM-wrapper-toolbar" id="PVM_toolbar"><div class="PVM-toolbar"><div class="PVM-toolbar-items"><div id="PVM_fontSizeItem" class="PVM-toolbar-item"><h2>Размер шрифта</h2><ul><li><button class="PVM-toolbar-button PVM-button-big"><span>A</span></button></li><li><button class="PVM-toolbar-button PVM-button-bigger"><span>A</span></button></li><li><button class="PVM-toolbar-button PVM-button-biggest"><span>A</span></button></li></ul></div><div id="PVM_colorSchemeItem" class="PVM-toolbar-item"><h2>Выбор цвета</h2><ul><li><button class="PVM-toolbar-button PVM-button-theme1"><span>Aa</span></button></li><li><button class="PVM-toolbar-button PVM-button-theme2"><span>Aa</span></button></li><li><button class="PVM-toolbar-button PVM-button-theme3"><span>Aa</span></button></li></ul></div><div id="PVM_letterSpacingItem" class="PVM-toolbar-item"><h2>Межбуквенный интервал</h2><ul><li><button class="PVM-toolbar-button PVM-button-ls1"><span>Aa</span></button></li><li><button class="PVM-toolbar-button PVM-button-ls2"><span>Aa</span></button></li><li><button class="PVM-toolbar-button PVM-button-ls3"><span>Aa</span></button></li></ul></div><div id="PVM_serifItem" class="PVM-toolbar-item"><h2>Тип шрифта</h2><ul><li><button class="PVM-toolbar-button PVM-button-sans"><span>Aa</span></button></li><li><button class="PVM-toolbar-button PVM-button-serif"><span>Aa</span></button></li></ul></div></div><button class="PVM-toolbar-button PVM-normal-view" id="PVM_normalView">Стандартный режим</button></div></div><button class="PVM-toggle-toolbar PVM-close-toolbar">Закрыть панель</button></div>' );
        var pvmWrapper = $( '#PVM_wrapper' );
        var PVMtoolbar = $( '#PVM_toolbar' );
        // Create PVM toolbar (HTML)


        // Clone body content
        origView.contents()
                .clone()
                .appendTo( $( '#PVM_wrapper' ) );
        // Clone body content


        // Add classes when pxm init
        pvm.addClass( 'pvm-activate' );
        origView.addClass( 'hide-origView' );
        // Add classes when pxm init        


        // Add event to toggle toolbar button
        var PVMtoggleToolbar = $( '.PVM-toggle-toolbar' );

        PVMtoggleToolbar.on( 'click', function(){
          if( $( this ).hasClass( 'PVM-close-toolbar' ) ){
            $( this ).text( 'Открыть панель' );
            $( this )
              .removeClass( 'PVM-close-toolbar' )
              .addClass( 'PVM-open-toolbar' );
          }

          else{
            $( this ).text( 'Закрыть панель' );
            $( this )
              .removeClass( 'PVM-open-toolbar' )
              .addClass( 'PVM-close-toolbar' );
          }

          PVMtoolbar.slideToggle();
        });
        // Add event to toggle toolbar button


        // Add PVM settings
        pvm.css({
          'font-size': Number( getArrayCookieValue( getCookieValue( 'PVM_fontSize' ) )[1] ),
          'background-color': getArrayCookieValue( getCookieValue( 'PVM_backgroundColor' ) )[1],
          'color': getArrayCookieValue( getCookieValue( 'PVM_color' ) )[1],
          'border-color': getArrayCookieValue( getCookieValue( 'PVM_borderColor' ) )[1],
          'letter-spacing': Number( getArrayCookieValue( getCookieValue( 'PVM_letterSpacing' ) )[1] ),
          'font-family': getArrayCookieValue( getCookieValue( 'PVM_fontFamily' ) )[1]
        });
        // Add PVM settings


        /*
        Remove all attributes that contains in attrArray,
        add "PVM-" prefix to class and "PVM_" prefix to ID`s and "for" attribute
        */
        pvm
          .children()
          .each( function( index ){
            removeAttribures( this, attrArray );
            addPrefix( this );
        });
        /*
        Remove all attributes that contains in attrArray,
        add "PVM-" prefix to class and "PVM_" prefix to ID`s and "for" attribute
        */


        // Remove open button
        pvm
          .find( $( '.PVM-open-button' ) )
          .remove();
        // Remove open button


        // Add event for PVM close button
        var normalViewButton = $( '#PVM_normalView' );
        normalViewButton.on( 'click', function(){
          pvm.removeClass( 'pvm-activate' );
          origView.removeClass( 'hide-origView' );

          deleteCookie( 'PVMactivate' );

          // Console message
          console.log( 'PVM deactivate' );
          // Console message
        });
        // Add event for PVM close button


        // Add events for PVM toolbar buttons
        // Font events
        var fontSizeItem = $( '#PVM_fontSizeItem' );

        // Highlight active button
        highlightActiveButton( settings.PVM_fontSize, 'PVM_fontSize' );
        // Highlight active button

        fontSizeItem.on( 'click', 'button', function(){
          fontSizeItem
            .find( 'button' )
            .each( function( index ){
              $( this ).removeClass( 'PVM-active-button' );
            });

          $( this ).addClass( 'PVM-active-button' );

          if( $( this ).hasClass( 'PVM-button-big' ) ){
            pvm.css({
              'font-size': +getArrayCookieValue( settings.PVM_fontSize.big )[1]
            });
            setCookie( 'PVM_fontSize', settings.PVM_fontSize.big );
          }

          else if( $( this ).hasClass( 'PVM-button-bigger' ) ){
            pvm.css({
              'font-size': +getArrayCookieValue( settings.PVM_fontSize.bigger )[1]
            });
            setCookie( 'PVM_fontSize', settings.PVM_fontSize.bigger );
          }

          else if( $( this ).hasClass( 'PVM-button-biggest' ) ){
            pvm.css({
              'font-size': +getArrayCookieValue( settings.PVM_fontSize.biggest )[1]
            });
            setCookie( 'PVM_fontSize', settings.PVM_fontSize.biggest );
          }
        });
        // Font events


        // Color events
        var colorSchemeItem = $( '#PVM_colorSchemeItem' );

        // Buttons color    
        setButtonsColor( colorSchemeItem );
        // Buttons color

        // Highlight active button
        highlightActiveButton( settings.PVM_backgroundColor, 'PVM_backgroundColor' );
        // Highlight active button

        colorSchemeItem.on( 'click', 'button', function(){
          colorSchemeItem
            .find( 'button' )
            .each( function( index ){
              $( this ).removeClass( 'PVM-active-button' );
            });

         $( this ).addClass( 'PVM-active-button' );

          if( $( this ).hasClass( 'PVM-button-theme1' ) ){
            pvm.css({
              'background-color': getArrayCookieValue( settings.PVM_backgroundColor.theme1 )[1],
              'color': getArrayCookieValue( settings.PVM_color.theme1 )[1],
              'border-color': getArrayCookieValue( settings.PVM_borderColor.theme1 )[1]
            });

            setCookie( 'PVM_backgroundColor', settings.PVM_backgroundColor.theme1 );
            setCookie( 'PVM_color', settings.PVM_color.theme1 );
            setCookie( 'PVM_borderColor', settings.PVM_borderColor.theme1 );
          }

          else if( $( this ).hasClass( 'PVM-button-theme2' ) ){
            pvm.css({
              'background-color': getArrayCookieValue( settings.PVM_backgroundColor.theme2 )[1],
              'color': getArrayCookieValue( settings.PVM_color.theme2 )[1],
              'border-color': getArrayCookieValue( settings.PVM_borderColor.theme2 )[1]
            });
            
            setCookie( 'PVM_backgroundColor', settings.PVM_backgroundColor.theme2 );
            setCookie( 'PVM_color', settings.PVM_color.theme2 );
            setCookie( 'PVM_borderColor', settings.PVM_borderColor.theme2 );
          }

          else if( $( this ).hasClass( 'PVM-button-theme3' ) ){
            pvm.css({
              'background-color': getArrayCookieValue( settings.PVM_backgroundColor.theme3 )[1],
              'color': getArrayCookieValue( settings.PVM_color.theme3 )[1],
              'border-color': getArrayCookieValue( settings.PVM_borderColor.theme3 )[1]
            });
            
            setCookie( 'PVM_backgroundColor', settings.PVM_backgroundColor.theme3 );
            setCookie( 'PVM_color', settings.PVM_color.theme3 );
            setCookie( 'PVM_borderColor', settings.PVM_borderColor.theme3 );
          }
        });
        // Color events


        // Letter spacing events
        var letterSpacingItem = $( '#PVM_letterSpacingItem' );

        // Highlight active button
        highlightActiveButton( settings.PVM_letterSpacing, 'PVM_letterSpacing' );
        // Highlight active button

        letterSpacingItem.on( 'click', 'button', function(){
          letterSpacingItem
            .find( 'button' )
            .each( function( index ){
              $( this ).removeClass( 'PVM-active-button' );
            });

          $( this ).addClass( 'PVM-active-button' );

          if( $( this ).hasClass( 'PVM-button-ls1' ) ){
            pvm.css({
              'letter-spacing': +getArrayCookieValue( settings.PVM_letterSpacing.ls1 )[1],
            });
            setCookie( 'PVM_letterSpacing', settings.PVM_letterSpacing.ls1 );
          }

          else if( $( this ).hasClass( 'PVM-button-ls2' ) ){
            pvm.css({
              'letter-spacing': +getArrayCookieValue( settings.PVM_letterSpacing.ls2 )[1],
            });
            setCookie( 'PVM_letterSpacing', settings.PVM_letterSpacing.ls2 );
          }

          else if( $( this ).hasClass( 'PVM-button-ls3' ) ){
            pvm.css({
              'letter-spacing': +getArrayCookieValue( settings.PVM_letterSpacing.ls3 )[1],
            });
            setCookie( 'PVM_letterSpacing', settings.PVM_letterSpacing.ls3 );
          }
        });
        // Letter spacing events


        // Serif events
        var serifItem = $( '#PVM_serifItem' );

        // Highlight active button
        highlightActiveButton( settings.PVM_fontFamily, 'PVM_fontFamily' );
        // Highlight active button

        serifItem.on( 'click', 'button', function(){
          serifItem
            .find( 'button' )
            .each( function( index ){
              $( this ).removeClass( 'PVM-active-button' );
            });

          $( this ).addClass( 'PVM-active-button' );

          if( $( this ).hasClass( 'PVM-button-sans' ) ){
            pvm.css({
              'font-family': getArrayCookieValue( settings.PVM_fontFamily.sans )[1],
            });
            setCookie( 'PVM_fontFamily', settings.PVM_fontFamily.sans );
          }

          else if( $( this ).hasClass( 'PVM-button-serif' ) ){
            pvm.css({
              'font-family': getArrayCookieValue( settings.PVM_fontFamily.serif )[1],
            });
            setCookie( 'PVM_fontFamily', settings.PVM_fontFamily.serif );
          }
        });
        // Serif events
        // Add events for PVM toolbar buttons
        // Create PVM toolbar (Create PVMclose button)
        // Add PVM wrapper


        // hide images
        pvm
          .find( 'img' )
          .hide();
        // hide images


        // Links
        toggleImageLinks();
        // Links


        // Create PVM menu
        createPVMmenu( pvmMenuSetId() );
        // Create PVM menu


        // Console message
        console.log( 'PVM activate' );
        // Console message
      }
      // Activate PVM function


      /*////////////////////////////////////////////////*/
      /*////////////////////////////////////////////////*/


      //  Functions
      // Toggle links that contain image
      function toggleImageLinks(){
        var links = pvm.find( 'a' );
        var linkName;
        //console.log( links.length );

        links.each( function( index ){
          if( $( this ).find( 'img' ).length ){

            if( $( this ).attr( 'title' ) == '' || $( this ).attr( 'title' ) == undefined ){
              linkName = '<span class="PVM-links-text">' +  $( this ).attr( 'href' ) + '</span>';
            }

            else{
              linkName = '<span class="PVM-links-text">' +  $( this ).attr( 'title' ) + '</span>';
            }

            $( this )
              .css({ 'display': 'block' })
              .html( linkName + $( this ).html() );
          }
        });
      }
      // Toggle links that contain image

     /*////////////////////////////////////////////////*/

      // Set menu id
      function pvmMenuSetId( triggerMenu ){
        var $origMenu = pvm.find( '.PVM-menu' );

        $origMenu.map( function( index ){
          $( this ).attr( 'id', 'PVM_Menu_0' + index );
        });

        return $origMenu;
      }
      // Set menu id

      /*////////////////////////////////////////////////*/

      // Create PVM menu
      function createPVMmenu( $menu ){
        var PVMwrapperMenu;
        var PVMmenuToogleButton;    

        $menu.each( function( index ){    
          // Create div wrapper for PVM menu
          PVMwrapperMenu = $( '<div/>',
          {
            'id': 'PVM_wrapperMenu_0' + index,
            'class': 'PVM-wrapper-menu'
          });
          // Create div wrapper for PVM menu


          // Create toggle button for PVM menu
          PVMmenuToogleButton = $( '<button/>',
          {
            'id': 'PVM_menuToogleButton_0' + index,
            'class': 'PVM-menu-toogle-button'
          });
          //PVMmenuToogleButton.text( 'Navigation_0' + index );
          PVMmenuToogleButton.text( $( this ).data( 'menu-name' ) );
          // Create toggle button for PVM menu


          // Wrap the PVM menu in div wrapper
          $( this ).wrap( PVMwrapperMenu );
          $( this )
            .parent()
            .prepend( PVMmenuToogleButton );
          // Wrap the PVM menu in div wrapper


          // Add click event for toggle button
          $( 'body' )
            .on( 'click',
                  '#PVM_menuToogleButton_0' + index,
                  { ULmenu: $( this ) },
                  togglePVMmenu
                );

          function togglePVMmenu( event ){
            event.data.ULmenu.slideToggle();
          }
          // Add click event for toggle button


          // Create open\close buttons
          var $li = $( this ).find( 'li' );
      
          $li.each( function( index ){
            if( $( this ).has( 'ul' ).length ){
              var PVMmenuArrow = $( '<span />',{
                'class': 'PVM-menu-arrow'
              });
              PVMmenuArrow.html( '▼' );

              $( this )
                .children( 'a' )
                .after( PVMmenuArrow );
            }       
          });

          $( this ).on( 'click', '.PVM-menu-arrow', function(){
            if( $( this ).html() == '▼' ){
              $( this ).html( '▲' )
            }

            else{
              $( this ).html( '▼' )
            }

            $( this )
              .closest( 'li' )
              .children( 'ul' )
              .slideToggle();
          });
          // Create open\close buttons

      
          // Add click event for menu items
          $( this ).on( 'click', 'a', function( event ){
            event.preventDefault();
        
            var a = $( this );
            var li = a.closest( 'li' );

            if( li.has( 'ul' ).length ){
              if( li.children( 'ul' ).css( 'display' ) == 'none' ){
                li
                  .children( 'ul' )
                  .slideDown();

                if( a.next().html() == '▼' ){
                  a.next().html( '▲' )
                }

                else{
                  a.next().html( '▼' )
                }
              }

              else{
                li
                  .children( 'ul' )
                  .slideUp();

                if( a.next().html() == '▼' ){
                  a.next().html( '▲' )
                }

                else{
                  a.next().html( '▼' )
                }

                window.location.assign( a.attr( 'href' ) );
              }
            }

            else{
              window.location.assign( a.attr( 'href' ) );
            }

          });
          // Add click event for menu items

        });
      } 
      // Create PVM menu

      /*////////////////////////////////////////////////*/

      // Highlight active button in PVM toolbar
      function highlightActiveButton( settigsObject, cookieItem ){

        for( key in settigsObject ){

          if( getCookieValue( cookieItem ) == settigsObject[key] ){
            $( '.PVM-button-' + key ).addClass( 'PVM-active-button' );        
          }

        }

      }
      // Highlight active button in PVM toolbar

      /*////////////////////////////////////////////////*/

      // Set buttons color in toolbar item "Pick color"
      function setButtonsColor( toolbatItem ){
        var $buttons = toolbatItem.find( 'button' );
        var matchString;

        $buttons.each( function(){
          matchString = $( this )
                               .attr( 'class' )
                               .match( /theme\d+/i );

          $( this ).css({
            'background-color': getArrayCookieValue( settings.PVM_backgroundColor[ matchString[0] ] )[1],
            'color': getArrayCookieValue( settings.PVM_color[ matchString[0] ] )[1]
          });

        });
      }
      // Set buttons color in toolbar item "Pick color"

      function getArrayCookieValue( string ){
        var arrayCookieValue = string.split( '__' );
        return arrayCookieValue;
      }

      /*////////////////////////////////////////////////*/

      // Remove id
      function removeAttribures( tag, attrArray ){
        var i;
        for( i = 0; i < attrArray.length; i++ ){
          $( tag ).removeAttr( attrArray[i] );
        }

        if( $( tag ).children().length ){
          $( tag )
            .children()
            .each( function( innerIndex ){
              removeAttribures( this, attrArray );
            });
        } 
    
      }
      // Remove id

      /*////////////////////////////////////////////////*/

      // Add prefix
      function addPrefix( tag ){
        // Add "PVM-" prefix to class
        if( $( tag ).attr( 'class' ) ){
          var arrClasses = $( tag )
                            .attr( 'class' )
                            .split( ' ' );

          var i;
          for( i = 0; i < arrClasses.length; i++ ){
        
            /*
            If class attribute start with "PVM-" prefix, indexOf() method
            return number of position, that coincidence was — 0 (false),
            but bitwise operator NOT will perform the following transformation
            ~0 == -(0+1) == -1, it means coincidence are exist and "for" cусle 
            will continue its work with new iteration
            */
            if( ~arrClasses[i].indexOf( 'PVM-' ) ){
              continue;
            }

            saveClasses(tag, arrClasses, i);

          }

        }
        // Add "PVM-" prefix to class


        // Add "PVM_" prefix to id
        if( $( tag ).attr( 'id' ) ){

          if( $( tag ).attr( 'id' ).indexOf( 'PVM_', 0 ) ){
            $( tag ).attr( 'id', 'PVM_' +  $( tag ).attr( 'id' ) );
          }   

        }
        // Add "PVM_" prefix to id


        // Add "PVM_" prefix to for attribute
        if( $( tag ).attr( 'for' ) ){
          $( tag ).attr( 'for', 'PVM_' +  $( tag ).attr( 'for' ) );
        }
        // Add "PVM_" prefix to for attribute


        if( $( tag ).children().length ){
          $( tag )
            .children()
            .each( function( innerIndex ){
              addPrefix( this );
            });
        }
      }
      // Add prefix

      function saveClasses( tag, arrClasses, i){
        if( settings.PVM_saveClasses && settings.PVM_saveClasses.singleClass ){
          var j;
          for ( j = settings.PVM_saveClasses.singleClass.length - 1; j >= 0; j-- ){         
            if( arrClasses[i] == settings.PVM_saveClasses.singleClass[j] ){
              return;
            }
          }
        }

        if( settings.PVM_saveClasses && settings.PVM_saveClasses.groupOfClasses ){
          var classMatch = arrClasses[i].match( settings.PVM_saveClasses.groupOfClasses );
          if( classMatch ){
            return;
          }
        }

        arrClasses[i] = 'PVM-' + arrClasses[i];
        $( tag ).attr( 'class', arrClasses.join( ' ' ) ); 
      }

      /*////////////////////////////////////////////////*/

      // Get value from cookie
      function getCookieValue( name ) {
        var matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
          ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
      /*
      (?:^|; ) — search from string start or from ";",

      (name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1'))
      then replace method escapes characters, specified in the regular expression
      (so that they do not interfere)

      ("=([^;]*)") — search symbol "=" and all, that after till ";"

      Match method without flag "/g" returns a array where the first element is full concidence and second element is part of coincidence, that put into brackets
      */
      // Get value from cookie

      /*////////////////////////////////////////////////*/

      // Set cookie
      function setCookie(name, value, expires) {  
        value = encodeURIComponent(value);

        var expiresDate = expires || new Date(2100, 0).toUTCString();
        var cookiePath = 'path=/';
        var cookieExpires = 'expires=' + expiresDate;

        var updatedCookie = name + "=" + value + '; ' + cookiePath + '; ' + cookieExpires;

        document.cookie = updatedCookie;
      }
      // Set cookie

      /*////////////////////////////////////////////////*/

      // Delete cookie
      function deleteCookie(name) {
        setCookie(name, '', -1);
      }
      // Delete cookie


      // Functions
    });

  };
})(jQuery);