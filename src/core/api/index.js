const API_URL = 'https://jsonplaceholder.typicode.com';

export default {
  async fetch(route) {
    const res = await fetch(`${API_URL}/${route}`);
    const json = await res.json();

    return json;
  },
};

