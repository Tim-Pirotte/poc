<script setup>
import { inject } from 'vue';
const l = inject('l');

import AdriaShieldLogo from '@/components/icons/AdriaShieldLogo.vue';
</script>

<template>
  <header>
    <AdriaShieldLogo />
    <h1>{{ l('title') }}</h1>
  </header>
  <main>
    <h2>{{ l('subtitle') }}</h2>
    <router-link to="/plans">
      {{ l('plans') }}
    </router-link>
  </main>
</template>

<style scoped></style>
