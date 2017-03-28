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

