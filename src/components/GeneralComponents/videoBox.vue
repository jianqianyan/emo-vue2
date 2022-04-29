<template>
  <div class="video-box" @click="seeVideo(img_message)">
    <div class="video-cover">
      <img :src="img_message.img_cover" alt="" />
    </div>
    <div class="video-name">
      {{ img_message.img_name }}
    </div>
    <div class="video-author">
      {{ img_message.img_author }}
    </div>
  </div>
</template>

<script>
export default {
  name: "videoBox",
  props: {
    videoUrl: {
      type: String,
    },
  },
  data() {
    return {
      img_message: {},
    };
  },
  created() {
    this.getMessage(this.videoUrl);
  },
  methods: {
    // 获取与视频有关信息
    getMessage(url) {
      this.$axios({
        url: url
      })
        .then((res) => {
          this.img_message = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 跳转到视频详情页
    seeVideo(message){
      // message = {name: "aaa"};
      this.$router.push({
        path: "/video",
        query: message
      })
    }
  },
};
</script>
<style scoped>
.video-box{
  width: 100%;
  height: 160px;
  /* background-color: red; */
  /* float: left; */
}
.video-cover{
  width: 100%;
  height: 100px;
  /* background-color: red; */
  /* float: left; */
}
.video-name{
  width: 100%;
  height: 40px;
  /* background: blue; */
  /* float: left; */
}
.video-author{
  width: 100%;
  height: 20px;
  /* background-color: orange; */
  /* float: left; */
}
</style>