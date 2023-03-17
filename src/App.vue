<template>
  <div class="container">
    <header class="header">header</header>
    <div class="content">content</div>
    <footer class="footer">footer</footer>
  </div>
  <!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
  <div class="landscape-tip">请将屏幕竖向浏览</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    // height: 44px;
    height: 0.44rem;
    background-color: #f66;
  }
  .content {
    flex: 1;
    overflow: auto;
  }
  .footer {
    // height: 50px;
    height: 0.5rem;
    background-color: #efefef;
  }
}
.landscape-tip {
  // ++++++++++++++++++++++++++++++++++++++++
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: none;
  justify-content: center;
  align-items: center;
}

// ++++++++++++++++++++++++++++++++++++++++
@media only screen and (orientation: landscape) {
  // 横屏
  .landscape-tip {
    display: flex;
  }
}
</style>