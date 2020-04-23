import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/Home')
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('@/pages/city/City')
  }
]

const router = new VueRouter({
  routes
})

export default router
