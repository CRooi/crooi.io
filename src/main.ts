import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import TDesign from 'tdesign-vue-next'
import 'tdesign-vue-next/es/style/index.css'

createApp(App).use(router).use(TDesign).mount('#app')