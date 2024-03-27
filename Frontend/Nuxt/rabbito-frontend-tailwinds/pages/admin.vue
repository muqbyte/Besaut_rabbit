<template>
    <section>
        <h3 class="subtitle-text mb-1">Admin Page</h3>
        <TableAdmin/>
    </section>
</template>

<script lang="ts" setup>
// import Header from '~/components/layouts/header.vue';
import { useAdmin } from '../stores/admin';
import { ref } from 'vue';
// console.log(useAdmin)
// const { getUsers } = useAdmin(); // use auth store
// const { authenticated } = storeToRefs(useAdmin()); // make authenticated state reactive


definePageMeta({
  middleware: ["is-login", "is-super-admin"],
});

// getUsers()

</script>

<style scoped>
.subtitle-text {
    font-family: Chakra Petch, sans-serif;
    color: deepskyblue;
    /* text-align: center; */
    text-shadow: 1px 1px black;
    font-size: 20px;
    font-weight: bold;
  } 
</style>