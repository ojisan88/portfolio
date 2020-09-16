import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import thankyou from '../views/thankyou.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/thankyou',
    name: 'thankyou',
    component:thankyou
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
