import './assets/style/main.css'
import '@/assets/library/css/all.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App'
import router from '.'
const app = createApp(App)
app.use(createPinia())

app.use(router)
app.mount('#app')
