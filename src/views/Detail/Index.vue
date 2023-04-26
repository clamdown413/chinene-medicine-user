<template>
  <header class="header">药材详情</header>
  <div class="content">
    <el-descriptions
      :title="datasource.name"
      direction="vertical"
      :column="4"
      size="large"
      border
    >
      <el-descriptions-item label="进价/斤">{{
        datasource.buy_price
      }}元</el-descriptions-item>
      <el-descriptions-item label="售价/斤">{{
        datasource.sale_price
      }}元</el-descriptions-item>
      <el-descriptions-item label="剩余数量/斤">{{
        datasource.medicine_number
      }}元</el-descriptions-item>
      <el-descriptions-item label="发源地" :span="2">{{
        datasource.grow_place
      }}</el-descriptions-item>
      <!-- <el-descriptions-item label="Remarks">
        <el-tag size="small">操作流程</el-tag>
      </el-descriptions-item> -->
      <el-descriptions-item
        :label="datasource.last_data.substring(0, 4) - 1 + '年'"
      >
        <li v-for="(item, index) in operate_list" :key="index">
          {{ operate_mouth[index] }} 月份 {{ item.data.data[0].operate_detail }}
        </li>
      </el-descriptions-item>
    </el-descriptions>
    <el-button
      type="danger"
      @click="
        () => {
          router.back();
        }
      "
      >返回</el-button
    >
  </div>
</template>
  
  <script  lang="ts" setup>
import { AxiosResponse } from "axios";
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getMedicineInfoById, selectOperateById } from "../../api/medicine";
const route = useRoute();
const router = useRouter();
const datasource = ref();
const id = ref(route.params.id);
const operate_list = ref<any>([]);
let getOperateData = (operate_ids: any) => {
  let data: Promise<AxiosResponse<any, any>>[] = [];
  operate_ids.forEach((item: any) => {
    data.push(selectOperateById({ operate_id: item }));
  });
  return data;
};
const operate_id = ref([]);
const operate_mouth = ref([]);
getMedicineInfoById({ id: Number(id.value) }).then((res) => {
  datasource.value = res.data.data[0];
  operate_id.value = JSON.parse(res.data.data[0].operate_id);
  operate_mouth.value = JSON.parse(res.data.data[0].operate_mouth);
});

watch(operate_id, (operate_ids) => {
  Promise.all(getOperateData(operate_ids)).then((values) => {
    operate_list.value = values;
  });
});
</script>
  
  <style lang="scss" scoped>
.el-descriptions {
  margin-top: 20px;
}
</style>