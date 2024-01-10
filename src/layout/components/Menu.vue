<template>

  <el-menu background-color="#001529" :collapse="isCollapse">
    <template v-for="item in routeList" :key="item.name">
      <MenuItem :data="item" />
    </template>
  </el-menu>

</template>

<script setup lang='ts'>
import { ref, defineProps } from 'vue'
import routes from '@/router/routes'
import MenuItem from './MenuItem.vue'

const { isCollapse } = defineProps<{ isCollapse: boolean }>()

let routeList = ref<any[]>([])
routeList.value = routes.find(item => item.name === 'layout')!.children as any
</script>

<style lang="scss" scoped>
.el-menu{
  border: none;
}
</style>