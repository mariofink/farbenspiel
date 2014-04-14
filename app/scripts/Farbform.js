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
//        form.find(".js-triggerSubmit").on("change", function() {
//            form.submit();
//        });
    }

    window.app = window.app || {};
    window.app.Farbform = Farbform;
}(window));