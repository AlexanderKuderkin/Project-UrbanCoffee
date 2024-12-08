<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Edit Product</h1>

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

      <button type="submit" class="btn btn-success w-100">Update Product</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "EditProduct",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const product = ref({
      name: "",
      description: "",
      price: 0,
      caffeineContent: 0,
      brand: "",
      roastDegree: "",
      beanType: "",
      certificates: [],
      origin: "",
      grindType: "",
    });

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
        const response = await axios.get(`http://localhost:1337/Coffee/${route.params.id}`);
        product.value = response.data;
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    const updateProduct = async () => {
      try {
        await axios.put(`http://localhost:1337/Coffee/${route.params.id}`, product.value);
        alert("Product updated successfully!");
        router.push("/ManageCoffee");
      } catch (error) {
        console.error("Error updating product:", error);
      }
    };

    onMounted(() => {
      fetchProduct();
    });

    return {
      product,
      brands,
      roastDegrees,
      beanTypes,
      certificatesOptions,
      origins,
      grindTypes,
      updateProduct,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.btn-success {
  background-color: #28a745;
  border: none;
}
.btn-success:hover {
  background-color: #218838;
}
</style>
