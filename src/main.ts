import { createApp } from "vue";
import App from "./App.vue";
import router from './router'

// 引入样式重置文件
import 'reset.css'
import 'element-plus/dist/index.css'
import '@/assets/style/base.scss'

const app = createApp(App);

app.use(router)

app.mount("#app");
