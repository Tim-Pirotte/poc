<script setup>
import AdriaShieldLogo from '../components/icons/AdriaShieldLogo.vue';
import Plan from '../components/Plan.vue';
import plans from '../mock-data/plans.json';
</script>

<template>
  <header>
    <AdriaShieldLogo/>
    <h1>Select a plan</h1>
  </header>
  <main>
    <Plan
      v-for="plan in plans"
      :key="plan.id"
      :plan="plan"
    />
  </main>
</template>

<style scoped>
</style>
