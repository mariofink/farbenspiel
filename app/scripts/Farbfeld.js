(function(o) {
  o.Farbfeld = function (_col) {
      var colour = _col;
      this.getColour = function() {
          return colour;
      };
      this.setColour = function(col) {
          colour = col;
      };
      this.draw = function() {
          console.log("Farbfeld draw", o.canvas);
          o.canvas.append($("<div>Test</div>"));
      };
  };
})(window.farbenspiel || {});
