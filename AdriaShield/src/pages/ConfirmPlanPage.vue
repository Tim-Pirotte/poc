<script setup>
import { useRoute } from 'vue-router';

import AdriaShieldLogo from '../components/icons/AdriaShieldLogo.vue';
import PlanSummary from '../components/PlanSummary.vue';
import plans from '../mock-data/plans.json';

const route = useRoute();
const selectedId = Number(route.query.id);
const plan = plans.find(p => p.id === selectedId);
</script>

<template>
  <PlanSummary :plan="plan"/>
  <router-link to="/plans">Back</router-link>
  <router-link v-if="plan.price" to="/thank-you">Buy</router-link>
  <router-link v-else to="/map">Home</router-link>
</template>

<style scoped>
</style>
