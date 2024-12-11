<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Add New Product</h1>

    <form @submit.prevent="addProduct">

      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          autocomplete="off"
          v-model="newProduct.name"
          class="form-control"
          placeholder="Enter product name"
          required
        />
      </div>

      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          id="description"
          name="description"
          autocomplete="off"
          v-model="newProduct.description"
          class="form-control"
          rows="3"
          placeholder="Enter product description"
          required
        ></textarea>
      </div>

      <div class="mb-3">
        <label for="price" class="form-label">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          autocomplete="off"
          v-model.number="newProduct.price"
          class="form-control"
          placeholder="Enter product price"
          step="0.01"
          required
        />
      </div>

      <div class="mb-3">
        <label for="caffeine" class="form-label">Caffeine Content (mg)</label>
        <input
          type="number"
          id="caffeine"
          name="caffeineContent"
          autocomplete="off"
          v-model.number="newProduct.caffeineContent"
          class="form-control"
          placeholder="Enter caffeine content"
          step="0.01"
          required
        />
      </div>

      <div class="mb-3">
        <label for="brand" class="form-label">Brand</label>
        <select
          id="brand"
          name="brand"
          autocomplete="off"
          v-model="newProduct.brand"
          class="form-select"
          required
        >
          <option disabled value="">Select a brand</option>
          <option v-for="brand in brands" :key="brand" :value="brand">
            {{ brand }}
          </option>
        </select>
      </div>

      <div class="mb-3">
        <label for="roast" class="form-label">Roast Degree</label>
        <select
          id="roast"
          name="roastDegree"
          autocomplete="off"
          v-model="newProduct.roastDegree"
          class="form-select"
          required
        >
          <option disabled value="">Select roast degree</option>
          <option v-for="roast in roasts" :key="roast" :value="roast">
            {{ roast }}
          </option>
        </select>
      </div>

      <div class="mb-3">
        <label for="beanType" class="form-label">Bean Type</label>
        <select
          id="beanType"
          name="beanType"
          autocomplete="off"
          v-model="newProduct.beanType"
          class="form-select"
          required
        >
          <option disabled value="">Select bean type</option>
          <option v-for="bean in beanTypes" :key="bean" :value="bean">
            {{ bean }}
          </option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label">Certificates</label>
        <div
          v-for="cert in certificates"
          :key="cert"
          class="form-check"
        >
          <input
            type="checkbox"
            :id="cert"
            name="certificates"
            :value="cert"
            v-model="newProduct.certificates"
            class="form-check-input"
          />
          <label :for="cert" class="form-check-label">{{ cert }}</label>
        </div>
      </div>

      <div class="mb-3">
        <label for="origin" class="form-label">Origin</label>
        <select
          id="origin"
          name="origin"
          autocomplete="off"
          v-model="newProduct.origin"
          class="form-select"
          required
        >
          <option disabled value="">Select origin</option>
          <option v-for="origin in origins" :key="origin" :value="origin">
            {{ origin }}
          </option>
        </select>
      </div>

      <div class="mb-3">
        <label for="grindType" class="form-label">Grind Type</label>
        <select
          id="grindType"
          name="grindType"
          autocomplete="off"
          v-model="newProduct.grindType"
          class="form-select"
          required
        >
          <option disabled value="">Select grind type</option>
          <option v-for="grind in grindTypes" :key="grind" :value="grind">
            {{ grind }}
          </option>
        </select>
      </div>
      
      <div class="mb-3">
        <label for="category" class="form-label">Category</label>
        <select
          id="category"
          name="category"
          autocomplete="off"
          v-model="newProduct.category"
          class="form-select"
          required
        >
          <option disabled value="">Select Category</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>


      <button type="submit" class="btn btn-success">Add Product</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "AddProduct",
  setup() {
    const newProduct = ref({
      name: "",
      description: "",
      price: null,
      caffeineContent: null,
      brand: "",
      roastDegree: "",
      beanType: "",
      certificates: [],
      origin: "",
      grindType: "",
      category: null,
    });

    const categories = ref([]);
    const brands = ["Tchibo", "Jacobs", "Mellitta", "Eduscho"];
    const roasts = ["Light roast", "Medium roast", "Medium-dark roast", "Dark roast"];
    const beanTypes = ["Arabica", "Robusta", "Lieberica", "Excelsa"];
    const certificates = [
      "UTZ Certified",
      "Fair Trade Certified",
      "Rainforest Alliance Certified",
      "Direct Trade",
      "Bird-Friendly",
    ];
    const origins = ["Europe", "Asia", "Africa", "North-America", "South-America", "Australia"];
    const grindTypes = ["Whole bean", "Coarse", "Medium-coarse", "Medium", "Fine", "Extra fine"];

    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:1337/Category"); // API-Aufruf
        categories.value = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const addProduct = async () => {
      try {
        await axios.post("http://localhost:1337/Coffee", newProduct.value);
        alert("Product added successfully!");
        newProduct.value = {
          name: "",
          description: "",
          price: null,
          caffeineContent: null,
          brand: "",
          roastDegree: "",
          beanType: "",
          certificates: [],
          origin: "",
          grindType: "",
          category: null,
        };
      } catch (error) {
        console.error("Error adding product:", error);
      }
    };

    onMounted(() => {
      fetchCategories();
    });

    return {
      newProduct,
      brands,
      roasts,
      beanTypes,
      certificates,
      origins,
      grindTypes,
      categories, // Rückgabe der dynamischen Kategorien
      addProduct,
    };
  },
};

</script>

<style scoped>
form {
  max-width: 600px;
  margin: auto;
}
label {
  font-weight: bold;
}
button {
  width: 100%;
}
</style>
