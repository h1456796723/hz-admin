import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import { createPinia } from 'pinia'

// 引入样式重置文件
import 'reset.css'
import 'element-plus/dist/index.css'
import '@/assets/style/base.scss'

const app = createApp(App);

app.use(router)
app.use(createPinia())

app.mount("#app");
