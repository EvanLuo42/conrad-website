<template>
  <main>
    <h1 class="title">Product</h1>
    <div class="content">
      <h2>Hardware</h2>
      <span>A fixed point to record occipital lobe EEG response for SSVEP recordings.
Pz, P3, P4, Oz, O1, O2

Points at prefrontal cortex to decode the user’s intention to present in the wording column.

Cheap and accessible 3D printed hardware and dry electrodes

Accessible batteries and chip to receive EEG signals from the brain

      </span>
      <div class="images">
        <img src="/product.jpg">
        <img src="/eeg.jpg">
      </div>
      <h2>Software</h2>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
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
</style>