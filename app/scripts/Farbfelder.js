// Export to window
(function (window) {
    'use strict';
    function Farbfelder(_baseCol, canvas) {
        var baseColour = _baseCol;
        var comboTypes = ["analogous","monochromatic","splitcomplement","triad","tetrad"];
        this.setBaseColour = function(col) {
            baseColour = col;
        };
        this.draw = function() {
            canvas.empty();
            var combos = getAllCombinations(baseColour);
            for (var i in combos) {
                var container = $("<section class='combination'></section>");
                container.append("<h2>" + i + "</h2>");
                container.append(drawFieldsForCombination(combos[i]));
                canvas.append(container);
            }
        };

        function getAllCombinations(base) {
            var combos = {};
            for (var i = 0, len = comboTypes.length; i<len; i++) {
                var colours = tinycolor[comboTypes[i]](base);
                combos[comboTypes[i]] = createFieldsForCombination(colours);
            }
            return combos;
        }
        function createFieldsForCombination(colours) {
            var fields = [];
            $.each(colours, function(j, item) {
                console.log("create field", item);
                fields.push(new app.Farbfeld(item));
            });
            return fields;
        }
        function drawFieldsForCombination(combo) {
            var fields = $("<div></div>");
            for (var i in combo) {
                fields.append(combo[i].draw());
            }
            return fields;
        }
    }

    window.app = window.app || {};
    window.app.Farbfelder = Farbfelder;
}(window));