<template>

  <div class="header">
    <div class="top">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in breadList" :to="{ path: item.path }">{{ item?.meta?.title }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="top-right">
        <el-icon class="search-icon">
          <Search />
        </el-icon>
        <div class="bell-icon">
          <el-badge value="14" class="item">
            <el-icon >
              <Bell />
            </el-icon>
          </el-badge>
        </div>
        <el-dropdown trigger="click">
          <div class="user-box">
            <img class="avator" src="@/assets/image/avator.jpg" alt="">
            <span class="name">admin</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="VideoPlay" @click="logout">退出系统</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="bottom">
      <el-tag 
        v-for="item in editableTabs" 
        :key="item.path" closable
        color="#fff"
        :style="{color: item.path === route.path ? '#409EFF' : '#606266'}"
        @click="changeTab(item)"
        @close="closeTab(item)"
      >{{ item.name }}</el-tag>
    </div>
  </div>

</template>

<script setup lang='ts'>
import { ref, watch, onMounted } from 'vue';
import {useRoute, RouteRecordRaw, useRouter} from "vue-router";
import { VideoPlay } from '@element-plus/icons-vue';
const route = useRoute();
const router = useRouter();
const breadList = ref<RouteRecordRaw[]>([])
let editableTabs = ref<Partial<RouteRecordRaw>[]>([])
watch(() => route.path,() => {
  breadList.value = route.matched.filter(item => item.meta && item.meta.title)
  getTabs()
})

const getTabs = () => {
  if (!editableTabs.value.find(i => i.path === route.path)) {
    editableTabs.value.push({
      path: route.path,
      name: route.meta.title as string
    })
  }
}

const changeTab = (item: Partial<RouteRecordRaw>) => {
  router.push(item.path as string)
}

const closeTab = (item: Partial<RouteRecordRaw>) => {
  if (item.path === route.path) {
    router.back()
  }
  editableTabs.value = editableTabs.value.filter(i => i.path !== item.path)
}

onMounted(() => {
  breadList.value = route.matched.filter(item => item.meta && item.meta.title)
  getTabs()
})

const logout = () => {
  window.localStorage.removeItem('token')
  router.replace('/login')
}

</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  height: 86px;
  // position: fixed;
  // top: 0;
  // right: 0;
  .top{
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    box-shadow: 0 0 1px #888;
    ::v-deep(.is-link){
      color: #606266 !important;
      font-weight: normal !important;
      &::nth-child(1):hover{
        color: #409eff !important;
      }
    }
    .top-right{
      display: flex;
      align-items: center;
      .search-icon{
        height: 48px;
        width: 40px;
        cursor: pointer;
        &:hover{
          background-color: #f6f6f6;
        }
      }
      .bell-icon{
        // height: 48px;
        width: 40px;
        cursor: pointer;
        margin-right: 5px;
        // text-align: center;
        // line-height: 48px;
        &:hover{
          background-color: #f6f6f6;
        }
        // .item{
        //   width: 100%;
        //   height: 100%;
        // }
      }
      .user-box{
        width: 90px;
        height: 100%;
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        .avator{
          width: 22px;
          height: 22px;
          border-radius: 50%;
        }
        .name{
          font-size: 14px;
        }
      }
    }
  }
  .bottom{
    width: 100%;
    height: 38px;
    box-shadow: 0 0 1px #888;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 5px;
  }
}
.el-tag{
  margin-right: 5px;
  cursor: pointer;
}
</style>