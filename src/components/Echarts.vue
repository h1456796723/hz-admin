<template>

  <div id="echarts" ref="echartsRef" :style="{width: props.width, height: props.height}"></div>

</template>

<script setup lang='ts'>
import {ref, onMounted,watch} from 'vue'
import * as echarts from 'echarts'

const echartsRef = ref<HTMLElement>()
const chartDom = ref<any>(null)

const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  },
  option: {
    type: Object,
    default: () => {}
  },
  loading: {
    type: Boolean,
    default: false
  },
  theme: {
    type: String,
    default: 'light'
  },
  onMouseover: {
    type: Function,
    default: () => {}
  },
  onMouseout: {
    type: Function,
    default: () => {}
  },
  onClick: {
    type: Function,
    default: () => {}
  }
})

watch(() => props, () => {
  init()
})

onMounted(() => {
  init()
  window.addEventListener('resize', resize)
})

const resize = () => {
  if (chartDom.value) {
    chartDom.value.resize({
      animation: {
        duration: 300
      }
    })
  }
}

const init = () => {
  if (props.loading && chartDom.value) {
    chartDom.value.showLoading()
  }
  if (chartDom.value) {
    setTimeout(() => {
      chartDom.value.hideLoading()
    }, 2000)
    chartDom.value.setOption(props.option)
  } else {
    chartDom.value = echarts.init(echartsRef.value as HTMLElement, props.theme, {
      renderer: 'canvas'
    })

    if (props.onMouseover) {
      chartDom.value.on('mouseover', (e: any) => {
        props.onMouseover(e, chartDom.value, props.option)
      })
    }

    if (props.onMouseout) {
      chartDom.value.on('mouseout', (e: any) => {
        props.onMouseout(e, chartDom.value, props.option)
      })
    }

    if (props.onClick) {
      chartDom.value.on('click', (e: any) => {
        props.onClick(e, chartDom.value, props.option)
      })
    }

    chartDom.value.setOption(props.option)
  }
}

</script>

<style scoped>

</style>