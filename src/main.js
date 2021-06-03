import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/tailwind.css'
import VueAnimateOnScroll from 'vue-animate-onscroll'




axios.defaults.baseURL = 'https://bebras-api.herokuapp.com/'
createApp(App)
    .use(router)
    .use(VueAnimateOnScroll)
    .mount('#app')
