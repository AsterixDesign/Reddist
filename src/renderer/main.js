import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'
import Filters from 'vue2-filters'
import { sync } from 'vuex-router-sync'

import App from './App'
import router from './router'
import store from './store'

Vue.use(Vuetify)
Vue.use(Filters)
sync(store, router)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
