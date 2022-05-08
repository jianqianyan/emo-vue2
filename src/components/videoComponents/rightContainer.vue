<template>
    <div class="right-container">
        <span>
          接下来播放
          <div class="recommend" v-for="item in 6" :key="item">
              <recommend-video videoId="1"></recommend-video>
          </div>
          
        </span>
    </div>
</template>

<script>
import recommendVideo from "../../components/GeneralComponents/recommendVideo.vue"
export default {
    name: "rightContainer",
    components:{
        recommendVideo
    }
}
</script>

<style scoped>
.right-container{
    width: 100%;
}
</style>