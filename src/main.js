import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import {createRouter, RouterLink, RouterView} from "vue-router";


const router = createRouter()
const pinia = createPinia()
const app = createApp(App)

app.component('RouterView', RouterView)
    .component('RouterLink', RouterLink)


app.use(router)
app.use(pinia)
app.mount('#app')
