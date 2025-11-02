<script setup>
import { provide } from 'vue';
import { l, setLanguage, locale } from './locale.js';

provide('l', l);
provide('setLanguage', setLanguage);
</script>

<template>
<p v-if="locale.loading">Loading locale...</p>
<router-view />
</template>
