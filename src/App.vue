<template>
  <div id="app">
    <header-component></header-component>
    <router-view/>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: #333;
  line-height: 1.5;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

a {
  text-decoration: none;
  color: #333;
}

button {
  cursor: pointer;
}

.btn {
  padding: 8px 15px;
  background-color: #1176b8;
  color: white;
  border: none;
  border-radius: 4px;
  text-align: center;
  display: inline-block;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0e5c92;
}

.page-title {
  margin: 20px 0;
  font-size: 24px;
  font-weight: bold;
}
</style>
