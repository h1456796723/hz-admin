import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    children: []
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue')
  }
]

export default routes