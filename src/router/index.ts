import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({

 history: createWebHistory(import.meta.env.BASE_URL),
 routes: [
  {
   path: '/dashboard',
   name: 'dashboard',
   component: () => import('../views/DashboardPage.vue')
  }
 ]
})

export default router
