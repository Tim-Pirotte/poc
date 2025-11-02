<script setup>
import { inject } from 'vue';
const l = inject('l');

import ProgressiveImage from './ProgressiveImage.vue';

import familySvg from '@/assets/images/family/family.svg';
</script>

<template>
    <ProgressiveImage :alt="l('family')" :sources="[
        { src: familySvg, type: 'image/svg' },
    ]"/>
</template>