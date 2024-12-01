<template>
  <div class="sidebar collapse" id="sidebarMenu">
    <div class="sidebar-header">
      <h5>Navigation</h5>
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        id="closeSidebar"
        @click="closeSidebar"
      ></button>
    </div>
    <div class="sidebar-body">
      <button class="btn btn-traditional">Sign up</button>
      <button class="btn btn-traditional">Login</button>
      <button class="btn">Coffee</button>
      <button class="btn">Admin</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    closeSidebar() {
      const sidebarMenu = document.getElementById("sidebarMenu");
      sidebarMenu.classList.remove("collapse");
    },
  },
};
</script>

<style scoped>
/* Sidebar Styling */
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 170px;
  height: 100%;
  background-color: #535352;
  color: #ffffff;
  padding: 15px;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.sidebar-body {
  display: flex;
  flex-direction: column;
}

.sidebar-body .btn {
  width: 70%;
  margin-bottom: 10px;
  font-weight: bold;
  color: white;
  margin-left: 10px;
}

.btn-traditional {
  border: none;
  background-color: #a8865f;
  color: #ffffff;
  border-radius: 20px;
  padding: 3px 11px;
  font-weight: bold;
}

.btn-traditional:hover {
  background-color: #a8765f;
}

.btn {
  color: white;
  font-weight: 700;
}

.btn-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #ffffff;
  cursor: pointer;
}
</style>
