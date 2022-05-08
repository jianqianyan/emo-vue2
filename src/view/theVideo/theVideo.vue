// 视频详情页
<template>
  <div class="the-video">
    <div class="video-nav">
      <my-nav></my-nav>
      <hr />
    </div>

    <div class="video-body">
      <div class="video-header">
        <video-header :message="video_message"></video-header>
      </div>
      <!-- <h2>{{ video_message.name }}</h2> -->
      <!-- {{ video_message }} -->
      <div class="left-container">
        <left-container :video_message="video_message"></left-container>
      </div>
      <div class="right-container">
        <right-container></right-container>
      </div>
    </div>
  </div>
</template>

<script>
import myNav from "../../components/GeneralComponents/myNav.vue";
import videoHeader from "../../components/videoComponents/videoHeader.vue";
import leftContainer from "../../components/videoComponents/leftContainer.vue";
import rightContainer from "../../components/videoComponents/rightContainer.vue"
export default {
  name: "theVideo",
  data() {
    return {
      video_message: this.$route.query,
    };
  },
  components: {
    myNav,
    videoHeader,
    leftContainer,
    rightContainer
  },
  created(){
    // console.log(this.video_message);
  }
};
</script>

<style scoped>
.video-body {
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
}
.left-container{
  width: 65%;
  height: 900px;
  float: left;
}
.right-container{
  width: 35%;
  height: 900px;
  float: left;
  /* background: red; */
}
.video-nav {
  width: 100%;
}

</style>