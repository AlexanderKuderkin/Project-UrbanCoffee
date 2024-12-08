<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Manage Coffees</h1>

    <!-- Add Product Button mit Router-Link -->
    <div class="mb-3 text-end">
      <router-link to="/AddProduct" class="btn btn-success">
        <i class="fas fa-plus"></i> Add Product
      </router-link>
    </div>

    <!-- Tabelle mit table-responsive-wrapper -->
    <div class="table-responsive-wrapper">
      <table class="table table-striped table-bordered">
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
          <!-- Dynamische Zeilen -->
          <tr v-for="coffee in coffees" :key="coffee.id">
            <td>{{ coffee.id }}</td>
            <td>{{ coffee.name }}</td>
            <td>{{ coffee.description }}</td>
            <td>${{ coffee.price.toFixed(2) }}</td>
            <td>{{ coffee.beanType }}</td>
            <td>
  <button @click="deleteCoffee(coffee.id)" class="btn btn-danger btn-sm">
    Delete
  </button>
  <router-link :to="`/ViewCoffee/${coffee.id}`" class="btn btn-primary btn-sm">
    View
  </router-link>
</td>

          </tr>

          <!-- Keine Kaffees vorhanden -->
          <tr v-if="coffees.length === 0">
            <td colspan="6" class="text-center">
              No coffees available at the moment.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ManageCoffee",
  data() {
    return {
      coffees: [],
    };
  },
  methods: {
    fetchCoffees() {
      axios
        .get("http://localhost:1337/Coffee")
        .then((response) => {
          this.coffees = response.data;
        })
        .catch((error) => console.error("Error fetching coffees:", error));
    },
    deleteCoffee(id) {
      if (confirm("Are you sure you want to delete this coffee?")) {
        axios
          .delete(`http://localhost:1337/Coffee/${id}`)
          .then(() => {
            this.coffees = this.coffees.filter((coffee) => coffee.id !== id);
            alert("Coffee deleted successfully!");
          })
          .catch((error) => console.error("Error deleting coffee:", error));
      }
    },
  },
  mounted() {
    this.fetchCoffees();
  },
};

</script>

<style scoped>
.table-responsive-wrapper {
  overflow-x: auto; /* Tabelle scrollbar machen bei kleinen Bildschirmen */
}

.table th,
.table td {
  text-align: center;
  vertical-align: middle;
}

.table thead {
  background-color: #343a40;
  color: #fff;
}

.btn {
  margin: 0 5px;
}

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #545b62;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}
</style>
