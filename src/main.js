import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import'mint-ui/lib/style.css'

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import {Swipe,SwipeItem} from "mint-ui"
import qs from 'qs'
import axios from 'axios'

Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);

Vue.config.productionTip = false
Vue.prototype.qs=qs
axios.defaults.withCredentials=true
Vue.prototype.axios=axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
