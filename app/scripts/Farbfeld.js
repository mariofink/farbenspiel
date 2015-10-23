// Export to window
(function(window) {
  'use strict';

  function Farbfeld(_col) {
    console.log("new feld", _col, _col.toHexString());
    var el = null;
    var details = null;
    var col = _col;
    this.getColour = function() {
      return col;
    };
    this.setColour = function(colour) {
      col = colour;
      this.update();
    };
    this.draw = function() {
      var hex = this.getColour().toHexString();
      el = $("<div></div>").addClass("farbfeld");
      el.css("background-color", hex);
      el.css("border-color", tinycolor(this.getColour()).darken(20));
      details = $("<section class='details hidden'></section>");
      details.append(hex);
      el.html(details);
      return el;
    };
    this.update = function() {
      var hex = this.getColour().toHexString();
      el.css("background-color", hex);
      el.css("border-color", tinycolor(this.getColour()).darken(20));
      details.html(hex);
    };
  }

  window.app = window.app || {};
  window.app.Farbfeld = Farbfeld;
}(window));
