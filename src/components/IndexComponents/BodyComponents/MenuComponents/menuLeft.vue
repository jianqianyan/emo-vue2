<template>
  <div class="menu-left">
    <div class="menu-body">
      <div class="menu-son" v-for="(item, index) in menuList" :key="index">
        <div class="menu-img">
          <svg width="35" height="35" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-bg--icon"><path d="M6.41659 15.625C3.88528 15.625 1.83325 13.7782 1.83325 11.5H10.9999C10.9999 13.7782 8.94789 15.625 6.41659 15.625Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.125 16.0827C15.125 18.614 13.2782 20.666 11 20.666L11 11.4993C13.2782 11.4993 15.125 13.5514 15.125 16.0827Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.875 6.91667C6.875 9.44797 8.72183 11.5 11 11.5L11 2.33333C8.72182 2.33333 6.875 4.38536 6.875 6.91667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5833 7.375C13.052 7.375 11 9.22183 11 11.5H20.1667C20.1667 9.22183 18.1146 7.375 15.5833 7.375Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuLeft",
  data() {
    return {
      menuList: [
        {
          name: "动态",
          link: "",
          imagePath: "",
        },
        {
          name: "热门",
          link: "",
          imagePath: "",
        },
        {
          name: "频道",
          link: "",
          imagePath: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.menu-left {
  width: 100%;
  height: 80px;
  /* background: red; */
}
.menu-body {
  width: 80%;
  margin-left: 20%;
  display: flex;
}
.menu-son {
  flex: 1;
  text-align: center;
}
.menu-img{
    border-radius: 100%;
    overflow: hidden;
    width: 35px;
    height: 35px;
    background: bisque;
    margin-left: 7px;
    margin-top: 5px;
}
.menu-img img {
  width: 100%
}
</style>