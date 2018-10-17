<template>
<div>
   <h2>{{ title }}</h2>
   <div class="farbkombination">
       <div class="farbfeld" v-for="(color, index) in colors" v-bind:key="title + index"
       v-bind:style="{backgroundColor: color, width: 100/colors.length + '%'}">
           {{ color }}
       </div>
   </div>
</div>
</template>

<script>
const tinycolor = require("tinycolor2");

export default {
  name: "FarbKombination",
  props: ["type", "baseColor"],
  computed: {
    colors: function() {
      return getHexColors(tinycolor(this.baseColor)[this.type]());
    },
    title: function() {
      const title = this.type.toString();
      return title.charAt(0).toUpperCase() + title.slice(1);
    }
  }
};

function getHexColors(colors) {
  return colors.map(function(color) {
    return color.toHexString();
  });
}
</script>

<style scoped>
.farbkombination {
  display: flex;
  justify-content: space-between;
}

.farbfeld {
  color: #000;
  width: 100px;
  height: 100px;
  transition: all ease-in 1s;
}
</style>

