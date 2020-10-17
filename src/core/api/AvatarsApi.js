import api from '@/core/api';

export default {
  async fetchAvatars(limit) {
    return api.fetch(`users?_limit=${limit}`);
  },
  async fetchAvatar(id) {
    return api.fetch(`users?id=${id}`);
  },
};
