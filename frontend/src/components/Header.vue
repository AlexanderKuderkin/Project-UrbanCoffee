<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/UrbanCoffee_Loggo.png" alt="Logo" width="50">
      <span id="NameWeb">UrbanCoffee</span>
    </div>
    <div class="nav-buttons d-none d-md-flex">
      <router-link to="/" class="btn">Homepage</router-link>
      <router-link to="/Profile" class="btn" v-if="userStore.user">Profile</router-link>
      <router-link to="/Coffee" class="btn">Coffee</router-link>
      <router-link to="/ShoppingCart" class="btn" v-if="userStore.user">Shopping Cart</router-link>
      <router-link to="/Reviews" class="btn" v-if="userStore.user">Review</router-link>
      <router-link to="/ManageCoffee" class="btn" v-if="userStore.user && userStore.user.isSuperAdmin">Manage Coffee</router-link>
      <router-link to="/ManageCustomers" class="btn" v-if="userStore.user && userStore.user.isSuperAdmin">Manage Customers</router-link>
      <router-link to="/Login" class="btn btn-traditional" v-if="!userStore.user">Login</router-link>
      <router-link to="/SignUp" class="btn btn-traditional" v-if="!userStore.user">SignUp</router-link>
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

<script setup>
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

function logout() {
  userStore.logout();
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between; /* Platz zwischen Logo und Navigation */
  align-items: center; /* Vertikale Zentrierung */
  padding: 10px 20px; /* Innenabstand für den Header */
}

.nav-buttons {
  display: flex;
  justify-content: flex-start; /* Buttons weiter nach links ausrichten */
  align-items: center; /* Vertikale Zentrierung */
  gap: 5px; /* Abstand zwischen den Buttons verringert */
}

.nav-buttons .btn {
  text-align: center; /* Text im Button zentrieren */
  padding: 6px 20px; /* Innenabstand der Buttons */
  border: none; /* Keine Rahmen */
  background: none; /* Kein Hintergrund */
  color: #000; /* Textfarbe schwarz */
  cursor: pointer;
  text-decoration: none; /* Kein Unterstrich */
}

.nav-buttons .btn:hover {
  color: #A8865F; /* Textfarbe beim Hover */
}

.header .nav-buttons .btn-traditional {
  border: none;
  background-color: #A8865F; /* Hintergrundfarbe für "Login" und "SignUp" */
  color: #ffffff; /* Textfarbe weiß */
  border-radius: 20px; /* Abgerundete Ecken */
  margin-left: 10px; /* Abstand zwischen Buttons */
  padding: 6px 11px; /* Innenabstand */
  font-weight: bold; /* Fettgedruckt */
  text-decoration: none; /* Kein Unterstrich */
}

.header .nav-buttons .btn-traditional:hover {
  background-color: #A8765F; /* Hover-Farbe für "Login" und "SignUp" */
}

.logo {
  display: flex;
  align-items: center; /* Vertikale Zentrierung */
  gap: 10px; /* Abstand zwischen Logo und Text */
}

.logo img {
  height: 50px; /* Größe des Logos */
}

.navbar-toggler {
  display: none; /* Standardmäßig versteckt */
}

.navbar-toggler .navbar-toggler-icon {
  font-size: 24px; /* Größe des Icons */
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-buttons {
    display: none; /* Navigation ausblenden und Hamburger-Menü zeigen */
  }

  .navbar-toggler {
    display: block; /* Hamburger-Menü auf kleinen Bildschirmen anzeigen */
  }
}
</style>
