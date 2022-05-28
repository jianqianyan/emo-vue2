<template>
  <div class="right-nav">
    <div class="user-box">
      <div v-for="(item, index) in navList" :key="index" class="nav-son">
        <div v-if="user != ''" @click="turnTo(index)">
          <div class="img-box">
            <img :src="user" alt="">
          </div>
        </div>
        <div v-else @click="turnTo(index)">
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div class="up-box">
      <div class="nav-son" style="float: right">
        <button class="base-button" @click="turnContribution()">投稿</button>
      </div>
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
          link: "/login",
        },
      ],
      user: this.$store.state.user_path
    };
  },
  methods: {
    turnContribution() {
      this.$router.push({
        path: "/contribution",
      });
    },
    turnTo(index){
      let link = this.navList[index].link;
      if(this.user != ""){
        link = "/center";
      }
      this.$router.push({
        path: link
      })
    }
  },
};
</script>

<style scoped>
.right-nav {
  width: 100%;
  height: 40px;
  font-size: 14px;
  text-align: center;
}
.user-box {
  width: 80%;
  float: left;
  height: 40px;
  display: flex;
}
.up-box {
  width: 20%;
  float: left;
  height: 40px;
}
.nav-son {
  flex: 1;
  height: 40px;
  max-width: 60px;
}
.nav-son button {
  margin-top: 6px;
  width: 60px;
  border-radius: 5px;
}
.img-box{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* border: 1px solid; */
  margin-top: 3px;
  overflow: hidden;
}
.img-box img{
  width: 100%;
}
</style>