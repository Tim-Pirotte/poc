<script setup>
import ProgressiveImage from './ProgressiveImage.vue';

import followingSvg from '@/assets/images/following/following.svg';
</script>

<template>
    <ProgressiveImage alt="Following" :sources="[
        { src: followingSvg, type: 'image/svg' },
    ]"/>
</template>