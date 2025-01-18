<template>
  <section class="signup-container">
    <div class="card text-white">
      <div class="card-body p-5">
        <h2 class="fw-bold mb-2 text-uppercase text-center">Create an account</h2>
        <p class="text-white mb-5 text-center">Please fill in the details to create your account!</p>

        <form @submit.prevent="register">
          <!-- Full Name -->
          <div class="form-outline form-white mb-4">
            <input
              type="text"
              v-model="fullName"
              required
              class="form-control form-control-lg"
              :class="{ 'is-invalid': !validFullName }"
              @input="validateFullName"
            />
            <label class="form-label">Full Name</label>
            <div v-if="!validFullName" class="text-danger small">Name must only contain letters and spaces.</div>
          </div>

          <!-- Email -->
          <div class="form-outline form-white mb-4">
            <input
              type="email"
              v-model="email"
              required
              class="form-control form-control-lg"
              :class="{ 'is-invalid': !validEmail }"
              @input="validateEmail"
            />
            <label class="form-label">Email</label>
            <div v-if="!validEmail" class="text-danger small">Enter a valid email address.</div>
          </div>

          <!-- Password -->
          <div class="form-outline form-white mb-4">
            <input
              type="password"
              v-model="password"
              required
              class="form-control form-control-lg"
              :class="{ 'is-invalid': !validPassword }"
              @input="validatePassword"
            />
            <label class="form-label">Password</label>
            <div v-if="!validPassword" class="text-danger small">
              Password must be at least 8 characters long and include one uppercase, one lowercase, and one number.
            </div>
          </div>

          <!-- Country -->
          <div class="form-outline form-white mb-4">
            <input
              type="text"
              v-model="addressCountry"
              required
              class="form-control form-control-lg"
              :class="{ 'is-invalid': !validCountry }"
              @input="validateCountry"
            />
            <label class="form-label">Country</label>
            <div v-if="!validCountry" class="text-danger small">Country must only contain letters.</div>
          </div>

          <!-- City -->
          <div class="form-outline form-white mb-4">
            <input
              type="text"
              v-model="addressCity"
              required
              class="form-control form-control-lg"
              :class="{ 'is-invalid': !validCity }"
              @input="validateCity"
            />
            <label class="form-label">City</label>
            <div v-if="!validCity" class="text-danger small">City must only contain letters.</div>
          </div>

          <!-- Postal Code -->
          <div class="form-outline form-white mb-4">
            <input
              type="text"
              v-model="addressPostalCode"
              required
              class="form-control form-control-lg"
              :class="{ 'is-invalid': !validPostalCode }"
              @input="validatePostalCode"
            />
            <label class="form-label">Postal Code</label>
            <div v-if="!validPostalCode" class="text-danger small">Postal Code must be 4-6 digits.</div>
          </div>

          <!-- Street -->
          <div class="form-outline form-white mb-4">
            <input
              type="text"
              v-model="addressStreet"
              required
              class="form-control form-control-lg"
              :class="{ 'is-invalid': !validStreet }"
              @input="validateStreet"
            />
            <label class="form-label">Street-name + House number</label>
            <div v-if="!validStreet" class="text-danger small">Enter a valid street name and number (e.g., "Main St 123").</div>
          </div>

          <!-- Submit Button -->
          <div class="d-flex justify-content-center">
            <button
              type="submit"
              class="btn btn-signup btn-lg px-5"
              :disabled="!allValid"
            >
              Sign up
            </button>
          </div>

          <p class="text-white mt-5 mb-0 text-center">
            Have an account?
            <a href="/Login" class="text-white fw-bold">Login here</a>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useUserStore } from "../stores/user";

const fullName = ref("");
const email = ref("");
const password = ref("");
const addressCountry = ref("");
const addressCity = ref("");
const addressPostalCode = ref("");
const addressStreet = ref("");

const validFullName = ref(true);
const validEmail = ref(true);
const validPassword = ref(true);
const validCountry = ref(true);
const validCity = ref(true);
const validPostalCode = ref(true);
const validStreet = ref(true);

function validateFullName() {
  validFullName.value = /^[a-zA-Z\s]+$/.test(fullName.value);
}
function validateEmail() {
  validEmail.value = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
}
function validatePassword() {
  validPassword.value = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.value);
}
function validateCountry() {
  validCountry.value = /^[a-zA-Z\s]+$/.test(addressCountry.value);
}
function validateCity() {
  validCity.value = /^[a-zA-Z\s]+$/.test(addressCity.value);
}
function validatePostalCode() {
  validPostalCode.value = /^\d{4,6}$/.test(addressPostalCode.value);
}
function validateStreet() {
  validStreet.value = /^[a-zA-ZÀ-ÿß\s\-]+\s\d{1,5}$/.test(addressStreet.value);
}

const allValid = computed(() =>
  validFullName.value &&
  validEmail.value &&
  validPassword.value &&
  validCountry.value &&
  validCity.value &&
  validPostalCode.value &&
  validStreet.value
);

const userStore = useUserStore();
async function register() {
  if (allValid.value) {
    userStore.signUp(
      fullName.value,
      email.value,
      password.value,
      addressCountry.value,
      addressCity.value,
      addressPostalCode.value,
      addressStreet.value
    );
  } else {
    console.log("Invalid input!");
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.signup-container {
  margin: 20px auto; 
  background-color: rgb(212, 205, 205); 
  border-radius: 20px; 
  padding: 20px; 
  min-height: calc(100vh - 40px); 
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  margin: 40px auto; 
  background-color: #735340; 
  border-radius: 20px; 
  width: 100%;
  max-width: 500px; 
}

.btn-signup {
  background-color: #A8865F; 
  color: white;
  border: none;
  border-radius: 15px; 
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.btn-signup:hover {
  background-color: #A8765F; 
}
</style>
