<template>
  <main>
    <h1 class="title">Product</h1>
    <div class="content">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/YJ8GaoDCpM0?si=XdMOExdP6zHfnlFh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <h2>Hardware</h2>
      <span>We developmed a wearable headset that is cheap and could hold up to 16 channels of dry electrodes. We covered all the spots that is required for the SSVEP paradigm (Oz, Pz, P3, P4, O1, O2) as well as spots in prefrontal cortex for neural mapping. The headset could be minor adjusted to make every user comfortable. The batteries we use are accessible to all countries. We will assemble all the wires and electrodes before sending to the customer to make sure they could be used right when they received the product. </span>
      <div class="images">
        <img src="/product.jpg">
        <img src="/eeg.jpg">
      </div>
      <h2>Software</h2>
      <span>In our software, we integrated the neural mapping and decoding model with real-time SSVEP data stream processing to reach the following effects:</span>
      <br>
      <span>1. When the user stares at a certain letter, the SSVEP processing software identifies the letter and show it in red, the second block starts to generate common decoding phrases based on subsequent neural EEG signals</span>
      <br>
      <span>2. Then the user choose from multiple options by staring at the numbers the exact response</span>
      <br>
      <span>3. The user can use the audio button to read out the content</span>
      <img src="/software.jpg">

      <h2>Innovation Origin</h2>
      <span>Inspired by the concept of Neural mapping and semantic reconstruction from non-invasive neural signals</span>
      <br>
      <span>Fused with the generative power of RWKV large language models</span>
      <br>
      <span>A softmax layer is used to integrate the results of Neural Mapping(Decoding) and Generated results of RWKV model</span>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

iframe {
  margin: 0 auto;
  margin-top: 50px;
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