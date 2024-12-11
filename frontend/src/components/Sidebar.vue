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
      <button class="btn btn-traditional">Sign up</button>
      <button class="btn btn-traditional">Login</button>
      <router-link to="/Coffee" class="btn">Coffee</router-link>
      <router-link to="/ManageCoffee" class="btn">Manage Coffee</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
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
