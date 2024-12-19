<template>
  <div class="background-container">
    <div class="container mt-5">
      <!-- Header Section -->
      <div class="header-section mb-4 p-3 text-white">
        <h1 class="text-center mb-3">Manage Coffee</h1>
        <div>
          <!-- Search -->
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search for coffee name ..."
            class="form-control mb-3"
          />
          <!-- Add Product Button -->
          <router-link to="/AddProduct" class="btn btn-success">
            Add Coffee
          </router-link>
        </div>
      </div>

      <!-- Table -->
      <div class="table-responsive-wrapper">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Bean Variety</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="coffee in filteredCoffees" :key="coffee.id">
              <td>{{ coffee.id }}</td>
              <td>{{ coffee.name }}</td>
              <td>{{ coffee.description }}</td>
              <td>${{ coffee.price.toFixed(2) }}</td>
              <td>{{ coffee.beanType }}</td>
              <td>
                <router-link :to="`/coffee/${coffee.id}`" class="btn btn-secondary view-more-btn text-white text-decoration-none">
                  <i class="fas fa-eye me-2"></i> View More
                </router-link>
                <router-link :to="`/EditProduct/${coffee.id}`" class="btn btn-primary btn-sm me-2">
                  Edit
                </router-link>
                <button
                  class="btn btn-danger btn-sm"
                  @click="deleteCoffee(coffee.id)"
                >
                  Delete
                </button>
              </td>
            </tr>
            <!-- No data -->
            <tr v-if="filteredCoffees.length === 0">
              <td colspan="6" class="text-center">No coffees match your search.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted, computed } from "vue";

export default {
  name: "ManageCoffee",
  setup() {
    const coffees = ref([]);
    const searchQuery = ref("");

    const fetchCoffees = async () => {
      try {
        const response = await axios.get("/Coffee");
        coffees.value = response.data;
      } catch (error) {
        console.error("Error fetching coffees:", error);
      }
    };

    const deleteCoffee = async (id) => {
      try {
        await axios.delete(`/Coffee/${id}`);
        coffees.value = coffees.value.filter((coffee) => coffee.id !== id);
      } catch (error) {
        console.error("Error deleting coffee:", error);
      }
    };

    const filteredCoffees = computed(() => {
      return coffees.value.filter((coffee) =>
        coffee.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    onMounted(() => {
      fetchCoffees();
    });

    return {
      coffees,
      searchQuery,
      deleteCoffee,
      filteredCoffees,
    };
  },
};
</script>

<style scoped>
body {
  background-color: #eee;
}

.background-container {
  background-color: rgb(212, 205, 205);
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 20px;
}

.container {
  max-width: 1200px;
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

.btn-success {
  background-color: #A8865F;
  border: none;
}

.btn-success:hover {
  background-color: #A8765F;
}

.btn {
  margin-right: 5px;
  border-radius: 10px;
}

.pagination-container {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}

.pagination .page-link {
  color: #735340;
}

.pagination .page-item.active .page-link {
  background-color: #a8865f;
  border-color: #a8865f;
}

.btn-secondary {
  background-color: #735340;
}
</style>
