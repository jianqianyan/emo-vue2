// 视频详情页
<template>
  <div class="the-video">
    {{ video_message }}
  </div>
</template>

<script>
export default {
    name: "theVideo",
    data(){
        return {
            video_message : this.$route.query.message,
        }
    }
}
</script>

<style scoped>
</style>