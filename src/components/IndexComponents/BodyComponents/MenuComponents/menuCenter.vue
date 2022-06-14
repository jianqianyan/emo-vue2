<template>
  <div class="menu-center">
    <div class="menu-top">
      <div
        v-for="(item, index) in menuList"
        :key="index"
        class="menu-son"
        @click="turnPartition(item.link)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="menu-bottom">
      <div
        v-for="(item, index) in menuList"
        :key="index"
        class="menu-son"
        @click="turnPartition(item.link)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuCenter",
  data() {
    return {
      menuList: [
        {
          name: "1",
          link: "1",
        },
        {
          name: "2",
          link: "2",
        },
        {
          name: "3",
          link: "3",
        },
        {
          name: "4",
          link: "4",
        },
        {
          name: "1",
          link: "",
        },
        {
          name: "1",
          link: "",
        },
        {
          name: "1",
          link: "",
        },
        {
          name: "1",
          link: "",
        },
        {
          name: "1",
          link: "",
        },
        {
          name: "1",
          link: "",
        },
        {
          name: "1",
          link: "",
        },
      ],
    };
  },
  methods: {
    // 跳转到对应的分区
    turnPartition(link) {
      this.$router.push({
        path: "/search",
        query: { type: link },
      });
    },
  },
};
</script>

<style scoped>
.menu-center {
  height: 80px;
  width: 100%;
}
.menu-top {
  height: 30px;
  float: left;
  width: 100%;
  display: flex;
}
.menu-bottom {
  height: 40px;
  float: left;
  width: 100%;
  display: flex;
}
.menu-son {
  height: 23px;
  margin-top: 5px;
  flex: 1;
  text-align: center;
  background-color: #F6F7F8;
  color: #61666D;
  margin-left: 10px;
  border-radius: 5px;
  padding-top: 2px;
}
.menu-son:hover{
    background-color:#E3E5E7;
    color: #18191C;
}
</style>