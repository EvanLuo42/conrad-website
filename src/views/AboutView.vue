<script setup lang="ts">
import YouTubeIcon from '@/components/icons/YouTubeIcon.vue'
</script>

<template>
  <main>
    <h1 class="title">About</h1>
    <div class="content">
      <span>Our product, "NeuroLink Pro," is a cutting-edge, state-of-the-art software suite designed exclusively for steady-state visual evoked potential (SSVEP) brain-computer interfaces (BCIs). This comprehensive system offers a wide array of features, including real-time signal processing, adaptive algorithms for signal enhancement, and an intuitive user interface for seamless interaction. The software is highly customizable, allowing users to adjust parameters such as frequency range, stimuli type, and response sensitivity to optimize for various applications. NeuroLink Pro is ideal for diverse sectors, including clinical rehabilitation, neuromarketing research, cognitive load assessment in high-stress professions, and interactive gaming.</span>
      
      <h2>Contacts</h2>
      <span>Youtube: <a href="/"><YouTubeIcon class="icon"></YouTubeIcon></a></span>
      <span>Email: <a href="mailto:zhangjiashu0612@gmail.com">zhangjiashu0612@gmail.com</a></span>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  margin-top: 50px;
  margin-bottom: 5px;
}

span {
  text-align: justify;
  text-justify: inter-word;
}

img {
  border-radius: 10px;
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
}

.images {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.content {
  max-width: 740px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}

.icon {
  height: 26px;
  width: 26px;
}
</style>