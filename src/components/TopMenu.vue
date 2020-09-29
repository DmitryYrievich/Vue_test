<template>
  <ul class="top-menu">
    <RouterLink tag="li" to="/" class="top-menu__item">Home</RouterLink>
    <RouterLink tag="li" to="/avatars" class="top-menu__item">Avatars</RouterLink>
  </ul>
</template>

<style lang="scss" scoped>
.top-menu {
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  background-color: rgb(196, 171, 201);

  &__item {
    color: #610661;
    cursor: pointer;

    &:hover,
    &.router-link-exact-active {
      color: rgb(255, 255, 255);
    }
  }
}
</style>
