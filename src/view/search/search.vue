<template>
  <div class="search">
    <my-nav></my-nav>
    <div class="search-body">
      <div v-for="(item, index) in videoList" :key="index">
        <video-box :videoId="item.id"></video-box>
      </div>
      <emo-page :pageNumber="pageNumber"></emo-page>
    </div>
  </div>
</template>

<script>
import myNav from "@/components/GeneralComponents/myNav";
import videoBox from "@/components/GeneralComponents/videoBox";
import emoPage from "@/components/GeneralComponents/emoPage";
export default {
  name: "search",
  data() {
    return {
      message: this.$route.query,
      page: 1,
      pageSize: 10,
      videoList: [],
      pageNumber: 0,
    };
  },
  components: {
    myNav,
    videoBox,
    emoPage,
  },

  methods: {
    getdata() {
      let table = "videos";
      this.$axios({
        url: "/search",
        method: "GET",
        params: {
          table: table,
          page: this.page,
          pageSize: this.pageSize,
          condition: this.message,
        },
      }).then((res) => {
        this.videoList = res.data.data.message.data.message;
        this.pageNumber = res.data.data.message.data.messageNumber;
      });
    },
    pageChange(page){
        this.page = page;
        this.getdata();
    }
  },
  created() {
    this.getdata();
  },
};
</script>

<style scoped>
.search {
  width: 100%;
}
.search-body {
  width: 90%;
  padding-left: 5%;
  padding-right: 5%;
}
</style>