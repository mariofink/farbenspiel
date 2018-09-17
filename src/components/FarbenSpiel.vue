<template>
    <main>
        <h1>Farbenspiel</h1>
        Base:
        <input type="color" v-model="baseColor">
        {{baseColor}}

        <ul class="combinations">
            <li v-for="combo in combinations" v-bind:key="combo.title">
                <FarbKombination :colors="combo.colors" :title="combo.title"></FarbKombination>
            </li>
        </ul>
    </main>
</template>

<script>
import FarbKombination from "./FarbKombination.vue";
import ColorCombination from "../ColorCombination.js";

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
        analogous: new ColorCombination("Analogous", this.baseColor),
        monochromatic: new ColorCombination("Monochromatic", this.baseColor),
        tetrad: new ColorCombination("Tetrad", this.baseColor),
        splitcomplement: new ColorCombination(
          "Splitcomplement",
          this.baseColor
        ),
        triad: new ColorCombination("Triad", this.baseColor)
      };
    }
  }
};
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
