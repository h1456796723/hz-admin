<template>
  <div class="container">
    <el-card shadow="hover" class="box-card">
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
    <el-card shadow="hover" class="box-card">
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
    <el-card shadow="hover" class="box-card">
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
    <el-card shadow="hover" class="box-card">
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
    <!-- <el-card shadow="hover" class="">
    </el-card> -->

    <div class="chartDom">
      <Echarts :option="option" :loading="true" :on-mouseover="onMouseover" />
    </div>

  </div>

</template>

<script setup lang="ts">
import useDialog from '@/hooks/useDialog';
import Echarts from '../../components/Echarts.vue';

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
};

const onMouseover = (e: any, chartDom: any, prop: object) => {
  // console.log(e, chartDom, prop);
}

const submit = async () => {
  const res = await useDialog('你确定要提交吗', '提示', '确定')
  console.log(res)
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .box-card {
    height: 147px;
    width: 300px;
    // margin-bottom: 20px;
    // margin-right: 20px;
  }
  .el-row {
    flex-wrap: wrap;
  }
  .chartDom{
    width: 500px;
    height: 300px;
    background-color: #fff;
  }
}
</style>
