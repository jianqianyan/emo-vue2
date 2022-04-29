<template>
    <div class="index-body">
        <index-menu></index-menu>
        <hr>
        <recommend-body></recommend-body>
    </div>
</template>

<script>
import indexMenu from "./BodyComponents/indexMenu.vue";
import recommendBody from "./BodyComponents/recommendBody.vue"
export default {
    name: "indexBody",
    components: {
        indexMenu,
        recommendBody
    }
}
</script>

<style scoped>

</style>