<template>
  <div class="center-search">
    <div class="search-body">
      <el-input :placeholder="inputText" v-model="input1">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "centerSearch",
  data() {
    return {
      inputText: "当我获得了使用任意门的超能力",
      input1: "",
    };
  },
};
</script>

<style scoped  lang="css">
.center-search {
  width: 100%;
  height: 30px;
  /* background-color: red; */
}
.search-body {
  width: 90%;
  margin-left: 5%;
  height: 30px;
  /* margin: 1px; */
  padding-top: 5px;
}
.search-body >>> .el-input__inner {
  height: 34px;
}

</style>