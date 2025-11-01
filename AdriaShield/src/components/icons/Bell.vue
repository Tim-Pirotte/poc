<script setup>
import ProgressiveImage from './ProgressiveImage.vue';

import bellSvg from '@/assets/images/notifications/notifications.svg';
</script>

<template>
    <ProgressiveImage alt="Notifications" :sources="[
        { src: bellSvg, type: 'image/svg' },
    ]"/>
</template>