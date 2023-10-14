<script setup>
import { ref } from "vue"

let footerList = ref([
    {
        title: '首页',
        icon: 'icon-shouye',
        path: '/index'
    },
    {
        title: '发现',
        icon: 'icon-faxian1',
        path: '/find'
    },
    {
        title: '消息',
        icon: 'icon-xiaoxi1',
        path: '/message'
    },
    {
        title: '我的',
        icon: 'icon-wode-',
        path: '/my'
    }
])
</script>

<template>
    <div class="footer">
        <div class="footer-list">
            <ul>
                <li v-for="(v, i) in footerList" :key="i">
                    <router-link :to="v.path">
                        <i class="iconfont" :class="v.icon"></i>
                        <span>{{ v.title }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
/* 底部导航栏 */
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6rem;
    background-color: #fff;
    border-top: 1px solid #eee;
    transform: none;
}

.footer-list {
    max-width: 1080px;
    height: 6rem;
    margin: 0 auto;
}

.footer ul {
    display: flex;
    align-items: center;
    height: 100%;
    text-align: center;
}

.footer ul li {
    flex: 1;
}

.footer li span {
    display: block;
}

.footer li i {
    font-size: 2.4rem;
}

.selected {
    color: var(--bgcolor)
}
</style>