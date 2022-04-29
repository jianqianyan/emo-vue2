// 主页
<template>
    <div class="index">
        <my-header></my-header>
        <hr>
        <index-body></index-body>
        <hr>
    </div>
</template>

<script>
import myHeader from "../../components/IndexComponents/myHeader"
import indexBody from "../../components/IndexComponents/indexBody.vue"
export default {
    name: "index",
    components: {
        myHeader,
        indexBody
    }
}
</script>

