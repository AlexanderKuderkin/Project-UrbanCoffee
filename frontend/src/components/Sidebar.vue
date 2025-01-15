<template>
  <div
    class="sidebar"
    v-show="isVisible"
    :class="{ 'sidebar-open': isVisible }"
  >
    <div class="sidebar-header">
      <h5>Navigation</h5>
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        @click="$emit('close-sidebar')"
      ></button>
    </div>
    <div class="sidebar-body">
      <router-link to="/Login" class="btn btn-traditional" v-if="!userStore.user">Login</router-link>
      <router-link to="/SignUp" class="btn btn-traditional" v-if="!userStore.user">SignUp</router-link>
      <router-link to="/" class="btn">Homepage</router-link>
      <router-link to="/Profile" class="btn" v-if="userStore.user">Profile</router-link>
      <router-link to="/Reviews" class="btn" v-if="userStore.user">Review</router-link>
      <router-link to="/ShoppingCart" class="btn" v-if="userStore.user">Shopping Cart</router-link>
      <router-link to="/OrderHistory" class="btn" v-if="userStore.user">Order History</router-link>
      <router-link to="/Coffee" class="btn">Coffee</router-link>
      <router-link to="/ManageCoffee" class="btn" v-if="userStore.user && userStore.user.isSuperAdmin">Manage Coffee</router-link>
      <button class="btn btn-danger" @click="logout" v-if="userStore.user">Logout</button>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/user";

export default {
  name: "Sidebar",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const userStore = useUserStore();

    function logout() {
      userStore.logout(); 
    }

    return { userStore, logout };
  },
};
</script>

<style>
.sidebar {
  transition: transform 0.3s ease-in-out;
  transform: translateX(100%);
}
.sidebar-open {
  transform: translateX(0);
}
</style>
