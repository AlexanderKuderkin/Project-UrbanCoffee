import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue'; // Import der Homepage

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  // Weitere Routen können hier hinzugefügt werden
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
