<template>
  <div class="center">
    <my-nav></my-nav>
    <div class="center-body">
      <center-header :message="message"></center-header>
        个人
    </div>
  </div>
</template>

<script>
import myNav from "../../components/GeneralComponents/myNav.vue";
import centerHeader from "../../components/center/centerHeader.vue"
export default {
  name: "center",
  components: {
    myNav,
    centerHeader
  },
  data(){
    return {
      message : {
        name: "name",
        information: "information",
        path: "http://localhost:3000/user_photo/1.jpg"
      }
    }
  }
};
</script>

<style scoped>
.center {
    width: 100%;
    
}
.center-body{
    width: 90%;
    height: 200px;
    padding-left: 5%;
    padding-right: 5%;
    background: red;
    background: var(--color1);
}
</style>