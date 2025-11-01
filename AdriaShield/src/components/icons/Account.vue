<script setup>
import ProgressiveImage from './ProgressiveImage.vue';

import accountSvg from '@/assets/images/account/account.svg';
</script>

<template>
    <ProgressiveImage alt="Account" :sources="[
        { src: accountSvg, type: 'image/svg' },
    ]"/>
</template>