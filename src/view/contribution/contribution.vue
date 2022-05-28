<template>
  <div class="contribution">
    Contribution
    <div>
      <span>上传视频</span>
      <input type="file" @change="postVideo($event)" />
      <button @click="updataVideo()">上传</button>
    </div>
    <div>
      封面
      <input type="file" @change="postImg($event)" />
      <button @click="updataImg()">上传</button>
    </div>
    <div>
      标题
      <input type="text" v-model="videoMessage.name" />
    </div>
    <div>
      简介
      <input type="text" v-model="videoMessage.information" />
    </div>
    <div>
      tag
      <input type="text" v-model="videoMessage.tag" />
    </div>
    <div>
      分区
      <input type="text" v-model="videoMessage.type" />
    </div>
    <div>
      <button @click="contribution()">投稿</button>
    </div>
    {{ videoMessage }}
  </div>
</template>

<script>
export default {
  name: "contribution",
  data() {
    return {
      file: {},
      imgFile: {},
      videoFile: {},
      videoMessage: {
        path: "",
        cover: "",
        name: "",
        type: "",
        tag: "",
        up_id: "",
        up_name: "",
        information: "",
      },
    };
  },
  methods: {
    postImg(e) {
      var formdata = new FormData();
      formdata.append("img", e.target.files[0]);
      this.imgFile = formdata;
    },
    postVideo(e) {
      var formdata = new FormData();
      formdata.append("img", e.target.files[0]);
      this.videoFile = formdata;
    },
    updata() {
      this.$axios({
        url: "/updata",
        method: "POST",
        data: this.file,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updataImg() {
      this.$axios({
        url: "/updata",
        method: "POST",
        data: this.imgFile,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          this.videoMessage.cover = res.data.data.message.path;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updataVideo() {
      this.$axios({
        url: "/updata",
        method: "POST",
        data: this.videoFile,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          this.videoMessage.path = res.data.data.message.path;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    contribution() {
      this.videoMessage.up_id = this.$store.state.user_id;
      this.videoMessage.up_name = this.$store.state.user_name;
      this.$axios({
        url: "/news",
        method: "POST",
        data: this.videoMessage,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>