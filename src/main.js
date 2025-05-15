import './assets/style/main.css'
import './assets/library/css/all.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App'

const pinia = createPinia();
const app = createApp(App);
app.use(pinia)
app.mount('#app')
