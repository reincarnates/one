import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Gin from 'vue-resource'

Vue.config.productionTip = false

Vue.use(Gin)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
