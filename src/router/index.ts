import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home/Home-Page';
import About from '@/views/About';
import VIP from '@/views/MyVIP/No-VIP';
import MyMusic from '@/views/My-Music';
import Translation from '@/views/Translation';

Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/vip',
      name: 'VIP',
      component: VIP,
    },
    {
      path: '/myMusic',
      name: 'myMusic',
      component: MyMusic,
    },
    {
      path: '/translation',
      name: 'translation',
      component: Translation,
    },
  ],
})

// const routes: Array<RouteConfig> = [
//   {
//     path: '/home',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: About
//   },
//   {
//     path: '/vip',
//     name: 'VIP',
//     component: VIP,
//   },
// ]

// const router = new VueRouter({
//   routes,
// })

// export default router;
