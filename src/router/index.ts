import { createRouter, createWebHistory } from 'vue-router'
import { ElMessage } from 'element-plus'
import routes from './routes'

const router = createRouter({
  routes,
  history: createWebHistory()
})

const whitePath = ['/login']

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('token') && whitePath.indexOf(to.path) === -1) {
    // 如果用户未登录且要访问的路径不是白名单路径，则跳转到登录页面
    ElMessage({ message: '请先登录', type: 'warning' })
    next('/login')
  } else {
    next()
  }
})

export default router