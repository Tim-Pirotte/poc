<script setup>
import { inject } from 'vue';
const l = inject('l');

import AdriaShieldLogo from '../components/icons/AdriaShieldLogo.vue';
</script>

<template>
  <AdriaShieldLogo/>
  <h1>AdriaShield</h1>
  <h2>{{ l('slogan') }}</h2>
  <router-link to="/plans">{{ l('authenticate') }}</router-link>
</template>

<style scoped>
</style>
