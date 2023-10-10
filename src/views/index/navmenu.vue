<script setup>

</script>

<template>
    <!-- 多行导航栏 -->
    <div class="navmenu">
        <div class="nav-1">
            <div class="navmenu-left">
                <i class="iconfont icon-maifang"></i>
                <span>新房</span>
            </div>
            <div class="navmenu-left">
                <i class="iconfont icon-maifang"></i>
                <span>新房</span>
            </div>
            <div class="navmenu-left">
                <i class="iconfont icon-maifang"></i>
                <span>新房</span>
            </div>
            <div class="navmenu-left">
                <i class="iconfont icon-maifang"></i>
                <span>新房</span>
            </div>

            <div class="navmenu-left">
                <i class="iconfont icon-maifang"></i>
                <span>新房</span>
            </div>
            <div class="navmenu-left">
                <i class="iconfont icon-maifang"></i>
                <span>新房</span>
            </div>
            <div class="navmenu-left">
                <i class="iconfont icon-maifang"></i>
                <span>新房</span>
            </div>
            <div class="navmenu-left">
                <i class="iconfont icon-maifang"></i>
                <span>新房</span>
            </div>
        </div>
        <div class="nav-2">
            <div class="navmenu-left">
                <i class="iconfont icon-xuexiao-"></i>
                <span>查房价</span>
            </div>
            <div class="navmenu-left">
                <i class="iconfont icon-xuexiao-"></i>
                <span>查房价</span>
            </div>
            <div class="navmenu-left">
                <i class="iconfont icon-xuexiao-"></i>
                <span>查房价</span>
            </div>
            <div class="navmenu-left">
                <i class="iconfont icon-xuexiao-"></i>
                <span>查房价</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.navmenu {
    /* background-color: #999; */
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    min-height: 15rem;
    position: relative;
}

.navmenu::-webkit-scrollbar {
    display: none;
}

.nav-1,
.nav-2 {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}

.nav-1 {
    left: 0%;
}

.nav-2 {
    left: 100%;
}

.navmenu-left {
    width: 25%;
    text-align: center;
}

.navmenu-left span {
    display: block;
}
</style>