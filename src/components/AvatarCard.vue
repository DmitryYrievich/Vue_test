<template>
  <RouterLink :to="{name: 'avatar-page', params: { id: `${avatar.id}` } }" class="avatar-card">
    <h3 class="avatar-card__name">{{ avatar.name }}</h3>
    <div class="avatar-card__username">@{{ avatar.username }}</div>
  </RouterLink>
</template>
<script>
export default {
  props: {
    avatar: {
      type: Object, 
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.avatar-card {
  border: 1px solid gainsboro;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 1.6rem;
  background: #ececec;
  padding: .8rem;
  color: #212121;

  &.router-link-exact-active {
    border-color: #5c6cff;
    background: #e5eaff;
    cursor: default;
  }

  &__name {
    margin: .8rem 0;
    font-size: 1.8rem;
  }

  &__username {}
}
</style>
