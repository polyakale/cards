import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gunstable',
      name: 'gunstable',
      component: () => import('../views/GunsTable.vue'),
    },
    {
      path: '/guncards',
      name: 'guncards',
      component: () => import('../views/GunCards.vue'),
    },
  ]
})

export default router
