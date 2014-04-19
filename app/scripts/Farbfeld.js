// Export to window
(function (window) {
    'use strict';
    function Farbfeld(_col) {
        this.getColour = function () {
            return _col;
        };
        this.draw = function() {
            var el = $("<div></div>").addClass("farbfeld");
//            console.log("draw", this.getColour().toHexString());
            el.css("background-color", this.getColour().toHexString());
            el.css("border-color", tinycolor.darken(this.getColour(), 20));
            var details = $("<section class='details'></section>");
            details.append(this.getColour().toHexString());
//            details.append("<br>" + this.getColour().toRgbString());
            el.html(details);
            return el;
        };
    }

    window.app = window.app || {};
    window.app.Farbfeld = Farbfeld;
}(window));