import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './core/services/store'
import vuetify from './plugins/vuetify'
import ApiService from './core/services/api.service'

Vue.config.productionTip = false

ApiService.init()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
