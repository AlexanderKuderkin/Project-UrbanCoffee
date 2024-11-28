<template>
    <div class="offer-container">
      <div class="vertical-line"></div>
      <h3>What we offer</h3>
    </div>
  </template>
  
  <script>
  export default {
    name: "OfferSection",
  };
  </script>
  
  <style scoped>
  .offer-container {
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
  
  .offer-container h3 {
    color: #D9B68b;
    font-weight: bold;
  }
  </style>
  