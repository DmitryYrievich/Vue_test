import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import AppAvatars from './components/Avatars';
import AvatarItem from './components/AvatarItem';

let routes = [
  { name: 'home', path: '/'},
  { name: 'avatars', path: '/avatars', component: AppAvatars },
  { name: 'avatarItem', path: '/avatarItem', component: AvatarItem }
];

export default new VueRouter({
  routes
});  