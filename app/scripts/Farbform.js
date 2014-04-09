// Export to window
(function (window) {
    'use strict';
    function Farbform(form, felder) {
        form.on("submit", function() {
            felder.setBaseColour('#'+Math.floor(Math.random()*16777215).toString(16));
            felder.draw();
            return false;
        });
        form.find(".js-triggerSubmit").on("change", function() {
            form.submit();
        });
    }

    window.app = window.app || {};
    window.app.Farbform = Farbform;
}(window));