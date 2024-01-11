<template>

  <el-menu background-color="#001529" :collapse="isCollapse" 
  router text-color="rgba(254,254,254,0.55)" active-text-color="#fff"
  :default-active="$route.path"
  >
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
  --text-color: rgba(254,254,254,0.65);
}
</style>