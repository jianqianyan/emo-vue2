// 登录界面
<template>
  <div class="login">
    <div class="login-body">
      <div class="logon-title">
        <span>Login</span>
      </div>
      <form action="">
        <div class="phone-box">
          <input
            type="text"
            v-model="phone"
            placeholder="phone"
            class="base-input"
          />
        </div>
        <div class="password-box">
          <input
            type="password"
            v-model="password"
            placeholder="password"
            class="base-input"
            autocomplete="‘new-password’"
          />
        </div>
        <!--  -->
      </form>
      <div class="login-button">
        <button @click="dialogVisible = true" class="base-button">登录</button>
      </div>
      <div class="register-box">
        <p @click="turn_register()">注册</p>
      </div>
      <div v-if="login_state">
        {{ login_message }}
      </div>
    </div>
    <el-dialog title="验证码" :visible.sync="dialogVisible" width="23%">
      <div class="VerCode">
        <div class="VerCode-img">
          <img
            src="http://localhost:3000/img_code"
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
            ref="editTask"
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
        <button type="primary" @click="login()" class="base-button">
          确 定
        </button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      phone: "",
      password: "",
      login_state: "",
      login_message: "",
      img_code: "",
      dialogVisible: false,
    };
  },
  methods: {
    login() {
      this.login_state = 1;
      if (!this.phone || !this.password || !this.img_code) {
        this.login_message = "账号密码或验证码不能为空";
        return;
      }
      this.dialogVisible = false;
      let Parmas = {
        phone: this.phone,
        password: this.password,
        img_code: this.img_code,
      };
      this.$axios({
        url: "/login",
        data: Parmas,
        method: "POST",
      })
        .then((res) => {
          let message = res.data;
          if (message.state == -1) {
            this.login_message = message.data.cause;
          } else {
            this.login_message = "登录成功";
            localStorage.setItem("token", message.data.token);
            this.$axios({
              url: "/getIndex",
              methods: "GET",
            })
              .then((res) => {
                setTimeout(() => {
                  this.$store.state.video_message = res.data.data.message;
                  this.$router.push({
                    path: "/index",
                  });
                }, 1000);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    replace_img() {
      this.$refs.img_codeRefs.src =
        this.$store.state.ver_base + "?time=" + new Date();
    },
    turn_register() {
      this.$router.push({
        path: "/register",
      });
    },
  },
  created() {
    var t = this;
    document.onkeydown = function (e) {
      var key;
      if (window.event == undefined) {
        key = e.key;
      } else {
        key = window.event.key;
      }
      if (key == "Enter") {
        if (t.dialogVisible) {
          t.login();
        } else {
          t.dialogVisible = true;
          t.$nextTick(() => t.$refs.editTask.focus());
        }
      }
    };
  },
};
</script>

<style scoped>
.login {
  /* width: 50%;
    background-color: red; */
  width: 100%;
  height: 740px;
  background: url("../../assets/background/login2.jpg") no-repeat fixed;
  background-size: 100%;
}
.login-body {
  text-align: center;
  width: 100%;
  height: 210px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: var(--color5);
  padding-top: 30px;
}
.login-body div {
  margin-bottom: 11px;
}
.phone-box input {
  background: url("../../assets/logo/user.png") no-repeat fixed;
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
.register-box {
  float: left;
  width: 100%;
  height: 30px;
}
.register-box p {
  float: right;
  font-size: 10px;
  margin-right: 10px;
  color: #95a5a6;
}
.el-dialog button {
  width: 100px;
  border-radius: 5px;
}
</style>