<script setup>
import { inject } from 'vue';
const l = inject('l');

import HeaderBar from '@/components/HeaderBar.vue';
import FooterBar from '@/components/FooterBar.vue';

import user from '../mock-data/user.json';
import family from '../mock-data/family.json';
import plan from '../mock-data/plan.json';
</script>

<template>
  <header>
    <HeaderBar />
    <h1>{{ l('family') }}</h1>
    <h2 v-if="family">{{ family.members.length }}/{{ family.maxMembers }}</h2>
  </header>
  <main v-if="!family">
    <h3>{{ l('noFamilyPlan') }}</h3>
    <router-link to="/plans">
      {{ l('changePlan') }}
    </router-link>
  </main>
  <main v-else>
    <form v-if="user.id === family.owner">
      <label for="user-to-invite">{{ l('name') }}</label>
      <input id="user-to-invite" type="text" :placeholder="l('invitePlaceholder')" />
      <button type="submit">
        {{ l('invite') }}
      </button>
    </form>
  </main>
  <FooterBar />
</template>

<style scoped></style>
