import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

//set page title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
