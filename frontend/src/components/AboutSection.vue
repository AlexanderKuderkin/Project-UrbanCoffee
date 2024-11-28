<template>
    <div class="explanation-container">
      <div class="OurStory-Container">
        <h4>Our Story</h4>
        <p>We are two business informatics students...</p>
      </div>
      <div class="KaffeePour">
        <img src="src/assets/KaffeePour.png" alt="Kaffee Pour" />
      </div>
      <div class="OurGoal-Container">
        <h4>Our Goal</h4>
        <p>Our goal is to build the ultimate destination for coffee enthusiasts...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutSection",
  };
  </script>
  
  <style scoped>
  .explanation-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin: 20px;
    flex-wrap: wrap;
  }
  
  .OurStory-Container,
  .OurGoal-Container {
    flex: 1;
    color: #735340;
    min-width: 250px;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }
  
  .KaffeePour img {
    max-width: 100%;
    height: auto;
    border-radius: 20px;
  }
  </style>
  