<template>
  <header class="header">用户注册</header>
  <div class="content">
    <van-cell-group>
      <!-- 通过 pattern 进行正则校验 -->
      <van-field v-model="username" placeholder="请输入用户名" />
      <!-- 通过 validator 进行函数校验 -->
      <van-field v-model="password" placeholder="请输入密码" />
      <!-- 通过 validator 返回错误提示 -->
      <van-field v-model="password2" placeholder="请确认密码" />
      <!-- 通过 validator 进行异步函数校验 -->
      <van-field v-model="nickname" placeholder="请输入昵称" />

      <van-radio-group v-model="level">
        <van-radio name="1">生产者</van-radio>
        <van-radio name="2">消费者</van-radio>
      </van-radio-group>

    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" @click="submit">
        提交
      </van-button>
      <router-link to="login" style="margin-top: 10px;">
        已有账号？点击去登录
      </router-link>
    </div>
  </div>
</template>
  
<script  lang="ts" setup>
import { ref } from "vue"
import { ElMessage } from 'element-plus'
import { userRegister } from "../../api/user";

const username = ref("")
const password = ref("")
const password2 = ref("")
const nickname = ref("")
const level = ref("1")

const submit = () => {

  if (username.value.length === 0 || password.value.length === 0 || password2.value.length === 0 || nickname.value.length === 0) {
    ElMessage('请输入内容！')
    return
  }
  if (password.value !== password2.value) {
    ElMessage('两次密码不一致')
    return
  }
  userRegister({ username: username.value, password: password.value, nickname: nickname.value, level: level.value }).then(res => {
    if (res.data.data === 200) {
      ElMessage('注册成功！')
    };
  })
}
</script>
  
<style lang="scss" scoped>
.van-radio-group {
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-around;

  .van-radio {
    margin-bottom: 15px;
    margin-left: 15px;
    flex: 1
  }
}
</style>