<template>
  <section class="h-100 h-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card">
            <div class="card-body p-4">
              <div class="row">
                <!-- Shopping Cart Section -->
                <div class="col-lg-7">
                  <h5 class="mb-3">
                    <router-link to="/" class="text-body continue-shopping-button">
                      <i class="fas fa-long-arrow-alt-left me-2"></i> Continue shopping
                    </router-link>
                  </h5>
                  <hr>

                  <div class="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <p class="mb-1">Shopping cart</p>
                      <p class="mb-0">You have {{ cartItems.length }} items in your cart</p>
                    </div>
                  </div>

                  <!-- Cart Items -->
                  <div v-for="(item, index) in cartItems" :key="index" class="card mb-3">
                    <div class="card-body">
                      <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                        <div class="d-flex flex-row align-items-center">
                          <img :src="item.image" class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                          <div class="ms-3">
                            <h5>{{ item.name }}</h5>
                            <p class="small mb-0">{{ item.description }}</p>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mt-3 mt-md-0">
                          <!-- Quantity Adjustment -->
                          <input
                            type="number"
                            v-model.number="item.quantity"
                            min="1"
                            class="form-control form-control-sm"
                            style="width: 60px; text-align: center;"
                          />
                          <!-- Price -->
                          <div style="width: 80px; margin-left: 15px;">
                            <h5 class="mb-0">${{ item.price * item.quantity }}</h5>
                          </div>
                          <!-- Remove Item -->
                          <button @click="removeItem(index)" class="btn-remove ms-3">
                            <i class="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Checkout Section -->
                <div class="col-lg-5">
                  <div class="card bg-primary text-white rounded-3">
                    <div class="card-body d-flex flex-column">
                      <div class="d-flex justify-content-between align-items-center mb-4">
                        <h5 class="mb-0">Card details</h5>
                      </div>

                      <!-- Payment Form -->
                      <form @submit.prevent="checkout">
                        <div class="form-outline form-white mb-4">
                          <input type="text" id="typeName" class="form-control form-control-lg"
                                 placeholder="Cardholder's Name" v-model="payment.cardholderName" required />
                          <label class="form-label" for="typeName">Cardholder's Name</label>
                        </div>

                        <div class="form-outline form-white mb-4">
                          <input type="text" id="typeText" class="form-control form-control-lg"
                                 placeholder="1234 5678 9012 3457" minlength="16" maxlength="19"
                                 v-model="payment.cardNumber" required />
                          <label class="form-label" for="typeText">Card Number</label>
                        </div>

                        <div class="d-flex justify-content-between">
                          <p class="mb-2">Subtotal</p>
                          <p class="mb-2">${{ subtotal }}</p>
                        </div>

                        <div class="d-flex justify-content-between">
                          <p class="mb-2">Shipping</p>
                          <p class="mb-2">$2.00</p>
                        </div>

                        <div class="d-flex justify-content-between mb-4">
                          <p class="mb-2">Total (Incl. taxes)</p>
                          <p class="mb-2">${{ total }}</p>
                        </div>

                        <button type="submit" class="btn btn-lg checkout-button mt-4 align-self-center">
                          <div class="d-flex justify-content-between align-items-center">
                            <span>${{ total }}</span>
                            <span>&nbsp;Checkout&nbsp;<i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                          </div>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

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
import { useShoppingCartStore } from "@/stores/shoppingCart";

const shoppingCartStore = useShoppingCartStore();

// Zugriff auf die Warenkorb-Daten
const cartItems = computed(() => shoppingCartStore.cart);

// Payment form data
const payment = ref({
  cardholderName: "",
  cardNumber: "",
});

// Subtotal and total calculations
const subtotal = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);
const total = computed(() => subtotal.value + 2);

// Remove item function
function removeItem(index) {
  shoppingCartStore.cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(shoppingCartStore.cart));
}

// Checkout function
function checkout() {
  alert("Checkout successful!");
  console.log("Payment Info:", payment.value);
  console.log("Cart Items:", cartItems.value);
}
</script>

<style scoped>
@media (min-width: 1025px) {
  .h-custom {
    height: 100vh !important;
  }
}

.h-custom {
  background-color: rgb(212, 205, 205);
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
}

.card {
  border: none;
}

.form-outline input {
  background-color: white;
}

.bg-primary {
  background-color: #735340 !important;
}

.checkout-button {
  background-color: #A8865F;
  color: white;
  border: none;
  width: 250px;
  padding: 10px;
  text-align: center;
}

.checkout-button:hover {
  background-color: #A8765F;
}

.continue-shopping-button {
background-color: #1e160d; 
color: white !important;
text-decoration: none;
padding: 10px 15px;
display: inline-block;
width: 250px;
text-align: center;
border-radius: 5px;
}

.continue-shopping-button:hover {
background-color: #5a6268;
}

@media (max-width: 768px) {
  .checkout-button {
    width: 100%;
  }

  .card-body .d-flex {
    flex-direction: column !important;
    align-items: flex-start !important;
  }

  .card-body .d-flex.flex-row.align-items-center {
    flex-direction: row !important;
    justify-content: flex-start !important;
  }

  .card-body .ms-md-3 {
    margin-left: 0 !important;
    margin-top: 10px !important;
  }

  .btn-remove {
    margin-top: 10px;
  }
}
</style>


