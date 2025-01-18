<template>
  <section class="login-container">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card text-white">
            <div class="card-body p-5 text-center">
              <form @submit.prevent="login">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                  <p class="text-white mb-5">Please enter your login and password!</p>

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
                    class="btn btn-login btn-lg px-5"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>

              <div>
                <p class="text-white mb-0">
                  Don't have an account?
                  <a href="/SignUp" class="text-white fw-bold">Sign Up</a>
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
import { ref } from "vue";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
let email = ref("");
let password = ref("");

async function login() {
  userStore.signIn(email.value, password.value);
  if (userStore.user) {
    console.log("Logged in");
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.login-container {
  background-color: rgb(212, 205, 205);
  margin: 20px auto; 
  border-radius: 20px; 
  padding: 20px; 
  min-height: calc(100vh - 40px); 
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background-color: #735340; 
  border-radius: 20px; 
}

.btn-login {
  background-color: #A8865F; 
  color: white;
  border: none;
  border-radius: 15px; 
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.btn-login:hover {
  background-color: #A8765F; 
}
</style>
