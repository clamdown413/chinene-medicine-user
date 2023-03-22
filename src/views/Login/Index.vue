
<template>
  <header class="header">登录</header>
  <div class="content">
    <van-cell-group inset>
      <van-field v-model="username" label="用户名" placeholder="输入用户名" />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
      />
      <van-field
        v-model="checkCode"
        type="number"
        label="验证码"
        placeholder="请输入验证码"
      />
    </van-cell-group>
    <div class="button">
      <van-button
        type="primary"
        round
        size="large"
        style="padding: 5px"
        @click="login"
        >登录</van-button
      >
    </div>
  </div>
</template>
  
  <script  lang="ts" setup>
import { ElMessage } from "element-plus";
import { ref } from "vue";
import { userLogin } from "../../api/user";
import { useRouter, useRoute } from "vue-router";
import store2 from "store2";
const username = ref("user1");
const password = ref("user1");
const checkCode = ref("");
const router = useRouter();
interface store {
  loginState: number;
}
// const store = useStore();
const login = () => {
  userLogin({ username: username.value, password: password.value }).then(
    (res) => {
      if (res.data.code === 201) {
        ElMessage("账号或用户名错误");
        return 0;
      }
      if (res.data.code === 200) {
        console.log(res.data.data);

        store2.set("user", {
          username: username.value,
          level: res.data.data.level,
          token: res.data.data.token,
        });
        router.push({
          name: "home",
        });
      }
    }
  );
};
</script>
  
  <style lang="scss" scoped>
.button {
  padding: 15px;
}
</style>