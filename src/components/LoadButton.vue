<template>
  <button class="load-button" @click="loadAvatar">Load more</button>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["oneAvatar"]),
    ...mapGetters(["allAvatars"]),
  },
  async created() {
    this.fetchOneAvatar();
    this.fetchAvatars();
  },
  methods: {
    loadAvatar() {
      if (this.allAvatars.length < this.oneAvatar.length) {
        this.allAvatars.push(this.oneAvatar[this.allAvatars.length]);
      }
    },
    ...mapActions(["fetchOneAvatar"]),
    ...mapActions(["fetchAvatars"]),
  },
};
</script>

<style lang="scss" scoped>

</style>
