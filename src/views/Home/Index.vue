<template>
  <header class="header">中医药材管理系统</header>
  <div class="content">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="image in pictureUrl" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
  
  <script  lang="ts" setup>
let pictureUrl = [
  "https://cdn.jsdelivr.net/gh/Ca1mD0wn1/chinest-medicine-picture@v0.1/banner1.jpg",
  "https://cdn.jsdelivr.net/gh/Ca1mD0wn1/chinest-medicine-picture@v0.1/banner2.jpg",
  "https://cdn.jsdelivr.net/gh/Ca1mD0wn1/chinest-medicine-picture@v0.1/banner3.jpg",
  "https://cdn.jsdelivr.net/gh/Ca1mD0wn1/chinest-medicine-picture@v0.1/banner4.jpg",
  "https://cdn.jsdelivr.net/gh/Ca1mD0wn1/chinest-medicine-picture@v0.1/banner5.jpg",
  "https://cdn.jsdelivr.net/gh/Ca1mD0wn1/chinest-medicine-picture@v0.1/banner6.jpg",
];
</script>
  
  <style lang="scss" >
.header {
  font-size: 20px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  img {
    width: 100%;
    height: 257px;
  }
}
.van-swipe__track {
  height: 257px;
}
</style>