import { createApp } from "vue"
import router from "./router"
import App from './App.vue'
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
// 导入重置样式表
import './assets/main.scss'
import store from "./store/index";
import { Lazyload } from "vant";
const app = createApp(App)
app.use(ElementPlus, { size: 'large', zIndex: 3000 })
app.use(router)
app.use(store)
// 注册时设置`lazyComponent`选项
app.use(Lazyload, {
    lazyComponent: true,
});

app.mount('#app')