<template>
  <section class="reviews-section">
    <div class="container">
      <div class="row text-center">
        <!-- Erste Bewertung -->
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-body py-4 mt-2">
              <h5 class="font-weight-bold">Florent Gjoshi</h5>
              <h6 class="font-weight-bold my-3">Tchibo Cafe Crema</h6>
              <ul class="list-unstyled d-flex justify-content-center mb-3">
                <li><i class="fas fa-star star-color"></i></li>
                <li><i class="fas fa-star star-color"></i></li>
                <li><i class="fas fa-star star-color"></i></li>
                <li><i class="fas fa-star star-color"></i></li>
                <li><i class="fas fa-star star-color"></i></li>
              </ul>
              <p class="mb-2">
                <i class="fas fa-quote-left pe-2"></i>
                The best coffee I've ever had in my life! OMG WOW!!! The coffee strength is just right when you want to stay awake, and with this aroma, you can really enjoy the coffee.
              </p>
              <button class="btn-view-more">View More</button>
              <button class="btn-buy-more">Buy Coffee</button>
            </div>
          </div>
        </div>

        <!-- Zweite Bewertung -->
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-body py-4 mt-2">
              <h5 class="font-weight-bold">Max Mustermann</h5>
              <h6 class="font-weight-bold my-3">Tchibo Cafe Creta</h6>
              <ul class="list-unstyled d-flex justify-content-center mb-3">
                <li><i class="fas fa-star star-color"></i></li>
                <li><i class="far fa-star star-color"></i></li>
                <li><i class="far fa-star star-color"></i></li>
                <li><i class="far fa-star star-color"></i></li>
                <li><i class="far fa-star star-color"></i></li>
              </ul>
              <p class="mb-2">
                <i class="fas fa-quote-left pe-2"></i>
                Unfortunately, I cannot recommend it at all. The taste is far too dry and makes you feel sick.
              </p>
              <button class="btn-view-more">View More</button>
              <button class="btn-buy-more">Buy Coffee</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ReviewsSection",
};
</script>

<style scoped>
.reviews-section {
  background-color: #f3f2f2;
  padding: 40px 0;
}

.card {
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-body {
  text-align: center; /* Zentriert den Inhalt innerhalb der Card */
  display: flex;
  flex-direction: column; /* Stellt sicher, dass die Buttons untereinander angezeigt werden */
  justify-content: center; /* Zentriert den Inhalt entlang der vertikalen Achse */
  align-items: center; /* Zentriert den Inhalt entlang der horizontalen Achse */
  height: 100%; /* Stellt sicher, dass der Card-Body die ganze Höhe der Karte nutzt */
}

.star-color {
  color: #735340; /* Farbe für Sterne */
}

.btn-view-more,
.btn-buy-more {
  margin-top: 10px;
  padding: 8px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block;
  width: 119px;
  background-color: #735340;
  color: #fff;
  text-align: center;
}

.btn-view-more:hover {
  background-color: #d9b68b;
}

.btn-buy-more {
  background-color: #735340;
}

.btn-buy-more:hover {
  background-color: #d9b68b;
}

.mb-2 {
  margin-bottom: 30px !important;
  font-family: 'Roboto', sans-serif;
}
</style>
