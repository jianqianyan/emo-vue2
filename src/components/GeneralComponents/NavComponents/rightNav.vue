<template>
  <div class="right-nav">
    <div v-for="(item, index) in navList" :key="index" class="nav-son">
      <p>{{ item.name }}</p>
    </div>
    <div class="nav-son">
        <button>投稿</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "rightNav",
  data() {
    return {
      navList: [
        {
          name: "登录",
          link: "",
        },
        {
          name: "大会员",
          link: "",
        },
        {
          name: "消息",
          link: "",
        },
        {
          name: "动态",
          link: "",
        },
        {
          name: "收藏",
          link: "",
        },
        {
          name: "历史",
          link: "",
        },
        {
          name: "创作中心",
          link: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.right-nav {
  width: 100%;
  height: 40px;
  display: flex;
  font-size: 14px;
  text-align: center;
}
.nav-son {
  flex: 1;
  height: 40px;
}
.nav-son button{
  margin-top:10px;
}
</style>