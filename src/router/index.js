import Vue from 'vue';
import Router from 'vue-router';
import App from 'App.vue';
import goods from 'components/goods/goods';

Vue.use(Router);

let routes = [
  {
    path: '/',
    name: 'index',
    component: App
  },
  {
    path: '/goods',
    name: 'goods',
    component: goods
  }
];

export default new Router({
  routes
});
