<template>
    <div class="description-container">
      <div class="description-row">
        <div class="description-item">
          <img src="src/assets/ZweiMenschenReview.png" alt="Verified Reviews" class="description-image" />
          <div class="description-text">
            <h3>Verified Reviews</h3>
            <p>Read honest, verified reviews from real coffee enthusiasts.</p>
          </div>
        </div>
        <div class="description-item">
          <img src="src/assets/Kaffee3.jpg" alt="Curation Coffee Selection" class="description-image" />
          <div class="description-text">
            <h3>Curation Coffee Selection</h3>
            <p>Explore a wide variety of premium coffee beans.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DescriptionSection",
  };
  </script>
  
  <style scoped>
  .description-container {
    margin: 0px 30px;
  }
  
  .description-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .description-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 0 0 50%;
    margin-bottom: 20px;
  }
  
  .description-image {
    width: 260px;
    height: 250px;
    border-radius: 20px;
    margin-right: 15px;
  }
  
  .description-text h3 {
    color: #A8865F;
    margin: 5px 0;
    text-align: center;
    font-family: 'Noto Sans', sans-serif;
  }
  
  .description-text p {
    color: #000000;
    padding: 0 30px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }
  </style>
  