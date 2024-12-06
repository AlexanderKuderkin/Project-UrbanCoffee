<template>
    <div>
      <h2>Add Product</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label>Product Name:</label>
          <input type="text" v-model="product.name" />
        </div>
        <div>
          <label>Brand:</label>
          <input type="text" v-model="product.brand" />
        </div>
        <div>
          <label>Roast Level:</label>
          <input type="text" v-model="product.roastLevel" />
        </div>
        <div>
          <label>Caffeine Content:</label>
          <input type="text" v-model="product.caffeine" />
        </div>
        <div>
          <label>Bean Type:</label>
          <input type="text" v-model="product.beanType" />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" v-model="product.price" />
        </div>
        <div>
          <label>Grind Level:</label>
          <input type="text" v-model="product.grindLevel" />
        </div>
        <div>
          <label>Origin:</label>
          <input type="text" v-model="product.origin" />
        </div>
        <div>
          <label>Description:</label>
          <textarea v-model="product.description"></textarea>
        </div>
        <button type="submit">Create New Product</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "AddProduct",
    data() {
      return {
        product: {
          name: "",
          brand: "",
          roastLevel: "",
          caffeine: "",
          beanType: "",
          price: 0,
          grindLevel: "",
          origin: "",
          description: "",
        },
      };
    },
    methods: {
      submitForm() {
        console.log("Product Created:", this.product);
        alert("Product added successfully!");
      },
    },
  };
  </script>
  
  <style scoped>
  form div {
    margin-bottom: 10px;
  }
  button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
  }
  button:hover {
    background-color: #218838;
  }
  </style>
  