<template>
  <header class="header">上传药品信息</header>
  <div class="content">
    <!-- <el-space></el-space> -->
    <el-form :model="medicine_data" label-width="100px">
      <el-form-item label="药品名">
        <el-input v-model="medicine_data.name" />
      </el-form-item>
      <el-form-item label="药品数量">
        <el-input v-model="medicine_data.medicine_number" type="number" />
      </el-form-item>
      <div style="display: flex">
        <el-form-item label="药品进价">
          <el-input v-model="medicine_data.buy_price" type="number" />
        </el-form-item>
        <el-form-item label="药品售价">
          <el-input v-model="medicine_data.sale_price" type="number" />
        </el-form-item>
      </div>

      <el-form-item label="交货时间">
        <el-date-picker
          v-model="medicine_data.last_data"
          type="date"
          placeholder="选择日期"
          style="width: 100%"
          value-format="YYYY-MM-DD"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="产地">
        <el-select v-model="medicine_data.grow_place" placeholder="选择产地">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="选择操作">
        <div class="operate">
          <div class="item">
            <el-form-item
              ><el-select
                v-model="medicine_data.opreate_mouth[0]"
                placeholder="月份"
                class="select-month"
              >
                <el-option
                  v-for="item in month"
                  :key="item"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option></el-select
              ><el-select
                disabled
                placeholder="选择操作"
                v-model="medicine_data.operate_id[0]"
                class="select-operate"
                @change="change"
              >
                <el-option
                  v-for="item in operate"
                  :key="item"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option> </el-select
              ><el-select
                v-model="medicine_data.opreate_mouth[1]"
                placeholder="月份"
                class="select-month"
              >
                <el-option
                  v-for="item in month"
                  :key="item"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option></el-select
              ><el-select
                placeholder="选择操作"
                v-model="medicine_data.operate_id[1]"
                class="select-operate"
                @change="change"
              >
                <el-option
                  v-for="item in operate"
                  :key="item"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option> </el-select
              ><el-select
                v-model="medicine_data.opreate_mouth[2]"
                placeholder="月份"
                class="select-month"
              >
                <el-option
                  v-for="item in month"
                  :key="item"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option></el-select
              ><el-select
                placeholder="选择操作"
                v-model="medicine_data.operate_id[2]"
                class="select-operate"
                @change="change"
              >
                <el-option
                  v-for="item in operate"
                  :key="item"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option> </el-select
              ><el-select
                v-model="medicine_data.opreate_mouth[3]"
                placeholder="月份"
                class="select-month"
              >
                <el-option
                  v-for="item in month"
                  :key="item"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option></el-select
              ><el-select
                placeholder="选择操作"
                v-model="medicine_data.operate_id[3]"
                class="select-operate"
                @change="change"
              >
                <el-option
                  v-for="item in operate"
                  :key="item"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option> </el-select
              ><el-select
                v-model="medicine_data.opreate_mouth[4]"
                placeholder="月份"
                class="select-month"
              >
                <el-option
                  v-for="item in month"
                  :key="item"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option></el-select
              ><el-select
                placeholder="选择操作"
                v-model="medicine_data.operate_id[4]"
                class="select-operate"
                @change="change"
              >
                <el-option
                  v-for="item in operate"
                  :key="item"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-select
                v-model="medicine_data.opreate_mouth[5]"
                placeholder="月份"
                class="select-month"
              >
                <el-option
                  v-for="item in month"
                  :key="item"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option></el-select
              ><el-select
                placeholder="选择操作"
                v-model="medicine_data.operate_id[5]"
                class="select-operate"
                @change="change"
              >
                <el-option
                  v-for="item in operate"
                  :key="item"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option> </el-select
              ><el-select
                v-model="medicine_data.opreate_mouth[6]"
                placeholder="月份"
                class="select-month"
              >
                <el-option
                  v-for="item in month"
                  :key="item"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option></el-select
              ><el-select
                disabled
                placeholder="选择操作"
                v-model="medicine_data.operate_id[6]"
                class="select-operate"
                @change="change"
              >
                <el-option
                  v-for="item in operate"
                  :key="item"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </div>
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">上传</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  
<script  lang="ts" setup>
import { reactive } from "vue";
import { selectAllOperate } from "../../api/operate";
import { insertMedicineInfo } from "../../api/medicine";
import { ElMessage } from "element-plus";
let month = (function () {
  let arr = [];
  for (let i = 1; i <= 12; i++) {
    arr.push({
      label: i + "月",
      value: i,
    });
  }
  return arr;
})();
let operate = reactive([{ label: "", value: 0 }]);
selectAllOperate().then((res) => {
  res.data.data.forEach(
    (item: { operate_id: number; operate_detail: string }, index: number) => {
      operate[index] = {
        label: item.operate_detail,
        value: item.operate_id,
      };
    }
  );
});

let options = [
  {
    value: "兰州市",
    label: "兰州市",
  },
  {
    value: "嘉峪关市",
    label: "嘉峪关市",
  },
  {
    value: "金昌市",
    label: "金昌市",
  },
  {
    value: "白银市",
    label: "白银市",
  },
  {
    value: "天水市",
    label: "天水市",
  },
  {
    value: "武威市",
    label: "武威市",
  },
  {
    value: "张掖市",
    label: "张掖市",
  },
  {
    value: "平凉市",
    label: "平凉市",
  },
  {
    value: "酒泉市",
    label: "酒泉市",
  },
  {
    value: "定西市",
    label: "定西市",
  },
  {
    value: "陇南市",
    label: "陇南市",
  },
  {
    value: "临夏回族自治州",
    label: "临夏回族自治州",
  },
  {
    value: "甘南藏族自治州",
    label: "甘南藏族自治州",
  },
];
let change = (value: number) => {
  console.log(value);
};
// do not use same name with ref
const medicine_data = reactive({
  name: "",
  medicine_number: 0,
  last_data: "",
  grow_place: "",
  buy_price: 0,
  sale_price: 0,
  opreate_mouth: [0, 0, 0, 0, 0, 0, 0],
  operate_id: [1, 0, 0, 0, 0, 0, 9],
});

const onSubmit = () => {
  if (
    medicine_data.name.length < 1 ||
    medicine_data.medicine_number <= 0 ||
    medicine_data.last_data.length < 1 ||
    medicine_data.grow_place.length < 1 ||
    medicine_data.buy_price <= 0 ||
    medicine_data.sale_price <= 0 ||
    medicine_data.buy_price > medicine_data.sale_price
  ) {
    ElMessage.error("输入有误！");
    return 0;
  }
  for (let i = 0; i < medicine_data.opreate_mouth.length; i++) {
    if (
      medicine_data.opreate_mouth[i] === 0 ||
      medicine_data.operate_id[i] === 0
    ) {
      ElMessage.error("请选择正确的操作！");
      return 0;
    }
  }

  insertMedicineInfo({
    name: medicine_data.name,
    medicine_number: Number(medicine_data.medicine_number),
    last_data: medicine_data.last_data.toString().substring(0, 9),
    grow_place: medicine_data.grow_place,
    buy_price: Number(medicine_data.buy_price),
    sale_price: Number(medicine_data.sale_price),
    operate_mouth: JSON.stringify(medicine_data.opreate_mouth),
    operate_id: JSON.stringify(medicine_data.operate_id),
  });
};
</script>
  
  <style lang="scss" scoped>
.content {
  margin-top: 15px;
}
.el-select {
  width: 100%;
}
.operate {
  width: 100%;
  border: 1px solid gray;
  .item {
    display: flex;
    flex-flow: between;
    .select-month {
      flex: 2;
      width: 20%;
    }
    .select-operate {
      width: 70%;
    }
  }
}
.el-form {
  padding-right: 30px;
}
</style>