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
