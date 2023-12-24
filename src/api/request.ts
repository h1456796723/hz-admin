import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()

const request = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 5000
})

request.interceptors.request.use(config => {
  if (window.localStorage.getItem('token')) {
    config.headers.Authorization = window.localStorage.getItem('token')
  }
  return config
}, err => {
  ElMessage({ message: '请求超时', type: 'error' })
  return Promise.reject(err)
})

request.interceptors.response.use(response => {
  switch (response.data.code) {
    case 401:
      // 登录失效
      if (window.localStorage.getItem('token')) {
        window.localStorage.removeItem('token')
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