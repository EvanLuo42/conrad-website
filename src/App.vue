<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import PageFooter from './components/PageFooter.vue';
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>

  <RouterView />

  <PageFooter></PageFooter>
</template>

<style scoped>
</style>
