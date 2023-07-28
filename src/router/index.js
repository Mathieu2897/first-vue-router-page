import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import ('../views/HomeView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/NewsView.vue')
  },
  {
    path: '/games',
    name: 'games',
    component: () => import('../views/GamesView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/xbox',
    name: 'xbox',
    component: () => import('../views/XboxView.vue')
  },
  {
    path: '/playstation',
    name: 'playstation',
    component: () => import('../views/PlaystationView.vue')
  },
  {
    path: '/nintendo',
    name: 'nintendo',
    component: () => import('../views/NintendoView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
