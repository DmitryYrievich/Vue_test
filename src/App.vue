<template>
  <div id="app">
    <TopMenu />
    <RouterView />
  </div>

</template>

<script>
import TopMenu from '@/components/TopMenu.vue';

export default {
  components: {
    TopMenu,
  },
};
</script>

<style lang="scss">
@import "~normalize.css/normalize.css";

html {
  font-size: 62.5%;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  font-size: 1.4rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
