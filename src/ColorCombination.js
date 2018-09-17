const tinycolor = require("tinycolor2");

export default class ColorCombination {
  constructor(combination, baseColor) {
    this.title = combination;
    this.colors = getHexColors(
      tinycolor(baseColor)[combination.toLowerCase()]()
    );
  }
}

function getHexColors(colors) {
  return colors.map(function(color) {
    return color.toHexString();
  });
}
