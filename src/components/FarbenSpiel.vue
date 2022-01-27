<template>
    <main>
        <h1>Farbenspiel</h1>
        Base:
        <input type="color" v-model="baseColor">
        {{baseColor}}

        <ul class="combinations">
            <li v-for="combo in combinations" v-bind:key="combo.title">
                <FarbKombination :type="combo" :baseColor="baseColor"></FarbKombination>
            </li>
        </ul>
    </main>
</template>

<script>
import FarbKombination from "./FarbKombination.vue";

export default {
  name: "FarbenSpiel",
  components: { FarbKombination },
  data: () => {
    return {
      baseColor: "#c0ffee",
      combinations: [
        "analogous",
        "monochromatic",
        "tetrad",
        "splitcomplement",
        "triad"
      ]
    };
  }
};
</script>

<style scoped>
main {
  text-align: center;
}

.combinations {
  list-style: none;
  padding: 0;
  width: 100%;
}
</style>
