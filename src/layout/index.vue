<template>

<div class="common-layout">
    <el-container>
      <Aside />
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script setup lang='ts'>
import Aside from './components/Aside.vue'
</script>

<style lang="scss" scoped>
.common-layout{
  width: 100vw;
  height: 100vh;
  ::v-deep(.el-container) {
    width: 100%;
    height: 100%;
  }
}
</style>