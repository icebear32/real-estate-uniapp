<script setup>

</script>

<template>
    <div class="banner">
        <img src="../../assets/images/bg-1.jpg" alt="#">
        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
    </div>
</template>

<style scoped>
/* 轮播图 */
.banner {
    padding: 1rem;
    position: relative;
}

.banner img {
    widows: 100%;
    height: auto;
    border-radius: 1rem;
}

.banner ul {
    display: flex;
    position: absolute;
    bottom: 15px;
}

.banner ul li {
    background-color: rgba(255, 255, 255, .5);
    padding: 2px 8px;
}
</style>