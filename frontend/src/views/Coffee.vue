<template>
  <div class="container-fluid mt-5 mb-5">
    <div class="row g-2">
      <!-- Sidebar for filter -->
      <div class="col-md-3">
        <h4>Filter to find your coffee</h4>

        <!-- searchbar -->
        <div class="mb-3">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search for coffee name ..."
            class="form-control"
          />
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

        <!-- Filter: Caffeine Content -->
        <div class="origin p-2">
          <h6 class="text-uppercase">Caffeine Content</h6>
          <div class="form-check" v-for="caffeine in availableCaffeine" :key="caffeine">
            <input
              type="checkbox"
              class="form-check-input"
              :id="caffeine"
              :value="caffeine"
              v-model="selectedCaffeine"
            />
            <label class="form-check-label" :for="caffeine">{{ caffeine }}</label>
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
      </div>

      <!-- Product List -->
      <div class="col-md-9">
        <div class="row g-2">
          <div v-for="coffee in filteredCoffees" :key="coffee.id" class="col-12 col-md-6">
            <div class="card shadow">
              <img
                class="searchImg"
                src="https://via.placeholder.com/300x200.png?text=Placeholder"
                :alt="coffee.name"
              />
              <div class="card-footer bg-gray-200 border-top border-gray-300 p-4">
                <a href="#" class="h5">{{ coffee.name }}</a>

                <ul class="list-unstyled d-flex justify-content-center mb-3">
                  <li><i class="fas fa-star fa-sm star-color"></i></li>
                  <li><i class="fas fa-star fa-sm star-color"></i></li>
                  <li><i class="fas fa-star fa-sm star-color"></i></li>
                  <li><i class="fas fa-star fa-sm star-color"></i></li>
                  <li><i class="fas fa-star fa-sm star-color"></i></li>
                </ul>

                <p>{{ coffee.description }}</p>

                <button class="btn btn-secondary view-more-btn">
                  <i class="fas fa-eye me-2"></i> View More
                </button>

                <div class="d-flex justify-content-between align-items-center mt-3">
                  <span class="h6 mb-0 text-gray">${{ coffee.price.toFixed(2) }}</span>
                  <button class="btn btn-xs btn-tertiary">
                    <i class="fas fa-cart-plus me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="filteredCoffees.length === 0" class="col-12 text-center">
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

export default {
  name: "Coffee",
  setup() {
    const coffees = ref([]); 
    const searchQuery = ref("");

    const availableBrands = ["Tchibo", "Jacobs", "Mellitta", "Eduscho"];
    const availableRoasts = [
      "Light roast",
      "Medium roast",
      "Medium-dark roast",
      "Dark roast",
    ];
    const availableCaffeine = ["Low", "Moderate", "High", "Very high"];
    const availableBeans = ["Arabica", "Robusta", "Lieberica", "Excelsa"];
    const availableGrindSize = [
      "Whole Bean",
      "Coarse",
      "Medium-coarse",
      "Medium",
      "Fine",
      "Extra fine",
    ];
    const availableCertificates = [
      "UTZ Certified",
      "Fair Trade Certified",
      "Rainforest Alliance Certified",
      "Direct Trade",
      "Bird-Friendly",
    ];
    const availableOrigins = [
      "Europe",
      "Asia",
      "Africa",
      "North-America",
      "South-America",
      "Australia",
    ];

    const selectedBrands = ref([]);
    const selectedRoasts = ref([]);
    const selectedCaffeine = ref([]);
    const selectedBeans = ref([]);
    const selectedGrindSize = ref([]);
    const selectedCertificates = ref([]);
    const selectedOrigins = ref([]);

    const fetchCoffees = async () => {
      try {
        const response = await axios.get("http://localhost:1337/Coffee");
        coffees.value = response.data;
      } catch (error) {
        console.error("Error fetching coffees:", error);
      }
    };

    const filteredCoffees = computed(() => {
      return coffees.value.filter((coffee) => {
        const matchesSearch =
          coffee.name.toLowerCase().includes(searchQuery.value.toLowerCase());

        const matchesBrand =
          selectedBrands.value.length === 0 ||
          selectedBrands.value.includes(coffee.brand);

        const matchesRoast =
          selectedRoasts.value.length === 0 ||
          selectedRoasts.value.includes(coffee.roastDegree);

        const matchesCaffeine =
          selectedCaffeine.value.length === 0 ||
          selectedCaffeine.value.includes(coffee.caffeineContent);

        const matchesBeans =
          selectedBeans.value.length === 0 ||
          selectedBeans.value.includes(coffee.beanType);

        const matchesGrindSize =
          selectedGrindSize.value.length === 0 ||
          selectedGrindSize.value.includes(coffee.grindType);

        const matchesCertificates =
          selectedCertificates.value.length === 0 ||
          selectedCertificates.value.some((cert) =>
            coffee.certificates.includes(cert)
          );

        const matchesOrigin =
          selectedOrigins.value.length === 0 ||
          selectedOrigins.value.includes(coffee.origin);

        return (
          matchesSearch &&
          matchesBrand &&
          matchesRoast &&
          matchesCaffeine &&
          matchesBeans &&
          matchesGrindSize &&
          matchesCertificates &&
          matchesOrigin
        );
      });
    });

    onMounted(() => {
      fetchCoffees();
    });

    return {
      coffees,
      searchQuery,
      availableBrands,
      selectedBrands,
      availableRoasts,
      selectedRoasts,
      availableCaffeine,
      selectedCaffeine,
      availableBeans,
      selectedBeans,
      availableGrindSize,
      selectedGrindSize,
      availableCertificates,
      selectedCertificates,
      availableOrigins,
      selectedOrigins,
      filteredCoffees,
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
  