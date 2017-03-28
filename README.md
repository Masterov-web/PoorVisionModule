# PoorVisionModule
---
## Structure
```
pvm
|--assets/
|  |--pvm.core.css
|  |--pvm.theme.default.css
|  |--pvm_icon.png
|  
|--jquery.pvm.js
|--pvm.preloader.js
|--readMe.txt
```

## CSS
To work the module in `<head>`, you need to add two css files:
```html
<link rel="stylesheet" href="pvm/assets/pvm.core.css">
<link rel="stylesheet" href="pvm/assets/pvm.theme.default.css">
```
`Pvm.core.css` contains the base styles for the module, this file is not recommended to be edited.

`Pvm.theme.default.css` contains user-defined styles. You can add the necessary design to this file.

## JS
You need to connect `jQuery` and `jquery.pvm.js` to the footer.
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="pvm/jquery.pvm.js"></script>
```

## HTML
You need to add the following markup:
```html
<div id="pvm"></div>
```
before the closing `</body>` tag or before the section with the script declaration.

For example:
```html
...
</footer>
<div id="pvm"></div>
</body>
```

```html
...
</footer>
<div id="pvm"></div>
<script src="someScript.js"></script>
<script src="anotherScript.js"></script>
</body>
```

## Call the plugin
```javascript
$( document ).ready( function(){
   $( 'body' ).pvm();
 });
```

## Settings
All settings are objects whose property values can be changed.

The property of the object is a constant.

The first part of the value (the one before the symbol double underscore `__`) also does not change.

To set a custom value, you need to change the part that is after the symbol double underscore `__`

### Default settings for the toolbar
### Font size
The settings section is controlled by a single object.
```javascript
'PVM_fontSize': {
   'big': 'big__18',
   'bigger': 'bigger__22',
   'biggest': 'biggest__26'
  }
  ```

### Background color
The settings section is controlled by three objects.

Background color
```javascript
'PVM_backgroundColor': {
   'theme1': 'theme1__#fff',
   'theme2': 'theme2__#000',
   'theme3': 'theme3__#ff0'
  },
```

Font Color
```javascript
'PVM_color': {
   'theme1': 'theme1__#000',
   'theme2': 'theme2__#fff',
   'theme3': 'theme3__#0ff'
  },
 ```
 
Border color
```javascript
'PVM_borderColor': {
   'theme1': 'theme1__#000',
   'theme2': 'theme2__#fff',
   'theme3': 'theme3__#0ff'
  }
```

### Letter spacing
The settings section is controlled by a single object.
```javascript
'PVM_letterSpacing': {
   'ls1': 'ls1__0',
   'ls2': 'ls2__2',
   'ls3': 'ls3__4'
 }
```

### Font type
The settings section is controlled by a single object.
```javascript
'PVM_fontFamily': {
   'sans': 'sans__sans-serif',
   'serif': 'serif__serif',
 }
```

Example of calling a plugin with settings
```javascript
$( document ).ready( function(){
   $( 'body' ).pvm({
     'PVM_fontSize': {
       'big': 'big__25'
     },

     'PVM_backgroundColor': {
       'theme1': 'theme1__#00f',
       'theme2': 'theme2__#fff'
     },

     'PVM_color': {
       'theme3': 'theme3__#0f0'
     }
   });
 });
```

Now the first button in the "Font Size" section will set the font size to 25px instead of 18px by default. The remaining dimensions will remain unchanged.

The first button in the "Select color" section will color the background of the site in blue instead of white by default, the second - in white, instead of black.

The third button will leave the background of the site unchanged, but will make the font color green.

### Prevent adding prefixes
The plugin copies all the contents of the `<body>` and inserts it into the `pvm` container, in this container all classes get the `PVM-` prefix, and the id - `PVM_`.

To prevent the addition of prefixes to certain classes, there is a `PVM_saveClasses` object with two properties: `singleClass` and `groupOfClasses`.

The value of the `singleClass` property is an array of strings with the names of classes that do not need to be assigned prefixes.

The value of `groupOfClasses` is a regular expression that allows you to select a group of classes that do not need to assign prefixes.
```javascript
$( document ).ready( function(){
   $( 'body' ).pvm({
   'PVM_saveClasses': {
     'singleClass': [ 'class-name-1', 'class-name-2' ],
     'groupOfClasses': /\bexample-?/i
   }
 })
 ```
 
Do not assign a prefix to classes `.class-name-1`, `.class-name-2`. (`SingleClass property`).

Do not assign a prefix to all classes starting with `example-` (`groupOfClasses property`).

## CSS classes
### Hide block
To hide a block that should not be displayed in the version for people with visual disabilities, you can assign it a `.PVM-hide class`.

### Drop-down menus
To create drop-down menus, you need to add the `.PVM-menu` class to the menu container. To add text to the button, you need to specify the attribute `data-menu-name` to the menu container (it is expected that the menu is formed from the lists `<ul>`).
```html
<ul class="some-class PVM-menu" data-menu-name="Основное меню">
 ...
```

If there are several menus on the page, you can add a class and a unique signature for the button to each.

## Preloader
To hide the user from drawing page elements while the module is running, you can add a preloader (animated image representing the process of loading the page of the site).

To install the preloader at the top of the page, just after the `<body>` tag, you need to add the following code:
```html
<script src="pvm/pvm.preloader.js"></script> 
```

## Compatibility
+ Chrome
+ Firefox
+ Opera
+ IE9 / 10/11 / eage
