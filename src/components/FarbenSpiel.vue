<template>
    <div>
        <h1>Farbenspiel</h1>
        Base:
        <input type="color" v-model="baseColor">
        {{baseColor}}
    </div>
</template>

<script>
export default {
  name: "FarbenSpiel",
  data: () => {
    return {
      baseColor: "#c0ffee"
    };
  }
};
</script>

<style>
body {
  font-family: sans-serif;
}
</style>
