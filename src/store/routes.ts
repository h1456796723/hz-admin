import { defineStore } from 'pinia'
import { RouteRecordRaw, useRouter, useRoute } from 'vue-router'
import { MyRoutesRecordRaw } from '@/types'

export const useRouteStore = defineStore('route', () => {
  const router = useRouter()
  const route = useRoute()
  const modules = import.meta.glob('@/pages/**/*.vue')
  const routesSession = window.sessionStorage.getItem('routes') || []

  const loadPage = (componentPath: string) => {
    return () => modules[componentPath]
  }

  // 为路由添加组件
  const addRouteComponent = (routeList: MyRoutesRecordRaw[]) => {
    return routeList.filter(i => {
      if (i.componentPath) {
        i.component = loadPage(i.componentPath)
        if (i.children && i.children.length) {
          addRouteComponent(i.children)
        }
        return true
      }
    })
  }

  // 添加路由
  const addRoute = (routes: RouteRecordRaw[] = routesSession as RouteRecordRaw[]) => {

    let addRoutes = addRouteComponent(JSON.parse(JSON.stringify(routes)))
    addRoutes.forEach(i => {
      router.addRoute('layout', i)
    })
  }

  return { addRoute }

})