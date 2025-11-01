<script setup>
import AdriaShieldLogo from '@/components/icons/AdriaShieldLogo.vue';
</script>

<template>
    <header>
        <AdriaShieldLogo/>
        <h1>Something went wrong</h1>
    </header>
    <main>
        <h2>Please check your account for sufficient funds</h2>
        <router-link to="/plans">Plans</router-link>
    </main>
</template>

<style scoped></style>