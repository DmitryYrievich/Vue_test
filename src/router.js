import Vue from 'vue';
import VueRouter from 'vue-router';

import Avatars from '@/components/Avatars.vue';
import AvatarPage from '@/components/AvatarPage.vue';
import DefaultAvatarPage from '@/components/DefaultAvatarPage.vue';

Vue.use(VueRouter);

const routes = [{
  name: 'home',
  path: '/',
},
{
  path: '/avatars',
  component: Avatars,
  children: [
    {
      name: 'avatars',
      path: '',
      component: DefaultAvatarPage
    },
    {
    name: 'avatar-page',
    path: ':id',
    component: AvatarPage,
    props: (route) => ({
      ...route.params,
    }),
  }
  ],
},
];

export default new VueRouter({
  routes,
});
