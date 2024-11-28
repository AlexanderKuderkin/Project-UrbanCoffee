<template>
    <div class="sidebar">
      <div class="sidebar-header">
        <h5>Navigation</h5>
        <button type="button" class="btn-close" aria-label="Close"></button>
      </div>
      <div class="sidebar-body">
        <button class="btn">Sign up</button>
        <button class="btn">Login</button>
        <button class="btn">Coffee</button>
        <button class="btn">Admin</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Sidebar",
  };
  </script>
  
  <style scoped>
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
  
  .sidebar-body .btn {
      width: 70%;
      margin-bottom: 10px;
      font-weight: bold;
      color: white;
      margin-left: 10px;
  }
  </style>
