<template>
  <div class="register">
    <div class="register-body">
      <p>注册</p>
      <div class="phone-box">
        <el-input placeholder="电话" v-model="phone"></el-input>
      </div>
      <div class="email-box">
        <el-input placeholder="邮箱" v-model="email"></el-input>
      </div>
      <div class="password-box">
        <form action="">
          <el-input
            placeholder="密码"
            v-model="password"
            show-password
          ></el-input>
        </form>
      </div>
      <div class="conpassword-box">
        <form action="">
          <el-input
            placeholder="确认密码"
            v-model="conpassword"
            show-password
          ></el-input>
        </form>
      </div>
      <div class="VerCode">
        <div class="VerCode-img">
          <img
            src="http://localhost:3000/login/img_code"
            alt=""
            ref="img_codeRefs"
            @click="replace_img()"
          />
        </div>
        <div class="VerCode-input">
          <el-input placeholder="验证码" v-model="img_code"></el-input>
        </div>
      </div>
      <div class="registerButton">
        <el-button style="width: 100%" @click="register()">注册</el-button>
      </div>
      <div v-if="registerstate">
        {{ registerMessage }}
      </div>
      <div class="login-box">
        <p @click="turn_login()">登录</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      phone: "",
      email: "",
      password: "",
      conpassword: "",
      img_code: "",
      registerstate: "",
      registerMessage: "",
    };
  },
  methods: {
    register() {
      this.registerstate = 1;
      if (!this.phone || !this.password || !this.img_code || !this.email) {
        this.registerMessage = "账号密码邮箱或验证码不能为空";
        return;
      }
      if (this.password != this.conpassword) {
        this.registerMessage = "两次密码不相同";
        return;
      }
      // 这里加上注册限制
      //手机号格式判断
      if (this.phone.search(/^1[3578][0-9]{9}$/) == -1) {
        this.registerMessage = "手机号格式错误";
        return;
      }
      // 邮箱号格式判断
      if(this.email.search(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/) == -1){
        this.registerMessage = "邮箱格式错误";
        return;
      }
      let Parmas = {
        phone: this.phone,
        password: this.password,
        img_code: this.img_code,
        email: this.email,
      };
      this.$axios({
        url: "/login/register",
        method: "post",
        params: Parmas,
      })
        .then((res) => {
          let message = res.data;
          if (message.data == 1) {
            this.registerMessage = "注册成功";
          } else if (message.data == -1) {
            this.registerMessage = "该手机号已被注册";
          } else if (message.data == -3) {
            this.registerMessage = "注册失败";
          } else if (message.data == -4) {
            this.registerMessage = "验证码错误";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    replace_img() {
      this.$refs.img_codeRefs.src =
        "http://localhost:3000/login/img_code?time=" + new Date();
    },
    turn_login() {
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>

<style scoped>
.register-body {
  text-align: center;
  width: 280px;
  height: 400px;
  /* background-color: red; */
  padding: 10px 10px 10px 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
}
.register-body div {
  margin-bottom: 5px;
}
.VerCode-img {
  width: 40%;
  float: left;
}
.VerCode-img img {
  width: 100%;
}
.VerCode-input {
  float: left;
  width: 60%;
}
.login-box {
}
.login-box p {
  float: right;
  font-size: 10px;
  margin-right: 10px;
  color: #95a5a6;
}
</style>