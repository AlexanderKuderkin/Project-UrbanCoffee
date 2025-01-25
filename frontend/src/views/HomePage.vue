<template>
  <div class="hero-section">
      <div class="hero-text">
      Discover the finest selection of coffee, from premium coffee beans and ground coffee to convenient pods, all tailored to your taste. Use our advanced filter to explore options by sustainability, coffee strength, and customer reviews, ensuring the perfect cup every time.
      <RouterLink to="/Coffee" class="view-more-btn">View more</RouterLink>
      </div>
  </div>

  <div class="offer-container">
    <div class="vertical-line"></div>
    <h3>What we offer</h3>
  </div>

  <div class="description-container">
  <div class="description-row">
    <div class="description-item">
      <img :src="image1" alt="People reviewing" class="description-image" />
      <div class="description-text">
        <h3>Verified Reviews</h3>
        <p>
          Read honest, verified reviews from real coffee enthusiasts to help you find the perfect coffee. Every review is vetted to ensure authenticity.
        </p>
      </div>
    </div>
    <div class="description-item reverse">
      <div class="description-text">
        <h3>Curation Coffee Selection</h3>
        <p>
          Explore a wide variety of premium coffee beans from renowned roasters worldwide. Whether you love dark roasts or fruity light roasts, there’s something for everyone.
        </p>
      </div>
      <img :src="image2" alt="Coffee with beans" class="description-image" />
    </div>
  </div>
  <div class="description-row">
    <div class="description-item">
      <img :src="image3" alt="Coffee being poured" class="description-image" />
      <div class="description-text">
        <h3>Coffee for Every Occasion</h3>
        <p>
          Whether you're a casual drinker or a coffee aficionado, find the perfect beans for your taste and lifestyle.
        </p>
      </div>
    </div>
    <div class="description-item reverse">
      <div class="description-text">
        <h3>Advanced Coffee Filter</h3>
        <p>
          Find exactly what you’re looking for with our advanced filter options. Narrow down your search by roast level, flavor notes, origin, and sustainability certifications.
        </p>
      </div>
      <img :src="image4" alt="Advanced coffee filter" class="description-image" />
    </div>
  </div>
</div>

  <div class="offer-container">
      <div class="vertical-line"></div>
  </div>
  

  <div class="advertising-container">
    <div class="advertising-text">
      Don't wait long and look for your perfect coffee now
    </div>
    <RouterLink to="/SignUp" class="signInBtn">Sign up</RouterLink>
  </div>
  
  <div class="offer-container">
      <div class="vertical-line"></div>
      <h3>About us</h3>
  </div>
  
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
<div class="popular-container">
    <div class="vertical-line"></div>
    <h3>Popular Reviews</h3>
  </div>

  <section class="reviews-section">
  <div class="container">
    <div class="row text-center">
      <div
        v-for="review in reviews"
        :key="review.id"
        class="col-md-6 mb-4"
      >
        <div class="card">
          <div class="card-body py-4 mt-2">
            <h5 class="font-weight-bold">{{ review.userName }}</h5>
            <h6 class="font-weight-bold my-3">{{ review.coffeeName }}</h6>
            <ul class="list-unstyled d-flex justify-content-center mb-3">
              <li v-for="n in review.rating" :key="n">
                <i class="fas fa-star star-color"></i>
              </li>
              <li
                v-for="n in 5 - review.rating"
                :key="'empty-' + n"
              >
                <i class="far fa-star star-color"></i>
              </li>
            </ul>
            <p class="mb-2">
              <i class="fas fa-quote-left pe-2"></i>{{ review.comment }}
            </p>
            <RouterLink to="/Coffee" class="btn-view-more">View More</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  
</template>

<script>
import axios from "axios";

export default {
name: "DescriptionSection",
data() {
  return {
    image1: new URL('@/assets/ZweiMenschenReview.png', import.meta.url).href,
    image2: new URL('@/assets/Kaffee3.jpg', import.meta.url).href,
    image3: new URL('@/assets/Kaffe1.jpg', import.meta.url).href,
    image4: new URL('@/assets/Kaffe2.jpg', import.meta.url).href,
    imageSrc: new URL('@/assets/KaffeePour.png', import.meta.url).href,
    reviews: [],
  };
},async created() {
  await this.fetchReviews();
},
methods: {
  async fetchReviews() {
    try {
      const response = await axios.get("/api/reviews", {
        params: { ids: [1, 2] },
      });
      this.reviews = response.data.reviews.map((review) => ({
        id: review.id,
        userName: review.user.fullName,
        coffeeName: review.coffee.name,
        rating: review.rating,
        comment: review.comment,
      }));
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  },
},
};
</script>

<style scoped>
.reviews-section {
  background-color: #f3f2f2;
  padding: 40px 0;
}

.card {
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-body {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.star-color {
  color: #735340;
}

.btn-view-more {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: #735340;
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  display: inline-block;
  width: auto;
  max-width: 150px;
  text-align: center;
}

.btn-view-more:hover {
  background-color: #A8765F;
  text-decoration: none;
}

@media (max-width: 768px) {
  .btn-view-more {
    width: auto;
    text-align: center;
    padding: 10px 15px;
    max-width: 150px;
  }
}

.explanation-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 20px;
  flex-wrap: wrap;
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
  font-family: 'Roboto', sans-serif;
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
  border-radius: 20px;
}

h4, p {
  display: inline-block;
  text-align: center;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
}

h4 {
  margin-top: 0;
}

.popular-container {
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

.popular-container h3 {
  color: #D9B68b;
  font-weight: bold;
}

.advertising-container {
  position: relative;
  margin: 40px 20px;
  min-height: 250px;
  background-image: url('@/assets/kaffeepulver_cleanup.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
}

.advertising-text {
  position: relative; 
  color: white;
  font-size: 20px;
  margin-bottom: 30px;
  font-size: xx-large;
  font-family: 'Roboto', sans-serif;
  margin-top: 20px;
}

.signInBtn {
  border: none;
  background-color: #A8865F;
  color: #ffffff;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: normal;
  cursor: pointer;
  margin-left: 10px;
  width: auto;
  text-decoration: none;
}

.signInBtn:hover {
  background-color: #A8765F;
  text-decoration: none;
}

.description-container {
  margin: 0px 30px;
}

.description-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
}

.description-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 0 0 50%;
  margin-bottom: 20px;
}

.description-item.reverse {
  flex-direction: row-reverse;
}

.description-image {
  width: 260px;
  height: 250px;
  border-radius: 20px;
  margin-right: 15px;
}

.description-item.reverse .description-image {
  margin-left: 15px;
  margin-right: 0;
}

.description-text {
  flex: 1;
}

.description-text h3 {
  color: #A8865F; 
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center; 
  font-family: 'Noto Sans', sans-serif;
}

.description-text p {
  color: #000000; 
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
}

@media (max-width: 768px) {
  .description-row {
    flex-direction: column;
    align-items: center;
  }

  .description-item {
    flex: 1 0 100%; 
    margin-bottom: 20px; 
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .description-item.reverse {
    flex-direction: column;
  }

  .description-image {
    order: -1;
    margin-right: 0;
    margin-bottom: 10px;
  }

  .description-item.reverse .description-image {
    order: -1;
  }
}

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

.hero-section {
  position: relative;
  width: 100%;
  min-height: 450px;
  background-image: url('@/assets/StartseiteBild.png');
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

@media (max-width: 768px) {
  .hero-text {
    font-size: 18px;
    padding: 0 15px;
  }
}

@media (max-width: 480px) {
  .hero-text {
    font-size: 16px;
  }
}

.view-more-btn {
  margin-top: 10px;
  padding: 8px 12px;
  border: none;
  border-radius: 15px;
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
  text-decoration: none;
}

.view-more-btn:hover {
  background-color: #A8765F;
  text-decoration: none;
}
</style>
