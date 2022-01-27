<template>
  <div class="combination">
    <h2 class="combination__caption">{{ title }}</h2>
    <div class="colours">
      <div
        class="colour"
        v-for="(color, index) in colors"
        v-bind:key="title + index"
        v-bind:style="{
          backgroundColor: color,
          width: 100 / colors.length + '%',
        }"
      >
        <span class="colour__value">{{ color }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import tinycolor from "tinycolor2";

export default {
  name: "FarbKombination",
  props: ["type", "baseColor"],
  computed: {
    colors: function () {
      return getHexColors(tinycolor(this.baseColor)[this.type]());
    },
    title: function () {
      const title = this.type.toString();
      return title.charAt(0).toUpperCase() + title.slice(1);
    },
  },
};

function getHexColors(colors) {
  return colors.map(function (color) {
    return color.toHexString();
  });
}
</script>

<style scoped>
.combination {
  position: relative;
  margin-bottom: 2rem;
}

.combination__caption {
  position: absolute;
  width: 100%;
  margin: 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.66);
}
.colours {
  display: flex;
  justify-content: space-between;
  height: 200px;
}

.colour {
  color: #000;
  transition: all ease-in 1s;
  display: flex;
  justify-content: space-around;
}

.colour__value {
  text-shadow: 0px 0px 5px #fff;
  align-self: self-end;
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

@media (max-width: 650px) {
  .colour__value {
    font-size: 0.75rem;
    text-orientation: upright;
    writing-mode: vertical-lr;
    margin-bottom: 1rem;
  }
}
</style>
