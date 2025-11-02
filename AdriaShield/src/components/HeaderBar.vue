<script setup>
import Bell from "./icons/Bell.vue";
import AdriaShieldLogo from './icons/AdriaShieldLogo.vue';
import Account from "./icons/Account.vue";
</script>

<template>
    <router-link to="/notification-settings">
        <Bell/>
    </router-link>
    <AdriaShieldLogo/>
    <router-link to="/settings">
        <Account/>
    </router-link>
</template>

<style scoped>
</style>