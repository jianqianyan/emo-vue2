<template>
    <div class="login">
        <div class="login-body">
            <p>登录</p>
            <div class="phone-box">
                <el-input placeholder="电话" v-model="phone"></el-input>
            </div>
            <div class="password-box">
                <el-input placeholder="密码" v-model="password" show-password></el-input>
            </div>
            <div class="VerCode">
                <div class="VerCode-img">
                    <img src="http://localhost:3000/login/img_code" alt="" ref="img_codeRefs"  @click="replace_img()">
                </div>
                <div class="VerCode-input"><el-input placeholder="验证码" v-model="img_code"></el-input></div>
            </div>
            
            <div class="loginButton">
                <el-button style="width: 100%" @click="login()">登录</el-button>
            </div>
            <div class="register-box">
                <p @click="turn_register()">注册</p>
            </div>
            <div v-if = "loginstate">
                {{loginMessage}}
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "login",
    data(){
        return {
            phone: "",
            password: "",
            loginstate: "",
            loginMessage: "",
            img_code: ""
        }
    },
    methods: {
        login(){
            this.loginstate = 1;
            if(!this.phone || !this.password || !this.img_code){
                this.loginMessage = "账号密码或验证码不能为空";
                return;
            }
            let Parmas = {phone: this.phone , password : this.password , img_code: this.img_code};
            this.$axios({
                url: "/login",
                params: Parmas,
            }).then(res => {
                let message = res.data;
                if(message.data == -1){
                    this.loginMessage = "账号不存在";
                }
                else if(message.data == -2){
                    this.loginMessage = "密码错误";
                }
                else if(message.data == -3){
                    this.loginMessage = "登录失败";
                }
                else if(message.data == -4){
                    this.loginMessage = "验证码错误";
                }
                else {
                    this.loginMessage = "登录成功";
                    localStorage.setItem("token" , message.token);
                    
                }
            }).catch(err => {
                console.log(err);
            })
        },
        replace_img(){
            this.$refs.img_codeRefs.src = "http://localhost:3000/login/img_code?time=" + new Date();
        },
        turn_register(){
            this.$router.push({
                path: "/register",
            })
        }

    }
}
</script>

<style scoped>
.login{
    /* width: 50%;
    background-color: red; */
    
}
.login-body{
    text-align: center;
    width: 280px;
    height: 310px;
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
.login-body div{
    margin-bottom: 5px;
}
.VerCode-img{
    width: 40%;
    float: left;
}
.VerCode-img img{
    width: 100%;
}
.VerCode-input{
    float: left;
    width: 60%;
}
.register-box{
    float: left;
    width: 100%;
    height: 30px;
   
}
.register-box p{
    float: right;
    font-size: 10px;
    margin-right: 10px;
    color: #95a5a6;
}
</style>