<template>
  <header class="header">中医药材管理系统</header>
  <div class="content">
    <van-notice-bar left-icon="volume-o" text="甘肃省中药材管理系统" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="image in pictureUrl" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="statistic">

      <el-statistic title="中药种类总数量" :value="medicineNumber" />
      <el-statistic title="中药总数量/斤" :value="allNumber" />
    </div>
    <div class="echarts" ref="root"></div>
  </div>
</template>
  
<script  lang="ts" setup>
import banner1 from "./../../assets/banner1.jpg"
import banner2 from "./../../assets/banner2.jpg"
import banner3 from "./../../assets/banner3.jpg"
import banner4 from "./../../assets/banner4.jpg"
import banner5 from "./../../assets/banner5.jpg"
import banner6 from "./../../assets/banner6.jpg"
import { ref, onMounted,watch } from 'vue'
import { selectAllMedicine } from "./../../api/medicine"
import * as echarts from 'echarts';
let pictureUrl = [banner1, banner2, banner3, banner4, banner5, banner6];
const medicineNumber = ref(0)
const allNumber = ref(0)
const root = ref(null)
const setAreaData = ref()
selectAllMedicine().then(res => {
  let a = 0;
  medicineNumber.value = res.data.data.length
  res.data.data.forEach((item: { medicine_number: number }) => {
    a = a + item.medicine_number
  })
  allNumber.value = a
})



onMounted(() => {
  selectAllMedicine().then(res => {
    let data = res.data.data
    let areaData = [{
      value: 0,
      name: ""
    }]

    data.forEach((item: any) => {
      let flag = false;
      for (let i = 0; i < areaData.length; i++) {
        if (item.grow_place === areaData[i].name) {
          areaData[i].value += 1;
          flag = true;
          break;
        }
      }
      if (!flag) {
        areaData = [
          ...areaData,
          {
            value: 1,
            name: item.grow_place
          }
        ]
      }
    });

    setAreaData.value = (areaData.slice(1, areaData.length))
  })
  
})
watch(setAreaData,()=>{
  var grow_place_Echarts = echarts.init(root.value!)

  grow_place_Echarts.setOption({

    title: {
      text: "甘肃各地区中药材种类数量分布图"
    },
    series: [
      {
        type: 'pie',
        data: setAreaData.value
      }
    ]
  });
})

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

.statistic {
  margin-top: 0.2rem;
  display: flex;

  .el-statistic {
    flex: 1;
  }
}

.echarts {
  // background-color: red;
  margin: 0 auto;
  margin-top: 0.1rem;
  width: 3rem;
  height: 3rem;
}
</style>