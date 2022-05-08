// 主页
<template>
    <div class="index">
        <my-header></my-header>
        <hr>
        <index-body></index-body>
        <hr>
        <the-footer></the-footer>
    </div>
</template>

<script>
import myHeader from "../../components/IndexComponents/myHeader"
import indexBody from "../../components/IndexComponents/indexBody.vue"
import theFooter from "../../components/GeneralComponents/theFooter.vue"
export default {
    name: "index",
    components: {
        myHeader,
        indexBody,
        theFooter
    }
}
</script>

