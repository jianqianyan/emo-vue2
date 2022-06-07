// 推荐视频
<template>
  <div class="recommend-body">
    <div v-for="(item, index) in videoList" :key="index" class="video-box">
      <video-box :videoId="item.id"></video-box>
    </div>
  </div>
</template>

<script>
import videoBox from "../../GeneralComponents/videoBox.vue";
export default {
  name: "recommendBody",
  data() {
    return {
      videoList: [
        {
          name: "aaa",
        },
        {
          name: "aaa",
        },
        {
          name: "aaa",
        },
        {
          name: "aaa",
        },
        {
          name: "aaa",
        },
        {
          name: "aaa",
        },
      ],
    };
  },
  components: {
    videoBox,
  },
  props: {
    recommendMessage: {
      type: Array,
    }
  },
  created(){
    this.videoList = this.recommendMessage;
  }
};
</script>

<style scoped>
.recommend-body {
  width: 100%;
  /* margin-left: 3%;
  margin-right: 3%; */
  float: left;
  /* padding-bottom: 10px;
  padding-right: 10px; */
}
.video-box {
  width: 246px;
  height: 160px;
  /* background-color: red; */
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;

  border-radius: 8 px;
}
</style>