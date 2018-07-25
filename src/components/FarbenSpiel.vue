<template>
    <div>
        <h1>Farbenspiel</h1>
        Base:
        <input type="color" v-model="baseColor">
        {{baseColor}}

        <ul>
            <li v-for="combo in combinations" v-bind:key="combo">
                {{ combo }}
            </li>
        </ul>
    </div>
</template>

<script>
const tinycolor = require("tinycolor2");

export default {
  name: "FarbenSpiel",
  data: () => {
    return {
      baseColor: "#c0ffee"
    };
  },
  computed: {
    combinations: function() {
      return {
        analogous: getHexColors(tinycolor(this.baseColor).analogous()),
        monochromatic: getHexColors(tinycolor(this.baseColor).monochromatic()),
        tetrad: getHexColors(tinycolor(this.baseColor).tetrad()),
        splitcomplement: getHexColors(
          tinycolor(this.baseColor).splitcomplement()
        ),
        triad: getHexColors(tinycolor(this.baseColor).triad())
      };
    }
  }
};

function getHexColors(colors) {
  return colors.map(function(color) {
    return color.toHexString();
  });
}
</script>

<style>
body {
  font-family: sans-serif;
}
</style>
