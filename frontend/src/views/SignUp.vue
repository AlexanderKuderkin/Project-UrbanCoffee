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
                        v-model="fullName" required
                        class="form-control form-control-lg"
                      />
                      <label class="form-label">Full Name</label>
                    </div>
  
                    <div data-mdb-input-init class="form-outline mb-4">
                      <input
                        type="email"
                        v-model="email" required
                        class="form-control form-control-lg"
                      />
                      <label class="form-label">Email</label>
                    </div>
  
                    <div data-mdb-input-init class="form-outline mb-4">
                      <input
                        type="password"
                        v-model="password" required
                        class="form-control form-control-lg"
                      />
                      <label class="form-label">Password</label>
                    </div>
  
                    <div data-mdb-input-init class="form-outline mb-4">
                      <input
                        type="text"
                        v-model="addressCountry" required
                        class="form-control form-control-lg"
                      />
                      <label class="form-label">Country</label>
                    </div>
  
                    <div data-mdb-input-init class="form-outline mb-4">
                      <input
                        type="text"
                        v-model="addressCity" required
                        class="form-control form-control-lg"
                      />
                      <label class="form-label">City</label>
                    </div>
  
                    <div data-mdb-input-init class="form-outline mb-4">
                      <input
                        type="text"
                        v-model="addressPostalCode" required
                        class="form-control form-control-lg"
                      />
                      <label class="form-label">PLZ</label>
                    </div>
  
                    <div data-mdb-input-init class="form-outline mb-4">
                      <input
                        type="text"
                        v-model="addressStreet" required
                        class="form-control form-control-lg"
                      />
                      <label class="form-label">Street-name + Number</label>
                    </div>
  
                    <div class="d-flex justify-content-center">
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Sign up
                      </button>
                    </div>
  
                    <p class="text-center text-muted mt-5 mb-0">
                      Have already an account?
                      <a href="/Login" class="fw-bold text-body"
                        ><u>Login here</u></a
                      >
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
import { ref } from 'vue'
import { useUserStore } from "../stores/user";
const userStore = useUserStore();
let fullName =ref("");
let email = ref("");
let password =ref("");
let addressCountry =ref("");
let addressCity =ref("");
let addressPostalCode =ref("");
let addressStreet =ref("");

async function register() {
      userStore.signUp(fullName.value, email.value, 
      password.value, addressCountry.value, 
      addressCity.value, addressPostalCode.value, 
      addressStreet.value);
      if (useUserStore.user) {
        console.log("Logged in")
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
