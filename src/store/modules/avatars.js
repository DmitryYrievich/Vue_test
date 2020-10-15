export default {
  state: {
    avatars: [],
  },
  actions: {
    async fetchAvatars(context) {
      const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=8');
      const avatars = await res.json();

      context.commit('updateAvatars', avatars);
    },
    async fetchOneAvatar(context) {
      const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=8');
      const avatar = await res.json();
      const oneAvatar =  avatar.map(function (elem) {
        return elem;
      });
      context.commit('updateOneAvatar', oneAvatar);
    },
  },
  mutations: {
    updateAvatars(state, avatars) {
      state.avatars = avatars;
      avatars.length = 4;
    },
    updateOneAvatar(state, oneAvatar) {
      state.oneAvatar = oneAvatar;
    },
  },
  getters: {
    allAvatars({
      avatars
    }) {
      return avatars;
    },
    avatarById({
      avatars
    }) {
      return (id) => avatars.find((item) => item.id === id);
    },
    oneAvatar(state) {
      return state.oneAvatar
    }
  },
};
