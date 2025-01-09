<template>
  
  <div class="bg-container" style="margin: 20px 0;">
    <div class="order-summary">
      <div class="px-6 py-4 bg-gray-800 text-white flex items-center justify-between rounded-t-2xl">
        <h2 class="text-xl font-semibold">Order Summary</h2>
        <button class="text-2xl" style="background-color: #735340; color: white; border: none; padding: 5px 10px; border-radius: 5px;">Review</button>
      </div>

      <div v-if="products.length === 0" class="p-6 text-center text-gray-500">
        No products in the order
      </div>

      <div v-else class="divide-y divide-gray-300">
        <div
          v-for="product in products"
          :key="product.id"
          class="p-6 hover:bg-gray-50 transition duration-150 ease-in-out border-b border-gray-300 flex justify-between"
        >
          <div>
            <h3 class="text-lg font-medium text-gray-900">{{ product.name }}</h3>
            <div class="mt-1 text-sm text-gray-500">
              <p>Price: ${{ product.price.toFixed(2) }}</p>
              <p>Quantity: {{ product.quantity }}</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-lg font-semibold text-gray-900">
              ${{ (product.price * product.quantity).toFixed(2) }}
            </p>
          </div>
        </div>

        <div class="p-6 bg-gray-50">
          <div class="flex justify-between items-center">
            <p class="text-xl font-semibold text-gray-900">Total</p>
            <p class="text-2xl font-bold text-gray-900">${{ calculateTotal() }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
name: "OrderSummary",
setup() {
  const products = ref([
    {
      id: 1,
      name: "Premium Leather Wallet",
      price: 79.99,
      quantity: 2,
      image: "",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 199.99,
      quantity: 1,
      image: "",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 299.99,
      quantity: 1,
      image: "",
    },
  ]);

  const calculateTotal = () => {
    return products.value
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  };

  return {
    products,
    calculateTotal,
  };
},
};
</script>

<style>
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
.p-6 {
padding: 1.5rem;
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
.text-xl {
font-size: 1.25rem;
line-height: 1.75rem;
}
.font-semibold {
font-weight: 600;
}
.text-2xl {
font-size: 1.5rem;
line-height: 2rem;
}
.font-bold {
font-weight: 700;
}
.bg-gray-300 {
background-color: #e2e8f0;
}
.order-summary {
border: 1px solid #ccc;
border-radius: 20px;
background-color: #fff;
margin: 40px 40px;
}
.bg-container {
background-color: rgb(212, 205, 205);
padding: 20px;
border-radius: 20px;
margin-bottom: 20px;
}
.divide-gray-300 > :not(:last-child) {
border-bottom: 1px solid #d1d5db;
}
.rounded-t-2xl {
border-top-left-radius: 20px;
border-top-right-radius: 20px;
}
</style>
