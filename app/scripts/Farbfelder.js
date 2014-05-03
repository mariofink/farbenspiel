// Export to window
(function (window) {
    'use strict';
    function Farbfelder(_baseCol, canvas) {
        var baseColour = _baseCol;
        var colourCombos = [
            new app.Combination("monochromatic"),
            new app.Combination("analogous"),
            new app.Combination("tetrad"),
            new app.Combination("splitcomplement"),
            new app.Combination("triad")
        ];
        this.setBaseColour = function(col) {
            baseColour = col;
        };
        this.draw = function() {
            canvas.empty();
            for (var i = 0, len = colourCombos.length; i<len; i++) {
                var combo = colourCombos[i];
                combo.setBaseColour(baseColour);
                var container = $("<section class='combination " + combo.type + "'></section>");
                container.append("<header>" + combo.type + "</header>");
                container.append(combo.draw());
                canvas.append(container);
            }
            addEvents();
        };
        this.update = function() {
            this.draw();
        };
        function addEvents() {
            $(".farbfeld").hover(function() {
                $(this).find(".details").removeClass("hidden");
            }, function() {
                $(this).find(".details").addClass("hidden");
            });
        }
    }

    window.app = window.app || {};
    window.app.Farbfelder = Farbfelder;
}(window));
