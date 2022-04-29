<template>
  <div class="left-nav">
    <div v-for="(item, index) in navList" :key="index" class="nav-son">
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftNav",
  data() {
    return {
      navList: [
        {
          name: "主站",
          link: "",
        },
        {
          name: "番剧",
          link: "",
        },
        {
          name: "游戏中心",
          link: "",
        },
        {
          name: "直播",
          link: "",
        },
        {
          name: "会员购",
          link: "",
        },
        {
          name: "漫画",
          link: "",
        },
        {
          name: "赛事",
          link: "",
        },
        {
          name: "下载app",
          link: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.left-nav {
  height: 40px;
  /* float: left; */
  /* width: 40%; */
  width: 100%;
  display: flex;
}
.nav-son {
  text-align: center;
  width: 55px;
  float: left;
  font-size: 13px;
  flex: 1;
}
</style>