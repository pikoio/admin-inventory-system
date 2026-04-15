import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import {createRouter, RouterLink, RouterView} from "vue-router";
import {router} from "@/router/index.js";



const pinia = createPinia()
const app = createApp(App)



app.use(router)
app.use(pinia)
app.mount('#app')
