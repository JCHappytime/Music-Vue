import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import vuetify from 'vuetify'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from '@/i18n';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  i18n,
  // vuetify,
  render: h => h(App)
}).$mount('#app')
