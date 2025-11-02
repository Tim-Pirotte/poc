<script setup>
import { inject } from 'vue';
const l = inject('l');

import ProgressiveImage from './ProgressiveImage.vue';

import logoWebP from '@/assets/images/logo/logo.webp';
import logoPng from '@/assets/images/logo/logo_fallback.png';
</script>

<template>
  <ProgressiveImage
    :alt="l('logo')"
    :sources="[
      { src: logoWebP, type: 'image/webp' },
      { src: logoPng, type: 'image/png' },
    ]"
  />
</template>
