<template>
    <div class="login">
        <div class="login-body">
            <p>登录</p>
            <div class="phone-box">
                <el-input placeholder="电话"></el-input>
            </div>
            <div class="password-box">
                <el-input placeholder="密码"></el-input>
            </div>
            <div class="VerCode">
                <div class="VerCode-img">
                    <img src="" alt="">
                </div>
                <div class="VerCode-input"><el-input placeholder="验证码"></el-input></div>
            </div>
            <div class="loginButton">
                <el-button style="width: 100%">登录</el-button>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "login",
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
    height: 350px;
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
</style>