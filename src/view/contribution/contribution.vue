<template>
  <div class="contribution">
    <my-nav></my-nav>
    <div class="contributon-body">
      <div class="contri-header">投稿</div>
      <div class="upvideo">
        视频上传
        <div class="up">
          <div class="base-button up-video-button">
            <span>上传视频</span>
          </div>
        </div>
        <input type="file" @change="postVideo($event)" />
        <div v-if="isupVideo">已上传{{ progress }}</div>
      </div>
      <div class="upimg">
        封面上传
        <div class="up">
          <div class="base-button up-video-button">
            <span>上传图片</span>
          </div>
        </div>
        <input type="file" @change="postImg($event)" />
      </div>
      <div class="title">
        <div class="box-title">
          <span>标题</span>
        </div>

        <input type="text" v-model="videoMessage.name" class="base-input" />
      </div>
      <div class="information">
        <div class="box-title"><span>简介</span></div>
        <input
          type="text"
          v-model="videoMessage.information"
          class="base-input inforation-input"
        />
      </div>
      <div class="tag">
        <div class="box-title"><span>tag</span></div>

        <input type="text" v-model="atag" class="base-input tag-input" />
        <button class="base-button tag-button" @click="addTag()">
          添加tag
        </button>
        <div class="tags">
          <div v-for="(item, index) in tags" :key="index" class="tag-son">
            <span>{{ item }}</span>
            <img
              src="../../assets/logo/cha.png"
              alt=""
              @click="delectTag(index)"
            />
          </div>
        </div>
      </div>
      <div class="type">
        分区
        <select name="" id="" v-model="videoMessage.type" class="base-select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div>
        <button @click="contribution()" class="base-button">投稿</button>
      </div>
    </div>

    <!-- {{ videoMessage }}
    {{ progress }} -->
  </div>
</template>

<script>
import myNav from "../../components/GeneralComponents/myNav.vue";
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
      progress: "0%",
      tags: [],
      atag: "",
      isupVideo: 0,
      isUpimg: 0,
    };
  },
  components: {
    myNav,
  },
  methods: {
    postImg(e) {
      var formdata = new FormData();
      formdata.append("img", e.target.files[0]);
      this.imgFile = formdata;
      this.$axios({
        url: "/updata",
        method: "POST",
        data: formdata,
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
    postVideo(e) {
      var formdata = new FormData();
      formdata.append("img", e.target.files[0]);
      this.videoFile = formdata;
      this.isupVideo = 1;
      let config = {
        onUploadProgress: (progress) => {
          this.progress =
            Math.floor((progress.loaded / progress.total) * 100) + "%";
          console.log(1);
          this.$forceUpdate();
        },
      };
      this.$axios({
        url: "/updata",
        method: "POST",
        data: formdata,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progress) => {
          this.progress =
            Math.floor((progress.loaded / progress.total) * 100) + "%";
        },
      })
        .then((res) => {
          this.videoMessage.path = res.data.data.message.path;
        })
        .catch((err) => {
          console.log(err);
        });
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
    contribution() {
      this.videoMessage.up_id = this.$store.state.user_id;
      this.videoMessage.up_name = this.$store.state.user_name;
      for (let i = 0; i < this.tags.length; ++i) {
        this.videoMessage.tag += "#" + this.tags[i];
      }
      this.$axios({
        url: "/contribution",
        method: "POST",
        data: this.videoMessage,
      })
        .then((res) => {
          if(res.data.state == 200){
            alert("投稿成功!");
            this.$router.push({
              path: "/index",
            })
          }
          else{
            alert(res.data.data.cause);
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addTag() {
      if (this.atag != "") {
        this.tags.push(this.atag);
      }
    },
    delectTag(tag) {
      this.tags.splice(tag);
    },
  },
};
</script>

<style scoped>
.contribution {
  width: 100%;
}
.contributon-body {
  padding-left: 5%;
  width: 90%;
  padding-right: 5%;
}
.contribution span {
  width: 50px;
}
.contri-header {
  width: 100%;
  height: 50px;
}
.upvideo {
  width: 260px;
  height: 160px;
  position: relative;
  display: inline-block;
  overflow: hidden;
}
.up {
  width: 250px;
  height: 100px;
  /* background: red; */
  border: dashed var(--color1);
  position: relative;
}
.up-video-button {
  width: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translatex(-50%) translateY(-50%);
  text-align: center;
}
.upvideo input {
  position: absolute;
  top: 0;
  font-size: 100px;
  opacity: 0;
}
.upimg {
  width: 260px;
  height: 160px;
  position: relative;
  display: inline-block;
  overflow: hidden;
}
.upimg input {
  position: absolute;
  top: 0;
  font-size: 100px;
  opacity: 0;
}
.title {
  width: 100%;
  height: 70px;
}
.information {
  width: 100%;
  height: 120px;
}
.inforation-input {
  height: 80px;
}
.tag {
  height: 120px;
  width: 100%;
}
.tag-button {
  width: 80px;
}
.tag-input {
  width: 30px;
  padding-left: 15px;
  padding-right: 15px;
}
.box-title {
  height: 30px;
}
.type {
  height: 60px;
  width: 100%;
}
.tag-son {
  width: 50px;
  height: 30px;
  background: var(--color6);
  float: left;
  margin-top: 10px;
  margin-right: 5px;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
  color: var(--color4);
}
.tag-son img {
  width: 10px;
}
</style>