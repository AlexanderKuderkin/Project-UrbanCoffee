import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from "../stores/user";

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
import Profile from "@/views/Profile.vue";
import OrderHistory from "@/views/OrderHistory.vue";
import ManageCustomers from '@/views/ManageCustomers.vue';
import CustomersView from '@/views/CustomersView.vue';
import OrderHistoryUser from '@/views/OrderHistoryUser.vue';
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
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
  },
  {
  path: '/OrderHistory',
    name: 'OrderHistory',
    component: OrderHistory,
  },
  {
  path: '/ManageCustomers',
    name: 'ManageCustomers',
    component: ManageCustomers,
  },
  {
  path: '/CustomersView/:id',
    name: 'CustomersView',
    component: CustomersView,
    props: true,
  },
  {
  path: '/OrderHistoryUser/:id',
    name: 'OrderHistoryUser',
    component: OrderHistoryUser,
    props: true,
  },
      
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  const publicRoutes = ['Coffee', 'SignUp', 'Home', 'Login', 'CoffeeView'];
  const adminOnlyRoutes = ['ManageCoffee', 'ManageCustomers', 'OrderHistoryUser', 'EditProduct', 'AddProduct'];
  const routeExists = router.getRoutes().some((route) => route.name === to.name);

  if (!routeExists) {
    next({ name: 'Home' }); 
    return;
  }

  if (!userStore.user) {
    await userStore.fetchUser(); 
  }

  if (publicRoutes.includes(to.name)) {
    next(); 
  } else {
    if (!userStore.user) {
      next({ name: 'Login' }); 
    } else {
      if (adminOnlyRoutes.includes(to.name) && !userStore.user.isSuperAdmin) {
        next({ name: 'Home' }); 
      } else {
        next();
      }
    }
  }
});

export default router;
