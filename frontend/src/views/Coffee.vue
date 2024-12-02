<template>
    <div class="container-fluid mt-5 mb-5">
      <div class="row g-2">
        <!--Sidebar-->
        <div class="col-md-3">
          <div class="t-products p-2">
            <h6 class="text-uppercase">Coffee Types</h6>
            <div class="p-lists">
              <div class="d-flex justify-content-between mt-2">
                <span>Espresso</span><span>15</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <span>Latte</span><span>10</span>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <span>Cappuccino</span><span>8</span>
              </div>
            </div>
          </div>
  
          <!--Brand-->
          <div class="brand p-2">
            <h6 class="text-uppercase">Brand</h6>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="tchibo" />
                <label class="form-check-label" for="tchibo">Tchibo</label>
              </div>
              <span>5</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="jacobs" />
                <label class="form-check-label" for="jacobs">Jacobs</label>
              </div>
              <span>7</span>
            </div>
          </div>
          <div class="origin p-2">
            <h6 class="text-uppercase">Origin</h6>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="Europe" />
                <label class="form-check-label" for="tchibo">Europe</label>
              </div>
              <span>5</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="Asia" />
                <label class="form-check-label" for="jacobs">Asia</label>
              </div>
              <span>7</span>
            </div>
          </div>
        </div>
  
        <!-- Products Section -->
        <div class="col-md-9">
          <div class="row g-2">
            <!-- Product 1 -->
            <div class="col-12 col-md-6">
              <div class="card shadow">
                <img
                  class="searchImg"
                  src="/src/assets/Kaffe1.jpg"
                  alt="Kaffe1"
                />
                <div class="card-footer bg-gray-200 border-top border-gray-300 p-4">
                  <a href="#" class="h5">Espresso Blend</a>
                  <div class="d-flex mt-2">
                    <span class="badge bg-primary me-2">Espresso</span>
                    <span class="badge bg-primary">Blend</span>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center mt-3"
                  >
                    <span class="h6 mb-0 text-gray">$12.99</span>
                    <button class="btn btn-xs btn-tertiary">
                      <i class="fas fa-cart-plus me-2"></i> Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Product 2 -->
            <div class="col-12 col-md-6">
              <div class="card shadow">
                <img
                  class="searchImg"
                  src="/src/assets/Kaffe2.jpg"
                  alt="Kaffe2"
                />
                <div class="card-footer bg-gray-200 border-top border-gray-300 p-4">
                  <a href="#" class="h5">Latte Delight</a>
                  <div class="d-flex mt-2">
                    <span class="badge bg-primary me-2">Latte</span>
                    <span class="badge bg-primary">Creamy</span>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center mt-3"
                  >
                    <span class="h6 mb-0 text-gray">$14.49</span>
                    <button class="btn btn-xs btn-tertiary">
                      <i class="fas fa-cart-plus me-2"></i> Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Product 3 -->
            <div class="col-12 col-md-6">
              <div class="card shadow">
                <img
                  class="searchImg"
                  src="/src/assets/Kaffee3.jpg"
                  alt="Kaffee3"
                />
                <div class="card-footer bg-gray-200 border-top border-gray-300 p-4">
                  <a href="#" class="h5">Cappuccino Classic</a>
                  <div class="d-flex mt-2">
                    <span class="badge bg-primary me-2">Cappuccino</span>
                    <span class="badge bg-primary">Classic</span>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center mt-3"
                  >
                    <span class="h6 mb-0 text-gray">$13.99</span>
                    <button class="btn btn-xs btn-tertiary">
                      <i class="fas fa-cart-plus me-2"></i> Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Coffee",
  };
  </script>
  
  <style scoped>
  body {
    background-color: #eee;
  }
  .t-products {
    background-image: linear-gradient(to right top, #5629c0, #5625cb, #5620d5, #551ae0, #5412eb);
    color: #fff;
    border-radius: 3px;
  }
  .brand, .t-products {
    background-color: #fff;
    margin-top: 5px;
    border-bottom: 1px solid #eee;
  }
  .card {
  width: 300px; 
  height: 400px; 
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card img {
  width: 100%; /* Passt das Bild an die Breite der Karte an */
  height: 234px; /* Feste Bildhöhe */
  object-fit: cover; /* Schneidet das Bild proportional zu */
}

.card-footer {
  padding: 15px;
  text-align: center;
  flex-grow: 0;
}
.badge {
  padding: 5px 10px;
  font-size: 12px;
}

.btn {
  background-color: #735340;
  color: white;
  border-radius: 5px;
  padding: 8px 12px;
}
.btn:hover {
  background-color: #a8865f;
}
  </style>
  