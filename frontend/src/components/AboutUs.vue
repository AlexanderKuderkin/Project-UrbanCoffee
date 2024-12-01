<template>
    <div class="aboutUs-container">
      <div class="vertical-line"></div>
      <h3>About us</h3>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutUs",
  };
  </script>
  
  <style scoped>
  .aboutUs-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0;
  }
  
  .vertical-line {
    width: 4px;
    height: 90px;
    background-color: #D9B68b;
    margin-bottom: 10px;
    border-radius: 20px;
  }
  
  .aboutUs-container h3 {
    color: #D9B68b;
    font-weight: bold;
  }
  </style>
  