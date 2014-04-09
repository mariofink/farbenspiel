(function () {
    'use strict';

    function FarbenSpiel(_col) {
        this.farbfelder = new app.Farbfelder(_col, $("#farbspiel"));
        this.form = new app.Farbform($("#farbForm"), this.farbfelder);
    }

    var fs = new FarbenSpiel('#000');

    function init() {
        console.log(fs);
        fs.farbfelder.draw();
    }

    $(document).ready(init);
})();