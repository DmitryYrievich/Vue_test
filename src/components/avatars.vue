<template>
  <div class="avatars">
    <AvatarCard v-for="avatar in allAvatars" :key="avatar.id" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AvatarCard from "./components/AvatarCard.vue";
export default {
  components: {
    AvatarCard,
  },
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
.avatars {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}  
</style>