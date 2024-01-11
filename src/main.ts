import { createApp } from "vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from "./App.vue";
import router from './router'
import { createPinia } from 'pinia'

// 引入样式重置文件
import 'reset.css'
import 'element-plus/dist/index.css'
import '@/assets/style/base.scss'
import '@/assets/style/element.scss'

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia())
app.use(router)

app.mount("#app");
