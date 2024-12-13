<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/UrbanCoffee_Loggo.png" alt="Logo" width="50">
      <span id="NameWeb">UrbanCoffee</span>
    </div>
    <div class="search-container">
      <input type="text" class="form-control" placeholder="Search" aria-label="Search">
    </div>
    <div class="nav-buttons d-none d-md-flex">
      <router-link to="/Coffee" class="btn">Coffee</router-link>
      <router-link to="/ManageCoffee" class="btn">Manage Coffee</router-link>
      <router-link to="/Login" class="btn btn-traditional">Login</router-link>
      <router-link to="/SignUp" class="btn btn-traditional">SignUp</router-link>
      <button class="btn btn-danger" @click="logout" v-if="userStore.user">Logout</button>
    </div>
    <button
      class="navbar-toggler d-md-none"
      type="button"
      @click="$emit('toggle-sidebar')"
    >
      <span class="navbar-toggler-icon">☰</span>
    </button>
  </header>
</template>
<!--
<script>
export default {
  name: "Header",
};
</script>
-->
<script setup>
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

function logout() {
  userStore.logout();
}
</script>