// Export to window
(function (window) {
    'use strict';
    function Farbfeld(_col) {
        var el = null;
        var details = null;
        var col = _col;
        this.getColour = function () {
            return col;
        };
        this.setColour = function (colour) {
            col = colour;
            this.update();
        };
        this.draw = function() {
            el = $("<div></div>").addClass("farbfeld");
//            console.log("draw", this.getColour().toHexString());
            el.css("background-color", this.getColour().toHexString());
            el.css("border-color", tinycolor.darken(this.getColour(), 20));
            details = $("<section class='details hidden'></section>");
            details.append(this.getColour().toHexString());
//            details.append("<br>" + this.getColour().toRgbString());
            el.html(details);
            return el;
        };
        this.update = function() {
            el.css("background-color", this.getColour().toHexString());
            el.css("border-color", tinycolor.darken(this.getColour(), 20));
            details.html(this.getColour().toHexString());
        };
    }

    window.app = window.app || {};
    window.app.Farbfeld = Farbfeld;
}(window));
