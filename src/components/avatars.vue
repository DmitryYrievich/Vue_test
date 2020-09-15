<template>
  <div class="avatars" id="avatars">
    <div class="avatar-card" v-for="avatar in avatars" :key="avatar.id">
      <h2>{{ avatar.name }}</h2>
      <p>{{ avatar.username }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "avatars",
  data() {
    return {
      avatars: [],
    };
  },
  async mounted() {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users?_limit=8"
    );
    const avatars = await res.json();
    this.avatars = avatars;
  },
};
</script>

<style lang="scss" scoped>
.avatars {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .avatar-card {
    width: 24%;
    height: 8rem;
    border: 1px solid black;
    text-align: center;
    margin-top: 1%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>