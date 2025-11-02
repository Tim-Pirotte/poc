<script setup>
import { inject } from 'vue';
const l = inject('l');

import HeaderBar from '@/components/HeaderBar.vue';
import Advertisement from '@/components/Advertisement.vue';
import FooterBar from '@/components/FooterBar.vue';
</script>

<template>
  <HeaderBar/>
  <h1>MapPage</h1>
  <Advertisement/>
  <FooterBar/>
</template>

<style scoped>
</style>
