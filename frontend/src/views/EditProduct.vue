<template>
    <div class="container">
      <h2 class="text-center my-4">Edit Product</h2>
      <form @submit.prevent="submitForm">
        <!-- Bild hochladen -->
        <div class="form-group mb-3">
          <label for="productImage">Upload Image</label>
          <input
            type="file"
            id="productImage"
            class="form-control"
            @change="handleImageUpload"
          />
        </div>
  
        <!-- Eingabefelder -->
        <div class="form-group mb-3">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            v-model="product.name"
            class="form-control"
            placeholder="Enter product name"
          />
        </div>
  
        <div class="form-group mb-3">
          <label for="brand">Brand</label>
          <input
            type="text"
            id="brand"
            v-model="product.brand"
            class="form-control"
            placeholder="Enter brand"
          />
        </div>
  
        <div class="form-group mb-3">
          <label for="roastLevel">Roast Level</label>
          <input
            type="text"
            id="roastLevel"
            v-model="product.roastLevel"
            class="form-control"
            placeholder="Enter roast level"
          />
        </div>
  
        <div class="form-group mb-3">
          <label for="caffeineContent">Caffeine Content</label>
          <input
            type="text"
            id="caffeineContent"
            v-model="product.caffeineContent"
            class="form-control"
            placeholder="Enter caffeine content"
          />
        </div>
  
        <div class="form-group mb-3">
          <label for="beanType">Bean Type</label>
          <input
            type="text"
            id="beanType"
            v-model="product.beanType"
            class="form-control"
            placeholder="Enter bean type"
          />
        </div>
  
        <div class="form-group mb-3">
          <label for="price">Price</label>
          <input
            type="number"
            id="price"
            v-model="product.price"
            class="form-control"
            placeholder="Enter price"
          />
        </div>
  
        <div class="form-group mb-3">
          <label for="grindSize">Grind Size</label>
          <input
            type="text"
            id="grindSize"
            v-model="product.grindSize"
            class="form-control"
            placeholder="Enter grind size"
          />
        </div>
  
        <div class="form-group mb-3">
          <label for="origin">Origin</label>
          <input
            type="text"
            id="origin"
            v-model="product.origin"
            class="form-control"
            placeholder="Enter origin"
          />
        </div>
  
        <div class="form-group mb-3">
          <label for="description">Description</label>
          <textarea
            id="description"
            v-model="product.description"
            class="form-control"
            rows="4"
            placeholder="Enter product description"
          ></textarea>
        </div>
  
        <!-- Button -->
        <div class="text-center">
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "EditProduct",
    data() {
      return {
        product: {
          name: "",
          brand: "",
          roastLevel: "",
          caffeineContent: "",
          beanType: "",
          price: 0,
          grindSize: "",
          origin: "",
          description: "",
        },
        image: null,
      };
    },
    methods: {
      handleImageUpload(event) {
        this.image = event.target.files[0];
      },
      submitForm() {
        console.log("Edited Product:", this.product);
        console.log("Uploaded Image:", this.image);
        alert("Changes saved successfully!");
        // Hier Backend-Aufruf einfügen
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: auto;
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  button {
    width: 100%;
    font-size: 1rem;
  }
  </style>