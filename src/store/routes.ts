import { defineStore } from 'pinia'
import { RouteRecordRaw, useRouter } from 'vue-router'

export const useRouteStore = defineStore('route', () => {
  const router = useRouter()
  const modules = import.meta.glob('@/pages/**/*.vue')

  const loadPage = (component: string) => {
    return () => modules[component]
  }

  // 为路由添加组件
  const addRouteComponent = (routeList: RouteRecordRaw[]) => {
    return routeList.filter(i => {
      if (i.component) {
        i.component = loadPage(i.component)
        if (i.children && i.children.length) {
          addRouteComponent(i.children)
        }
        return true
      }
    })
  }

  // 添加路由
  const addRoute = (routes: RouteRecordRaw[]) => {
    let addRoutes = addRouteComponent(JSON.parse(JSON.stringify(routes)))
    addRoutes.forEach(i => {
      router.addRoute('layout', i)
    })
  }

  return { addRoute }

})