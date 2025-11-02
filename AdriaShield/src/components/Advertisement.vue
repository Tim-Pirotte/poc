<script setup>
import ProgressiveImage from './icons/ProgressiveImage.vue';

import advertisement from '../mock-data/advertisement.json';
import plan from '../mock-data/plan.json';
</script>

<template>
    <aside v-if="plan.showAds" aria-label="Advertisement">
        <router-link to="/plans">Remove</router-link>
        <a :href="advertisement.url" target="_blank" rel="noopener sponsored">
            <ProgressiveImage :sources="advertisement.sources" :alt="advertisement.alt"/>
        </a>
    </aside>
</template>

<style scoped>
</style>