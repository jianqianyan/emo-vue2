<template>
    <div class="center-video">
        <div v-for="(item , index) in videoList" :key="index" class="video-box">
            <video-box :videoId = "item.id"></video-box>
        </div>
    </div>
</template>

<script>
import videoBox from "../GeneralComponents/videoBox.vue"
export default {
    name: "centerVideo",
    props:{
        videoList: {
            type:Array
        }
    },
    components:{
        videoBox
    }
}
</script>

<style scoped>
.center-video{
    width: 100%;
    padding-top:50px;
    display: flex;
}
.video-box{
    flex: 1;
    float: left;
}
</style>