<template>
  <router-link to="/avatar-item">Home>
    <div class="avatar-card" v-for="avatar in allAvatars" :key="avatar.id">
      <h2>{{ avatar.name }}</h2>
      <p>{{ avatar.username }}</p>
    </div>
  </router-link>
</template> 
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  async created() {
    this.fetchAvatars();
  },
  computed: mapGetters(["allAvatars"]),
  methods: {
    ...mapActions(["fetchAvatars"]),
  },
};
</script>
<style lang="scss" scoped>
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
</style>