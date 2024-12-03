<template>
  <div class="page-container">
    <!-- Hintergrundbild -->
    <div class="background"></div>
    <!-- Tabelle -->
    <div class="table-container">
      <h1>Coffee Varieties</h1>
      <table>
        <thead>
          <tr>
            <th style="width: 10%;">Image</th>
            <th style="width: 20%;">Name</th>
            <th style="width: 40%;">Description</th>
            <th style="width: 15%;">Price</th>
            <th style="width: 15%;">Bean Variety</th>
            <th style="width: 25%;">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="coffee in coffeeData" :key="coffee.id">
            <td>
              <img :src="coffee.image" alt="Coffee Image" class="coffee-image" />
            </td>
            <td>{{ coffee.name }}</td>
            <td>{{ coffee.description }}</td>
            <td>{{ coffee.price }} €</td>
            <td>{{ coffee.beanVariety }}</td>
            <td>
              <div class="action-buttons">
                <button class="view-btn" @click="viewDetails(coffee)">View</button>
                <button class="edit-btn" @click="editProduct(coffee)">Edit</button>
                <button class="delete-btn" @click="deleteProduct(coffee.id)">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoffeeTable",
  data() {
    return {
      coffeeData: [
        {
          id: 1,
          name: "Espresso",
          description: "A strong coffee with an intense flavor.",
          price: 2.99,
          beanVariety: "Arabica",
          image: "https://via.placeholder.com/50", // Example image
        },
        {
          id: 2,
          name: "Latte Macchiato",
          description: "A milky coffee with a gentle aroma.",
          price: 3.49,
          beanVariety: "Robusta",
          image: "https://via.placeholder.com/50", // Example image
        },
        {
          id: 3,
          name: "Cappuccino",
          description: "Coffee with a layer of milk foam.",
          price: 3.99,
          beanVariety: "Arabica",
          image: "https://via.placeholder.com/50", // Example image
        },
      ],
    };
  },
  methods: {
    viewDetails(coffee) {
      alert(`Details of: ${coffee.name}\nDescription: ${coffee.description}`);
    },
    editProduct(coffee) {
      alert(`Editing: ${coffee.name}`);
    },
    deleteProduct(id) {
      if (confirm("Are you sure you want to delete this product?")) {
        this.coffeeData = this.coffeeData.filter((coffee) => coffee.id !== id);
      }
    },
  },
};
</script>

<style scoped>
/* Gesamte Seite mit Hintergrundbild */
.page-container {
  position: relative;
  min-height: 100vh;
  padding: 20px 0; /* Abstand oben und unten */
  background-color: rgb(212, 205, 205); /* Hintergrundfarbe */
  padding-top: 20px;
  margin-top: 20px;
  border-radius: 30px;
}

/* Hintergrundbild (falls erforderlich) */
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Hinter der Tabelle */
}

/* Tabelle im Vordergrund */
.table-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #a8865f;
  border-radius: 10px;
  font-family: Arial, sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Schatten */
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
  background-color: #fff; /* Weißer Hintergrund für Zellen */
}

th {
  background-color: #f4f4f4; /* Heller Hintergrund für die Kopfzeile */
}

/* Stil für das runde Bild */
.coffee-image {
  width: 40px;
  height: 40px;
  border-radius: 50%; /* Rundes Bild */
  object-fit: cover; /* Bild zentriert und zugeschnitten */
}

/* Stil für die Buttons */
.action-buttons {
  display: flex;
  gap: 10px; /* Abstand zwischen den Buttons */
}

button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.view-btn {
  background-color: #3498db;
  color: white;
}

.edit-btn {
  background-color: #2ecc71;
  color: white;
}

.delete-btn {
  background-color: #e74c3c;
  color: white;
}

button:hover {
  opacity: 0.8;
}
</style>
