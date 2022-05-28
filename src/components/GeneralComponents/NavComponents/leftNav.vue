<template>
  <div class="left-nav">
    <div v-for="(item, index) in navList" :key="index" class="nav-son" @click="turnTo(item.link)">
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
          link: "/index",
        }
      ],
    };
  },
  methods: {
    turnTo(link){
      this.$router.push({
        path: link
      })
    },
  }
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
  max-width: 60px;
}
</style>