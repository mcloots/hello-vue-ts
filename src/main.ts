import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/registerServiceWorker'
import * as firebase from "firebase";
import store from '@/store';

//set page title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
})

Vue.config.productionTip = false

const configOptions = {
  apiKey: "AIzaSyAzhtXgI-M0_UcTXpJbBYfr_xmg0fzu6S8",
  authDomain: "watgebeurter-7cf8c.firebaseapp.com",
  databaseURL: "https://watgebeurter-7cf8c.firebaseio.com",
  projectId: "watgebeurter-7cf8c",
  storageBucket: "watgebeurter-7cf8c.appspot.com",
  messagingSenderId: "351576453062",
  appId: "1:351576453062:web:9d1b56440aae21cea0ccc7",
  measurementId: "G-XVTB5SEGG6"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
