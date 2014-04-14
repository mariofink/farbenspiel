(function () {
    'use strict';

    function FarbenSpiel(_col, _form) {
        this.farbfelder = new app.Farbfelder(_col, $("#farbspiel"));
        this.form = new app.Farbform(_form, this.farbfelder);
    }

    var fs = new FarbenSpiel('#bada55', $("#farbForm"));

    function init() {
        fs.farbfelder.draw();
    }

    $(document).ready(function() {
        init();
    });
})();