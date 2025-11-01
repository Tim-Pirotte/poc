<script setup>
import ProgressiveImage from './ProgressiveImage.vue';

import familySvg from '@/assets/images/family/family.svg';
</script>

<template>
    <ProgressiveImage alt="My family" :sources="[
        { src: familySvg, type: 'image/svg' },
    ]"/>
</template>