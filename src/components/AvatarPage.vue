<template>
<div v-if="avatar" class="avatar-page">
  <h2 class="avatar-page__title">{{avatar.name}}</h2>
  <ul class="avatar-page-section">
    <li class="avatar-page-section__item">
      <div class="avatar-page-section__title">Username</div>
      <div class="avatar-page-section__value">@{{avatar.username}}</div>
    </li>
    <li class="avatar-page-section__item">
      <div class="avatar-page-section__title">E-mail</div>
      <div class="avatar-page-section__value">{{avatar.email}}</div>
    </li>
    <li class="avatar-page-section__item">
      <div class="avatar-page-section__title">Phone</div>
      <div class="avatar-page-section__value">{{avatar.phone}}</div>
    </li>
    <li class="avatar-page-section__item">
      <div class="avatar-page-section__title">Address</div>
      <div class="avatar-page-section__value">{{fullAddress}}</div>
    </li>
  </ul>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['avatarById']),
    avatar() {
      return this.avatarById(Number(this.id));
    },
    fullAddress() {
      if (!this.avatar) {
        return '';
      }
      const { address } = this.avatar;

      return `${address.city}, ${address.zipcode}, ${address.street} str., ${address.suite}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-page {

  &__title {
    margin: .8rem 0;
  }
}

.avatar-page-section {

  &__item {
    width: 100%;
    padding: .8rem 0;
    margin: 0;
  }

  &__title {
    font-weight: 600;
  }

  &__value {}
}
</style>
