<template>
  <div class="about-section">
    <div class="explanation-container">
      <!-- Our Story -->
      <div class="our-story-container">
        <h4>Our Story</h4>
        <p>
          We are two business informatics<br />
          students who decided to combine<br />
          our passion for coffee with our<br />
          technical skills. What started as a<br />
          personal quest for the perfect cup<br />
          quickly turned into an idea we<br />
          wanted to share with others. With<br />
          this project, we've created a platform<br />
          where coffee lovers and newcomers<br />
          alike can discover and review high-<br />
          quality coffee products. Our mission<br />
          is to make the world of coffee a bit<br />
          more accessible and transparent –<br />
          for us, for you, for everyone!
        </p>
      </div>

      <!-- Image -->
      <div class="kaffee-pour">
        <img :src="imageSrc" alt="Pouring coffee" />
      </div>

      <!-- Our Goal -->
      <div class="our-goal-container">
        <h4>Our Goal</h4>
        <p>
          Our goal is to build the ultimate<br />
          destination for coffee enthusiasts.<br />
          We aim to provide a trustworthy<br />
          platform where users can find honest<br />
          reviews and recommendations to<br />
          discover the perfect coffee for their<br />
          taste. At the same time, we’re<br />
          committed to promoting responsible<br />
          consumption by offering transparent<br />
          information about coffee<br />
          sustainability, origin, and quality.<br />
          Whether you're a casual coffee<br />
          drinker or a true connoisseur, you’ll<br />
          find the right insights here to elevate<br />
          your coffee experience.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
  data() {
    return {
      imageSrc: new URL('@/assets/KaffeePour.png', import.meta.url).href, // Dynamischer Bildpfad
    };
  },
};
</script>

<style scoped>
.about-section {
  margin: 20px 0;
}

.explanation-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap; /* Ermöglicht Umbruch bei kleineren Bildschirmen */
}

@media (max-width: 860px) {
  .explanation-container {
    flex-direction: column;
    align-items: center;
  }
}

.our-story-container,
.our-goal-container {
  flex: 1;
  color: #735340;
  min-width: 250px;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
}

.kaffee-pour {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 250px;
  max-width: 280px;
}

.kaffee-pour img {
  max-width: 100%;
  height: auto;
  border-radius: 20px; /* Für abgerundete Ecken beim Bild */
}

h4 {
  margin-top: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

p {
  margin: 0;
  line-height: 1.6;
}
</style>
