<template>
  <div class="my-nav">
    <div class="left-box">
      <left-nav></left-nav>
    </div>
    <div class="center-box">
      <center-search></center-search>
    </div>
    <div class="right-box">
      <right-nav></right-nav>
    </div>
  </div>
</template>

<script>
import leftNav from "./NavComponents/leftNav.vue";
import rightNav from "./NavComponents/rightNav.vue";
import centerSearch from "./NavComponents/centerSearch.vue"
export default {
  name: "myNav",
  data() {
    return {};
  },
  components: {
    leftNav,
    rightNav,
    centerSearch
  },
};
</script>

<style scoped>
.my-nav {
  height: 40px;
  width: 100%;
  
  display: flex;
}
.left-box {
  /* background-color: red; */
  height: 40px;
  width: 420px;
  margin-left: 20px;
}
.center-box {
  height: 40px;
  float: left;
  flex: 1;
}
.right-box {
  /* background: blue; */
  width: 480px;
  margin-right: 20px;
  height: 40px;
}
</style>