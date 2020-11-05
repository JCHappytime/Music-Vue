import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
// import SubHome from '@/views/Home/Home-Page';
import About from '@/views/About';
import VIP from '@/views/MyVIP/No-VIP';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  // {
  //   path: '/subHome',
  //   name: 'SubHome',
  //   component: SubHome
  // },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/vip',
    name: 'VIP',
    component: VIP,
  },
]

const router = new VueRouter({
  routes,
})

export default router;
