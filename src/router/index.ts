import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import SubHome from '../views/Home/Home-Page.vue';
import About from '../views/About.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/subHome',
    name: 'SubHome',
    component: SubHome
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = new VueRouter({
  routes,
})

export default router;
