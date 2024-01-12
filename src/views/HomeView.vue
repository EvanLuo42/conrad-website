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
      <ProductFeatures title="Non-invasive" description="Our product use EEG recording electrodes. No neural surgeries are required.
Users only need to put on a headset like wearing a hat.
"></ProductFeatures>
      <ProductFeatures title="Fast Decoding Speed
" description="Integrating neural decoding, the generative power of RWKV LLM,
we achive a very fast decoding speed for daily use.
"></ProductFeatures>
      <ProductFeatures title="Cheap and Accessible" description="Our headset are 3D-printed, which makes our product cheap and accessible to all.
Our software are easy to install and have a friendly User Interface"></ProductFeatures>
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
  text-align: justify;
  text-justify: newspaper;
}
</style>
