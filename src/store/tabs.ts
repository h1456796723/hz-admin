import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { MyRoutes } from '@/types'

const useTabs = defineStore('tab', () => {
  // 定义变量
  const tabList = ref<Partial<MyRoutes>[]>([])

  // 定义方法
  const addTab = (tab: Partial<MyRoutes>) => {
    // 添加tab
    tabList.value.push(tab)
  }

  return { tabList, addTab }
})

export default useTabs