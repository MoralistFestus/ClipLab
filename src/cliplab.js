/* © Moralist Festus
* ClipLab Copy to Clipboard Library - 2020
* ClipLab is a Simple but Effective Copy to Clipboard Library

@Creator: Moralist Festus
@Github: https://github.com/moralistfestus/cliplab
@Licence: Released under the MIT Licence
@ClipLab v1.0.0

*/

(function() {
    "use strict";
    
// initialize cliplab
var ClipLab = function(btnSelector) {
    this.init(btnSelector);
};

ClipLab.prototype = {
    constructor: ClipLab,

    init: function(btnSelector) {
        this.clear();
        
    // assign attribute value for selector 
        var el = document.querySelector(btnSelector),
            text = el.getAttribute("data-copy-text"), // text attr
            selector = el.getAttribute("data-attr-selector"); // selector attr
         
         // Throw Console Error if text and Selector does not match 
        if (!text && !selector) {
            throw new Error("Undefined Error: Text and Selector Attribute");
        }

        this._el = el;
        this._text = text;
        this._selector = selector;
        
        var self = this;
        this._el.addEventListener("click", this._onClick = function(e) {
            self._copy();
        });
    },

    clear: function() {
        if (this._el) {
            this._el.removeEventListener("click", this._onClick);
            this._onClick = null;
        }

        if (this._outsideEl) {
            document.body.removeChild(this._outsideEl);
            this._outsideEl = null;
        }
    },

    select: function() {
        var el = null;
        if (this._selector) {
            el = document.querySelector(this._selector);
        } else {
            el = this._attachedOutsideEl();
        }

        el.select();

        return el.value;
    },
    
  // unselect value
    unselect: function() {
        if (this._outsideEl) {
            this._outsideEl.blur();
        }
        
        window.getSelection().removeAllRanges();
    },
     // Text copied 
    onCopied: function(text) {
        // override
    },
      // Text not Copied 
    notCopied: function(text) {
        // override
    },

    _copy: function() {
        var result = this.select(),
            copied = false;
            
         // execCommand function for copy  - if false 
        try {
            copied = document.execCommand("copy");
        } catch (err) {
            copied = false;
        }
        // specify copy statements
        if (copied) {
            this.onCopied(result);
        } else {
            this.notCopied(result);
        }
    },
     // Text area (input field) attributes
    _attachedOutsideEl: function() {
        if (!this._outsideEl) {
            var el = document.createElement("textarea");
            el.style.cssText = "position:absolute;left:-9999px;top:-9999px;";
            el.value = this._text;
            document.body.appendChild(el);

            this._outsideEl = el;
        }

        return this._outsideEl;
    }
};

window.ClipLab = ClipLab;
// Call
})();