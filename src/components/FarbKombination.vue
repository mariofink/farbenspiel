<template>
   <div class="farbkombination">
       <div class="farbfeld" v-for="color in colors" v-bind:key="color" v-bind:style="{backgroundColor: color}">
           {{ color }}
       </div>
   </div>
</template>

<script>
export default {
  name: "FarbKombination",
  props: ["colors"]
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

