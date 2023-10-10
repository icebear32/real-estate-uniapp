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

<style scoped></style>