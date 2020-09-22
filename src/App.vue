<template>
  <div id="app">
    <TopMenu />
    <routerView />
  </div> 
  
</template>

<script>
import TopMenu from "@/components/TopMenu.vue";
import normalise from "./assets/styles.scss";
export default {
  components: {
    TopMenu,
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
