<template>
  <div class="left-container">
    <div class="video-player">
      <video :src="video_path" controls></video>
    </div>
    <div class="video-like">
      <span>点赞</span>
      <span>收藏</span>
      <span>转发</span>
    </div>
    <div class="video-information">
      {{ video_message.information }}
    </div>
    <div class="video-tag">
      {{ video_message.tag }}
    </div>
    <div class="video-comment">
      <span>评论</span>
    </div>
  </div>
</template>

<script>
export default {
    name: "leftContainer",
    props:{
        video_message: {
            type: Object
        }
    },
    computed: {
    video_path: function () {
      return this.$store.state.video_base + "?path=" + this.video_message.path;
    },
  },
}
</script>

<style scoped>
.video-player {
  width: 100%;
}
.video-like {
  width: 100%;
}
.video-information {
  width: 100%;
}
.video-tag {
  width: 100%;
}
</style>