import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import Event from '../views/Event.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts',
    // menggunakan lazy load agar meningkatkan performansi
    component: () => import(/* webpackChunkName: "about" */ '../views/Posts.vue')  
  },
  {
    path: '/about',
    name: 'About',

    // menggunakan lazy load agar meningkatkan performansi
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/events',
    name: 'Events',

    // menggunakan lazy load agar meningkatkan performansi
    component: () => import(/* webpackChunkName: "about" */ '../views/Events.vue')
  },
  {
    path: '/galery',
    name: 'Galery',

    // menggunakan lazy load agar meningkatkan performansi
    component: () => import(/* webpackChunkName: "about" */ '../views/Galery.vue')
  },
  {
    path: '/post/:post_slug',
    name: 'Post',
    component: Post
  },
  {
    path: '/event/:event_slug',
    name: 'Event',
    component: Event
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
