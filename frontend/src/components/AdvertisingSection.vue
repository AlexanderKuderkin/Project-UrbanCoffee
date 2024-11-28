<template>
    <div class="advertising-container">
      <div class="advertising-text">
        Don't wait long and look for your perfect coffee now
      </div>
      <button class="signInBtn">Sign up</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "AdvertisingSection",
  };
  </script>
  
  <style scoped>
  .advertising-container {
    position: relative;
    margin: 20px 20px;
    min-height: 200px;
    background-image: url('src/assets/kaffeepulver_cleanup.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    padding: 20px;
    text-align: center;
  }
  
  .advertising-text {
    color: white;
    font-size: xx-large;
    font-family: 'Roboto', sans-serif;
  }
  
  .signInBtn {
    border: none;
    background-color: #A8865F;
    color: #ffffff;
    border-radius: 20px;
    padding: 3px 11px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .signInBtn:hover {
    background-color: #A8765F;
  }
  </style>
  