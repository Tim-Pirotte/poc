<script setup>
import ProgressiveImage from './ProgressiveImage.vue';

import logoWebP from '@/assets/images/logo/logo.webp';
import logoPng from '@/assets/images/logo/logo_fallback.png';
</script>

<template>
    <ProgressiveImage alt="Logo" :sources="[
        { src: logoWebP, type: 'image/webp' },
        { src: logoPng, type: 'image/png' }
    ]"/>
</template>