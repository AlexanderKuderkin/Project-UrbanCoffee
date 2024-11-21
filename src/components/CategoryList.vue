<script setup>
import CategoryEntry from "./CategoryEntry.vue"
import { ref } from 'vue'
const categories = ref([
  {
    "id": "001",
    "name": "Forest Edge",
    "description": "A serene pitch located at the edge of the forest, ideal for nature lovers and bird watchers."
  },
  {
    "id": "002",
    "name": "Sunny Meadow",
    "description": "A spacious and sunny pitch in an open meadow, perfect for families and group camping."
  },
  {
    "id": "003",
    "name": "Mountain View",
    "description": "A breathtaking pitch with panoramic views of the nearby mountains. Great for photographers and adventurers."
  }
])
</script>
<template>
<div class="list">
    <h1>Camping Categories</h1>
    <CategoryEntry v-for="category in categories" 
        :name="category.name" :description="category.description"/>
  </div>
</template>

<style scoped>
.list {
    padding: 0.5rem;
}
</style>
