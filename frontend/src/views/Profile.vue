<template>
    <div class="profile-container">
      <div class="row">
        <div class="col-lg-4">
          <div class="card profile-card">
            <div class="profile-placeholder">
              <span>No Image</span>
            </div>
            <h4 class="mt-3">{{ form.fullName || "No Name" }}</h4>
            <RouterLink to="/OrderHistory" class="btn order-history-button mt-3">Order History</RouterLink>
          </div>
        </div>
  
        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <div class="mb-3 row">
                <label class="col-sm-3 col-form-label">Full Name</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.fullName"
                    :class="{ 'is-invalid': !validFullName }"
                    @input="validateFullName"
                  >
                  <div v-if="!validFullName" class="text-danger small">Name must only contain letters and spaces.</div>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.emailAddress"
                    :class="{ 'is-invalid': !validEmail }"
                    @input="validateEmail"
                  >
                  <div v-if="!validEmail" class="text-danger small">Enter a valid email address.</div>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-3 col-form-label">Street</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.addressStreet"
                    :class="{ 'is-invalid': !validStreet }"
                    @input="validateStreet"
                  >
                  <div v-if="!validStreet" class="text-danger small">Enter a valid street (e.g., "Main St 123").</div>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-3 col-form-label">City</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.addressCity"
                    :class="{ 'is-invalid': !validCity }"
                    @input="validateCity"
                  >
                  <div v-if="!validCity" class="text-danger small">City must only contain letters.</div>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-3 col-form-label">Postal Code</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.addressPostalCode"
                    :class="{ 'is-invalid': !validPostalCode }"
                    @input="validatePostalCode"
                  >
                  <div v-if="!validPostalCode" class="text-danger small">Postal Code must be 4-6 digits.</div>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-3 col-form-label">Country</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.addressCountry"
                    :class="{ 'is-invalid': !validCountry }"
                    @input="validateCountry"
                  >
                  <div v-if="!validCountry" class="text-danger small">Country must only contain letters.</div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-9">
                  <input
                    type="button"
                    class="btn save-changes-button px-4"
                    value="Save Changes"
                    @click="saveChanges"
                    :disabled="!hasChanges || !allValid"
                  >
                </div>
              </div>
            </div>
          </div>
  
          <!-- Reviews Section -->
          <div class="reviews">
            <div
              v-for="review in userReviews"
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
                  </ul>
  
                  <div v-if="review.isEditing">
                    <div class="stars" id="edit-stars">
                      <span
                        class="star"
                        v-for="n in 5"
                        :key="n"
                        :class="{ selected: n <= review.rating }"
                        @click="updateRating(review, n)"
                      >
                        ★
                      </span>
                    </div>
  
                    <textarea v-model="review.comment" class="edit-textarea"></textarea>
  
                    <div class="button-group">
                      <button class="btn-save" @click="saveReview(review)">Save</button>
                      <button class="btn-cancel" @click="cancelEdit(review)">Cancel</button>
                    </div>
                  </div>
  
                  <div v-else>
                    <p class="mb-2">
                      <i class="fas fa-quote-left pe-2"></i>{{ review.comment }}
                    </p>
                    <button class="btn-view-more" @click="deleteReview(review.id)">
                      Delete
                    </button>
                    <button class="btn-buy-more" @click="editReview(review)">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Reviews Section -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useUserStore } from "@/stores/user";
  import axios from "axios";
  
  export default {
    data() {
      return {
        user: null,
        originalData: null,
        form: {
          fullName: "",
          emailAddress: "",
          addressStreet: "",
          addressCity: "",
          addressPostalCode: "",
          addressCountry: "",
        },
        validFullName: true,
        validEmail: true,
        validStreet: true,
        validCity: true,
        validPostalCode: true,
        validCountry: true,
        userReviews: [],
      };
    },
    computed: {
      allValid() {
        return (
          this.validFullName &&
          this.validEmail &&
          this.validStreet &&
          this.validCity &&
          this.validPostalCode &&
          this.validCountry
        );
      },
      hasChanges() {
        return JSON.stringify(this.form) !== JSON.stringify(this.originalData);
      },
    },
    async created() {
      const userStore = useUserStore();
      await userStore.fetchUser();
      this.user = userStore.user;
      this.populateForm();
      this.fetchUserReviews();
    },
    methods: {
      populateForm() {
        if (this.user) {
          this.form = { ...this.user };
          this.originalData = { ...this.user };
        }
      },
      validateFullName() {
        this.validFullName = /^[a-zA-Z\s]+$/.test(this.form.fullName);
      },
      validateEmail() {
        this.validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.emailAddress);
      },
      validateStreet() {
        this.validStreet = /^[a-zA-ZÀ-ÿß\s\-]+\s\d{1,5}$/.test(this.form.addressStreet);
      },
      validateCity() {
        this.validCity = /^[a-zA-Z\s]+$/.test(this.form.addressCity);
      },
      validatePostalCode() {
        this.validPostalCode = /^\d{4,6}$/.test(this.form.addressPostalCode);
      },
      validateCountry() {
        this.validCountry = /^[a-zA-Z\s]+$/.test(this.form.addressCountry);
      },
      async saveChanges() {
        try {
          const response = await axios.put("/updateUser", this.form);
          this.user = response.data;
          this.populateForm();
          alert("Changes saved successfully!");
        } catch (error) {
          alert("Failed to save changes. Please try again.");
        }
      },
      async fetchUserReviews() {
        const userStore = useUserStore();
        const userId = userStore.user?.id;
        if (!userId) {
          alert("You must be logged in to see your reviews.");
          return;
        }
        try {
          const response = await axios.get("/api/reviews/user-reviews", { params: { userId } });
          this.userReviews = response.data.reviews.map((review) => ({
            ...review,
            coffeeName: review.coffee.name,
            userName: review.user.fullName,
            isEditing: false,
          }));
        } catch (error) {
          alert("Could not load reviews. Please try again later.");
        }
      },
      async deleteReview(reviewId) {
        try {
          const response = await axios.delete(`/api/reviews/${reviewId}`);
          if (response.status === 200) {
            this.userReviews = this.userReviews.filter((review) => review.id !== reviewId);
            alert("Review deleted successfully.");
          }
        } catch (error) {
          alert("Could not delete the review. Please try again.");
        }
      },
      editReview(review) {
        this.userReviews.forEach((r) => (r.isEditing = false));
        review.isEditing = true;
      },
      async saveReview(review) {
        try {
          const response = await axios.put(`/api/reviews/${review.id}`, {
            comment: review.comment,
            rating: review.rating,
          });
          if (response.status === 200) {
            alert("Review updated successfully!");
            review.isEditing = false;
            this.fetchUserReviews();
          }
        } catch (error) {
          alert("Could not update the review. Please try again.");
        }
      },
      cancelEdit(review) {
        review.isEditing = false;
        this.fetchUserReviews();
      },
      updateRating(review, newRating) {
        review.rating = newRating;
      },
    },
  };
  </script>
  
  
  <style scoped>
  body {
	background: #f7f7ff;
	margin-top: 20px;
  }
  
  .profile-container {
	background-color: rgb(212, 205, 205);
	margin: 20px 0;
	padding: 20px;
	border-radius: 20px;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  .card {
	background-color: white;
	color: black;
	border: 0;
	border-radius: 20px;
	margin-bottom: 1.5rem;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Schatten hinzugefügt */
  }
  
  .profile-card {
	text-align: center;
	border-radius: 20px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center; 
  }
  
  .profile-placeholder {
	width: 110px;
	height: 110px;
	border-radius: 50%;
	background-color: #ccc;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: bold;
	color: #555;
	margin: 0 auto 15px auto;
  }
  
  .card-body {
	color: black;
	border-radius: 20px;
	padding: 20px;
  }
  
  .card-body input {
	background-color: #fff;
	color: black;
	border: 1px solid #ccc;
  }
  
  .order-history-button {
	background-color: #1e160d;
	color: white;
	border: none;
	border-radius: 15px;
	padding: 10px 20px;
	width: 150px;
	transition: background-color 0.3s ease;
  }
  
  .order-history-button:hover {
	background-color: #5a6268;
  }
  
  .save-changes-button {
	background-color: #A8865F !important;
	color: black !important;
	border: none;
	border-radius: 15px !important;
	padding: 10px 20px;
	transition: background-color 0.3s ease;
  }
  
  .save-changes-button:hover {
	background-color: #A8765F !important;
  }
  
  .btn-danger {
	background-color: #dc3545 !important;
	color: black !important;
	border: none;
	border-radius: 15px;
	padding: 5px 15px;
  }
  
  .btn-outline-primary {
	color: black !important;
	border-color: #007bff;
	border-radius: 15px;
	padding: 5px 15px;
  }
  
  .btn-outline-primary:hover {
	background-color: #007bff;
	color: black !important;
  }
  </style>
