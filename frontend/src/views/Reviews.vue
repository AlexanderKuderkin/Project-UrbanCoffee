<template>
  <div class="Container-main">
    <div v-if="toastMessage" class="toast" :class="[toastType, { show: toastMessage }]">
      {{ toastMessage }}
    </div>

    <div class="container">
      <h1>Give us your Review</h1>

      <select id="coffeeSelect" class="coffee-select">
        <option value="" disabled selected>Which coffee do you want to review?</option>
        <option v-for="coffee in coffees" :key="coffee.id" :value="coffee.id">
          {{ coffee.name }}
        </option>
      </select>

      <div class="stars" id="stars">
        <span class="star" data-value="1">★</span>
        <span class="star" data-value="2">★</span>
        <span class="star" data-value="3">★</span>
        <span class="star" data-value="4">★</span>
        <span class="star" data-value="5">★</span>
      </div>

      <textarea id="review" placeholder="Write your review here"></textarea>

      <div class="button-group">
        <button id="submit" class="btn-success">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useUserStore } from "@/stores/user";

export default {
  name: "Reviews",
  data() {
    return {
      toastMessage: null,
      toastType: "",
      coffees: [],
      userReviews: [],
    };
  },
  async mounted() {
    this.fetchUserReviews();
    this.initEventListeners();
  },
  methods: {
    async fetchUserReviews() {
      const userStore = useUserStore();
      const userId = userStore.user?.id;

      if (!userId) {
        console.error("No user logged in. Cannot fetch coffees.");
        this.showToast("You must be logged in to see your reviews.","error");
        return;
      }

      try {
        const coffeeResponse = await axios.get("/api/reviews/user-coffees", {
          params: { userId },
        });
        this.coffees = coffeeResponse.data.coffees;

        const reviewResponse = await axios.get(`/api/reviews/user-reviews`, {
          params: { userId },
        });
        this.userReviews = reviewResponse.data.reviews.map((review) => ({
          ...review,
          coffeeName: review.coffee.name,
          userName: review.user.fullName,
          isEditing: false,
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
        this.showToast("Could not load data. You have to buy an coffee first.","error");
      }
    },

    showToast(message, type = "success") {
        this.toastMessage = message;
        this.toastType = type;
        setTimeout(() => {
        this.toastMessage = null;
        this.toastType = "";
        }, 3000); 
      },

    initEventListeners() {
      const stars = document.querySelectorAll(".star");
      const reviewText = document.getElementById("review");
      const coffeeSelect = document.getElementById("coffeeSelect");
      const submitBtn = document.getElementById("submit");

      let rating = 0;

      stars.forEach((star) => {
        star.addEventListener("click", () => {
          const value = parseInt(star.getAttribute("data-value"));
          rating = value;

          stars.forEach((s) =>
            s.classList.remove("one", "two", "three", "four", "five")
          );
          stars.forEach((s, index) => {
            if (index < value) {
              s.classList.add(this.getStarColorClass(value));
            }
          });

          stars.forEach((s) => s.classList.remove("selected"));
          star.classList.add("selected");
        });
      });

      submitBtn.addEventListener("click", async () => {
        const review = reviewText.value.trim();
        const selectedCoffee = coffeeSelect.value;

        if (!selectedCoffee) {
          this.showToast("Please select a coffee to review.","error");
          return;
        }

        if (!rating || !review) {
          this.showToast(
            "Please select a rating and provide a review before submitting.", "error"
          );
          return;
        }

        try {
          const userStore = useUserStore();
          const userId = userStore.user?.id;

          if (!userId) {
            this.showToast("You must be logged in to submit a review.", "error");
            return;
          }

          const response = await axios.post("/api/reviews/create", {
            rating,
            comment: review,
            coffeeId: selectedCoffee,
            userId,
          });

          if (response.status === 201) {
            this.showToast("Review submitted successfully!","success");

            const updatedResponse = await axios.get(
              "/api/reviews/user-reviews",
              {
                params: { userId },
              }
            );
            this.userReviews = updatedResponse.data.reviews.map((review) => ({
              ...review,
              coffeeName: review.coffee.name,
              userName: review.user.fullName,
              isEditing: false,
            }));
          } else {
            this.showToast("Something went wrong. Please try again.","error");
          }

          coffeeSelect.selectedIndex = 0;
          reviewText.value = "";
          rating = 0;
          stars.forEach((s) =>
            s.classList.remove("one", "two", "three", "four", "five", "selected")
          );
        } catch (error) {
          console.error("Error submitting review:", error);
          this.showToast("Could not submit review. Please try again later.","error");
        }
      });

    },

    getStarColorClass(value) {
      switch (value) {
        case 1:
          return "one";
        case 2:
          return "two";
        case 3:
          return "three";
        case 4:
          return "four";
        case 5:
          return "five";
        default:
          return "";
      }
    },
  },
};
</script>

  
<style scoped>
  body {
    margin: 0;
    padding: 0;
  }

  .Container-main {
    background-color: rgb(212, 205, 205);
    border-radius: 20px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 80px);
    overflow: auto;
    padding-left: 25px;
    padding-right: 25px;
  }

  .container {
    background-color: white;
    padding: 100px 50px;
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 500px;
    height: 500px;
  }

  h1 {
    font-size: 24px;
    margin: 0;
  }

  .coffee-select {
    width: 90%;
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 16px;
  }

  .stars {
    font-size: 30px;
    margin: 10px 0;
  }

  .star {
    cursor: pointer;
    margin: 0 5px;
  }

  .one {
    color: rgb(255, 0, 0);
  }

  .two {
    color: rgb(255, 106, 0);
  }

  .three {
    color: rgb(251, 255, 120);
  }

  .four {
    color: rgb(255, 255, 0);
  }

  .five {
    color: rgb(24, 159, 14);
  }

  textarea {
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    resize: vertical;
    min-height: 80px;
    max-height: 400px;
  }

  .button-group {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }

  button {
    background-color: #a8865f;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    width: 85px;
  }

  button:hover {
    background-color: #0056b3;
  }

  .back-button {
    background-color: #1e160d;
  }

  .back-button:hover {
    background-color: #5a6268;
  }

  .btn-success:hover {
    background-color: #A8765F;
  }

  .reviews {
    margin-top: 20px;
    text-align: left;
    display: grid;
  place-items: center;
  }

  .review {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    margin: 10px 0;
  }

  .review p {
    margin: 0;
  }

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

.btn-view-more,
.btn-buy-more {
  margin-top: 10px;
  padding: 8px 20px;
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
}

.btn-view-more {
    color: #fff;
  }
  
.btn-view-more:hover {
  background-color: #d9b68b;
}

.btn-buy-more {
  background-color: #735340;
  color: #fff;
}

.btn-buy-more:hover {
  background-color: #d9b68b;
}

.mb-2 {
  margin-bottom: 30px !important;
  font-family: 'Roboto', sans-serif;
}
</style>
