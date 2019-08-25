<template>
  <div class="home">
    home
    <button @click="goToMenus" class="btn btn-primary">路由跳转</button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    goToMenus() {
      // 跳转到上一个浏览的页面
      this.$router.go(-1);

      // 指定替换的地址
      this.$router.replace("/menus");

      // 指定替换某个路由的name
      this.$router.replace({ name: "menus" });

      // 指定跳转到某个路由
      this.$router.push("/menus");
      this.$router.push({ name: "menus" });
    }
  }
};
</script>
