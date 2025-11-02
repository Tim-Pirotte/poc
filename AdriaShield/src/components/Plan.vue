<script setup>
import { inject } from 'vue';
const l = inject('l');

import PlanContent from './PlanContent.vue';

defineProps({
  plan: Object
});
</script>

<template>
<p v-if="plan.label" :style="{ backgroundColor: plan.label.color }">{{ plan.label.content }}</p>
<h2>{{ plan.name }}</h2>

<PlanContent :nodes="plan.content" />

<h3><span v-if="plan.oldPrice">₳ {{ plan.oldPrice }}</span> ₳ {{ plan.price? plan.price : "Free" }}</h3>
<router-link :to="`/confirm-plan?id=${plan.id}`">{{ l('select') }}</router-link>
</template>

<style scoped>
</style>