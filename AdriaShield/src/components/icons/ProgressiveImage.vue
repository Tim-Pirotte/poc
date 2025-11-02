<script setup>
defineProps({
  sources: {
    type: Array,
    required: true,
    validator: (arr) => arr.length >= 1,
  },
  alt: { type: String, required: true },
  loading: { type: String, default: 'lazy' },
});
</script>

<template>
  <picture>
    <template v-for="src in sources" :key="src.src">
      <source :srcset="src.src" :type="src.type" />
    </template>

    <img :src="sources[sources.length - 1].src" :alt="alt" :loading="loading" />
  </picture>
</template>
