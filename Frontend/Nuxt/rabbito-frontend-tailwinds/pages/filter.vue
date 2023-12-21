<script setup lang="ts">
const counter = useCounter()
</script>

<template>
  <h2>Counter example</h2>
  <div>counter value: {{ counter.n }}</div>
  <div>counter value doubled: {{ counter.double }}</div>

  <div class="grid gap-4 my-4">
    <button @click="counter.increment()">Increment</button>
    <button @click="counter.increment(5)">Increment 5</button>
  </div>
</template>

<style>
.errored {
  border: 4px solid red;
}
</style>
