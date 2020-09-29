<template>
  <div class="avatars">
    <div class="avatars-list-container">
      <h1 class="avatars__title">Avatars</h1>
      <div class="avatars-list">
        <AvatarCard v-for="avatar in allAvatars" :avatar="avatar" :key="avatar.id" />
      </div>
    </div>
    <div class="avatars-details-container">
      <h2 class="avatars-details-title">Avatar detail info</h2>
      <RouterView />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import AvatarCard from '@/components/AvatarCard.vue';

export default {
  components: {
    AvatarCard,
  },
  async created() {
    this.fetchAvatars();
  },
  computed: {
    ...mapGetters(['allAvatars']),
  },
  methods: {
    ...mapActions(['fetchAvatars']),
  },
};
</script>

<style lang="scss" scoped>
.avatars {
  display: flex;
  padding: 1.6rem;

  &__title {
    margin: .8rem 0 1.6rem;
  }
}

.avatars-list-container {
  width: 50%;
}

.avatars-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
}

.avatars-details-container {
  margin-left: 1.6rem;
  flex: 1;
  border-left: .1rem solid gainsboro;
  padding-left: 1.6rem;
}

.avatars-details-title {
  font-size: 2.6rem;
  margin: 1.6rem 0;
}
</style>
