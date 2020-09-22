<template>
  <div class="avatars">
    <AvatarCard />
  </div>
</template>

<script> 
import AvatarCard from "@/components/AvatarCard.vue";
export default {
  components: {
    AvatarCard,
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