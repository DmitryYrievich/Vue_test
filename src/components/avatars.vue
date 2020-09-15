<template>
  <div class="avatars" id="avatars">
    <div class="avatar-card" v-for="avatar in allAvatars" :key="avatar.id">
      <h2>{{ avatar.name }}</h2>
      <p>{{ avatar.username }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "avatars",
  computed: mapGetters(["allAvatars"]),
  methods: mapActions(["fetchAvatars"]),
  async mounted() {
    this.fetchAvatars();
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