import Vue from 'vue';

import AvatarsApi from '@/core/api/AvatarsApi';

const LOAD_PER_PAGE = 2;

export default {
  state: {
    avatars: [],
    loadingOffset: 0,
    isEndOfAvatarsList: false,
  },
  actions: {
    async fetchAvatars(context) {
      const limit = context.state.loadingOffset + LOAD_PER_PAGE;
      const avatars = await AvatarsApi.fetchAvatars(limit);
      const isEndOfList = context.getters.allAvatars.length === avatars.length;

      context.commit('updateAvatars', avatars);
      context.commit('updateLoadingOffset', limit);
      context.commit('setIsEndOfList', isEndOfList);
    },
    async fetchAvatar(context, id) {
      const avatar = await AvatarsApi.fetchAvatar(id);

      context.commit('updateAvatars', avatar);
    },
  },
  mutations: {
    updateAvatars(state, avatars) {
      avatars.forEach((avatar) => {
        const stateAvatarIndex = state.avatars.findIndex((item) => item.id === avatar.id);

        if (stateAvatarIndex > -1) {
          Vue.set(state.avatars, stateAvatarIndex, avatar);
        } else {
          state.avatars.push(avatar);
        }
      });
    },
    updateLoadingOffset(state, offset) {
      state.loadingOffset = offset;
    },
    setIsEndOfList(state, value) {
      state.isEndOfAvatarsList = value;
    },
  },
  getters: {
    allAvatars({ avatars }) {
      return avatars.sort((a, b) => (a.id - b.id));
    },
    avatarById({ avatars }) {
      return (id) => avatars.find((item) => item.id === id);
    },
    isEndOfAvatarsList({ isEndOfAvatarsList }) {
      return isEndOfAvatarsList;
    },
  },
};
