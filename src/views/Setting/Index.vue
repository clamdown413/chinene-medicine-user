<template>
  <header class="header">个人中心</header>
  <div class="content">
    <div class="user">
      <el-image style="width: 100%; height: 100%" :src="userpng"/>
    </div>
    <el-descriptions title="个人信息详情" :column="1" border>
      <el-descriptions-item label="用户名" label-align="left">{{ userinfo.username }}</el-descriptions-item>
      <el-descriptions-item label="我的昵称" label-align="left">{{ userinfo.nickname }}</el-descriptions-item>
      <el-descriptions-item label="我的身份" label-align="left">{{ userinfo.level === "1" ? "消费者" : "生产者" }}</el-descriptions-item>
    </el-descriptions>
    <van-button type="primary" class="loginOut" @click="loginOut">
      退出登录
    </van-button>
  </div>
</template>

<script  lang="ts" setup>
import store2 from 'store2'
import userpng from "./../../assets/user.png"
import { useRouter } from 'vue-router';
const userinfo = store2.get("user")
const router = useRouter();

const loginOut = ()=>{
  store2.remove("user")
  router.push("/login")
}
</script>

<style lang="scss" scoped>
.user {
  width: 1.2rem;
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  font-size: 0.2rem;
  background-color: gray;
  margin: 0 auto;
  margin-top: 0.3rem;
  border-radius: 50%;
}

.my-label {
  background: var(--el-color-success-light-9);
}

.my-content {
  background: var(--el-color-danger-light-9);
}
.loginOut{
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  width: 80%;
  border-radius: 30px;
}
</style>