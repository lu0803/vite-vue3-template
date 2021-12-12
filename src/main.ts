import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

import 'element-plus/dist/index.css'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')

// 原文件
// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
