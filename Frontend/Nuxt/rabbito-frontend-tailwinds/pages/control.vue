<!-- pages/control.vue -->

<template>
  <div
    class="bg-dark p-2 rounded-lg"
    style="height: 640px !important; opacity: 0.8"
  >
    <h3 class="text-3xl font-bold text-center text-sky-600">Command Centre</h3>
    <Controls />
  </div>
</template>
<script>
definePageMeta({
  middleware: ["auth", "is-admin"],
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");
h3 {
  font-family: Orbitron, sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
}
.bg-dark {
  background-image: linear-gradient(
    0deg,
    rgba(20, 35, 43, 0.9) 0,
    rgb(243, 248, 250) 100%
  );
}
</style>
