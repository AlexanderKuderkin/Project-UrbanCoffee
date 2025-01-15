<template>
  <div class="hero-section">
    <div class="hero-text">
      Discover the finest selection of coffee, from premium coffee beans and ground coffee to convenient pods, all tailored to your taste. Use our advanced filter to explore options by sustainability, coffee strength, and customer reviews, ensuring the perfect cup every time.
      <RouterLink to="/Coffee" class="view-more-btn">View more</RouterLink>
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
  font-family: 'Roboto', sans-serif;
}

.hero-text {

  position: absolute;
  top: 47%;
  left: 35%;
  transform: translate(-40%, -50%);
  color: white;
  font-size: 20px;
  text-align: center;
}

.view-more-btn {
  margin-top: 10px;
    padding: 8px 12px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: block;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 119px;
    background-color: #735340;
    color: #ffffff;
}

.view-more-btn:hover {
  background-color: #A8765F;
}
</style>
