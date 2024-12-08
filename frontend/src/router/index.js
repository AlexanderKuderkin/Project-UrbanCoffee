import { createRouter, createWebHistory } from 'vue-router';

// Seiten-Imports
import HomePage from '@/views/HomePage.vue';
import Coffee from '@/views/Coffee.vue';
import ManageCoffee from '@/views/ManageCoffee.vue';
import Reviews from '@/views/Reviews.vue';
import AddProduct from '@/views/AddProduct.vue'; // Import der neuen AddProduct-Seite
import EditProduct from '@/views/EditProduct.vue'; // Import der neuen EditProduct-Seite

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // Haupt-Startseite
  },
  {
    path: '/Coffee',
    name: 'Coffee',
    component: Coffee,
  },
  {
    path: '/ManageCoffee',
    name: 'ManageCoffee',
    component: ManageCoffee,
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews,
  },
  {
    path: '/AddProduct', // Pfad zur AddProduct-Seite
    name: 'AddProduct',
    component: AddProduct,
  },
  {
    path: '/EditProduct/:id', // Dynamische Route mit einem Parameter (:id)
    name: 'EditProduct',
    component: EditProduct,
    props: true, // Ermöglicht das Übergeben von "id" als Prop an die Komponente
  },
];

const router = createRouter({
  history: createWebHistory(), // Aktiviert HTML5-History-Modus für saubere URLs
  routes, // Routen-Definitionen
});

export default router;
