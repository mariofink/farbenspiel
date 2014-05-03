(function () {
    'use strict';

    function FarbenSpiel(_form) {
        var col = _form.find("input.colourInput").val();
        this.farbfelder = new app.Farbfelder(col, $("#farbspiel"));
        this.form = new app.Farbform(_form, this.farbfelder);
    }

    var fs = new FarbenSpiel($("#farbForm"));

    function init() {
        fs.farbfelder.draw();
    }

    $(document).ready(function() {
        init();
    });
})();
