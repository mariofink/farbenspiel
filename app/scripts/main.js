window.farbenspiel = {};
window.farbenspiel.init = function() {
  console.log("init");
  this.canvas = $("#farbspiel");
  var myFeld = new this.Farbfeld();
  myFeld.draw();
};
