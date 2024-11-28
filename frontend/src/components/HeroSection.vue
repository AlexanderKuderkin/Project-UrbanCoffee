<template>
    <div class="firstText">
      <div class="text">
        Discover Tchibo Café Crema <br />
        Full-Bodied: With a coffee <br />
        strength of 4/6, this <br />
        harmonious coffee offers an <br />
        intense, rounded aroma and <br />
        a velvety crema—perfect for <br />
        automatic coffee machines <br />
        and moments of pure <br />
        enjoyment.<br />
        <button class="viewMoreBtn">View more</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HeroSection",
  };
  </script>
  
  <style scoped>
  .firstText {
    position: relative;
    width: 100%;
    min-height: 450px;
    background-image: url('src/assets/StartseiteBild.png');
    background-size: cover;
    background-position: center;
    margin-top: 20px;
    margin-bottom: 20px;
    background-repeat: no-repeat;
    border-radius: 20px;
    font-family: 'Roboto', sans-serif;
  }
  
  .firstText .text {
    position: absolute;
    top: 47%;
    left: 35%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 20px;
    text-align: center;
  }
  
  .viewMoreBtn {
    margin-top: 10px;
    padding: 8px 12px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background-color: #735340;
    color: #ffffff;
  }
  </style>
  