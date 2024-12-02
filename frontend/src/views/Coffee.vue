<template>
    <div class="container-fluid mt-5 mb-5">
      <div class="row g-2">
        <!--Sidebar-->
        <div class="col-md-3">
            <h4>Filter to find your coffee</h4>
          <!--Brand-->
          <div class="origin p-2">
            <h6 class="text-uppercase">Brands</h6>
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
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="mellitta" />
                <label class="form-check-label" for="mellitta">Mellitta</label>
              </div>
              <span>7</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="eduscho" />
                <label class="form-check-label" for="eduscho">Eduscho</label>
              </div>
              <span>7</span>
            </div>
          </div>

          <div class="origin p-2">
            <h6 class="text-uppercase">Roast Level</h6>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="lightRoast" />
                <label class="form-check-label" for="lightRoast">Light roast (Cinnamon roast)</label>
              </div>
              <span>5</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="mediumRoast" />
                <label class="form-check-label" for="mediumRoast">Medium roast (City roast)</label>
              </div>
              <span>7</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="mediumDarkRoast" />
                <label class="form-check-label" for="mediumDarkRoast">Medium-dark roast (Full City roast)</label>
              </div>
              <span>7</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="darkRoast" />
                <label class="form-check-label" for="darkRoast">Dark roast (Espresso roast)</label>
              </div>
              <span>7</span>
            </div>
          </div>

          <div class="origin p-2">
            <h6 class="text-uppercase">Caffeine content (in mg per 100ml)</h6>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="low" />
                <label class="form-check-label" for="low">Low (0-50mg)</label>
              </div>
              <span>5</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="moderate" />
                <label class="form-check-label" for="moderate">Moderate (51-100 mg)</label>
              </div>
              <span>7</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="high" />
                <label class="form-check-label" for="high">High (101-150 mg)</label>
              </div>
              <span>7</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="veryHigh" />
                <label class="form-check-label" for="veryHigh">Very high (150+ mg)</label>
              </div>
              <span>7</span>
            </div>
          </div>

          <div class="origin p-2">
            <h6 class="text-uppercase">Bean variaty</h6>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="arabica" />
                <label class="form-check-label" for="arabica">Arabica</label>
              </div>
              <span>5</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="robusta" />
                <label class="form-check-label" for="robusta">Robusta</label>
              </div>
              <span>7</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="lieberica" />
                <label class="form-check-label" for="lieberica">Lieberica</label>
              </div>
              <span>7</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="excelsa" />
                <label class="form-check-label" for="excelsa">Excelsa</label>
              </div>
              <span>7</span>
            </div>
          </div>

          <div class="origin p-2">
            <h6 class="text-uppercase">Grind Size</h6>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="wholeBean" />
                <label class="form-check-label" for="wholeBean">Whole Bean</label>
              </div>
              <span>5</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="coarseFrench" />
                <label class="form-check-label" for="coarseFrench">Coarse (French press)</label>
              </div>
              <span>7</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="mediumChemex" />
                <label class="form-check-label" for="mediumChemex">Medium-coarse (Chemex)</label>
              </div>
              <span>7</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="mediumDrip" />
                <label class="form-check-label" for="mediumDrip">Medium (Drip coffee makers)</label>
              </div>
              <span>7</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="fine" />
                <label class="form-check-label" for="fine">Fine (Esspresso)</label>
              </div>
              <span>7</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="extraFine" />
                <label class="form-check-label" for="extraFine">Extra fine (Turkish coffee)</label>
              </div>
              <span>7</span>
            </div>
          </div>

          <div class="origin p-2">
            <h6 class="text-uppercase">Certification</h6>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="utz" />
                <label class="form-check-label" for="utz">UTZ Certified</label>
              </div>
              <span>5</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="ftc" />
                <label class="form-check-label" for="ftc">Fair Trade Certified</label>
              </div>
              <span>7</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="rac" />
                <label class="form-check-label" for="rac">Rainforest Allience Certified</label>
              </div>
              <span>7</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="directTrade" />
                <label class="form-check-label" for="directTrade">Direct Trade</label>
              </div>
              <span>7</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="bird" />
                <label class="form-check-label" for="bird">Bird - Friendly</label>
              </div>
              <span>7</span>
            </div>
          </div>

          <div class="origin p-2">
            <h6 class="text-uppercase">Origin</h6>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="europe" />
                <label class="form-check-label" for="europe">Europe</label>
              </div>
              <span>5</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="asia" />
                <label class="form-check-label" for="asia">Asia</label>
              </div>
              <span>7</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="africa" />
                <label class="form-check-label" for="africa">Africa</label>
              </div>
              <span>7</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="northAmerica" />
                <label class="form-check-label" for="northAmerica">North-America</label>
              </div>
              <span>7</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="southAmerica" />
                <label class="form-check-label" for="southAmerica">South-America</label>
              </div>
              <span>7</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="australia" />
                <label class="form-check-label" for="australia">Australia</label>
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
  .g-2{
    --bs-gutter-y: 1.5rem;
    background-color: rgb(212, 205, 205);
  }
  .col-12{
    flex: 0 0;
    padding-left: 20px;
    padding-right: 0px;
    padding-top: 35px;
  }
  .col-md-3{
    margin-bottom: 20px;
    padding-left: 20px;
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
  