<template>

  <el-aside class="container" :width="isCollapse ? '53px' : '210px'">
    <div class="aside-header">
      <img class="logo" src="https://yiming_chang.gitee.io/vue-pure-admin/logo.svg" alt="">
      <span class="aside-title">Admin</span>
    </div>
    <div class="menus">
      <Menu :isCollapse="isCollapse" />
    </div>
    <div class="aside-footer">
      <el-tooltip :content="isCollapse ? '展开': '收起'" placement="right" effect="light">
        <el-icon class="my-icon">
          <component @click="isCollapse=!isCollapse" :is="isCollapse ? Expand : Fold"></component>
        </el-icon>
      </el-tooltip>
    </div>
  </el-aside>

</template>

<script setup lang='ts'>
import { Fold, Expand } from '@element-plus/icons-vue'
import { ref } from 'vue'
import Menu from './Menu.vue'
import routes from '@/router/routes'
console.log(routes, 'routes')
const isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.container{
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  overflow: hidden;
  .aside-header{
    width: 100%;
    height: 48px;
    background-color: rgb(0, 33, 64);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 15px;
    .logo{
      width: 32px;
      height: 32px;
    }
    .aside-title{
      margin-left: 12px;
      color: #fff;
      font-size: 18px;
      font-weight: 600;
    }
  }
  .menus{
    flex: 1;
    background-color: rgb(0, 21, 41);
  }
  .aside-footer{
    width: 100%;
    height: 40px;
    background-color: rgb(0, 21, 41);
    line-height: 40px;
    box-sizing: border-box;
    padding: 0 15px;
    border-top: 2px solid rgb(5, 32, 59);
    .my-icon{
      color: rgb(64, 158, 255);
      cursor: pointer;
    }
  }
}
</style>