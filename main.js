// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import App from 'App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import { formatDate } from 'common/js/date';

import './common/scss/index.scss';

/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.prototype.$http = axios; // 装载网络请求插件

const routers = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];

let router = new VueRouter({
  'linkActiveClass': 'active',
  routes: routers
});
let app = new Vue({
  template: '<App/>',
  components: { App },
  router
}).$mount('#app');
router.push('/goods');
// vue全局过滤器
Vue.filter('formatDate', function(time) {
  let date = new Date(time);
  return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
});
export default app;
