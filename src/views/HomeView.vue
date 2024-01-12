<script setup lang="ts">
import ProductFeatures from '@/components/ProductFeatures.vue';

</script>

<template>
  <main>
    <div class="slogan">
      <img class="logo" src="/logo.jpg">
      <div class="text">
        <h1 class="title">Neuro Lingo</h1>
        <h3 class="subtitle">A Language Decoding BCI</h3>
      </div>
    </div>
    <div class="features">
      <ProductFeatures title="Non-invasive" description="ABCJDKFJKJSKFJKSJDLKFJ"></ProductFeatures>
      <ProductFeatures title="Fast Decoding Speed
" description="ABCJDKFJKJSKFJKSJDLKFJ"></ProductFeatures>
      <ProductFeatures title="Cheap and Accessible" description="ABCJDKFJKJSKFJKSJDLKFJ"></ProductFeatures>
    </div>
  </main>
</template>

<style scoped>
.slogan {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}

.logo {
  max-height: 280px;
  margin: 0 auto;
}
.subtitle {
  margin-top: 10px;
  color: #5f81a1;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.features {
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-inline-start: 20%;
  margin-inline-end: 20%;
  margin-bottom: 10%;
}
</style>
