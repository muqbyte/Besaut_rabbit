<template>
    <div>
        <mainStatus />
        <ExhaustFanSmall/>
        <rssiStatusMobile />
    </div>
</template>
<script setup>
import mainStatus from './mainStatusMobile.vue'
import ExhaustFanSmall from './exhaustFanSmall.vue'
import rssiStatusMobile from './rssiStatusMobileZero.vue';
</script>