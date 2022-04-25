import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tcp',
    name: 'tcp',
    component: () => import(/* webpackChunkName: "about" */ '@/views/TCPView.vue')
  },
  {
    path: '/udp',
    name: 'udp',
    component: () => import(/* webpackChunkName: "about" */ '@/views/UDPView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
