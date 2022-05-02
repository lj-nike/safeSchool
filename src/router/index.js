import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from "../views/Home.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/login.vue')
  },
  {
    path: '/index',
    name: 'index',
    redirect: '/dataAnalyse',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: '/schedule',
        name: 'schedule',
        component: () => import('../views/pages/Schedule.vue')
      },
      {
        path: '/dangerAnalyse',
        name: 'dangerAnalyse',
        component: () => import('../views/pages/DangerAnalyse.vue')
      },
      {
        path: '/dataAnalyse',
        name: 'dataAnalyse',
        component: () => import('../views/pages/DataAnalyse.vue')
      },
      {
        path: '/dashborad',
        name: 'dashborad',
        component: () => import('../views/pages/Dashborad.vue')
      },
      {
        path: '/routeSetting',
        name: 'routesSetting',
        component: () => import('../views/pages/RoutesSetting.vue')
      },
      {
        path: '/missions',
        name: 'missions',
        component: () => import('../views/pages/RoutesMissions.vue')
      },
      {
        path: '/plans',
        name: 'routesPlan',
        component: () => import('../views/pages/RoutesPlan.vue')
      },
      {
        path: '/terminalManagement',
        name: 'terminalDevice',
        component: () => import('../views/pages/TerminalDevice.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login.vue')
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('../components/sign.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
