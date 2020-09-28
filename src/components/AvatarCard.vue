<template>
  <div>
    <RouterLink :to="{name: 'avatar-page', params: { id: avatar.id } }" class="avatar-card">
      <h2>{{ avatar.name }}</h2>
      <p>{{ avatar.username }}</p>
    </RouterLink>
  </div>
</template> 
<script>
export default {
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