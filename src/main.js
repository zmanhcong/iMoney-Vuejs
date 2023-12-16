import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/tailwind.css'
import './assets/styles/global.css' //override tailwind if need

const app = createApp(App)

app.use(router)

app.mount('#app')
