// Export to window
(function (window) {
    'use strict';
    function Farbform(form, felder) {
        var input = form.find("input.colourInput");
        input.minicolors({
            change: function() {
                form.submit();
            }
        });
        form.on("submit", function() {
            var baseColour = input.val();
            felder.setBaseColour(baseColour);
            felder.draw();
            return false;
        });
        form.find(".js-random-colour").on("click", function() {
            var col = tinycolor('#'+Math.floor(Math.random()*16777215).toString(16));
            input.minicolors("value", col.toHexString());
        });
    }

    window.app = window.app || {};
    window.app.Farbform = Farbform;
}(window));