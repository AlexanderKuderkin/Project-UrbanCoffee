<template>
    <section
      class="vh-100 bg-image"
      style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');"
    >
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style="border-radius: 15px;">
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">Create an account</h2>
  
                  <form @submit.prevent="register">
                    <div data-mdb-input-init class="form-outline mb-4">
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
                  <div data-mdb-input-init class="form-outline mb-4">
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
                  <div data-mdb-input-init class="form-outline mb-4">
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
                  <div data-mdb-input-init class="form-outline mb-4">
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
                  <div data-mdb-input-init class="form-outline mb-4">
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
                  <div data-mdb-input-init class="form-outline mb-4">
                    <input
                      type="text"
                      v-model="addressPostalCode"
                      required
                      class="form-control form-control-lg"
                      :class="{ 'is-invalid': !validPostalCode }"
                      @input="validatePostalCode"
                    />
                    <label class="form-label">PLZ</label>
                    <div v-if="!validPostalCode" class="text-danger small">Postal Code must be 4-6 digits.</div>
                  </div>

                  <!-- Street -->
                  <div data-mdb-input-init class="form-outline mb-4">
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
                      data-mdb-button-init
                      data-mdb-ripple-init
                      class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      :disabled="!allValid"
                    >
                      Sign up
                    </button>
                  </div>
  
                    <p class="text-center text-muted mt-5 mb-0">
                      Have already an account?
                      <a href="/Login" class="fw-bold text-body"
                        ><u>Login here</u></a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
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
  validFullName.value = /^[a-zA-ZÀ-ÿ\s]+$/.test(fullName.value);
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
  validCity.value = /^[a-zA-ZÀ-ÿ\s]+$/.test(addressCity.value);
}
function validatePostalCode() {
  validPostalCode.value = /^\d{4,6}$/.test(addressPostalCode.value);
}
function validateStreet() {
  validStreet.value = /^[a-zA-ZÀ-ÿ\s]+ \d{1,5}$/.test(addressStreet.value);
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
.gradient-custom-3 {
    /* fallback for old browsers */
    background: #84fab0;
    
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));
    
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
    }
    .gradient-custom-4 {
    /* fallback for old browsers */
    background: #84fab0;
    
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1));
    
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))
    }
</style>
