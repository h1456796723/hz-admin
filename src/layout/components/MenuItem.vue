<template>
  <el-sub-menu v-if="data.children && data.children.length">
    <template #title>
      <el-icon style="color: #fff">
        <component :is="data?.meta?.icon"></component>
      </el-icon>
      <span style="color: #fff">{{ data?.meta?.title }}</span>
    </template>
    <template v-for="item in data.children" :key="item.path">
      <MenuItem :data="item" />
    </template>
  </el-sub-menu>
  <el-menu-item v-else :index="data.path">
    <el-icon style="color: #fff">
      <component :is="data?.meta?.icon"></component>
    </el-icon>
    <span style="color: #fff">{{ data?.meta?.title }}</span>
  </el-menu-item>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { MenuItemType } from "@/types";
const { data } = defineProps<MenuItemType>();
console.log(data, "data");

defineOptions({
  name: "MenuItem",
})
</script>

<style lang="scss" scoped></style>
