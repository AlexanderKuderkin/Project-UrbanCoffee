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
          <button class="primary" onclick="window.dialog.showModal();">Add category</button>
          <button class="btn btn-info" @click="toggleViewCategories">View Categories</button>
          <dialog id="dialog">
            <h2>Create a new category</h2>
            <form @submit.prevent="createCategory">
              <div class="form-group">
                <label for="categoryName">Name:</label>
                <input
                  type="text"
                  id="categoryName"
                  v-model="categoryName"
                  required
                  class="form-control"
                />
              </div>
              <div class="form-group mt-3">
                <label for="categoryDescription">Description:</label>
                <textarea
                  id="categoryDescription"
                  v-model="categoryDescription"
                  class="form-control"
                  rows="3"
                ></textarea>
              </div>
              <div class="form-actions mt-3">
                <button type="submit" class="btn btn-success">Save</button>
                <button
                  type="button"
                  class="btn btn-secondary ms-2"
                  @click="closeDialog"
                >
                  Cancel
                </button>
              </div>
            </form>
          </dialog>
        </div>
      </div>

      <!-- View Categories Modal -->
      <dialog id="categoriesDialog">
        <h2>Categories</h2>
        <input
          type="text"
          v-model="categorySearchQuery"
          placeholder="Search for category name ..."
          class="form-control mb-3"
        />
        <ul class="list-group">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            v-for="category in filteredCategories"
            :key="category.id"
          >
            <div v-if="!category.isEditing">
              <span>{{ category.name }}</span>
              <span class="ms-2">{{ category.description }}</span>
            </div>
            <div v-else>
              <input
                type="text"
                v-model="category.editName"
                placeholder="Edit name"
                class="form-control me-2"
              />
              <input
                type="text"
                v-model="category.editDescription"
                placeholder="Edit description"
                class="form-control"
              />
            </div>
            <button
              class="btn btn-danger btn-sm"
              @click="deleteCategory(category.id)"
            >
              Delete
            </button>
            <button
              class="btn btn-primary btn-sm"
              v-if="!category.isEditing"
              @click="enableEditCategory(category)"
            >
              Edit
            </button>
            <button
              class="btn btn-success btn-sm"
              v-if="category.isEditing"
              @click="saveEditCategory(category)"
            >
              Save
            </button>
          </li>
        </ul>
        <button
          type="button"
          class="btn btn-secondary mt-3"
          @click="closeCategoriesDialog"
        >
          Close
        </button>
      </dialog>

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
    const categories = ref([]);
    const searchQuery = ref("");
    const categorySearchQuery = ref("");

    const categoryName = ref("");
    const categoryDescription = ref("");

    const fetchCoffees = async () => {
      try {
        const response = await axios.get("/Coffee");
        coffees.value = response.data;
      } catch (error) {
        console.error("Error fetching coffees:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get("/Category");
        categories.value = response.data.map((category) => ({
          ...category,
          isEditing: false,
          editName: category.name,
          editDescription: category.description,
        }));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const createCategory = async () => {
      try {
        const newCategory = {
          name: categoryName.value,
          description: categoryDescription.value,
        };

        await axios.post("/Category", newCategory);

        categoryName.value = "";
        categoryDescription.value = "";
        closeDialog();
        fetchCategories();

        alert("Category created successfully!");
      } catch (error) {
        console.error("Error creating category:", error);
        alert("Failed to create category.");
      }
    };

    const deleteCategory = async (id) => {
      try {
        await axios.delete(`/Category/${id}`);
        categories.value = categories.value.filter(
          (category) => category.id !== id
        );
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    };

    const enableEditCategory = (category) => {
      category.isEditing = true;
    };

    const saveEditCategory = async (category) => {
      try {
        await axios.put(`/Category/${category.id}`, {
          name: category.editName,
          description: category.editDescription,
        });
        category.name = category.editName;
        category.description = category.editDescription;
        category.isEditing = false;
        alert("Category updated successfully!");
      } catch (error) {
        console.error("Error updating category:", error);
        alert("Failed to update category.");
      }
    };

    const closeDialog = () => {
      document.getElementById("dialog").close();
    };

    const toggleViewCategories = () => {
      fetchCategories();
      document.getElementById("categoriesDialog").showModal();
    };

    const closeCategoriesDialog = () => {
      document.getElementById("categoriesDialog").close();
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

    const filteredCategories = computed(() => {
      return categories.value.filter((category) =>
        category.name.toLowerCase().includes(categorySearchQuery.value.toLowerCase())
      );
    });

    onMounted(() => {
      fetchCoffees();
      fetchCategories();
    });

    return {
      coffees,
      categories,
      searchQuery,
      categorySearchQuery,
      deleteCoffee,
      deleteCategory,
      enableEditCategory,
      saveEditCategory,
      filteredCoffees,
      filteredCategories,
      categoryName,
      categoryDescription,
      createCategory,
      closeDialog,
      toggleViewCategories,
      closeCategoriesDialog,
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

dialog {
  border: none;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-width: 90%;
  background-color: white;
  text-align: center;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.4);
}

.form-group {
  margin-bottom: 15px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}
</style>
