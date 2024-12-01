<template>
  <div id="app">
    <Header />
    <div class="content">
      <!-- Dynamische Seiteninhalte über den Router -->
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import SideBar from './components/SideBar.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* App-Container */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Nimmt die gesamte Bildschirmhöhe ein */
}

/* Hauptinhalt */
.content {
  flex: 1; /* Nimmt den restlichen verfügbaren Platz ein */
}
</style>
