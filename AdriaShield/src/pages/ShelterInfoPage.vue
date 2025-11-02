<script setup>
import { inject } from 'vue';
const l = inject('l');

import HeaderBar from '@/components/HeaderBar.vue';
import FooterBar from '@/components/FooterBar.vue';
</script>

<template>
  <header>
    <HeaderBar />
  </header>
  <FooterBar />
</template>

<style scoped></style>
