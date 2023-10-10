<script setup>
import { CountTo } from 'vue3-count-to'
</script>

<template>
    <div class="houseprices">
        <ul>
            <li class="houseprices-state">
                <img src="@/assets/images/houseprices.jpg" alt="">
                <p>房价行情</p>
            </li>
            <li class="houseprices-price">
                <div>
                    <b><CountTo :start-val="0" :end-val="8888" :daration="5000"></CountTo></b>元/m
                    <sup>2</sup>
                </div>
                <p>最新均价</p>
            </li>
            <li class="houseprices-increase">
                <img src="@/assets/images/up.png" alt="">
                <span><CountTo :start-val="0" :end-val="0.12" :decimals="2" :daration="3000"></CountTo>%</span>
                <p>比上月</p>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>