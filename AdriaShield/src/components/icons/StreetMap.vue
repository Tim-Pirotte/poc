<script setup>
import { inject } from 'vue';
const l = inject('l');

import ProgressiveImage from './ProgressiveImage.vue';

import streetMapSvg from '@/assets/images/street-map/streetMap.svg';
</script>

<template>
    <ProgressiveImage :alt="l('map')" :sources="[
        { src: streetMapSvg, type: 'image/svg' },
    ]"/>
</template>