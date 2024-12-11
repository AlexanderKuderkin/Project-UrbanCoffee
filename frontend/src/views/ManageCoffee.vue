<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Manage Coffee</h1>

    <!-- Search -->
    <div class="mb-3">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for coffee name ..."
        class="form-control"
      />
    </div>

    <!-- Add Product Button -->
    <div class="d-flex justify-content-end mb-3">
      <router-link to="/AddProduct" class="btn btn-success">
        Add Coffee
      </router-link>
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
        const response = await axios.get("http://localhost:1337/Coffee");
        coffees.value = response.data;
      } catch (error) {
        console.error("Error fetching coffees:", error);
      }
    };

    const deleteCoffee = async (id) => {
      try {
        await axios.delete(`http://localhost:1337/Coffee/${id}`);
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

.container {
  max-width: 1200px;
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
  background-color: #28a745;
  border: none;
}

.btn-success:hover {
  background-color: #218838;
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
.btn-secondary{
  background-color: #735340;
}
</style>
