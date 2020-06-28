import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/index.vue')
const Classify = () => import('../views/classify/index.vue')
const ShoppingTrollet = () => import('../views/shoppingTrolley/index.vue')
const Mine = () => import('../views/mine/index.vue')

Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      redirect: '/home'
    }, {
      path: '/home',
      component: Home
    }, {
      path: '/classify',
      component: Classify
    }, {
      path: '/shoppingTrolley',
      component: ShoppingTrollet
    }, {
      path: '/mine',
      component: Mine
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
