<template>
  <div class="avatars">
    <AvatarCard v-for="avatar in allAvatars" :key="avatar.id" />
    <RouterView />
  </div>
</template>

<script>
import AvatarCard from "@/components/AvatarCard.vue";

import { mapActions, mapGetters } from "vuex";

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