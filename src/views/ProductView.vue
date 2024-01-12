<template>
  <main>
    <h1 class="title">Product</h1>
    <div class="content">
      <h2>Hardware</h2>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
      <img src="/product.jpg">
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
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
}

.content {
  width: 50%;
  display: flex;
  flex-direction: column;
}
</style>