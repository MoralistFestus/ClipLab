#CLIPLAB LIBRARY - JavaScript
ClipLab is a Simple but Effective Copy to Clipboard 📋 Library ♎. This simple library allows copying text to clipboard with a single JavaScript function.

## How to Use

✔ Download or Clone this Library
✔ Link it in your html file using `<script src="cliplab.js"></script>` or use the minified version.

## Example Code

```javascript
new ClipLab()
```

This simple function triggers the copy to clipboard 📋 action.

## ClipLab Attribute 📋

The ClipLab Js library has two data attributes:

- data-copy-text
- data-attr-selector

The two data attributes in cliplab are used for specifying clipboard value (text to be copied to clipboard). 

- The `data-copy-text` holds the text value to be copied to clipboard, while
- The `data-attr-selector` points to the class value of an input field to be copied.

## data-copy-text example

```html
<button id="btn" data-copy-text="This text will be copied">Copy</button>
```

The <b>data-copy-text</b> attribute holds the text that will be copied to clipboard. To further the text to clipboard. let's call the ClipLab function and pass the `id="btn"` attribute into the function.

## Sample code

```javascript
<button id="btn" data-copy-text="This text will be copied">Copy text</button>
<script>
 new ClipLab("#btn"); // btn attribute
</script>
```

Once the copy text button is clicked, the text is copied.

You can let the user aware that the text is successfully copied to clipboard.

```javascript

	<button id="btn" data-copy-text="The text will be copied">Copy text</button>
	
	<script type="text/javascript">
	var copyText = new ClipLab("#btn"); 
		var copyText = new ClipLab("#btn"); 
          // true
		copyText.onCopied = function(copied) {
			alert("Copied: " + copied);
		};
          // false
		copyText.notCopied = function(copied) {
			window.prompt("Ctrl+C: ", copied);
		}; 
	</script>
```

Texts from input or textarea fields can be copied with use of ClipLab library. Refer to the official documentation website. 

For More Documentation on the library, pls refer to it official website: <a href="https://moralistfestus.github.io/ClipLab">ClipLab Website</a>

## Browser Support
ClipLab works with the latest version of JavaScript on Chrome, Firefox, Opera Mini and other browsers but as not being tested with IE (Internet Explorer).
