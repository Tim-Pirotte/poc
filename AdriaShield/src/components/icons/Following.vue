<script setup>
import { inject } from 'vue';
const l = inject('l');

import ProgressiveImage from './ProgressiveImage.vue';

import followingSvg from '@/assets/images/following/following.svg';
</script>

<template>
  <ProgressiveImage :alt="l('following')" :sources="[{ src: followingSvg, type: 'image/svg' }]" />
</template>
