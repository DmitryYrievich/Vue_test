import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import AppAvatars from './components/avatars';

let routes = [
  { name: 'home', path: '/'},
  { name: 'avatars', path: '/avatars', component: AppAvatars }
];

export default new VueRouter({
  routes
});