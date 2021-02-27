import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
//Nav是3个标签组成的组件


Vue.config.productionTip = false;

Vue.component('Nav', Nav);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
