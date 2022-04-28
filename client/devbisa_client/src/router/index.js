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
  },
  {
    path: '/myproject',
    name: 'MyprojectPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyprojectPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/myproject' && !localStorage.accesstoken) next({ path: '/join', query: { error: 'please login first' } })
  if (to.path === '/join' && localStorage.accesstoken) next({ path: '/', query: { error: 'already log in' } })
  else next()
})

export default router
