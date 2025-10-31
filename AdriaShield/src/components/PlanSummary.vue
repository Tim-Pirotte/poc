<script setup>
defineProps({
  plan: Object
});
</script>

<template>
<h2>{{ plan.name }}</h2>
<h3>₳ {{ plan.price? plan.price : "Free" }}</h3>
</template>

<style scoped>
</style>