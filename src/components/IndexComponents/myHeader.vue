<template>
    <div class="my-header">
        <my-nav></my-nav>
    </div>
</template>

<script>
import myNav from "../GeneralComponents/myNav"
export default {
    name: "MyHeader",
    components:{
        myNav
    }
}
</script>

<style scoped>
.my-header{
    height: 150px;
    /* background: red; */
    width: 100%;
    /* background: url("../../assets/background/97631195_p16.png"); */
    background-size: 600px 300px;
}
</style>