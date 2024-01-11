<script setup lang="ts">
import { routes } from '@/router';
import { useRoute } from 'vue-router';

</script>

<template>
  <nav class="nav">
    <div class="title">
      <RouterLink to="/">NeuroLingo</RouterLink>
    </div>
    <ul id="menu">
      <li v-for="route in routes" :key="route.name">
        <RouterLink 
          v-if="useRoute().path == route.path"  
          :to="route.path"
        >
          <span class="active">{{ route.name }}</span>
        </RouterLink>

        <RouterLink v-else :to="route.path">
          <span>{{ route.name }}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style>
.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  line-height: 60px;
  margin-inline-start: auto;
  margin-inline-end: auto;
}

.nav a {
  display: block;
}

.nav a:visited {
  text-decoration: underline;
}

.title, #menu {
  display: flex;
  margin: auto 24px;
}

.title {
  flex-wrap: inherit;
}

.title a {
  font-size: 24px;
  font-weight: 700;
}

.title a img, .title a svg {
    display: inline;
    vertical-align: middle;
    pointer-events: none;
    transform: translate(0, -10%);
    border-radius: 6px;
    margin-inline-end: 8px;
}

#menu {
  list-style: none;
  word-break: keep-all;
  overflow-x: auto;
  white-space: nowrap;
}

#menu li + li {
  margin-inline-start: 24px;
}

#menu a {
  font-size: 16px;
}

#menu .active {
  font-weight: 500;
  border-bottom: 2px solid currentColor;
}
</style>