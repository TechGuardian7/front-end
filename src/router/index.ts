import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/registroEntrada',
      name: 'registroEntrada',
      component: () => import('@/views/RegistroEntrada.vue')
    },
    {
      path: '/registroSaida',
      name: 'registroSaida',
      component: () => import('@/views/RegistroSaida.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/DashboardPage.vue')
    },
    {
      path: '/relatorios',
      name: 'relatorios',
      component: () => import('@/views/Relatorios.vue')
    },
    {
      path: '/controle-acesso',
      name: 'controle-acesso',
      component: () => import('@/views/ControleAcesso.vue')
    },
    {
      path: '/monitor-acesso',
      name: 'monitor-acesso',
      component: () => import('@/views/MonitorAcesso.vue')
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('@/views/Cadastro.vue')
    },
    {
      path: '/configuracao',
      name: 'configuracao',
      component: () => import('@/views/Configuracao.vue')
    }
  ]
})

export default router
