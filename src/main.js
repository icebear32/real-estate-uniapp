import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/index.css'
import '@/assets/css/common.css'
import '@/assets/font/iconfont.css'
import '@/assets/font/iconfont'

createApp(App).use(router).mount('#app')
