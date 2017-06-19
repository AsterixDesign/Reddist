import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import { DefaultLayout } from '../layouts'
import { HomePage } from '../pages'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'Home Page',
          component: HomePage
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
