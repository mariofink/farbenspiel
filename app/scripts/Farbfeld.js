// Export to window
(function (window) {
    'use strict';
    function Farbfeld(_col) {
        this.getColour = function () {
            return _col;
        };
        this.draw = function() {
            var el = $("<div></div>");
            el.html(this.getColour());
            return el;
        };
    }

    window.app = window.app || {};
    window.app.Farbfeld = Farbfeld;
}(window));