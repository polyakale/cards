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
      path: '/table',
      name: 'table',
      component: () => import('../views/Table.vue'),
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../views/Card.vue'),
    }
  ]
})

export default router
