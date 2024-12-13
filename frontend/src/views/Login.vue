<template>
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem;">
              <div class="card-body p-5 text-center">
                <form @submit.prevent="login">
                  <div class="mb-md-5 mt-md-4 pb-5">
                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="text-white-50 mb-5">Please enter your login and password!</p>
  
                    <div data-mdb-input-init class="form-outline form-white mb-4">
                      <input
                        type="email"
                        v-model="email"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label">Email</label>
                    </div>
  
                    <div data-mdb-input-init class="form-outline form-white mb-4">
                      <input
                        type="password"
                        v-model="password"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label">Password</label>
                    </div>
  
                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      class="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
  
                <div>
                  <p class="mb-0">
                    Don't have an account?
                    <a href="/SignUp" class="text-white-50 fw-bold">Sign Up</a>
                  </p>
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
let email = ref("");
let password =ref("");
async function login() {
      userStore.signIn(email.value, password.value);
      if (useUserStore.user) {
        console.log("Logged in")
      }
}
</script>

<style scoped>
body{
    background-image: url('src/assets/kaffeepulver_cleanup.jpg');
}
</style>