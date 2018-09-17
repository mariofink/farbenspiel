<template>
    <main>
        <h1>Farbenspiel</h1>
        Base:
        <input type="color" v-model="baseColor">
        {{baseColor}}

        <ul class="combinations">
            <li v-for="combo in combinations" v-bind:key="combo">
                <FarbKombination :colors="combo"></FarbKombination>
            </li>
        </ul>
    </main>
</template>

<script>
const tinycolor = require("tinycolor2");
import FarbKombination from "./FarbKombination.vue";

export default {
  name: "FarbenSpiel",
  components: { FarbKombination },
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
  background: #333;
  color: #eee;
  font-family: Lato, sans-serif;
}

main {
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
}

.combinations {
  list-style: none;
  padding: 0;
  width: 100%;
}
</style>
