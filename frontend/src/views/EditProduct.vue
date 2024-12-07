<template>
    <div class="form-container">
      <h1>Edit Product</h1>
      <form @submit.prevent="saveChanges">
        <div class="form-group">
          <label for="image">Image</label>
          <input type="file" id="image" @change="onFileChange" />
        </div>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="product.name" required />
        </div>
        <div class="form-group">
          <label for="brand">Brand</label>
          <input type="text" id="brand" v-model="product.brand" required />
        </div>
        <div class="form-group">
          <label for="roast-level">Roast Level</label>
          <input type="text" id="roast-level" v-model="product.roastLevel" required />
        </div>
        <div class="form-group">
          <label for="caffeine">Caffeine Content</label>
          <input type="text" id="caffeine" v-model="product.caffeineContent" required />
        </div>
        <div class="form-group">
          <label for="bean-type">Bean Variety</label>
          <input type="text" id="bean-type" v-model="product.beanVariety" required />
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" id="price" v-model="product.price" required />
        </div>
        <div class="form-group">
          <label for="grind">Grind Size</label>
          <input type="text" id="grind" v-model="product.grindSize" required />
        </div>
        <div class="form-group">
          <label for="origin">Origin</label>
          <input type="text" id="origin" v-model="product.origin" required />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" v-model="product.description" rows="5" required></textarea>
        </div>
        <button type="submit">Save Changes</button>
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
          beanVariety: "",
          price: null,
          grindSize: "",
          origin: "",
          description: "",
        },
      };
    },
    methods: {
      saveChanges() {
        console.log("Product changes saved:", this.product);
        alert("Product changes have been saved!");
      },
      onFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          console.log("Image selected:", file.name);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #a8865f;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #8f724f;
  }
  </style>
  