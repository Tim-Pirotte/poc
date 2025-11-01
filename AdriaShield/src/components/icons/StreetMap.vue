<script setup>
import ProgressiveImage from './ProgressiveImage.vue';

import streetMapSvg from '@/assets/images/street-map/streetMap.svg';
</script>

<template>
    <ProgressiveImage alt="Map" :sources="[
        { src: streetMapSvg, type: 'image/svg' },
    ]"/>
</template>