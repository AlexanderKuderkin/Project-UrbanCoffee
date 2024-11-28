<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Sidebar,
    Footer,
  },
};
</script>

<template>
  <div id="app">
    <Header />
    <Sidebar />
    <router-view /> <!-- Platzhalter für die gerenderte Seite (z. B. HomePage.vue) -->
    <Footer />
  </div>
</template>

<style>
/* Hier können globale Styles hinzugefügt werden, falls notwendig */
@import './styles/main.css';
</style>
