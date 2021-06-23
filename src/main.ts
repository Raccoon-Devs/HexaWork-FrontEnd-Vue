import Vue from 'vue'
import App from './infraestructura/App.vue'
import router from './infraestructura/router'
import vuetify from './infraestructura/plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
