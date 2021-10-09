import './assets/styles/main.scss'
import initAxios from './services/axios.js'
import initValidationRules from './services/validationRules.js'

import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

initAxios()
initValidationRules()

Vue.use(VeeValidate)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
