<template>
    <div class="menu-center">
        <div class="menu-top">
            <div v-for="(item ,index) in menuList" :key = index class="menu-son">
                {{item.name}}
            </div>
        </div>
        <div class="menu-bottom">
            <div v-for="(item ,index) in menuList" :key = index class="menu-son">
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "menuCenter",
    data() {
        return {
            menuList:[
                {
                    name: "1",
                    link: ""
                },{
                    name: "1",
                    link: ""
                },{
                    name: "1",
                    link: ""
                },{
                    name: "1",
                    link: ""
                },{
                    name: "1",
                    link: ""
                },{
                    name: "1",
                    link: ""
                },{
                    name: "1",
                    link: ""
                },{
                    name: "1",
                    link: ""
                },{
                    name: "1",
                    link: ""
                },{
                    name: "1",
                    link: ""
                },{
                    name: "1",
                    link: ""
                }
            ]
        }
    }
}
</script>

<style scoped>
.menu-center{
    height: 80px;
    width: 100%;
}
.menu-top{
    height: 30px;
    float: left;
    width: 100%;
    display: flex;
}
.menu-bottom{
    height: 40px;
    float: left;
    width: 100%;
    display: flex;
}
.menu-son{
    height: 23px;
    margin-top:5px;
    flex:1;
    text-align: center;
    background-color:bisque;
    margin-left: 10px;
    border-radius: 5px;
    padding-top:2px;
}
</style>