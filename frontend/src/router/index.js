import { createRouter, createWebHistory } from 'vue-router';

// Seiten-Imports
import HomePage from '@/views/HomePage.vue';
import Coffee from '@/views/Coffee.vue';
import ManageCoffee from '@/views/ManageCoffee.vue';
import Reviews from '@/views/Reviews.vue';
import AddProduct from '@/views/AddProduct.vue';
import EditProduct from '@/views/EditProduct.vue';
import CoffeeView from "@/views/CoffeeView.vue";
import SignUp from "@/views/SignUp.vue";
import Login from "@/views/Login.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
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
    path: '/AddProduct',
    name: 'AddProduct',
    component: AddProduct,
  },
  {
    path: '/EditProduct/:id',
    name: 'EditProduct',
    component: EditProduct,
    props: true,
  },
  {
    path: '/coffee/:id',
    name: 'CoffeeView',
    component: CoffeeView,
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
/*
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.name !== 'login' && to.name !== 'signup' && to.name !== 'home' && 
    to.name !== 'about' && userStore.user == null) next({ name: 'login' })
  else next()
})
  */
export default router;
