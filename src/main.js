import Vue from 'vue'
import App from './App'
import store from '@/store/index.js'
import '@/utils/prototype'
import '@/utils/filter'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
