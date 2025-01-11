<template>
    <div class="Container-main">
      <div class="container">
        <h1>Give us your Review</h1>
  
        <!-- Dropdown für die Kaffeesorten -->
        <select id="coffeeSelect" class="coffee-select">
          <option value="" disabled selected>Which coffee do you want to review?</option>
          <option value="Espresso">Espresso</option>
          <option value="Cappuccino">Cappuccino</option>
          <option value="Latte">Latte</option>
          <option value="Americano">Americano</option>
          <option value="Mocha">Mocha</option>
        </select>
  
        <!-- Sternebewertung -->
        <div class="stars" id="stars">
          <span class="star" data-value="1">★</span>
          <span class="star" data-value="2">★</span>
          <span class="star" data-value="3">★</span>
          <span class="star" data-value="4">★</span>
          <span class="star" data-value="5">★</span>
        </div>
  
        <textarea id="review" placeholder="Write your review here"></textarea>
  
        <!-- Buttons -->
        <div class="button-group">
          <button id="back" class="back-button">Back</button>
          <button id="submit">Submit</button>
        </div>
  
        <div class="reviews" id="reviews"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Reviews",
    mounted() {
      const stars = document.querySelectorAll(".star");
      const reviewText = document.getElementById("review");
      const coffeeSelect = document.getElementById("coffeeSelect");
      const submitBtn = document.getElementById("submit");
      const reviewsContainer = document.getElementById("reviews");
      const backBtn = document.getElementById("back");
  
      let rating = 0;
  
      stars.forEach((star) => {
        star.addEventListener("click", () => {
          const value = parseInt(star.getAttribute("data-value"));
          rating = value;
  
          stars.forEach((s) =>
            s.classList.remove("one", "two", "three", "four", "five")
          );
          stars.forEach((s, index) => {
            if (index < value) {
              s.classList.add(getStarColorClass(value));
            }
          });
  
          stars.forEach((s) => s.classList.remove("selected"));
          star.classList.add("selected");
        });
      });
  
      submitBtn.addEventListener("click", () => {
        const review = reviewText.value;
        const selectedCoffee = coffeeSelect.value;
  
        if (!selectedCoffee) {
          alert("Please select a coffee to review.");
          return;
        }
  
        if (!rating || !review) {
          alert(
            "Please select a rating and provide a review before submitting."
          );
          return;
        }
  
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.innerHTML = `
          <p><strong>${selectedCoffee}</strong></p>
          <p><strong>Rating: ${rating}/5</strong></p>
          <p>${review}</p>
        `;
        reviewsContainer.appendChild(reviewElement);
  
        // Reset styles after submitting
        coffeeSelect.selectedIndex = 0;
        reviewText.value = "";
        rating = 0;
        stars.forEach((s) =>
          s.classList.remove("one", "two", "three", "four", "five", "selected")
        );
      });
  
      backBtn.addEventListener("click", () => {
        // Aktion für den Back-Button hier implementieren
        alert("Going back!");
      });
  
      function getStarColorClass(value) {
        switch (value) {
          case 1:
            return "one";
          case 2:
            return "two";
          case 3:
            return "three";
          case 4:
            return "four";
          case 5:
            return "five";
          default:
            return "";
        }
      }
    },
  };
  </script>
  
  <style scoped>
  body {
    margin: 0;
    padding: 0;
  }
  
  .Container-main {
    background-color: rgb(212, 205, 205);
    border-radius: 20px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 80px);
    overflow: auto;
  }
  
  .container {
    background-color: white;
    padding: 20px;
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 400px;
  }
  
  h1 {
    font-size: 24px;
    margin: 0;
  }
  
  .coffee-select {
    width: 90%;
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 16px;
  }
  
  .stars {
    font-size: 30px;
    margin: 10px 0;
  }
  
  .star {
    cursor: pointer;
    margin: 0 5px;
  }
  
  .one {
    color: rgb(255, 0, 0);
  }
  
  .two {
    color: rgb(255, 106, 0);
  }
  
  .three {
    color: rgb(251, 255, 120);
  }
  
  .four {
    color: rgb(255, 255, 0);
  }
  
  .five {
    color: rgb(24, 159, 14);
  }
  
  textarea {
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    resize: vertical;
    min-height: 80px;
    max-height: 400px;
  }
  
  .button-group {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }
  
  button {
    background-color: #a8865f;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    width: 85px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .back-button {
    background-color: #1e160d;
  }
  
  .back-button:hover {
    background-color: #5a6268;
  }
  
  .reviews {
    margin-top: 20px;
    text-align: left;
  }
  
  .review {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    margin: 10px 0;
  }
  
  .review p {
    margin: 0;
  }
  </style>
  