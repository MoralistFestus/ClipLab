# CLIPLAB LIBRARY

<p style="font-family:georgia>ClipLab is a Simple but Effective Copy to Clipboard JavaScript Library. ClipLab can copy text to library in just a single line of JavaScript code. I tried as much as possible to minimize this library into a single function for flexibility. </p>

## How to Use:

✔ Clone or Download and link it with `<script src="cliplab.js"></script>` or `<script src="cliplab.min.js"></script>`

## Example code

```javascript
  var copy = new ClipLab("#btn");
  // or
  new ClipLab("#btn");
```

<p style="font-family:georgia">This single line function will copy text to clipboard with the id `btn`. </p>


## More Example

```javascript

	var copyText= new ClipLab("#btn"); 
          // true
		copyText.onCopied = function(text) {
			alert("Copied: " + text);
		};
          // false
		copyText.notCopied = function(text) {
			window.prompt("Ctrl+C: ", text);
		}; 
```

# ClipLab Attribute

<p style="font-family:georgia"> ClipLab has two attributes, the `data-copy-text` attribute and `data-attr-selector` used for specifying clipboard value</p>

## Example
```html
<button id="btn" data-copy-text="This text will be copied">Copy</button>
```

<p style="font-family:georgia">The <b>data-copy-text</b> holds the text value to be copied to clipboard, to perform the copy function. initialize the `new ClipLab()` function. for example:</p>

``` javascript
	<button id="btn" data-copy-text="This text will be copied" title="Copy Me!">Copy</button>
	 <script>
	  new ClipLab("#btn");
	 </script>
```

<p style="font-family:georgia">The text inside the `data-copy-text` attribute will be copied.</p>

## Show if a text is copied.

```javascript

	<button id="btn" data-copy-text="The text will be copied" title="Copy Text">Copy</button>
	
	<script type="text/javascript">
	var copyText = new ClipLab("#btn"); 
		var copyText = new ClipLab("#btn"); 
          // true
		copyText.onCopied = function(text) {
			alert("Copied: " + text);
		};
          // false
		copyText.notCopied = function(text) {
			window.prompt("Ctrl+C: ", text);
		}; 
	</script>
```

<p style="font-family:georgia">You can copy text from an input field for example:</p>

```javascript

	<input class="input" style="width:250px" value="Press Copy to copy this text"></input>
	<button id="btn" data-attr-selector=".input">Copy</button>

	<script type="text/javascript">
		var copyText = new ClipLab("#btn");

		copyText.onCopied = function(text) {
			alert("Copied: " + text)
			this.unselect();
		};

		copyText.notCopied = function(text) {
			window.prompt("Ctrl+C: ", text);
		};
	</script>
```

Thanks for using this library. Have you any issue with this library. Just make an issue request. 