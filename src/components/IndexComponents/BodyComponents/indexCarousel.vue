// 主页轮播图
<template>
  <div class="index-carousel">
    <el-carousel height="340px">
      <el-carousel-item v-for="(item , index) in imgList" :key="index">
        <img :src="imgPath(item.img_path)" alt="" class="carousel-img">
        <span class="small">{{ item.name }}</span>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "indexCarousel",
  data(){
    return {
      imgList: []
    }
  },
  created(){
    this.$axios({
      url: "/walking",
      method: "GET",
    }).then(res => {
      if(res.data.state == 200){
        this.imgList = res.data.data.message;
      }
    })
  },
  computed:{
    imgPath() {
      return function (path) {
        return this.$store.state.image_base + "/" + path;
      };
    },
  }
};
</script>

<style scoped>
.index-carousel{
  width: 100%;
  border-radius: 10px;
  
}
.el-carousel__item{
  /* border-style: solid; */
  /* border-width: 1px; */
  border-radius: 8px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.carousel-img{
  width: 100%;
  height: 300px;
}
</style>