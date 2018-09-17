<template>
<div>
   <h2>{{ title }}</h2>
   <div class="farbkombination">
       <div class="farbfeld" v-for="(color, index) in colors" v-bind:key="title + color + index"
       v-bind:style="{ backgroundColor: color, width: 100/colors.length + '%'}">
           {{ color }}
       </div>
   </div>
</div>
</template>

<script>
export default {
  name: "FarbKombination",
  props: ["colors", "title"]
};
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
}
</style>

