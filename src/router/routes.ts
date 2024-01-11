import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/home/index.vue'),
        meta: { title: '首页', icon: 'House' }
      },
      {
        path: '/right',
        name: 'right',
        meta: { title: '权限管理', icon: 'Lock' },
        children: [
          {
            path: '/right/page',
            name: 'page',
            component: () => import('@/pages/rightMange/page/index.vue'),
            meta: { title: '页面权限', icon: 'Document' }
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue')
  }
]

export default routes