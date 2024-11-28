<template>
    <header class="header">
      <div class="logo">
        <img src="src/assets/UrbanCoffee_Loggo.png" alt="Logo" width="50">
        <span id="NameWeb">UrbanCoffee</span>
      </div>
      <div class="search-container">
        <input type="text" class="form-control" placeholder="Search" aria-label="Search">
      </div>
      <div class="nav-buttons">
        <button class="btn">Coffee</button>
        <button class="btn">Admin</button>
        <button class="btn btn-traditional">Login</button>
        <button class="btn btn-traditional">Sign up</button>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style scoped>
  .header {
      background-color: #535352;
      color: #000000;
      padding: 15px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
  }
  
  #NameWeb {
      font-family: 'Platypi', sans-serif;
      font-weight: bold;
  }
  
  .header .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  
  .header .search-container {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      margin: 0 20px;
  }
  
  .header .nav-buttons .btn-traditional {
      border: none;
      background-color: #A8865F;
      color: #ffffff;
      border-radius: 20px;
      margin-left: 10px;
      padding: 3px 11px;
      font-weight: bold;
  }
  
  .header .nav-buttons .btn-traditional:hover {
      background-color: #A8765F;
  }
  </style>
  