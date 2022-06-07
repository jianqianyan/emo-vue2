// 视频盒子
<template>
  <div class="video-box-body" @click="seeVideo(message)">
    <div class="video-cover">
      <img :src="message.cover" alt="" />
    </div>
    <div class="video-name">
      {{ message.name }}
    </div>
    <div class="video-author">
      <audio src=""></audio>  {{ message.up_name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "videoBox",
  props: {
    videoId: {
      type: Number,
    },
  },
  data() {
    return {
      message: {
        cover: "",
      },
    };
  },
  created() {
    this.getMessage(this.videoId);
  },
  methods: {
    // 获取与视频有关信息
    getMessage(url) {
      this.$axios({
        url: "/getVideo?id=" + url,
      })
        .then((res) => {
          this.message = res.data.data.message;
          this.message.cover = this.$store.state.image_base + this.message.cover;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 跳转到视频详情页
    seeVideo(message){
      // message = {name: "aaa"};
      this.$router.push({
        path: "/theVideo",
        query: message
      })
    }
  },
};
</script>
<style scoped>
.video-box-body{
  width: 250px;
  height: 170px;
}
.video-cover{
  width: 100%;
  height: 130px;
}
.video-cover img{
  width: 100%;
  height: 130px;
  border-radius: 8px;
  overflow: hidden;
}
.video-name{
  width: 100%;
  height: 18px;
  font-size: 14px;
  margin-top:2px;
}
.video-author{
  width: 100%;
  height: 10px;
  font-size: 10px;
  color: var(--color1)
}
</style>