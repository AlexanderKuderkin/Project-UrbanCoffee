<template>
  <div class="outer-container">
    <div class="container mt-5">
      <div class="card shadow-lg">
        <img
          class="card-img-top rounded-circle"
          src="https://dummyimage.com/200x200/cccccc/000000&text=Customer+Photo"
          alt="Customer Photo"
        />
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
    };
  },
  async created() {
    try {
      const response = await axios.get(`/api/users/${this.id}`);
      this.user = response.data;
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
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
    max-width: 600px;
  }
  .card {
    border: none;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .card-img-top {
    object-fit: cover;
    height: 200px;
    width: 200px;
    margin: 20px auto 0 auto;
  }
  .card-title {
    font-size: 2rem;
    font-weight: bold;
  }
  .list-group-item {
    font-size: 1rem;
    text-align: left;
  }
  .btn {
    border-radius: 25px;
  }
  .back-button {
    background-color: #1e160d;
    border-color: #1e160d;
    border-radius: 15px;
  }
  .back-button:hover {
    background-color: #5a6268;
    border-color: #5a6268;
  }
  </style>
  