<template>

<div class="common-layout">
    <el-container>
      <Aside />
      <el-container>
        <el-header height="86px">
          <Header />
        </el-header>
        <el-main>
          <div class="main">
              <router-view v-slot="{ Component }">
                <Transition 
                  enter-active-class="animate__fadeIn" 
                  leave-active-class="animate__fadeOut"
                >
                  <component :is="Component" />
                </Transition>
              </router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script setup lang='ts'>
import 'animate.css'
import Aside from './components/Aside.vue'
import Header from './components/Header.vue'
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
.el-header{
  padding: 0;
  margin: 0;
}
.el-main{
  padding: 0;
  margin: 0;
}
.main{
  width: 100%;
  height: 100%;
  background-color: rgb(240, 242, 245);
  overflow: scroll;
  box-sizing: border-box;
  padding: 20px;
}
</style>