import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from "../views/Home.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/loading.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: '/search',
        name: 'search',
        component: () => import('../views/components/search.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/dashborad',
    name: 'Dashborad',
    component: () => import('../views/dashborad.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
