<template>
  <div class="outer-container">
    <div class="background-container">
      <div v-if="toastMessage" class="toast" :class="[toastType, { show: toastMessage }]">
        {{ toastMessage }}
      </div>
      <div class="container mt-5">
        <div class="header-section text-white mb-4 p-3 mx-auto">
          <h1 class="text-center mb-0">Edit Product</h1>
        </div>

        <form @submit.prevent="updateProduct">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              id="name"
              v-model="product.name"
              class="form-control"
              required
            />
          </div>

          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea
              id="description"
              v-model="product.description"
              class="form-control"
              rows="3"
              required
            ></textarea>
          </div>

          <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input
              type="number"
              id="price"
              v-model.number="product.price"
              class="form-control"
              step="0.01"
              required
            />
          </div>

          <div class="mb-3">
            <label for="caffeineContent" class="form-label">Caffeine Content</label>
            <input
              type="number"
              id="caffeineContent"
              v-model.number="product.caffeineContent"
              class="form-control"
              step="0.01"
              required
            />
          </div>

          <div class="mb-3">
            <label for="brand" class="form-label">Brand</label>
            <select id="brand" v-model="product.brand" class="form-select" required>
              <option v-for="brand in brands" :key="brand" :value="brand">
                {{ brand }}
              </option>
            </select>
          </div>

          <div class="mb-3">
            <label for="roastDegree" class="form-label">Roast Degree</label>
            <select id="roastDegree" v-model="product.roastDegree" class="form-select" required>
              <option v-for="degree in roastDegrees" :key="degree" :value="degree">
                {{ degree }}
              </option>
            </select>
          </div>

          <div class="mb-3">
            <label for="beanType" class="form-label">Bean Type</label>
            <select id="beanType" v-model="product.beanType" class="form-select" required>
              <option v-for="bean in beanTypes" :key="bean" :value="bean">
                {{ bean }}
              </option>
            </select>
          </div>

          <div class="mb-3">
            <label class="form-label">Certificates</label>
            <div v-for="certificate in certificatesOptions" :key="certificate" class="form-check">
              <input
                type="checkbox"
                :id="certificate"
                :value="certificate"
                v-model="product.certificates"
                class="form-check-input"
              />
              <label :for="certificate" class="form-check-label">{{ certificate }}</label>
            </div>
          </div>

          <div class="mb-3">
            <label for="origin" class="form-label">Origin</label>
            <select id="origin" v-model="product.origin" class="form-select" required>
              <option v-for="origin in origins" :key="origin" :value="origin">
                {{ origin }}
              </option>
            </select>
          </div>

          <div class="mb-3">
            <label for="grindType" class="form-label">Grind Type</label>
            <select id="grindType" v-model="product.grindType" class="form-select" required>
              <option v-for="grind in grindTypes" :key="grind" :value="grind">
                {{ grind }}
              </option>
            </select>
          </div>

          <div class="mb-3">
            <label for="category" class="form-label">Category</label>
            <select id="category" v-model="product.category" class="form-select" required>
              <option v-for="category in categories" :key="category.id" :value="category.id">
                {{ category.name }}
              </option>
            </select>
          </div>

          <button
            type="submit"
            class="btn btn-update-product"
            :disabled="!isProductChanged"
          >
            Update Product
          </button>
          <RouterLink to="/ManageCoffee" type="submit" class="btn btn-add-product">Back</RouterLink>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "EditProduct",
  setup() {
    const route = useRoute();
    const product = ref({});
    const originalProduct = ref({});
    const categories = ref([]);
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

    const brands = ["Tchibo", "Jacobs", "Mellitta", "Eduscho"];
    const roastDegrees = ["Light roast", "Medium roast", "Medium-dark roast", "Dark roast"];
    const beanTypes = ["Arabica", "Robusta", "Lieberica", "Excelsa"];
    const certificatesOptions = [
      "UTZ Certified",
      "Fair Trade Certified",
      "Rainforest Alliance Certified",
      "Direct Trade",
      "Bird-Friendly",
    ];
    const origins = ["Europe", "Asia", "Africa", "North-America", "South-America", "Australia"];
    const grindTypes = ["Whole bean", "Coarse", "Medium-coarse", "Medium", "Fine", "Extra fine"];

    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/Coffee/${route.params.id}`);
        product.value = {
          ...response.data,
          category: response.data.category ? response.data.category.id : null,
        };
        originalProduct.value = JSON.parse(JSON.stringify(product.value));
      } catch (error) {
        console.error("Error fetching product:", error);
        showToast("Failed to fetch product details.", "error");
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get("/Category");
        categories.value = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
        showToast("Failed to fetch categories.", "error");
      }
    };

    const updateProduct = async () => {
      try {
        await axios.put(`/Coffee/${route.params.id}`, {
          ...product.value,
          category: product.value.category,
        });
        showToast("Product updated successfully!", "success");
        originalProduct.value = JSON.parse(JSON.stringify(product.value));
      } catch (error) {
        console.error("Error updating product:", error);
        showToast("Failed to update product.", "error");
      }
    };

    const isProductChanged = computed(() => {
      return JSON.stringify(product.value) !== JSON.stringify(originalProduct.value);
    });

    onMounted(() => {
      fetchProduct();
      fetchCategories();
    });

    return {
      product,
      originalProduct,
      categories,
      brands,
      roastDegrees,
      beanTypes,
      certificatesOptions,
      origins,
      grindTypes,
      updateProduct,
      isProductChanged,
      toastMessage,
      toastType,
    };
  },
};
</script>

<style scoped>
.outer-container {
  background-color: rgb(212, 205, 205);
  border-radius: 20px;
  margin: 20px 0;
  padding: 20px;
}

.background-container {
  background-color: #735340;
  width: 500px;
  max-width: 90%;
  margin: 40px auto;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.header-section {
  background-color: #735340;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
}

form {
  max-width: 600px;
  margin: auto;
}

label {
  font-weight: bold;
  color: white;
}

button.btn-update-product {
  background-color: #A8865F;
  color: white;
  width: 250px;
  max-width: 90%;
  border: none;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  margin: 0 auto;
  display: block;
}

button.btn-update-product:hover {
  background-color: #A8765F;
}
</style>
