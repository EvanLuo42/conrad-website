<script setup lang="ts">
defineProps<{
  src: string,
  name: string,
  description: string
}>()
</script>

<template>
  <div class="member-card">
    <div class="member-left">
      <img class="member-picture" :src="src" :alt="name">
      <h3 class="member-name">{{ name }}</h3>
    </div>
    <span class="member-description">{{ description }}</span>
  </div>
</template>

<style scoped>
.member-card {
  display: flex;
  flex-direction: row;
  min-width: 50%;
  margin-inline-start: auto;
  margin-inline-end: auto;
}

.member-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 24px;
  width: 20%;
}

.member-description {
  width: 70%;
}

.member-name {
  margin: 10px;
}

.member-picture {
  max-height: 200px;
  border-radius: 10%;
}
</style>