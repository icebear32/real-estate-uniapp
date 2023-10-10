<script setup>
import { ref } from 'vue'

let navmenu1 = ref([
    { id: '1', title: '新房', icon: '#icon-zhuzhaixiaoqu' },
    { id: '2', title: '租房', icon: '#icon-zufang' },
    { id: '3', title: '二手房', icon: '#icon-ershoufangjiaoyi' },
    { id: '4', title: '商铺写字楼', icon: '#icon-xiezilouSVG' },
    { id: '5', title: '新车', icon: '#icon-icon270c_taxi' },
    { id: '6', title: '新房', icon: '#icon-zhuzhaixiaoqu' },
    { id: '7', title: '租房', icon: '#icon-zufang' },
    { id: '8', title: '二手房', icon: '#icon-ershoufangjiaoyi' },
    { id: '9', title: '商铺写字楼', icon: '#icon-xiezilouSVG' },
    { id: '10', title: '新车', icon: '#icon-icon270c_taxi' },
])
</script>

<template>
    <!-- 多行导航栏 -->
    <div class="navmenu">
        <div class="nav-1">
            <div class="navmenu-left" v-for="v in navmenu1" :key="v.id">
                <svg class="iconf-font">
                    <use :xlink:href="v.icon"></use>
                </svg>
                <span>{{ v.title }}</span>
            </div>
        </div>
        <div class="nav-2">
            <div class="navmenu-left">
                <svg class="iconf-font">
                    <use xlink:href="#icon-xuexiao-"></use>
                </svg>
                <span>查房价</span>
            </div>
        </div>
    </div>
</template>

<style scoped></style>