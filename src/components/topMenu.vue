<template>
  <ul class="top-menu">
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/avatars">Avatars</router-link>
    </li>
  </ul>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.top-menu {
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  background-color: rgb(196, 171, 201);
  li {
    color: #610661;
    &:hover {
      color: rgb(255, 255, 255);
    }
  }
}
</style>
