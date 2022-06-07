<template>
  <div class="center">
    <my-nav></my-nav>
    <div class="center-body">
      <center-header :message="message"></center-header>
      <center-video :videoList="videoList"></center-video>
      <emo-page :pageNumber="pageNumber" :pageSize="pageSize" @pageChange="pageChange"></emo-page>
    </div>
  </div>
</template>

<script>
import myNav from "../../components/GeneralComponents/myNav.vue";
import centerHeader from "../../components/center/centerHeader.vue";
import centerVideo from "../../components/center/centerVideo.vue";
import emoPage from "../../components/GeneralComponents/emoPage.vue"
export default {
  name: "center",
  components: {
    myNav,
    centerHeader,
    centerVideo,
    emoPage
  },
  data() {
    return {
      message: {
        name: this.$store.state.user_name,
        id: this.$store.state.user_id,
        path: this.$store.state.user_path,
        information: this.$store.state.user_information,
      },
      user_id: this.$store.state.user_id,
      user: {},
      videoList: [],
      pageNumber: 0 ,
      pageSize: 5,
      page: 1,
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      let condition = { up_id: this.user_id };
      let Params = {
        table: "videos",
        page: this.page,
        pageSize: 5,
        condition: condition,
      };
      this.$axios({
        url: "/search/PreSearch",
        methods: "GET",
        params: Params,
      })
        .then((res) => {
          console.log(res);
          this.videoList = res.data.data.message.data.message;
          this.pageNumber = res.data.data.message.data.messageNumber;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    pageChange(page){
      console.log(this.page);
      this.page = page;
      this.getdata();
      this.$forceUpdate();
    }
  },
};
</script>

<style scoped>
.center {
  width: 100%;
}
.center-body {
  width: 90%;
  height: 200px;
  padding-left: 5%;
  padding-right: 5%;
  background: red;
  background: var(--color1);
}
</style>