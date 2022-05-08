<template>
  <div class="recommend-video">
    <div class="left-box">
      <img :src="message.cover" alt="" />
    </div>
    <div class="right-box">
      <div class="video-title">
        {{ message.name }}
      </div>
      <div class="up-name">
        {{ message.up_name }}
      </div>
      <div class="video-message"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommendVideo",
  props: {
    videoId: {
      type: String,
    },
  },
  created() {
    this.getMessage(this.videoId);
  },
  data() {
    return {
      message: {
        cover:""
      },
    };
  },
  methods: {
    // 获取与视频有关信息
    getMessage(url) {
      //   console.log(url);
      this.$axios({
        url: "/getVideo?id=" + url,
      })
        .then((res) => {
          this.message = res.data.data.message;
          this.message.cover =
            this.$store.state.image_base + this.message.cover;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 跳转到视频详情页
    seeVideo(message) {
      // message = {name: "aaa"};
      this.$router.push({
        path: "/theVideo",
        query: message,
      });
    },
  },
};
</script>

<style scoped>
.recommend-video {
  width: 100%;
  height: 100px;
  /* background: red; */
}
.left-box {
  width: 40%;
  height: 100px;
  float: left;
  border-radius: 10px;
  overflow: hidden;
}
.left-box img {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
}
.right-box {
  width: 55%;
  height: 100px;
  float: left;
  margin-left: 5%;
}
.video-title{
    font-size: 14px;
}
.up-name{
    font-size: 10px;
}
</style>