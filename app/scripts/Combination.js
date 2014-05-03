// Export to window
(function (window) {
    'use strict';
    function Combination(comboType) {
        var colours = null;
        var fields = [];
        this.type = comboType;
        this.setBaseColour = function(base) {
            colours = tinycolor[comboType](base);
            // reverse order and while keeping the base at the beginning
            var first = colours.shift();
            colours = colours.reverse();
            colours.unshift(first);
            updateFields();
        };
        function updateFields() {
            for (var i = 0, len = colours.length; i<len; i++) {
                if (fields[i]) {
                    fields[i].setColour(colours[i]);
                } else {
                    fields.push(new app.Farbfeld(colours[i]));
                }
            }
        }
        this.getFields = function() {
            return fields;
        };
        this.getColours = function() {
            return colours;
        };
        this.draw = function() {
            var el = $("<div class='fields'></div>");
            for (var i = 0, len = fields.length; i<len; i++) {
                el.append(fields[i].draw());
            }
            return el;
        };
    }

    window.app = window.app || {};
    window.app.Combination = Combination;
}(window));
