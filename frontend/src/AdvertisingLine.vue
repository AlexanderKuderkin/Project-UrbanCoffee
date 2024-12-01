<template>
    <div class="advertisingLine-container">
      <div class="vertical-line"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PopularReviews",
  };
  </script>
  
  <style scoped>
  .advertisingLine-container {
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
  </style>
  