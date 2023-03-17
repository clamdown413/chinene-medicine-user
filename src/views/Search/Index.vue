<template>
  <header class="header">
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      input-align="center"
      @search="onSearch"
      @cancel="onCancel"
    />
  </header>
  <div class="content">
    <div v-if="datasource">
      <router-link
        v-for="(item, index) in datasource"
        :key="index"
        :to="{ name: 'detail', params: { id: item.id } }"
      >
        <van-cell-group>
          <van-cell
            :title="item.name"
            :value="item.grow_place"
            :label="`售价：${item.sale_price}元/斤   剩余数量：${item.medicine_number}斤 `"
          /> </van-cell-group
      ></router-link>
    </div>
    <div v-else>请在上方输入要查询的信息</div>
  </div>
</template>
  
<script  lang="ts" setup>
import { ref } from "vue";
import { search, selectAllMedicine } from "../../api/medicine";
import { showToast } from "vant";
const value = ref("");
const datasource = ref();
selectAllMedicine().then((res) => {
  datasource.value = res.data.data;
});
const onSearch = () => {
  search({ string: value.value }).then((res) => {
    datasource.value = res.data.data;
  });
};
const onCancel = () => {
  showToast("取消");
};
</script>
  
  <style lang="scss">
</style>