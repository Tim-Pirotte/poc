<script setup>
import { inject } from 'vue';
const l = inject('l');

import ProgressiveImage from './ProgressiveImage.vue';

import bellSvg from '@/assets/images/notifications/notifications.svg';
</script>

<template>
  <ProgressiveImage :alt="l('notifications')" :sources="[{ src: bellSvg, type: 'image/svg' }]" />
</template>
