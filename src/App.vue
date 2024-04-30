<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <RouterView />
</template>

<style>
/**estilo global, vai ser aplicado a todos os componentes */
.btn {
  color: white;
  border: none;
  font-weight: bold;
  font-size: 12px;
  border-radius: 2px;
  background: #5d5dff;
  box-shadow: 0px 10px 15px -3px rgba(21, 23, 25, 0.16);
  height: 40px;
  width: 80px;
}
.select-option {
  border-radius: 8px;
  width: auto;
  height: 32px;
}

body {
  color: #fff;
  background-color: #dadddf;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}
</style>

<style scoped>
/**estilo scoped será aplicado apenas nos componentes que eu quiser, msm se ja tiver um global o scoped será aplicado por cima. */

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
