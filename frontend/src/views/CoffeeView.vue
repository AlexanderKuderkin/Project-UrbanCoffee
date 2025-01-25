<template>
  <div class="outer-container">
    <div class="container mt-5">
      <div v-if="coffee" class="card shadow-lg">
        <img
          class="searchImg"
          :src="coffee.imagePath"
          :alt="coffee.name"
        />
        <div class="card-body">
          <h2 class="card-title">{{ coffee.name }}</h2>
          <p class="card-text">{{ coffee.description }}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <strong>Category:</strong> {{ coffee.category ? coffee.category.name : 'N/A' }}
            </li>
            <li class="list-group-item"><strong>Price:</strong> ${{ coffee.price.toFixed(2) }}</li>
            <li class="list-group-item"><strong>Caffeine Content:</strong> {{ coffee.caffeineContent }} mg</li>
            <li class="list-group-item"><strong>Brand:</strong> {{ coffee.brand }}</li>
            <li class="list-group-item"><strong>Roast Degree:</strong> {{ coffee.roastDegree }}</li>
            <li class="list-group-item"><strong>Bean Type:</strong> {{ coffee.beanType }}</li>
            <li class="list-group-item">
              <strong>Certificates:</strong> {{ coffee.certificates.join(", ") }}
            </li>
            <li class="list-group-item"><strong>Origin:</strong> {{ coffee.origin }}</li>
            <li class="list-group-item"><strong>Grind Type:</strong> {{ coffee.grindType }}</li>
          </ul>

          <div class="mt-4 button-group">
            <router-link to="/Coffee" class="btn btn-secondary back-button">
              <i class="fas fa-arrow-left me-2"></i> Back to Coffee List
            </router-link>
            <router-link
              to="/ManageCoffee"
              class="btn btn-primary back-to-manage"
              v-if="userStore.user && userStore.user.isSuperAdmin"
            >
              Back to ManageCoffee
            </router-link>
          </div>
        </div>
      </div>

      <div v-else class="text-center">
        <h3>Product not found</h3>
        <router-link to="/Coffee" class="btn btn-primary mt-3">
          Back to Coffee List
        </router-link>
        <router-link
          to="/ManageCoffee"
          class="btn btn-primary back-to-manage mt-3"
          v-if="userStore.user && userStore.user.isSuperAdmin"
        >
          Back to ManageCoffee
        </router-link>
      </div>

      <div v-if="reviews.length" class="reviews mt-5">
        <h3 class="mb-4">Reviews for {{ coffee.name }}</h3>
        <div
          v-for="review in reviews"
          :key="review.id"
          class="card mb-3 shadow-sm"
        >
          <div class="card-body">
            <h5>{{ review.userName }}</h5>
            <ul>
              <li v-for="n in review.rating" :key="n">
                <i class="fas fa-star star-color"></i>
              </li>
            </ul>
            <p>{{ review.comment }}</p>
          </div>
        </div>
      </div>

      <div v-else class="text-center mt-5">
        <h4>No reviews available for this coffee.</h4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";

export default {
  name: "CoffeeView",
  setup() {
    const route = useRoute();
    const coffee = ref(null);
    const reviews = ref([]);
    const userStore = useUserStore();

    const fetchCoffee = async () => {
      try {
        const response = await axios.get(`/Coffee/${route.params.id}?populate=category`);
        coffee.value = {
          ...response.data,
          imagePath: `/${response.data.imagePath}`,
        };
      } catch (error) {
        console.error("Error fetching coffee details:", error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/reviews/coffee-reviews`, {
          params: { coffeeId: route.params.id },
        });
        reviews.value = response.data.reviews.map((review) => ({
          ...review,
          userName: review.user.fullName,
        }));
      } catch (error) {
        console.error("Error fetching coffee reviews:", error);
      }
    };

    onMounted(() => {
      fetchCoffee();
      fetchReviews();
    });

    return {
      coffee,
      reviews,
      userStore,
    };
  },
};
</script>

<style scoped>
.outer-container {
  background-color: rgb(212, 205, 205);
  border-radius: 20px;
  margin: 20px 0;
  padding: 20px;
}

.container {
  max-width: 800px;
}

.card {
  border: none;
  border-radius: 10px;
  overflow: hidden;
}

.card-img-top {
  object-fit: cover;
  height: 300px;
}

.card-title {
  font-size: 2rem;
  font-weight: bold;
}

.card-text {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.list-group-item {
  font-size: 1rem;
}

.btn {
  border-radius: 15px; /* Runde Ecken für alle Buttons */
  padding: 8px 16px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  min-width: 150px; /* Gleiche Breite für alle Buttons */
}

.back-button {
  background-color: #1e160d;
  border-color: #1e160d;
  margin-right: 10px;
}

.back-button:hover {
  background-color: #5a6268;
  border-color: #5a6268;
}

.back-to-manage {
  background-color: #A8865F; /* Helles Braun */
  border-color: #A8865F;
  color: #fff; /* Weißer Text */
}

.back-to-manage:hover {
  background-color: #A8765F; /* Etwas dunkleres Braun beim Hover */
  border-color: #A8765F;
}

.button-group {
  display: flex;
  justify-content: center; /* Zentriere die Buttons horizontal */
  align-items: center; /* Stelle sicher, dass die Buttons vertikal ausgerichtet sind */
  gap: 20px; /* Platz zwischen den Buttons */
}

@media (max-width: 768px) {
  .button-group {
    flex-direction: column; /* Ordne die Buttons untereinander an */
    align-items: center; /* Zentriere die Buttons im responsiven Layout */
    gap: 10px; /* Reduziere den Abstand zwischen den Buttons */
  }
}

.reviews .card {
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center; /* Zentriert alle Inhalte innerhalb der Karte */
  padding: 20px; /* Fügt etwas Innenabstand hinzu */
}

.reviews .card-body {
  display: flex;
  flex-direction: column; /* Ordne alle Inhalte vertikal */
  align-items: center; /* Zentriere die Inhalte horizontal */
}

.reviews h5 {
  font-weight: bold;
  margin-bottom: 10px; /* Abstand unterhalb des Namens */
}

.reviews ul {
  display: flex;
  justify-content: center; /* Zentriere die Sterne */
  list-style: none;
  padding: 0;
  margin: 10px 0; /* Abstand um die Sterne */
}

.reviews p {
  margin: 10px 0; /* Abstand um den Kommentar */
}

.star-color {
  color: #f39c12; /* Farbe für Sterne */
}

.reviews .card-body {
  text-align: center; /* Zentriere den gesamten Text */
}
</style>
