<script setup lang="ts">
defineProps<{
  title: string,
  description: string
}>()
</script>

<template>
  <div class="feature">
    <h3>{{ title }}</h3>
    <span>{{ description }}</span>
  </div>
</template>

<style scoped>
.feature {
  max-width: 250px;
}
h3 {
  color: #33485c;
}

span {
  color: #456481;
}
</style>