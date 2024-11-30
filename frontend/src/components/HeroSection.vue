<template>
  <div class="hero-section">
    <div class="hero-text">
      Discover Tchibo Café Crema <br />
      Full-Bodied: With a coffee <br />
      strength of 4/6, this <br />
      harmonious coffee offers an <br />
      intense, rounded aroma and <br />
      a velvety crema—perfect for <br />
      automatic coffee machines <br />
      and moments of pure <br />
      enjoyment.<br />
      <button class="view-more-btn">View more</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  min-height: 450px;
  background-image: url('@/assets/StartseiteBild.png'); /* Hintergrundbild */
  background-size: cover;
  background-position: center;
  margin-top: 20px;
  margin-bottom: 20px;
  background-repeat: no-repeat;
  border-radius: 20px;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 20%; /* Text weiter nach links verschieben */
  transform: translateY(-50%); /* Vertikal zentrieren */
  color: white;
  font-size: 20px;
  text-align: left; /* Text linksbündig ausrichten */
  font-family: 'Roboto', sans-serif;
}

.view-more-btn {
  margin-top: 10px;
  padding: 8px 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: #735340;
  color: #ffffff;
}

.view-more-btn:hover {
  background-color: #A8765F;
}
</style>
