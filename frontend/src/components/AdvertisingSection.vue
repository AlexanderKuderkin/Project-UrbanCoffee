<template>
    <div class="advertising-container">
      <div class="advertising-text">
        Don't wait long and look for your perfect coffee now
      </div>
      <RouterLink to="/SignUp" class="signInBtn">Sign up</RouterLink>
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
    background-image: url('@/assets/kaffeepulver_cleanup.jpg'); /* Dynamischer Import mit Vue */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    padding: 20px;
    text-align: center;
}
   
  .advertising-text {
    position: relative; 
    color: white;
    font-size: 20px;
    margin-bottom: 30px; /* Abstand unter dem Text */
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
    margin-left: 10px;
    width: 81.75px; /* Exakte Breite des Header-Buttons */
    height: 37px;   /* Exakte Höhe des Header-Buttons */
  }
  
  .signInBtn:hover {
    background-color: #A8765F;
  }
  </style>
  