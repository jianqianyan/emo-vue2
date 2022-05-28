<template>
  <div class="center-header">
    <div class="top-box"></div>
    <div class="bottom-box">
      <div class="img-box">
        <img :src="message.path" alt="" />
      </div>
      <div class="message-box">
        <div>
          <span>{{ message.name }}</span>
        </div>
        <div>
          <span>{{ message.information }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "centerHeader",
  data() {
    return {};
  },
  props: {
    message: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.center-header {
  height: 200px;
  width: 100%;
  /* background: red; */
}
.img-box {
  width: 60px;
  height: 60px;
  border: 1px solid;
  border-radius: 50%;
  overflow: hidden;
  float: left;
  margin-left: 20px;
  margin-right: 20px;
}
.img-box img {
  width: 100%;
}
.top-box {
  width: 100%;
  height: 120px;
}
.bottom-box {
  width: 100%;
  height: 80px;
}
.bottom-box span {
  float: left;
}
.message-box{
  height: 100%;
  margin-left: 100px;
}
.message-box div{
  width: 100%;
  height: 35%;
}
</style>