<template>
  <div id="app">
    <div class="container">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
// 第二课: 构建导航
import Header from "./components/Header";
export default {
  name: "App.vue",
  components: { Header }
};
</script>


<style>
</style>
