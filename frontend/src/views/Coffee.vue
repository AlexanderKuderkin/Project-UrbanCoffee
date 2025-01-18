<template>
  <div class="container-fluid mt-5 mb-5">
    <div v-if="toastMessage" class="toast" :class="[toastType, { show: toastMessage }]">
      {{ toastMessage }}
    </div>
    <div class="row g-2">
      <!-- Sidebar for Filters -->
      <div class="col-md-3">
        <h4>Filter to find your coffee</h4>

        <!-- Searchbar -->
        <div class="mb-3">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search for coffee name ..."
            class="form-control"
          />
        </div>

        <!-- Sort Options -->
        <div class="mb-3">
          <label class="me-2 align-self-center">Sort by:</label>
          <select v-model="sortOption" class="form-select">
            <option value="name-asc">Name: A-Z</option>
            <option value="name-desc">Name: Z-A</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        
        <!-- Filter: Category -->
        <div class="origin p-2">
          <h6 class="text-uppercase">Category</h6>
          <div class="form-check" v-for="category in availableCategories" :key="category.id">
            <input
              type="checkbox"
              class="form-check-input"
              :id="`category-${category.id}`"
              :value="category.id"
              v-model="selectedCategories"
            />
            <label class="form-check-label" :for="`category-${category.id}`">{{ category.name }}</label>
          </div>
        </div>
        
        <!-- Filter: Brands -->
        <div class="origin p-2">
          <h6 class="text-uppercase">Brands</h6>
          <div class="form-check" v-for="brand in availableBrands" :key="brand">
            <input
              type="checkbox"
              class="form-check-input"
              :id="brand"
              :value="brand"
              v-model="selectedBrands"
            />
            <label class="form-check-label" :for="brand">{{ brand }}</label>
          </div>
        </div>

        <!-- Filter: Roast Level -->
        <div class="origin p-2">
          <h6 class="text-uppercase">Roast Level</h6>
          <div class="form-check" v-for="roast in availableRoasts" :key="roast">
            <input
              type="checkbox"
              class="form-check-input"
              :id="roast"
              :value="roast"
              v-model="selectedRoasts"
            />
            <label class="form-check-label" :for="roast">{{ roast }}</label>
          </div>
        </div>

        <!-- Filter: Bean Variety -->
        <div class="origin p-2">
          <h6 class="text-uppercase">Bean Variety</h6>
          <div class="form-check" v-for="bean in availableBeans" :key="bean">
            <input
              type="checkbox"
              class="form-check-input"
              :id="bean"
              :value="bean"
              v-model="selectedBeans"
            />
            <label class="form-check-label" :for="bean">{{ bean }}</label>
          </div>
        </div>

        <!-- Filter: Certification -->
        <div class="origin p-2">
          <h6 class="text-uppercase">Certification</h6>
          <div class="form-check" v-for="cert in availableCertificates" :key="cert">
            <input
              type="checkbox"
              class="form-check-input"
              :id="cert"
              :value="cert"
              v-model="selectedCertificates"
            />
            <label class="form-check-label" :for="cert">{{ cert }}</label>
          </div>
        </div>

        <!-- Filter: Origin -->
        <div class="origin p-2">
          <h6 class="text-uppercase">Origin</h6>
          <div class="form-check" v-for="origin in availableOrigins" :key="origin">
            <input
              type="checkbox"
              class="form-check-input"
              :id="origin"
              :value="origin"
              v-model="selectedOrigins"
            />
            <label class="form-check-label" :for="origin">{{ origin }}</label>
          </div>
        </div>

        <!-- Filter: Caffeine Content -->
        <div class="origin p-2">
          <h6 class="text-uppercase">Caffeine Content (mg)</h6>
          <div class="mb-2">
            <label for="minCaffeineContent">Min Caffeine:</label>
            <input
              type="number"
              id="minCaffeineContent"
              v-model.number="minCaffeineContent"
              placeholder="0"
              class="form-control"
            />
          </div>
          <div>
            <label for="maxCaffeineContent">Max Caffeine:</label>
            <input
              type="number"
              id="maxCaffeineContent"
              v-model.number="maxCaffeineContent"
              placeholder="500"
              class="form-control"
            />
          </div>
        </div>


        <!-- Filter: Price-->
        <div class="origin p-2">
          <h6 class="text-uppercase">Price Range</h6>
          <div class="mb-2">
            <label for="minPrice">Min Price:</label>
            <input
              type="number"
              id="minPrice"
              v-model.number="minPrice"
              placeholder="0"
              class="form-control"
            />
          </div>
          <div>
            <label for="maxPrice">Max Price:</label>
            <input
              type="number"
              id="maxPrice"
              v-model.number="maxPrice"
              placeholder="100"
              class="form-control"
            />
          </div>
        </div>
      </div>

      <!-- Product List -->
      <div class="col-md-9">
        <!-- Coffee Cards -->
        <div class="row g-2">
          <div v-for="coffee in sortedAndFilteredCoffees" :key="coffee.id" class="col-12 col-md-6">
            <div class="card shadow">
              <img
                class="searchImg"
                src="https://dummyimage.com/300x200/cccccc/000000&text=Coffee+Placeholder"
                :alt="coffee.name"
              />
              <div class="card-footer bg-gray-200 border-top border-gray-300 p-4">
                <a class="h5">{{ coffee.name }}</a>

                <p>{{ coffee.description }}</p>

                <button class="btn btn-secondary view-more-btn">
                  <router-link :to="`/coffee/${coffee.id}`" class="btn btn-secondary view-more-btn text-white text-decoration-none">
                    <i class="fas fa-eye me-2"></i> View More
                  </router-link>
                </button>

                <div class="d-flex justify-content-between align-items-center mt-3">
                  <span class="h6 mb-0 text-gray">${{ coffee.price.toFixed(2) }}</span>
                  <button @click="handleAddToCart(coffee)" class="btn btn-xs btn-tertiary">
                    <i class="fas fa-cart-plus me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="sortedAndFilteredCoffees.length === 0" class="col-12 text-center">
            <p>No coffees available at the moment.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import { useUserStore } from "@/stores/user";
import { useShoppingCartStore } from "@/stores/shoppingCart";
import { useRouter } from "vue-router";

export default {
  name: "Coffee",
  setup() {
    const toastMessage = ref(null);
    const toastType = ref("");

    function showToast(message, type = "success") {
      toastMessage.value = message;
      toastType.value = type;

      setTimeout(() => {
        toastMessage.value = null;
        toastType.value = "";
      }, 3000);
    }

    const coffees = ref([]);
    const searchQuery = ref("");
    const minPrice = ref(null);
    const maxPrice = ref(null);
    const minCaffeineContent = ref(null); 
    const maxCaffeineContent = ref(null); 
    const sortOption = ref("name-asc");

    const availableBrands = ["Tchibo", "Jacobs", "Mellitta", "Eduscho"];
    const availableRoasts = ["Light roast", "Medium roast", "Medium-dark roast", "Dark roast"];
    const availableBeans = ["Arabica", "Robusta", "Lieberica", "Excelsa"];
    const availableCertificates = [
      "UTZ Certified",
      "Fair Trade Certified",
      "Rainforest Alliance Certified",
      "Direct Trade",
      "Bird-Friendly",
    ];
    const availableOrigins = ["Europe", "Asia", "Africa", "North-America", "South-America", "Australia"];
    const availableCategories = ref([]); 

    const selectedBrands = ref([]);
    const selectedRoasts = ref([]);
    const selectedBeans = ref([]);
    const selectedCertificates = ref([]);
    const selectedOrigins = ref([]);
    const selectedCategories = ref([]);

    const fetchCoffees = async () => {
      try {
        const response = await axios.get("/Coffee");
        coffees.value = response.data;
      } catch (error) {
        console.error("Error fetching coffees:", error);
        showToast("Failed to fetch coffees. Please try again.", "error");
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get("/Category");
        availableCategories.value = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
        showToast("Failed to fetch categories. Please try again.", "error");
      }
    };

    const sortedAndFilteredCoffees = computed(() => {
      return coffees.value
        .filter((coffee) => {
          const matchesSearch = coffee.name.toLowerCase().includes(searchQuery.value.toLowerCase());
          const matchesBrand = selectedBrands.value.length === 0 || selectedBrands.value.includes(coffee.brand);
          const matchesRoast = selectedRoasts.value.length === 0 || selectedRoasts.value.includes(coffee.roastDegree);
          const matchesBeans = selectedBeans.value.length === 0 || selectedBeans.value.includes(coffee.beanType);
          const matchesCertificates =
            selectedCertificates.value.length === 0 ||
            selectedCertificates.value.some((cert) => coffee.certificates.includes(cert));
          const matchesOrigins = selectedOrigins.value.length === 0 || selectedOrigins.value.includes(coffee.origin);
          const matchesCategory =
            selectedCategories.value.length === 0 || selectedCategories.value.includes(coffee.category);
          const matchesCaffeineContent =
            (!minCaffeineContent.value || coffee.caffeineContent >= minCaffeineContent.value) &&
            (!maxCaffeineContent.value || coffee.caffeineContent <= maxCaffeineContent.value);
          const matchesPrice =
            (!minPrice.value || coffee.price >= minPrice.value) &&
            (!maxPrice.value || coffee.price <= maxPrice.value);

          return (
            matchesSearch &&
            matchesBrand &&
            matchesRoast &&
            matchesBeans &&
            matchesCertificates &&
            matchesOrigins &&
            matchesCategory &&
            matchesCaffeineContent &&
            matchesPrice
          );
        })
        .sort((a, b) => {
          if (sortOption.value === "name-asc") return a.name.localeCompare(b.name);
          if (sortOption.value === "name-desc") return b.name.localeCompare(a.name);
          if (sortOption.value === "price-asc") return a.price - b.price;
          if (sortOption.value === "price-desc") return b.price - a.price;
        });
    });

    const userStore = useUserStore();
    const router = useRouter();
    const shopCart = useShoppingCartStore();

    const isLoggedIn = computed(() => !!userStore.user);

    async function handleAddToCart(coffee) {
      if (isLoggedIn.value) {
        try {
          shopCart.addToCart({
            id: coffee.id,
            name: coffee.name,
            price: coffee.price,
          });
          console.log("Current cart:", shopCart.cart);
          showToast("Added to cart successfully!", "success");
        } catch (error) {
          console.error("Failed to add to cart:", error);
          showToast("Failed to add item to cart.", "error");
        }
      } else {
        showToast("You must be logged in to add items to the cart!", "error");
        router.push("/login");
      }
    }

    onMounted(() => {
      fetchCoffees();
      fetchCategories();
    });

    return {
      coffees,
      searchQuery,
      minPrice,
      maxPrice,
      minCaffeineContent,
      maxCaffeineContent,
      sortOption,
      availableBrands,
      availableRoasts,
      availableBeans,
      availableCertificates,
      availableOrigins,
      availableCategories,
      selectedBrands,
      selectedRoasts,
      selectedBeans,
      selectedCertificates,
      selectedOrigins,
      selectedCategories,
      sortedAndFilteredCoffees,
      handleAddToCart,
      toastMessage,
      toastType,
      showToast,
    };
  },
};
</script>

<style scoped>
body {
  background-color: #eee;
}
.h4{
  text-align: center;
 }
.g-2{
  --bs-gutter-y: 1.5rem;
  background-color: rgb(212, 205, 205);
  margin-bottom: 20px;
  margin-top: 20 px;
  margin-right: 0px;
  border-radius: 20px;
}
.col-12{
  flex: 0 0;
  padding-left: 20px;
  padding-right: 0px;
  padding-top: 35px;
  margin-right: 1px;
}
.col-md-3{
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.bg-primary {
  background-color: #a8865f !important;
}
.p-2{
  background-color: white;
}
.mb-5{
  padding: 0 0;
}
.form-select{
  max-width: 150px;
}
.brand {
  background-color: #fff;
  margin-top: 5px;
  border-bottom: 1px solid #eee;
}
.card {
  width: 300px; 
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.card img {
  width: 100%; 
  height: auto; 
  object-fit: cover; 
}

.card-footer {
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 5px; 
}

.card-footer .additional-info {
  font-size: 14px; 
  color: #555; 
}

.btn {
  background-color: #735340;
  color: white;
  border-radius: 25px;
  padding: 9px 12px;
}

.btn:hover {
  background-color: #a8865f;
}
.view-more-btn {
  background-color: #1e160d; 
  color: white;
  border: none;
  border-radius: 25px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.view-more-btn i {
  margin-right: 8px;
}


.view-more-btn:hover {
  background-color: #5a6268;
}

@media (max-width: 768px) {
  .g-2{
    justify-content: center;
  }
}
</style>
