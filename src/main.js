import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import VueAnimateOnScroll from 'vue-animate-onscroll'

createApp(App)
.use(router)
.use(VueAnimateOnScroll)
.mount('#app')


