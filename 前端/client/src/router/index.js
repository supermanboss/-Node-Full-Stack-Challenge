import Vue from 'vue'
import VueRouter from 'vue-router'

import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/test',
    name: 'Test',
    component: Test
  },

]

const router = new VueRouter({
  routes
})

export default router
