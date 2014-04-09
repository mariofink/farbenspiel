// Export to window
(function (window) {
    'use strict';
    function Farbfelder(_baseCol, canvas) {
        var baseColour = _baseCol;
        this.setBaseColour = function(col) {
            baseColour = col;
        };
        this.draw = function() {
            var feld = new app.Farbfeld(baseColour);
            canvas.append(feld.draw());
        };
    }

    window.app = window.app || {};
    window.app.Farbfelder = Farbfelder;
}(window));