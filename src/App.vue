<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style lang="scss">
// 引入初始化样式
@import "@/style/main.scss";
@import "@/style/base.scss";
@import "@/style/public.scss";
#app {
  background: #eee;
  height: 100vh;
  overflow: hidden;
}
</style>
