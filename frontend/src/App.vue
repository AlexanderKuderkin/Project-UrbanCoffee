<template>
  <div id="app">
    <Header @toggle-sidebar="toggleSidebar" />
    <Sidebar :isVisible="isSidebarVisible" @close-sidebar="closeSidebar" />
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from './components/Footer.vue';
import { useUserStore } from "@/stores/user";

export default {
  name: "App",
  components: { Header, Sidebar, Footer },
  data() {
    return {
      isSidebarVisible: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    closeSidebar() {
      this.isSidebarVisible = false;
    },
  },
  created() {
    // Rufe fetchUser auf, um den Benutzerstatus beim Laden der App zu überprüfen
    const userStore = useUserStore();
    userStore.fetchUser();
  },
};
</script>
<style src="./public/style.css"></style>