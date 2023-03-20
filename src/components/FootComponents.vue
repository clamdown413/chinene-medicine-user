<template>
  <footer class="footer">
    <ul>
      <router-link to="/home" custom v-slot="{ navigate, href, isActive }">
        <li @click="navigate" :href="href" :class="isActive ? 'active' : ''">
          <span class="iconfont icon-wendang"></span>
          <p>首页</p>
        </li>
      </router-link>
      <router-link to="/search" custom v-slot="{ navigate, href, isActive }">
        <li @click="navigate" :href="href" :class="isActive ? 'active' : ''">
          <span class="iconfont icon-sousuo"></span>
          <p>搜索</p>
        </li>
      </router-link>
      <router-link to="/upload" custom v-slot="{ navigate, href, isActive }">
        <li @click="navigate" :href="href" :class="isActive ? 'active' : ''">
          <span class="iconfont icon-shangchuan"></span>
          <p>上传</p>
        </li>
      </router-link>
      <router-link to="/setting" custom v-slot="{ navigate, href, isActive }">
        <li @click="navigate" :href="href" :class="isActive ? 'active' : ''">
          <span class="iconfont icon-shezhi"></span>
          <p>设置</p>
        </li>
      </router-link>
    </ul>
  </footer>
</template>
  
  <style lang="scss" scoped>
li {
  &.active {
    color: #f66;
  }
}
</style>

<script setup></script>