<template>
  <div class="bg-container" style="margin: 40px auto; width: 100%;">
    <div v-if="orders.length > 0" v-for="order in orders" :key="order.id" class="order-summary" style="margin: 40px;">
      <div class="px-6 py-4 bg-gray-800 text-white flex items-center justify-between rounded-t-lg">
        <h2 class="text-base font-semibold">{{ order.orderDate }} / {{ order.id }}</h2>
        <button class="text-xs review-button">Review</button>
      </div>

      <div v-if="order.orderPosition.length === 0" class="p-3 text-center text-gray-500">
        No products in the order
      </div>

      <div v-else class="divide-y divide-gray-300">
        <div
          v-for="product in order.orderPosition"
          :key="product.id"
          class="p-3 hover:bg-gray-50 transition duration-150 ease-in-out flex justify-between"
        >
          <div>
            <h3 class="text-sm font-medium text-gray-900">{{ product.coffee.name }}</h3>
            <div class="mt-1 text-xs text-gray-500">
              <p>Price: ${{ product.price.toFixed(2) }}</p>
              <p>Quantity: {{ product.quantity }}</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-sm font-semibold text-gray-900">
              ${{ (product.price * product.quantity).toFixed(2) }}
            </p>
          </div>
        </div>

        <div class="p-3 bg-gray-50">
          <div class="flex justify-between items-center">
            <p class="text-base font-semibold text-gray-900">Total</p>
            <p class="text-lg font-bold text-gray-900">${{ calculateTotal(order.orderPosition) }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <p>No orders found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import axios from "axios";

const userStore = useUserStore();
const orders = ref([]);

const calculateTotal = (products) => {
  return products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
};

async function fetchOrders() {
  try {
    const userId = userStore.user?.id;

    if (!userId) {
      console.error("No user is logged in.");
      return;
    }

    const response = await axios.get(`/api/orders?userId=${userId}`);

    orders.value = response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    orders.value = [];
  }
}

onMounted(() => {
  fetchOrders();
});
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}
.bg-gray-100 {
  background-color: #f7fafc;
}
.bg-gray-800 {
  background-color: #1e160d;
}
.text-white {
  color: #fff;
}
.text-gray-500 {
  color: #a0aec0;
}
.text-gray-900 {
  color: #1a202c;
}
.bg-white {
  background-color: #fff;
}
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
}
.rounded-lg {
  border-radius: 0.5rem;
}
.overflow-hidden {
  overflow: hidden;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.p-3 {
  padding: 0.75rem;
}
.hover\:bg-gray-50:hover {
  background-color: #f9fafb;
}
.transition {
  transition: all 0.2s ease-in-out;
}
.duration-150 {
  transition-duration: 150ms;
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.justify-between {
  justify-content: space-between;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.font-semibold {
  font-weight: 600;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.font-bold {
  font-weight: 700;
}
.bg-gray-300 {
  background-color: #e2e8f0;
}
.order-summary {
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #fff;
}
.bg-container {
  background-color: rgb(212, 205, 205);
  padding: 5px;
  border-radius: 12px;
}
.divide-gray-300 > :not(:last-child) {
  border-bottom: 1px solid #d1d5db;
}
.rounded-t-lg {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.review-button {
  background-color: #735340;
  color: white;
  border: none;
  padding: 2px 6px;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
}
.review-button:hover {
  background-color: #a8865f;
}
</style>
