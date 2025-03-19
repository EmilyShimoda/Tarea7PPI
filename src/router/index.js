import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from "firebase/auth";
import HomeView from '../views/HomeView.vue'
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'
import Binary from '@/views/Binary.vue'
import ChatBot from '@/components/ChatBot.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Dashboard,
      meta: {
        authRequired: true,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignUp,
    },
    {
      path: '/binary',
      name: 'Binary',
      component: Binary,
      meta: {
        authRequired: true,
      },
    },
    {
      path: '/chatbot',
      name: 'ChatBot',
      component: ChatBot,
      meta: {
        authRequired: true,
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (to.matched.some(record => record.meta.authRequired)) {
    if (user) {
      next();
    } else {
      // alert('You must be logged in to see this page');
      next({
        path: '/',
      });
    }
  } else {
    next();
  }
});

export default router
