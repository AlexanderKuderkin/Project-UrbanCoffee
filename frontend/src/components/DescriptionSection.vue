<template>
  <div class="description-container">
    <div class="description-row">
      <div class="description-item">
        <img :src="image1" alt="People reviewing" class="description-image" />
        <div class="description-text">
          <h3>Verified Reviews</h3>
          <p>
            Read honest, verified reviews from real coffee enthusiasts to help you find the perfect coffee. Every review is vetted to ensure authenticity.
          </p>
        </div>
      </div>
      <div class="description-item reverse">
        <div class="description-text">
          <h3>Curation Coffee Selection</h3>
          <p>
            Explore a wide variety of premium coffee beans from renowned roasters worldwide. Whether you love dark roasts or fruity light roasts, there’s something for everyone.
          </p>
        </div>
        <img :src="image2" alt="Coffee with beans" class="description-image" />
      </div>
    </div>
    <div class="description-row">
      <div class="description-item">
        <img :src="image3" alt="Coffee being poured" class="description-image" />
        <div class="description-text">
          <h3>Coffee for Every Occasion</h3>
          <p>
            Whether you're a casual drinker or a coffee aficionado, find the perfect beans for your taste and lifestyle.
          </p>
        </div>
      </div>
      <div class="description-item reverse">
        <div class="description-text">
          <h3>Advanced Coffee Filter</h3>
          <p>
            Find exactly what you’re looking for with our advanced filter options. Narrow down your search by roast level, flavor notes, origin, and sustainability certifications.
          </p>
        </div>
        <img :src="image4" alt="Advanced coffee filter" class="description-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DescriptionSection",
  data() {
    return {
      image1: new URL('@/assets/ZweiMenschenReview.png', import.meta.url).href,
      image2: new URL('@/assets/Kaffee3.jpg', import.meta.url).href,
      image3: new URL('@/assets/Kaffe1.jpg', import.meta.url).href,
      image4: new URL('@/assets/Kaffe2.jpg', import.meta.url).href,
    };
  },
};
</script>

<style scoped>
.description-container {
  margin: 0px 30px;
}

.description-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.description-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 0 0 50%;
  margin-bottom: 20px;
}

.description-item.reverse {
  flex-direction: row-reverse;
}

.description-image {
  width: 260px;
  height: 250px;
  border-radius: 20px;
  margin-right: 15px;
}

.description-text {
  flex: 1;
}


.description-text h3 {
  color: #A8865F; 
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center; 
  font-family: 'Noto Sans', sans-serif;
}

.description-text p {
  color: #000000; 
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
}

@media (max-width: 768px) {
  .description-row {
        flex-direction: column; 
        align-items: center; 
    }

    .description-item {
        flex: 1 0 100%; 
        margin-bottom: 20px; 
        flex-direction: column; 
        align-items: center; 
    }

    .description-image {
        margin-right: 0; 
        margin-bottom: 10px; 
    }
}
</style>
