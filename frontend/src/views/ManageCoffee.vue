<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Main Content -->
      <div class="col">
        <div class="card">
          <div class="card-header">
            <h5>Manage Coffee</h5>
          </div>
          <div class="card-body">
            <!-- Wrapper für horizontales Scrollen -->
            <div class="table-responsive-wrapper">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Bean Variety</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="coffee in coffeeList" :key="coffee.id">
                    <td class="text-center">
                      <img :src="coffee.image" alt="Coffee Image" class="coffee-image" />
                    </td>
                    <td>{{ coffee.name }}</td>
                    <td>{{ coffee.description }}</td>
                    <td>${{ coffee.price }}</td>
                    <td>{{ coffee.beanVariety }}</td>
                    <td>
                      <div class="btn-group">
                        <button class="btn btn-sm btn-info" @click="viewCoffee(coffee)">View</button>
                        <button class="btn btn-sm btn-primary" @click="editCoffee(coffee)">Edit</button>
                        <button class="btn btn-sm btn-danger" @click="deleteCoffee(coffee)">Delete</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pagination-container">
              <ul class="pagination">
                <li class="page-item">
                  <a href="#" class="page-link">Previous</a>
                </li>
                <li class="page-item active">
                  <a href="#" class="page-link">1</a>
                </li>
                <li class="page-item">
                  <a href="#" class="page-link">Next</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManageCoffee",
  data() {
    return {
      coffeeList: [
        {
          id: 1,
          image: "/path/to/image1.jpg",
          name: "Espresso Blend",
          description: "A bold and rich espresso blend.",
          price: 12.99,
          beanVariety: "Arabica",
        },
        {
          id: 2,
          image: "/path/to/image2.jpg",
          name: "Latte Delight",
          description: "Creamy and smooth latte beans.",
          price: 14.49,
          beanVariety: "Robusta",
        },
      ],
    };
  },
  methods: {
    viewCoffee(coffee) {
      alert(`Viewing coffee: ${coffee.name}`);
    },
    editCoffee(coffee) {
      console.log("Edit coffee:", coffee);
    },
    deleteCoffee(coffee) {
      if (confirm(`Are you sure you want to delete ${coffee.name}?`)) {
        this.coffeeList = this.coffeeList.filter((c) => c.id !== coffee.id);
      }
    },
  },
};
</script>

<style scoped>
.container-fluid {
  margin-top: 20px;
}

.coffee-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.table-responsive-wrapper {
  overflow-x: auto; /* Ermöglicht horizontales Scrollen */
  margin-top: 20px;
  border-radius: 10px;
  background-color: #f5f5f5; /* Hintergrundfarbe hinter der Tabelle */
  padding: 10px; /* Abstand um die Tabelle */
}

.table {
  min-width: 1000px; /* Verhindert, dass die Tabelle bei kleinen Bildschirmen schrumpft */
}

.btn-group .btn {
  margin-right: 5px;
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

.card-header {
  background-color: #a8865f;
  color: white;
}

.card-body {
  background-color: rgb(212, 205, 205);
  border-radius: 15px;
  padding: 20px;
}
</style>
