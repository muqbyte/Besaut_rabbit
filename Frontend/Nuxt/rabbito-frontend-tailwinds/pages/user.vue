<template>
  <h1 class="text-4xl text-zinc-50">
    Please contact admin to activate account for control section.
  </h1>
</template>

<script>
definePageMeta({
  middleware: ["is-login","is-not-user"],
});
</script>

<style></style>
