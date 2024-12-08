<template>
    <div class="background-container">
      <div class="add-product-container">
        <h2 class="title">Add New Product</h2>
        <form @submit.prevent="createProduct" class="product-form">
          <div class="form-group">
            <label for="productImage">Product Image:</label>
            <input type="file" id="productImage" @change="handleFileUpload" />
          </div>
          <div class="form-group">
            <label for="productName">Name:</label>
            <input type="text" id="productName" v-model="product.name" placeholder="Enter product name" />
          </div>
          <div class="form-group">
            <label for="productBrand">Brand:</label>
            <input type="text" id="productBrand" v-model="product.brand" placeholder="Enter brand name" />
          </div>
          <div class="form-group">
            <label for="roastLevel">Roast Level:</label>
            <input type="text" id="roastLevel" v-model="product.roastLevel" placeholder="Enter roast level" />
          </div>
          <div class="form-group">
            <label for="caffeineContent">Caffeine Content:</label>
            <input type="text" id="caffeineContent" v-model="product.caffeine" placeholder="Enter caffeine content" />
          </div>
          <div class="form-group">
            <label for="beanType">Bean Variety:</label>
            <input type="text" id="beanType" v-model="product.beanType" placeholder="Enter bean variety" />
          </div>
          <div class="form-group">
            <label for="category">Category:</label>
            <select id="category" v-model="product.category">
              <option value="pulver">Pulver</option>
              <option value="kapseln">Kapseln</option>
              <option value="bohnen">Bohnen</option>
            </select>
          </div>
          <div class="form-group">
            <label for="certificates">Certificates:</label>
            <div class="certificate-list">
              <div v-for="certificate in certificates" :key="certificate" class="checkbox-group">
                <input
                  type="checkbox"
                  :id="certificate"
                  :value="certificate"
                  v-model="product.certificates"
                />
                <label :for="certificate">{{ certificate }}</label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="price">Price:</label>
            <input type="number" id="price" v-model="product.price" placeholder="Enter price" />
          </div>
          <div class="form-group">
            <label for="grindLevel">Grind Level:</label>
            <input type="text" id="grindLevel" v-model="product.grindLevel" placeholder="Enter grind level" />
          </div>
          <div class="form-group">
            <label for="origin">Origin:</label>
            <input type="text" id="origin" v-model="product.origin" placeholder="Enter origin" />
          </div>
          <div class="form-group">
            <label for="description">Description:</label>
            <textarea id="description" v-model="product.description" placeholder="Enter product description"></textarea>
          </div>
          <button type="submit" class="submit-button">Create New Product</button>
        </form>
      </div>
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
          category: "pulver", // Standardwert
          certificates: [], // Zertifikate als Array
          price: 0,
          grindLevel: "",
          origin: "",
          description: "",
        },
        certificates: [
          "UTZ Certified",
          "Fair Trade Certified",
          "Rainforest Alliance Certified",
          "Direct Trade",
          "Bird Friendly",
        ],
      };
    },
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          console.log("File selected:", file.name);
        }
      },
      createProduct() {
        console.log("Creating product:", this.product);
        alert("Product created successfully!");
        // Reset form
        this.product = {
          name: "",
          brand: "",
          roastLevel: "",
          caffeine: "",
          beanType: "",
          category: "pulver",
          certificates: [],
          price: 0,
          grindLevel: "",
          origin: "",
          description: "",
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .background-container {
    background-color: rgb(212, 205, 205);
    padding-top: 20px; /* Abstand oben und unten */
    padding-bottom: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    min-height: calc(100vh - 40px); /* Gesamte Höhe minus 40px (Header + Footer Abstand) */
    box-sizing: border-box; /* Padding in die Höhe einrechnen */
  }
  
  .add-product-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  .product-form .form-group {
    margin-bottom: 15px;
  }
  
  .product-form label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .product-form input,
  .product-form textarea,
  .product-form select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .product-form textarea {
    resize: none;
    height: 100px;
  }
  
  .checkbox-group {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .checkbox-group input {
    margin-right: 5px; /* Minimaler Abstand zwischen Checkbox und Text */
  }
  
  .certificate-list {
    display: flex;
    flex-direction: column;
    width: 5%;
  }
  
  .submit-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #735340;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #a8765f;
  }
  </style>
  