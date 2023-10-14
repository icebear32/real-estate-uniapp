<script setup>

</script>

<template>
    <header>
        <div class="search">
            <div class="search-list">
                <div class="search-box">
                    <i class="iconfont icon-sousuo"></i>
                    <input type="text">
                    <ul>
                        <li>名企招聘</li>
                        <li>买仓库</li>
                        <li>商业房产</li>
                        <li>附近超值保洁</li>
                    </ul>
                    <button>搜索</button>
                </div>
                <div class="search-sign">
                    <i class="iconfont icon-qiandao1"></i>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
/* 首页头部 */
header {
  height: 5rem;
  position: fixed;
}

.search {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--bgcolor);
  z-index: 99;
  padding: 1rem 0;
}

.search-list {
  max-width: 1080px;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  overflow: hidden;
}

.search-box {
  flex: 1;
  background-color: #fff;
  border-radius: 2rem;
  height: 30px;
  padding: 5px 10px;
  position: relative;
}

.search-box>i {
  margin-right: 15px;
  font-weight: 600;
  color: #9a9a9a;
}

.search-box input {
  border: 0;
}
</style>