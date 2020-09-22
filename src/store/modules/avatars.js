export default {
  actions: {
    async fetchAvatars(context) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users?_limit=8"
      );
      const avatars = await res.json();
      context.commit('updateAvatars', avatars)
    }
  },
  state: {
    avatars: [], 
  },
  mutations: {
    updateAvatars(state, avatars) {
      state.avatars = avatars
    }
  },
  getters: {
    allAvatars(state) {
      return state.avatars
    }
  }
}
