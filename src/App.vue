<template>
  <div id="app">
    <top-menu></top-menu>
    <router-view></router-view>
    <!-- <avatars></avatars> -->
  </div>
  
</template>

<script>
import topMenu from "./components/topMenu.vue";
import avatars from "./components/avatars.vue";
import normalise from "./assets/styles.scss";
export default {
  name: "App",
  components: {
    topMenu,
    avatars,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
h1,
h2,
h3 {
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
}
</style>
