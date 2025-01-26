<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/UrbanCoffee_Loggo.png" alt="Logo" width="50">
      <span id="NameWeb">UrbanCoffee</span>
    </div>
    <div class="nav-buttons">
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
      class="navbar-toggler"
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
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.nav-buttons {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
}

.nav-buttons .btn {
  text-align: center;
  padding: 6px 20px;
  border: none;
  background: none;
  color: #ffffff; /* Schriftfarbe auf Weiß geändert */
  cursor: pointer;
  text-decoration: none;
}

.nav-buttons .btn:hover {
  color: #A8865F; /* Hover-Farbe */
}

.header .nav-buttons .btn-traditional {
  border: none;
  background-color: #A8865F;
  color: #ffffff; /* Schriftfarbe bleibt Weiß */
  border-radius: 20px;
  margin-left: 10px;
  padding: 6px 11px;
  font-weight: bold;
  text-decoration: none;
}

.header .nav-buttons .btn-traditional:hover {
  background-color: #A8765F;
  color: #ffffff; /* Schriftfarbe bleibt Weiß im Hover */
}

.nav-buttons .btn-danger {
  background-color: #1e160d; /* Hintergrundfarbe des Logout-Buttons */
  color: #ffffff; /* Schriftfarbe auf Weiß geändert */
  border: none;
  padding: 6px 20px;
  border-radius: 15px; /* Abrundung hinzugefügt */
  cursor: pointer;
  text-align: center;
}

.nav-buttons .btn-danger:hover {
  background-color: #5a6268; /* Hover-Hintergrundfarbe des Logout-Buttons */
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo img {
  height: 50px;
}

.navbar-toggler {
  display: none;
}

.navbar-toggler .navbar-toggler-icon {
  font-size: 24px;
  cursor: pointer;
  padding-top: 10px;
}

@media (max-width: 990px) {
  .nav-buttons {
    display: none;
  }

  .navbar-toggler {
    display: block;
  }
}
</style>
