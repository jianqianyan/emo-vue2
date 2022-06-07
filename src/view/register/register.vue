// 注册界面
<template>
  <div class="register">
    <div class="register-body">
      <p>注册</p>
      <div class="phone-box">
        <input
          type="text"
          name=""
          id=""
          placeholder="电话"
          v-model="phone"
          class="base-input"
        />
      </div>
      <div class="email-box">
        <input
          type="text"
          name=""
          placeholder="邮箱"
          v-model="email"
          class="base-input"
        />
      </div>
      <div class="password-box">
        <form action="">
          <input
            type="password"
            name=""
            placeholder="密码"
            v-model="password"
            class="base-input"
            autocomplete="‘new-password’"
          />
        </form>
      </div>
      <div class="conpassword-box">
        <form action="">
          <input
            type="password"
            name=""
            placeholder="确认密码"
            v-model="conpassword"
            class="base-input"
            autocomplete="‘new-password’"
          />
        </form>
      </div>
      <!--  -->
      <div class="registerButton">
        <button @click="dialogVisible = true" class="base-button">注册</button>
      </div>
      <div v-if="registerstate">
        {{ registerMessage }}
      </div>
      <div class="login-box">
        <p @click="turn_login()">登录</p>
      </div>
    </div>
    <el-dialog title="验证码" :visible.sync="dialogVisible" width="23%">
      <div class="VerCode">
        <div class="VerCode-img">
          <img
            :src="imgPath"
            alt=""
            ref="img_codeRefs"
            @click="replace_img()"
          />
        </div>
        <div class="VerCode-input-box">
          <input
            type="text"
            placeholder="验证码"
            v-model="img_code"
            class="base-input VerCode-input"
          />
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <button
          @click="dialogVisible = false"
          class="base-button"
          style="float: left"
        >
          取 消
        </button>
        <button type="primary" @click="register()" class="base-button">
          确 定
        </button>
      </span>
    </el-dialog>
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
      dialogVisible: false,
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
      if (
        this.email.search(
          /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        ) == -1
      ) {
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
        data: Parmas,
      })
        .then((res) => {
          let message = res.data;
          if (message.state == 200) {
            this.registerMessage = "注册成功";
          } else {
            this.registerMessage = message.data.cause;
          }
          this.dialogVisible = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    replace_img() {
      this.$refs.img_codeRefs.src =
        this.$store.state.ver_base + "?time=" + new Date();
    },
    turn_login() {
      this.$router.push({
        path: "/",
      });
    },
  },
  computed:{
    imgPath() {
      return this.$store.state.ver_base;
    }
  }
};
</script>

<style scoped>
.register {
  width: 100%;
  height: 740px;
  background: url("../../assets/background/login2.jpg") no-repeat fixed;
  background-size: 100%;
}
.register-body {
  text-align: center;
  width: 100%;
  height: 320px;
  /* background-color: red; */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: var(--color5);
}
.register-body div {
  margin-bottom: 11px;
}
.VerCode {
  height: 50px;
  width: 100%;
}
.VerCode-img {
  width: 50%;
  float: left;
}
.VerCode-img img {
  width: 100%;
}
.VerCode-input-box {
  float: left;
  width: 50%;
}
.VerCode-input {
  width: 60px;
  float: right;
  margin-top: 15px;
  border-radius: 5px;
  height: 35px;
}
.login-box p {
  float: right;
  font-size: 10px;
  margin-right: 10px;
  color: #95a5a6;
}
.phone-box input {
  background: url("../../assets/logo/user.png") no-repeat fixed;
  background-size: 15px;
  background-origin: padding-box;
  background-position: 8px;
  border-color: var(--color4);
}
.email-box input {
  background: url("../../assets/logo/email.png") no-repeat fixed;
  background-size: 15px;
  background-origin: padding-box;
  background-position: 8px;
  border-color: var(--color4);
}
.password-box input {
  background: url("../../assets/logo/password.png") no-repeat fixed;
  background-size: 15px;
  background-origin: padding-box;
  background-position: 8px;
  border-color: var(--color4);
}
.conpassword-box input {
  background: url("../../assets/logo/password.png") no-repeat fixed;
  background-size: 15px;
  background-origin: padding-box;
  background-position: 8px;
  border-color: var(--color4);
}
.el-dialog button {
  width: 100px;
  border-radius: 5px;
}
</style>