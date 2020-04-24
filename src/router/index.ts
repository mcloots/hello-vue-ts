import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

//Bootstrap component Vue
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import HelloWorld from '@/components/HelloWorld.vue';
import NavBar from '@/components/Navigation/NavBar.vue';
import Register from '@/components/Authentication/Register.vue';
import Dashboard from '@/components/Dashboard/Dashboard.vue';

// import Login from '@/components/Authentication/Login.vue';

Vue.component("nav-bar", NavBar);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld,
    meta: { title: 'Hello World!' }
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: 'Login' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/Authentication/Login.vue')
  },
  {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: { title: 'Register' }
  },
  {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { title: 'Dashoard' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

  // Extra route voor about component (lazy loading)
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
