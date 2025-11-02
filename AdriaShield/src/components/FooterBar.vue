<script setup>
import Family from './icons/Family.vue';
import StreetMap from './icons/StreetMap.vue';
import Following from './icons/Following.vue';
</script>

<template>
  <router-link to="/family">
    <Family />
  </router-link>
  <router-link to="/map">
    <StreetMap />
  </router-link>
  <router-link to="/following">
    <Following />
  </router-link>
</template>

<style scoped></style>
