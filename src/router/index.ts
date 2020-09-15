import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
// import TaylorIntro from '../views/Taylor-Swift/introduce.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  }
  // {
  //   path: '/taylorIntro',
  //   name: 'Taylor',
  //   component: TaylorIntro
  // }
]

const router = new VueRouter({
  routes
})

export default router
