import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/tailwind.css'
import VueAnimateOnScroll from 'vue-animate-onscroll'




axios.defaults.baseURL = 'http://127.0.0.1:8000/'
createApp(App)
    .use(router)
    .use(VueAnimateOnScroll)
    .mount('#app')
