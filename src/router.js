import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import AppAvatars from './components/Avatars';
import AvatarPage from './components/AvatarPage';

let routes = [{
    name: 'home',
    path: '/'
  },
  {
    name: 'avatars',
    path: '/avatars',
    component: AppAvatars,
    children: [{
      name: 'avatar-page',
      path: ':id',
      component: AvatarPage,
      props: (route: Route) => ({
        ...route.params
      })
    }]
  }
];

export default new VueRouter({
  routes
});
