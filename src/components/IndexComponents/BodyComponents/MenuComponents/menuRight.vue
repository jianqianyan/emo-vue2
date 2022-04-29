<template>
    <div class="menu-right">
        <div class="menu-top">
            <div class="menu-son" v-for="(item , index) in menuList1" :key = "index">
                {{item.name}}                
            </div>  
        </div>
        <div class="menu-bottom" >
            <div class="menu-son" v-for="(item, index) in menuList2" :key = "index">
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "name",
    data(){
        return {
            menuList1: [
                {
                    name: "专栏",
                    link:"",
                },{
                    name: "活动",
                    link: "",
                },{
                    name: "社区中心",
                    link: "",
                }
            ],
            menuList2 :[
                {
                    name: "直播",
                    link:""
                },
                {
                    name:"课堂",
                    link: ""
                },{
                    name: "新歌热榜",
                    link: ""
                }
            ]
        }
    }
}
</script>

<style scoped>
.menu-right{
    width: 90%;
    height: 80px;
    margin-right: 10%;
}
.menu-top{
    width: 100%;
    height: 40px;
    float: left;
    display: flex;
}
.menu-bottom{
    width: 100%;
    height: 40px;
    float: left;
    display: flex;
}
.menu-son{
    flex: 1;
    height: 40px;
    text-align: center;
}

</style>