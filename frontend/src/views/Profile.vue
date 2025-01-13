<template>
    <div class="profile-container">
      <div class="row">
        <!-- left side -->
        <div class="col-lg-4">
          <div class="card profile-card">
            <div class="profile-placeholder">
              <span>No Image</span>
            </div>
            <h4 class="mt-3">{{ form.fullName || "No Name" }}</h4>
            <RouterLink to="/OrderHistory" class="btn order-history-button mt-3">Order History</RouterLink>
          </div>
        </div>
  
        <!-- Right side -->
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
                  >
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.emailAddress"
                  >
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-3 col-form-label">Street</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.addressStreet"
                  >
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-3 col-form-label">City</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.addressCity"
                  >
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-3 col-form-label">Postal Code</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.addressPostalCode"
                  >
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-3 col-form-label">Country</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.addressCountry"
                  >
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
                  >
                </div>
              </div>
            </div>
          </div>
  
          <!-- Review -->
          <div class="card mt-4">
            <div class="card-body">
              <h5 class="mb-3">Customer Review</h5>
              <p><strong>Coffee Name:</strong> Espresso Deluxe</p>
              <p><strong>Date:</strong> 2025-01-10</p>
              <p><strong>Rating:</strong> 4/5</p>
              <p>
                "The Espresso Deluxe had a rich and bold flavor, but it was slightly too bitter for my taste. Still, a great choice for espresso lovers!"
              </p>
              <div class="d-flex justify-content-end gap-2">
                <button class="btn btn-danger">Delete</button>
                <button class="btn btn-outline-primary">Edit</button>
              </div>
            </div>
          </div>
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
        form: {
          fullName: "",
          emailAddress: "",
          addressStreet: "",
          addressCity: "",
          addressPostalCode: "",
          addressCountry: "",
        },
      };
    },
    async created() {
      const userStore = useUserStore();
      await userStore.fetchUser();
      this.user = userStore.user;
      this.populateForm();
    },
    methods: {
      populateForm() {
        if (this.user) {
          this.form.fullName = this.user.fullName;
          this.form.emailAddress = this.user.emailAddress;
          this.form.addressStreet = this.user.addressStreet;
          this.form.addressCity = this.user.addressCity;
          this.form.addressPostalCode = this.user.addressPostalCode;
          this.form.addressCountry = this.user.addressCountry;
        }
      },
      async saveChanges() {
        try {
          const response = await axios.put("/updateUser", this.form);
          this.user = response.data;
          this.populateForm();
          alert("Changes saved successfully!");
        } catch (error) {
          console.error("Failed to save changes:", error);
          alert("Failed to save changes. Please try again.");
        }
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
	background-color: #735340;
	color: #fff;
	border: 0;
	border-radius: 20px;
	margin-bottom: 1.5rem;
	box-shadow: 0 2px 6px rgba(218, 218, 253, 0.65), 0 2px 6px rgba(206, 206, 238, 0.54);
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
	color: #fff;
	border-radius: 20px;
	padding: 20px;
  }
  
  .card-body input {
	background-color: #fff;
	color: #000;
	border: 1px solid #ccc;
  }
  
  .order-history-button {
	background-color: #1e160d;
	color: #fff;
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
	color: #fff !important;
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
	color: #fff !important;
	border: none;
	border-radius: 15px;
	padding: 5px 15px;
  }
  
  .btn-outline-primary {
	color: #007bff !important;
	border-color: #007bff;
	border-radius: 15px;
	padding: 5px 15px;
  }
  
  .btn-outline-primary:hover {
	background-color: #007bff;
	color: #fff !important;
  }
  </style>
  