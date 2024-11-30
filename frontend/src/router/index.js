import { createRouter, createWebHistory } from 'vue-router';

// Seiten-Imports
import HomePage from '@/views/HomePage.vue';
// Falls später weitere Seiten benötigt werden, hier hinzufügen:
// import AboutPage from '@/views/AboutPage.vue';
// import LoginPage from '@/views/LoginPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // Haupt-Startseite
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
