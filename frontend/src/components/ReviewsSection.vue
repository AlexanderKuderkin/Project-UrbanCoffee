<template>
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
              <button class="btn-view-more">View More</button>
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
  name: "ReviewsSection",
  data() {
    return {
      reviews: [],
    };
  },
  async created() {
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
  padding: 8px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 20%;
  background-color: #735340;
  color: #fff;
}

.btn-view-more:hover {
  background-color: #d9b68b;
}
</style>