<template>
  <header class="header">药材详情</header>
  <div class="content">home content</div>
</template>
  
  <script  lang="ts" setup>
import { watch } from "fs";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getMedicineInfoById } from "../../api/medicine";
const router = useRouter();
const route = useRoute();
const datasource = ref();
const id = ref(route.params.id);

getMedicineInfoById({ id: Number(id.value) }).then((res) => {
  datasource.value = res.data.data;
});
</script>
  
  <style lang="scss">
.header {
  text-align: center;
}
</style>