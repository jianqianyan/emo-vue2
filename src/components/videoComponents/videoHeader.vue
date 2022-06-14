<template>
  <div class="video-header">
    <div class="video-box">
      <div class="video-title">
        <p>{{ message.name }}</p>
      </div>
      <div class="video-message">
        <span class="播放量">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.67735 4.2798C5.98983 4.1725 7.85812 4.0625 10 4.0625C12.1421 4.0625 14.0105 4.17252 15.323 4.27983C16.2216 4.3533 16.9184 5.04049 16.9989 5.9318C17.0962 7.00837 17.1875 8.43614 17.1875 10C17.1875 11.5639 17.0962 12.9916 16.9989 14.0682C16.9184 14.9595 16.2216 15.6467 15.323 15.7202C14.0105 15.8275 12.1421 15.9375 10 15.9375C7.85812 15.9375 5.98983 15.8275 4.67735 15.7202C3.77861 15.6467 3.08174 14.9593 3.00119 14.0678C2.90388 12.9908 2.8125 11.5627 2.8125 10C2.8125 8.43727 2.90388 7.00924 3.00119 5.93221C3.08174 5.04067 3.77861 4.35327 4.67735 4.2798ZM10 2.8125C7.81674 2.8125 5.9136 2.92456 4.5755 3.03395C3.07738 3.15643 1.8921 4.31616 1.75626 5.81973C1.65651 6.92379 1.5625 8.39058 1.5625 10C1.5625 11.6094 1.65651 13.0762 1.75626 14.1803C1.8921 15.6838 3.07738 16.8436 4.5755 16.966C5.9136 17.0754 7.81674 17.1875 10 17.1875C12.1835 17.1875 14.0868 17.0754 15.4249 16.966C16.9228 16.8436 18.108 15.6841 18.2438 14.1807C18.3435 13.077 18.4375 11.6105 18.4375 10C18.4375 8.38948 18.3435 6.92296 18.2438 5.81931C18.108 4.31588 16.9228 3.15645 15.4249 3.03398C14.0868 2.92458 12.1835 2.8125 10 2.8125ZM12.1876 10.722C12.7431 10.4013 12.7431 9.59941 12.1876 9.27866L9.06133 7.47373C8.50577 7.15298 7.81133 7.55392 7.81133 8.19542V11.8053C7.81133 12.4468 8.50577 12.8477 9.06133 12.527L12.1876 10.722Z"
              fill="#9499A0"
            ></path>
          </svg>
          {{ message.views }}
        </span>
        <span class="历史累计弹幕数">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 4.0625C7.85812 4.0625 5.98983 4.1725 4.67735 4.2798C3.77861 4.35327 3.08174 5.04067 3.00119 5.93221C2.90388 7.00924 2.8125 8.43727 2.8125 10C2.8125 11.5627 2.90388 12.9908 3.00119 14.0678C3.08174 14.9593 3.77861 15.6467 4.67735 15.7202C5.98983 15.8275 7.85812 15.9375 10 15.9375C12.1421 15.9375 14.0105 15.8275 15.323 15.7202C16.2216 15.6467 16.9184 14.9595 16.9989 14.0682C17.0962 12.9916 17.1875 11.5639 17.1875 10C17.1875 8.43614 17.0962 7.00837 16.9989 5.9318C16.9184 5.04049 16.2216 4.3533 15.323 4.27983C14.0105 4.17252 12.1421 4.0625 10 4.0625ZM4.5755 3.03395C5.9136 2.92456 7.81674 2.8125 10 2.8125C12.1835 2.8125 14.0868 2.92458 15.4249 3.03398C16.9228 3.15645 18.108 4.31588 18.2438 5.81931C18.3435 6.92296 18.4375 8.38948 18.4375 10C18.4375 11.6105 18.3435 13.077 18.2438 14.1807C18.108 15.6841 16.9228 16.8436 15.4249 16.966C14.0868 17.0754 12.1835 17.1875 10 17.1875C7.81674 17.1875 5.9136 17.0754 4.5755 16.966C3.07738 16.8436 1.8921 15.6838 1.75626 14.1803C1.65651 13.0762 1.5625 11.6094 1.5625 10C1.5625 8.39058 1.65651 6.92379 1.75626 5.81973C1.8921 4.31616 3.07738 3.15643 4.5755 3.03395ZM5 8.4375C5 8.09232 5.27982 7.8125 5.625 7.8125H5.9375C6.28268 7.8125 6.5625 8.09232 6.5625 8.4375C6.5625 8.78268 6.28268 9.0625 5.9375 9.0625H5.625C5.27982 9.0625 5 8.78268 5 8.4375ZM7.5 8.4375C7.5 8.09232 7.77982 7.8125 8.125 7.8125H13.125C13.4702 7.8125 13.75 8.09232 13.75 8.4375C13.75 8.78268 13.4702 9.0625 13.125 9.0625H8.125C7.77982 9.0625 7.5 8.78268 7.5 8.4375ZM6.875 10.9375C6.52982 10.9375 6.25 11.2173 6.25 11.5625C6.25 11.9077 6.52982 12.1875 6.875 12.1875H7.1875C7.53268 12.1875 7.8125 11.9077 7.8125 11.5625C7.8125 11.2173 7.53268 10.9375 7.1875 10.9375H6.875ZM9.375 10.9375C9.02982 10.9375 8.75 11.2173 8.75 11.5625C8.75 11.9077 9.02982 12.1875 9.375 12.1875H14.375C14.7202 12.1875 15 11.9077 15 11.5625C15 11.2173 14.7202 10.9375 14.375 10.9375H9.375Z"
              fill="#9499A0"
            ></path>
          </svg>
          0
        </span>
        <span class="update-time">
          <svg
            t="1642588113899"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6827"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="20"
            height="20"
          >
            <path
              d="M167.024 512a344.976 344.976 0 1 1 689.952 0 344.976 344.976 0 0 1-690 0zM512 106.976a405.024 405.024 0 1 0 0 810.048 405.024 405.024 0 0 0 0-810z m30 235.008a30 30 0 1 0-60 0V512c0 7.968 3.168 15.6 8.784 21.216l120 120a30 30 0 1 0 42.432-42.432L542 499.52V341.984z"
              fill="#9499A0"
              p-id="6828"
            ></path>
          </svg>
          {{ message.upload_time }}
        </span>
      </div>
    </div>
    <div class="up-box">
      <div class="up-photo">
        <img :src="up_photo" alt="" />
      </div>
      <div class="up-message">
        <div class="up-name">
          <span>{{ message.up_name }}</span>
        </div>
        <div class="suppot-up">
          <button class="button1">充电</button>
          <button class="button2">关注</button>
        </div>
      </div>
    </div>
    <!-- {{ message }} -->
  </div>
</template>

<script>
export default {
  name: "videoHeader",
  props: {
    message: {
      type: Object,
    },
  },
  data() {
    return {
      up_photo: "",
      user_message: "",
    };
  },
  methods:{
      getUserMessage(user_id){
          if(user_id){
              this.$axios({
                  url: "/users/getMessage?user_id=" + user_id,
              })
              .then((res) => {
                  if(res.data.state == 200){
                      this.up_photo = this.$store.state.image_base + '/' + res.data.data.message.img_path;
                      this.user_message = res.data.data.message;
                  }
                  else{

                  }
              })
              .catch((err) => {
                  console.log(err);
              })
          }
      }
  },
  created(){
    //   console.log(this.message.id);
      this.getUserMessage(this.message.id);
  }
};
</script>

<style scoped>
.video-header {
  width: 100%;
}
.video-box {
  width: 65%;
  float: left;
  height: 90px;
  /* background: red; */
}
.up-box {
  width: 35%;
  float: left;
  height: 60px;
  margin-top: 15px;
  margin-bottom: 15px;
  
  /* background: blue; */
}
.video-title {
  width: 100%;
  height: 50px;
  /* background: blue; */
  float: left;
}
.up-photo {
  height: 60px;
  width: 60px;
  float: left;
  border-radius: 50%;
  /* border: 5px solid rgb(55, 0, 255); */
  overflow: hidden;
  /* background: red; */
}
.up-photo img {
  width: 100%;
}
.up-message {
  height: 60px;
  margin-left: 5px;
  float: left;
  width: 80%;
  /* display: flex; */
}
.video-message {
  width: 100%;
  height: 40px;
  float: left;
  font-size: 13px;
  color: #9499a0;
  /* line-height: 10px; */
  /* background: orange; */
}
.video-message span {
  /* height: 25px; */
  display: inline-flex;
  align-items: center;
  margin-right: 12px;
}
.video-message svg {
  margin-right: 4px;
}
.up-name {
  width: 100%;
  /* float: left; */
  height: 30px;
  float: left;
}
.suppot-up {
  width: 100%;
}
.button1 {
  margin-right: 12px;
  flex-shrink: 0;
  width: 78px;
  background: #ffffff;
  color: #00aeec;
  border: 1px solid #00aeec;
  box-sizing: border-box;
  padding: 0;
  line-height: 30px;
  height: 30px;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  float: left;
}
.button2 {
  box-sizing: border-box;
  padding: 0;
  line-height: 30px;
  height: 30px;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  flex: 1 1 auto;
  width: 200px;
  background: #00aeec;
  color: #ffffff;
  border: 1px solid #00aeec;
}
</style>
