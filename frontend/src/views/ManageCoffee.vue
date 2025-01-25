<template>
  <div class="background-container">
    <div v-if="toastMessage" class="toast" :class="[toastType, { show: toastMessage }]">
      {{ toastMessage }}
    </div>
    <div class="container mt-5">
      <!-- Header Section -->
      <div class="header-section mb-4 p-3 text-white">
        <h1 class="text-center mb-3">Manage Coffee</h1>
        <!-- Search Bar -->
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search for coffee name ..."
          class="form-control mb-3"
        />
        <!-- Buttons -->
        <div class="button-group d-flex align-items-center">
          <router-link to="/AddProduct" class="btn btn-add-coffee">
            Add Coffee
          </router-link>
          <button class="btn btn-add-category" onclick="window.dialog.showModal();">Add Category</button>
          <button class="btn btn-view-categories" @click="toggleViewCategories">View Categories</button>
        </div>
      </div>

      <!-- Add Category Modal -->
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
            <button type="submit" class="btn btn-save">Save</button>
            <button
              type="button"
              class="btn btn-cancel ms-2"
              @click="closeDialog"
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>

      <dialog id="categoriesDialog">
        <h2>Categories</h2>
        <input
          type="text"
          v-model="categorySearchQuery"
          placeholder="Search for category name ..."
          class="form-control mb-3"
        />
        <div class="table-responsive">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Category Info</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="category in filteredCategories"
                :key="category.id"
              >
                <td>
                  <div v-if="!category.isEditing">
                    <strong>{{ category.name }}</strong><br />
                    <span>{{ category.description }}</span>
                  </div>
                  <div v-else>
                    <input
                      type="text"
                      v-model="category.editName"
                      placeholder="Edit name"
                      class="form-control mb-2"
                    />
                    <textarea
                      v-model="category.editDescription"
                      placeholder="Edit description"
                      class="form-control"
                    ></textarea>
                  </div>
                </td>

                <td class="d-flex flex-column gap-2">
                  <button
                    class="btn btn-delete-category"
                    @click="deleteCategory(category.id)"
                  >
                    Delete
                  </button>
                  <button
                    class="btn btn-edit-category"
                    v-if="!category.isEditing"
                    @click="enableEditCategory(category)"
                  >
                    Edit
                  </button>
                  <button
                    class="btn btn-save-category"
                    v-if="category.isEditing"
                    @click="saveEditCategory(category)"
                  >
                    Save
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          type="button"
          class="btn btn-close-category mt-3"
          @click="closeCategoriesDialog"
        >
          Close
        </button>
      </dialog>

      <!-- Coffee Table -->
      <div class="table-responsive-wrapper">
        <table class="table table-bordered table-hover table-auto">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="coffee in filteredCoffees" :key="coffee.id">
              <td>{{ coffee.id }}</td>
              <td>{{ coffee.name }}</td>
              <td>{{ coffee.description }}</td>
              <td>${{ coffee.price.toFixed(2) }}</td>
              <td class="d-flex gap-2 align-items-center">
                <router-link :to="`/coffee/${coffee.id}`" class="btn btn-view-more">
                  View More
                </router-link>
                <router-link :to="`/EditProduct/${coffee.id}`" class="btn btn-edit">
                  Edit
                </router-link>
                <button class="btn btn-delete" @click="deleteCoffee(coffee.id)">
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

    const toastMessage = ref(null);
    const toastType = ref("");

    const showToast = (message, type = "success") => {
      toastMessage.value = message;
      toastType.value = type;

      setTimeout(() => {
        toastMessage.value = null;
        toastType.value = "";
      }, 3000); 
    };

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

        showToast("Category created successfully!", "success");
      } catch (error) {
        console.error("Error creating category:", error);
        showToast("Failed to create category.", "error");
      }
    };

    const deleteCategory = async (id) => {
      try {
        await axios.delete(`/Category/${id}`);
        categories.value = categories.value.filter(
          (category) => category.id !== id
        );
        showToast("Category deleted successfully!", "success");
      } catch (error) {
        console.error("Error deleting category:", error);
        showToast("Failed to delete category.", "error");
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
        showToast("Category updated successfully!", "success");
      } catch (error) {
        console.error("Error updating category:", error);
        showToast("Failed to update category.", "error");
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
        showToast("Coffee deleted successfully!", "success");
      } catch (error) {
        console.error("Error deleting coffee:", error);
        showToast("Failed to delete coffee.", "error");
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
      toastMessage,
      toastType,
    };
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .button-group {
    flex-direction: column; 
    gap: 12px;
  }
}

.background-container {
  background-color: rgb(212, 205, 205);
  margin: 20px 0;
  padding: 20px;
  border-radius: 20px;
}

.header-section {
  background-color: #735340;
  border-radius: 10px;
  text-align: center;
}

.button-group {
  display: flex;
  gap: 8px;
}

.btn-add-coffee,
.btn-add-category,
.btn-view-categories {
  background-color: #A8865F;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 15px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  height: 40px;
  width: 145px; 
}

.btn-add-coffee:hover,
.btn-add-category:hover,
.btn-view-categories:hover {
  background-color: #A8765F;
}

.btn-view-categories {
  background-color: #1e160d;
}

.btn-view-categories:hover {
  background-color: #5a6268;
}

.btn-view-more,
.btn-edit,
.btn-delete {
  background-color: #A8865F;
  color: white;
  border-radius: 15px;
  padding: 8px 16px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-view-more {
  width: 120px;
  margin: 0;
}

.btn-edit,
.btn-delete {
  width: 80px;
}

.btn-delete {
  background-color: #1e160d;
}

.btn-delete:hover {
  background-color: #5a6268;
}

.btn-view-more:hover,
.btn-edit:hover {
  background-color: #A8765F;
}

.table-responsive-wrapper {
  margin: 40px 0; 
  overflow-x: auto;
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 10px;
}

.table {
  table-layout: auto;
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  white-space: nowrap;
  text-align: left;
  vertical-align: middle; 
}

.btn-save,
.btn-cancel {
  border: none;
  border-radius: 15px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 10px 20px;
}

.btn-save {
  background-color: #A8865F;
  color: white;
}

.btn-save:hover {
  background-color: #A8765F;
}

.btn-cancel {
  background-color: #1e160d;
  color: white;
}

.btn-cancel:hover {
  background-color: #5a6268;
}

.btn-delete-category,
.btn-close-category {
  background-color: #1e160d; 
  color: white;
  border: none;
  border-radius: 15px; 
  font-size: 14px;
  cursor: pointer;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
}

.btn-delete-category:hover,
.btn-close-category:hover {
  background-color: #5a6268; 
}

.btn-edit-category {
  background-color: #A8865F; 
  color: white;
  border: none;
  border-radius: 15px; 
  font-size: 14px;
  cursor: pointer;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
}

.btn-edit-category:hover {
  background-color: #A8765F; 
}

dialog {
  border: none; 
  border-radius: 20px; 
  overflow: hidden; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); 
  padding: 20px; 
  background-color: white; 
}
</style>