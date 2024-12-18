<template>
    <div class="container mt-5">
      <!-- Header Section -->
      <div class="header-section mb-4 p-3 text-white">
        <h1 class="text-center mb-3">Order History</h1>
      </div>
  
      <!-- Order Table -->
      <div class="table-responsive-wrapper">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Date</th>
              <th>Total Price</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.orderNumber">
              <td>{{ order.orderNumber }}</td>
              <td>{{ formatDate(order.date) }}</td>
              <td>${{ order.totalPrice.toFixed(2) }}</td>
              <td>
                <ul>
                  <li v-for="item in order.items" :key="item.id">
                    {{ item.name }} (x{{ item.quantity }})
                  </li>
                </ul>
              </td>
            </tr>
            <!-- No data -->
            <tr v-if="orders.length === 0">
              <td colspan="4" class="text-center">No orders found.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  
  export default {
    name: "OrderHistory",
    setup() {
      const orders = ref([]);
  
      const fetchOrders = async () => {
        try {
          // Simulierte API-Antwort
          const response = await new Promise((resolve) =>
            setTimeout(
              () =>
                resolve([
                  {
                    orderNumber: "12345",
                    date: "2024-12-11T10:30:00",
                    totalPrice: 49.99,
                    items: [
                      { id: 1, name: "Espresso Blend", quantity: 2 },
                      { id: 2, name: "Latte Beans", quantity: 1 },
                    ],
                  },
                  {
                    orderNumber: "12346",
                    date: "2024-12-10T14:20:00",
                    totalPrice: 29.99,
                    items: [
                      { id: 3, name: "Dark Roast", quantity: 1 },
                    ],
                  },
                ]),
              500
            )
          );
  
          orders.value = response;
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      };
  
      const formatDate = (date) => {
        const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
        return new Date(date).toLocaleDateString(undefined, options);
      };
  
      onMounted(() => {
        fetchOrders();
      });
  
      return {
        orders,
        formatDate,
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    background-color: rgb(212, 205, 205);
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  .header-section {
    background-color: #735340;
    border-radius: 10px;
  }
  
  .table-responsive-wrapper {
    overflow-x: auto;
    margin-top: 20px;
    border-radius: 10px;
    background-color: #f5f5f5;
    padding: 10px;
  }
  
  .table {
    min-width: 1000px;
  }
  
  th, td {
    text-align: center;
    vertical-align: middle;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    text-align: left;
  }
  </style>
  