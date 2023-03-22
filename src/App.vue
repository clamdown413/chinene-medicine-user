<template>
  <div class="container">
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
  <div class="landscape-tip">请将屏幕竖向浏览</div>
</template>
<script lang="ts" setup>
</script>

<style lang="scss">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    // height: 44px;
    height: 0.44rem;
    background-color: #efefef;
    text-align: center;
    line-height: 45px;
  }
  .content {
    flex: 1;
    overflow: auto;
  }

  .footer {
    height: 0.5rem;
    background-color: #efefef;
    user-select: none;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      li {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
          font-size: 0.2rem;
        }

        p {
          font-size: 0.12rem;
        }
      }
    }
  }
}
.landscape-tip {
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

@media only screen and (orientation: landscape) {
  // 横屏
  .landscape-tip {
    display: flex;
  }
}
</style>
