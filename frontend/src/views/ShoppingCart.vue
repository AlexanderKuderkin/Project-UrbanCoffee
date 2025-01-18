<template>
  <section class="h-100">
    <div v-if="toastMessage" class="toast" :class="[toastType, { show: toastMessage }]">
      {{ toastMessage }}
    </div>
    <!-- Neuer Wrapper mit Hintergrundfarbe -->
    <div class="custom-wrapper">
      <div class="card">
        <div class="card-body p-4 mt-4">
          <div class="row">
            <!-- Shopping Cart Section -->
            <div class="col-lg-7">
              <h5 class="mb-3">
                <router-link to="/Coffee" class="text-body continue-shopping-button">
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
                        <h5 class="mb-0">${{ (item.price * item.quantity).toFixed(2) }}</h5>
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
                  <!-- Payment Form -->
                  <form @submit.prevent="checkout">
                    <div class="d-flex justify-content-between">
                      <p class="mb-2">Subtotal</p>
                      <p class="mb-2">${{ subtotal.toFixed(2) }}</p>
                    </div>

                    <div class="d-flex justify-content-between">
                      <p class="mb-2">Shipping</p>
                      <p class="mb-2">$2.00</p>
                    </div>

                    <div class="d-flex justify-content-between mb-4">
                      <p class="mb-2">Total (Incl. taxes)</p>
                      <p class="mb-2">${{ total.toFixed(2) }}</p>
                    </div>

                    <button type="submit" class="btn btn-lg checkout-button mt-4 align-self-center" :disabled="cartItems.length === 0">
                      <div class="d-flex justify-content-between align-items-center">
                        <span>${{ total.toFixed(2) }}</span>
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
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useUserStore } from "@/stores/user";
import { useShoppingCartStore } from "@/stores/shoppingCart";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();
const shoppingCartStore = useShoppingCartStore();

const toastMessage = ref(null);
const toastType = ref("");

function showToast(message, type = "success") {
  toastMessage.value = message;
  toastType.value = type;

  setTimeout(() => {
    toastMessage.value = null;
    toastType.value = "";
  }, 3000); 
};

async function checkout() {
  try {
    const userId = userStore.user?.id;

    if (!userId) {
        showToast("You need to log in to proceed with the checkout.","error");
      router.push("/Login");
      return;
    }

    const payload = {
      userId: userId,
      items: shoppingCartStore.cart.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount: shoppingCartStore.cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    };

    const response = await axios.post("/api/order/createOrder", payload);

    if (response.status === 200) {
        showToast("Order placed successfully!","success");
      shoppingCartStore.clearCart();
    } else {
        showToast("Failed to place order.","error");
    }
  } catch (error) {
    console.error("Checkout error:", error);
    showToast("An error occurred while placing the order.","error");
  }
}

const cartItems = computed(() => shoppingCartStore.cart);
const subtotal = computed(() => cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0));
const total = computed(() => subtotal.value + 2);

function removeItem(index) {
  shoppingCartStore.cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(shoppingCartStore.cart));
}
</script>

<style scoped>
.custom-wrapper {
  background-color: rgb(212, 205, 205);
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 10px;
}

.card {
  border: none;
  margin: 40px 40px;
}

.card-body {
  margin-top: 20px;
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
  border-radius: 15px;
}

.continue-shopping-button:hover {
  background-color: #5a6268;
}
</style>
