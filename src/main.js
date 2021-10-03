import './assets/styles/main.scss'
import initAxios from './services/axios.js'
import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

initAxios()

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
