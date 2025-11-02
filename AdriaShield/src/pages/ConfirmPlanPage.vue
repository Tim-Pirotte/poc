<script setup>
import { inject } from 'vue';
const l = inject('l');

import { useRoute } from 'vue-router';

import AdriaShieldLogo from '../components/icons/AdriaShieldLogo.vue';
import PlanSummary from '../components/PlanSummary.vue';
import plans from '../mock-data/plans.json';

const route = useRoute();
const selectedId = Number(route.query.id);
const plan = plans.find(p => p.id === selectedId);
</script>

<template>
  <header>
    <AdriaShieldLogo/>
    <h1>{{ l('title') }}</h1>
  </header>
  <main>
    <PlanSummary :plan="plan"/>
    <router-link to="/plans">{{ l('back') }}</router-link>
    <router-link v-if="plan.price" to="/thank-you">{{ l('buy') }}</router-link>
    <router-link v-else to="/map">{{ l('home') }}</router-link>
  </main>
</template>

<style scoped>
</style>
