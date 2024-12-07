import { createRouter, createWebHistory } from 'vue-router';

// Seiten-Imports
import HomePage from '@/views/HomePage.vue';
import Coffee from '@/views/Coffee.vue';
import ManageCoffee from '@/views/ManageCoffee.vue';
import Reviews from '@/views/Reviews.vue';
import AddProduct from '@/views/AddProduct.vue'; // Import der neuen AddProduct-Seite
import EditProduct from '@/views/EditProduct.vue';

// Falls später weitere Seiten benötigt werden, hier hinzufügen:
// import AboutPage from '@/views/AboutPage.vue';
// import LoginPage from '@/views/LoginPage.vue';

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
    path: '/EditProduct',
    name: 'EditProduct',
    component: EditProduct, // Neue Route für EditProduct
  },
  // Beispiel für zusätzliche Seiten:
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: AboutPage, // Über uns-Seite
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: LoginPage, // Login-Seite
  // },
];

const router = createRouter({
  history: createWebHistory(), // Aktiviert HTML5-History-Modus für saubere URLs
  routes, // Routen-Definitionen
});

export default router;
