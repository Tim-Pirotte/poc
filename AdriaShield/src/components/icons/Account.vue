<script setup>
import { inject } from 'vue';
const l = inject('l');

import ProgressiveImage from './ProgressiveImage.vue';

import accountSvg from '@/assets/images/account/account.svg';
</script>

<template>
  <ProgressiveImage :alt="l('account')" :sources="[{ src: accountSvg, type: 'image/svg' }]" />
</template>
