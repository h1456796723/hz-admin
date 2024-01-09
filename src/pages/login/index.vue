<template>

  <div class="container">
    <div class="login-box">
      <h2 class="title">{{ setting.title }}</h2>
      <div class="login-form">
        <el-form
          label-width="90px"
          :model="loginForm"
          style="max-width: 460px"
          ref="formRef"
          :rules="rules"
        >
          <el-form-item label="用户名：" prop="username">
            <el-input v-model="loginForm.username" />
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input v-model="loginForm.password" type="password" />
          </el-form-item>
          <el-form-item >
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="default" @click="reset">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>

</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { loginApi, getRoutesApi } from '@/api'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import setting from '@/setting'
import { useRouteStore } from '@/store/routes'

const router = useRouter()
const routeStore = useRouteStore()
const formRef = ref<FormInstance>()

const rules:FormRules  = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}

const loginForm = reactive({
  username: '',
  password: ''
})

const login = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      loginApi(loginForm).then((res: any) => {
        if (res.code === 200) {
          localStorage.setItem('token', res.data.token)
          getRoutesApi().then((result: any) => {
            routeStore.addRoute(result.data)
            router.replace({name:'menu'})
          })
        } else {
          ElMessage({ message: '账号或密码错误', type: 'error' })
        }
      })
    }
  })
}

const reset = () => {
  loginForm.username = ''
  loginForm.password = ''
  formRef.value?.resetFields()
}

</script>

<style lang="scss" scoped>
.container{
  width: 100vw;
  height: 100vh;
  background: url('@/assets/image/login_bg.gif') no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-box{
    width: 500px;
    height: 300px;
    background: #fff;
    position: absolute;
    border-radius: 10px;
    box-shadow: 0 0 10px #ccc;
    box-sizing: border-box;
    padding: 20px 12px;
    .title{
      font-weight: bold;
      text-align: center;
      font-size: 26px;
    }
    .login-form{
      margin-top: 40px;
    }
  }
}
</style>