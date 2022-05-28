// 主页主体
<template>
  <div class="index-body">
    <div class="index-menu">
      <index-menu></index-menu>
    </div>
    <hr />
    <div class="carousel">
      <index-carousel></index-carousel>
    </div>
    <div class="recommend">
      <recommend-body :recommendMessage="recommendMessage"></recommend-body>
    </div>
    <hr />
    <div class="hot-video">
      <hot-video :hotMessage="hotMessage"></hot-video>
    </div>
    <hr />
    <div class="advertisement">
      <p>广告位招租</p>
    </div>
  </div>
</template>

<script>
import indexMenu from "./BodyComponents/indexMenu.vue";
import recommendBody from "./BodyComponents/recommendBody.vue";
import indexCarousel from "./BodyComponents/indexCarousel.vue";
import hotVideo from "./BodyComponents/hotVideo.vue";
export default {
  name: "indexBody",
  components: {
    indexMenu,
    recommendBody,
    indexCarousel,
    hotVideo,
  },
  props: {
    videoMessage: {
      type: Array,
    },
  },
  data() {
    return {
      recommendMessage: [],
      hotMessage: [],
    };
  },
  created() {
    for (let i = 0; i < this.videoMessage.length; ++i) {
      if (i < 6) {
        this.recommendMessage.push(this.videoMessage[i]);
      } else {
        this.hotMessage.push(this.videoMessage[i]);
      }
    }
  },
};
</script>

<style scoped>
.carousel {
  width: 39%;
  height: 350px;
  float: left;
  margin-left: 3%;
}
.recommend {
  width: 57%;
  height: 350px;
  float: left;
  margin-left: 1%;
}
.hot-video {
  /* float: left; */
  /* background: black; */
  margin-left: 3%;
  /* margin-right: 2%; */
  width: 97%;
  height: 180px;
  float: left;
}
.advertisement {
  float: left;
  width: 100%;
  height: 200px;
  text-align: center;
}
</style>