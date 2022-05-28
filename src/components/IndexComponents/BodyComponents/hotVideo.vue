// 热门推荐
<template>
  <div class="hot-video-body">
    <div class="hot-son" v-for="(item, index) in videoList" :key="index">
      <video-box :videoId="item.id"></video-box>
    </div>
  </div>
</template>

<script>
import videoBox from "../../GeneralComponents/videoBox.vue";
export default {
  name: "hotVideo",
  data() {
    return {
      videoList: [
        {
          name: "",
          link: "",
        },
        {
          name: "",
          link: "",
        },
        {
          name: "",
          link: "",
        },
        {
          name: "",
          link: "",
        },
        {
          name: "",
          link: "",
        },
      ],
    };
  },
  components: {
    videoBox,
  },
  props: {
    hotMessage: {
      type: Array,
    }
  },
  created(){
    this.videoList = this.hotMessage;
  }
};
</script>

<style scoped>
.hot-video-body {
  width: 100%;
  height: 180px;
  /* background: red; */
  float: left;
}
.hot-son {
  width: 246px;
  height: 160px;
  /* background-color: red; */
  float: left;
  margin-right: 19px;
  margin-bottom: 10px;

  border-style: solid;
  border-width: 1px;
  border-radius: 8 px;
}
</style>