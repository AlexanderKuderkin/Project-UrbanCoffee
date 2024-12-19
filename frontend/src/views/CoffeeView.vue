<template>
    <div class="container mt-5">
      <div v-if="coffee" class="card shadow-lg">
        <img
          class="card-img-top"
          src="https://via.placeholder.com/600x300.png?text=Coffee+Image"
          :alt="coffee.name"
        />
        <div class="card-body">
          <h2 class="card-title">{{ coffee.name }}</h2>
          <p class="card-text">{{ coffee.description }}</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <strong>Category:</strong> {{ coffee.category ? coffee.category.name : 'N/A' }}
                </li>
            <li class="list-group-item"><strong>Price:</strong> ${{ coffee.price.toFixed(2) }}</li>
            <li class="list-group-item"><strong>Caffeine Content:</strong> {{ coffee.caffeineContent }} mg</li>
            <li class="list-group-item"><strong>Brand:</strong> {{ coffee.brand }}</li>
            <li class="list-group-item"><strong>Roast Degree:</strong> {{ coffee.roastDegree }}</li>
            <li class="list-group-item"><strong>Bean Type:</strong> {{ coffee.beanType }}</li>
            <li class="list-group-item">
              <strong>Certificates:</strong> {{ coffee.certificates.join(", ") }}
            </li>
            <li class="list-group-item"><strong>Origin:</strong> {{ coffee.origin }}</li>
            <li class="list-group-item"><strong>Grind Type:</strong> {{ coffee.grindType }}</li>
          </ul>
  
          <div class="mt-4">
            <router-link to="/Coffee" class="btn btn-secondary">
              <i class="fas fa-arrow-left me-2"></i> Back to Coffee List
            </router-link>
          </div>
        </div>
      </div>
  
      <div v-else class="text-center">
        <h3>Product not found</h3>
        <router-link to="/Coffee" class="btn btn-primary mt-3">
          Back to Coffee List
        </router-link>
      </div>
    </div>
  </template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "CoffeeView",
  setup() {
    const route = useRoute();
    const coffee = ref(null);

    const fetchCoffee = async () => {
      try {
        const response = await axios.get(`/Coffee/${route.params.id}?populate=category`);
        coffee.value = response.data;
      } catch (error) {
        console.error("Error fetching coffee details:", error);
      }
    };

    onMounted(() => {
      fetchCoffee();
    });

    return {
      coffee,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
.card {
  border: none;
  border-radius: 10px;
  overflow: hidden;
}
.card-img-top {
  object-fit: cover;
  height: 300px;
}
.card-title {
  font-size: 2rem;
  font-weight: bold;
}
.card-text {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
.list-group-item {
  font-size: 1rem;
}
.btn {
  border-radius: 25px;
}
</style>
