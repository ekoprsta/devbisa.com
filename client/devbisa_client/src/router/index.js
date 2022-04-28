import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue')
  },
  {
    path: '/projects',
    name: 'ProjectPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectPage.vue')
  },
  {
    path: '/join',
    name: 'JoinPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/JoinPage.vue')
  },
  {
    path: '/contactus',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUs.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
