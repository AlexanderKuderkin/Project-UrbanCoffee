import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from "../stores/user";

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
import ShoppingCart from "@/views/ShoppingCart.vue";

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
    path: '/Reviews',
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
  {
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    component: ShoppingCart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const publicRoutes = ['Coffee', 'SignUp', 'Home', 'Login', 'CoffeeView', 'Reviews', 'ShoppingCart'];

  if (publicRoutes.includes(to.name)) {
    next(); 
  } else {
    if (!userStore.user) {
      next({ name: 'Login' });
    } else {
      if (to.name === 'ManageCoffee' && !userStore.user.isSuperAdmin) {
        next({ name: 'Home' });
      } else {
        next(); 
      }
    }
  }
});


export default router;
