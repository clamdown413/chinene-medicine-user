import { createApp } from "vue"
import router from "./router"
import App from './App.vue'

// 导入重置样式表
import './assets/main.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')