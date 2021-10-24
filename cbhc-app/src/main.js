import 'mutationobserver-shim'
import { createApp } from 'vue'
import './assets/css/styles.css'
import './assets/css/bootstrap.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')