<template>
  <div class="outer-container">
    <div class="container mt-5">
      <!-- Kundeninformationen -->
      <div class="info-card card shadow-lg">
        <div class="card-body text-center" v-if="user">
          <h2 class="card-title fw-bold">{{ user.fullName }}</h2>
          <ul class="list-group list-group-flush mt-3">
            <li class="list-group-item"><strong>Email:</strong> {{ user.emailAddress }}</li>
            <li class="list-group-item"><strong>Country:</strong> {{ user.addressCountry }}</li>
            <li class="list-group-item"><strong>City:</strong> {{ user.addressCity }}</li>
            <li class="list-group-item"><strong>Postal Code:</strong> {{ user.addressPostalCode }}</li>
            <li class="list-group-item"><strong>Street:</strong> {{ user.addressStreet }}</li>
          </ul>

          <div class="mt-4">
            <RouterLink to="/ManageCustomers" class="btn btn-secondary back-button">
              <i class="fas fa-arrow-left me-2"></i> Back to Customers
            </RouterLink>
          </div>
        </div>
        <div v-else>
          <p>Loading user data...</p>
        </div>
      </div>

      <!-- Reviews anzeigen -->
      <div class="reviews mt-5">
        <h3 class="text-center mb-4">User Reviews</h3>
        <div v-if="userReviews.length > 0">
          <div
            v-for="review in userReviews"
            :key="review.id"
            class="review-card card shadow-lg"
          >
            <div class="card-body py-4 mt-2 text-center">
              <h5 class="font-weight-bold">{{ review.coffeeName }}</h5>
              <ul class="list-unstyled d-flex justify-content-center mb-3">
                <li v-for="n in review.rating" :key="n">
                  <i class="fas fa-star star-color"></i>
                </li>
              </ul>
              <p class="mb-2">
                <i class="fas fa-quote-left pe-2"></i>{{ review.comment }}
              </p>
              <!-- Delete-Button -->
              <button class="btn btn-danger" @click="deleteReview(review.id)">
                Delete Review
              </button>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="text-center">No reviews found for this user.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { RouterLink } from "vue-router";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      user: null, 
      userReviews: [],
    };
  },
  async created() {
    try {
      const userResponse = await axios.get(`/api/users/${this.id}`);
      this.user = userResponse.data;

      const reviewsResponse = await axios.get(`/api/reviews/user-reviews`, {
        params: { userId: this.id },
      });
      this.userReviews = reviewsResponse.data.reviews.map((review) => ({
        ...review,
        coffeeName: review.coffee.name,
        userName: this.user.fullName,
      }));
    } catch (error) {
      console.error("Failed to fetch user data or reviews:", error);
    }
  },
  methods: {
    async deleteReview(reviewId) {
      try {
        const response = await axios.delete(`/api/reviews/${reviewId}`);
        if (response.status === 200) {
          this.userReviews = this.userReviews.filter((review) => review.id !== reviewId);
          alert("Review deleted successfully!");
        } else {
          alert("Failed to delete the review.");
        }
      } catch (error) {
        console.error("Error deleting review:", error);
        alert("An error occurred while deleting the review.");
      }
    },
  },
};
</script>

<style scoped>
/* Äußeres Styling */
.outer-container {
  background-color: rgb(212, 205, 205);
  border-radius: 20px;
  margin: 20px 0;
  padding: 20px;
}

/* Zentrierter Container für gleiche Breite */
.container {
  max-width: 600px; /* Gleiche maximale Breite */
}

/* Info-Card Styling */
.info-card {
  margin-bottom: 20px;
}

.info-card .list-group {
  text-align: left; /* Links ausrichten */
  margin-left: auto; /* Abstand nach links für Zentrierung der Liste */
  margin-right: auto; /* Abstand nach rechts, um innerhalb der Karte zentriert zu bleiben */
  max-width: 400px; /* Optionale Begrenzung der Breite */
}

.info-card .card-title {
  text-align: center; /* Name bleibt zentriert */
}

/* Review-Card Styling */
.review-card {
  margin: 0 auto 20px auto; /* Zentriere die Reviews */
}

/* Einheitliches Card-Styling */
.card {
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Zentrierte Inhalte */
.card-body {
  text-align: center;
  padding: 20px;
}

/* Sterne Styling */
.star-color {
  color: #735340;
}

/* Button-Styling */
.btn-danger {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-danger:hover {
  background-color: #c82333;
}

/* Back-Button */
.back-button {
  background-color: #1e160d;
  border-color: #1e160d;
  border-radius: 15px;
}

.back-button:hover {
  background-color: #5a6268;
  border-color: #5a6268;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    max-width: 90%; /* Reduziere die Breite auf kleinen Geräten */
  }

  .card {
    padding: 15px; /* Weniger Innenabstand für kleinere Bildschirme */
  }
}
</style>
