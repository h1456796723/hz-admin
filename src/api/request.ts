import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
const router = useRouter()

const request = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  timeout: 5000
})

export type Response = {
  code: number,
  success: boolean,
  data: any,
  message: string
}

request.interceptors.request.use(config => {
  nProgress.start()
  if (window.localStorage.getItem('token')) {
    config.headers.Authorization = window.localStorage.getItem('token')
  }
  return config
}, err => {
  ElMessage({ message: '请求超时', type: 'error' })
  return Promise.reject(err)
})

request.interceptors.response.use(response => {
  nProgress.done()
  switch (response.data.code) {
    case 401:
      // 登录失效
      if (window.localStorage.getItem('token')) {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('expire')
      }
      ElMessage({ message: '登录失效', type: 'error' })
      router.replace('/login')
      break
    case 404:
      ElMessage({ message: response.data.message || '请求的资源不存在', type: 'error' })
      break
    case 500:
      ElMessage({ message: response.data.message || '服务器内部错误', type: 'error' })
      break
    default:
      return response.data
  }
  return response.data
}, err => {
  ElMessage({ message: '网络错误', type: 'error' })
  return Promise.reject(err)
})

export default request