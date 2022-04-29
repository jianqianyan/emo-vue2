<template>
  <div class="index-menu">
    <div class="menu-left"><menu-left></menu-left></div>
    <div class="menu-center"><menu-center></menu-center></div>
    <div class="menu-rigth"><menu-right></menu-right></div>
  </div>
</template>

<script>
import menuLeft from "./MenuComponents/menuLeft.vue";
import menuCenter from "./MenuComponents/menuCenter.vue"
import menuRight from "./MenuComponents/menuRight.vue"
export default {
  name: "index-menu",
  components: {
    menuLeft,
    menuCenter,
    menuRight
  }
};
</script>

<style scoped>
.index-menu{
  width: 100%;
  height: 80px;
  display: flex;
  float: left;
  /* background: red; */
}
.menu-left{
  width: 180px;
  float: left;
}
.menu-center{
  width: 920px;
  float: left;
  height: 80px;
  /* background: red; */
}
.menu-rigth{
  flex:1
}
</style>