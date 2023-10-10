<script setup>

</script>

<template>
    <!-- 多行导航栏 -->
    <div class="navmenu">
        <div class="item">1111</div>
        <div class="item">2222</div>
        <div class="item">3333</div>
        <div class="item">4444</div>
        <div class="item">5555</div>
    </div>
</template>

<style scoped>
.navmenu {
    background-color: #999;
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;

}

.item {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin: 10px;
}

.navmenu::-webkit-scrollbar {
    display: none;
}
</style>