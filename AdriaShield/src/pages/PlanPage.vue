<script setup>
import { inject } from 'vue';
const l = inject('l');

import AdriaShieldLogo from '../components/icons/AdriaShieldLogo.vue';
import Plan from '../components/Plan.vue';
import plans from '../mock-data/plans.json';
</script>

<template>
  <header>
    <AdriaShieldLogo />
    <h1>{{ l('title') }}</h1>
  </header>
  <main>
    <Plan v-for="plan in plans" :key="plan.id" :plan="plan" />
  </main>
</template>

<style scoped></style>
