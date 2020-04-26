import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

//Bootstrap component Vue
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import HelloWorld from '@/components/HelloWorld.vue';
import NavBar from '@/components/Navigation/NavBar.vue';
import Dashboard from '@/components/Dashboard/Dashboard.vue';
import Timeline from '@/components/Timeline/Timeline.vue';

// import Login from '@/components/Authentication/Login.vue';


// timeline growthbunker
import VueTimeline from "@growthbunker/vuetimeline";

Vue.component("nav-bar", NavBar);
Vue.use(VueTimeline, {
  // Specify the theme to use: dark or light (dark by default).
  theme: "light"
});
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
    component: () => import(/* webpackChunkName: "about" */ '@/components/Authentication/LoginRegister.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: { title: 'Register' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/Authentication/LoginRegister.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    meta: { title: 'Logout' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/Authentication/Logout.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { title: 'Dashoard' }
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: Timeline,
    meta: { title: 'Timeline' }
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
