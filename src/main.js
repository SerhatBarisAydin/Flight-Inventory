import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./assets/style.css"
import store from './store.js'
import storeManagement from './pages/StockManagement/store.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import appAxios from './utils/appAxios.js'


const app = createApp(App)

app.use(storeManagement)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.config.globalProperties.$appAxios = appAxios;
app.mount('#app')


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }