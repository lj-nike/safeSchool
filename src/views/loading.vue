<template>
  <div class="container">
    <dv-loading class="loading">Loading...</dv-loading>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push({ path: "about" });
    }, 3000);
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #74ebd5, #acb6e5);
}
</style>
