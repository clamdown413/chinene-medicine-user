<template>
  <header class="header">
    <div style="display: flex; justify-content: space-between">
      <van-search
        class="searchInput"
        v-model="value"
        placeholder="请输入搜索关键词"
        input-align="center"
        @search="onSearch"
        @cancel="onCancel"
      />
      <van-button class="searchButton" @click="onSearch">搜索</van-button>
    </div>
  </header>
  <div class="content">
    <div v-if="datasource">
      <lazy-component>
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
            /> </van-cell-group></router-link
      ></lazy-component>
    </div>
    <div v-else><van-skeleton title :row="50" /></div>
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
.searchInput {
  flex: 1;
}
.searchButton {
}
</style>