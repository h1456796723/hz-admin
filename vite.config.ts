import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { autoComplete, Plugin as importCDN } from 'vite-plugin-cdn-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer({ open: true }), // 生成依赖分析图
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    importCDN({
      prodUrl: 'https://cdn.bootcdn.net/ajax/libs/{name}@{version}/{path}',
      modules: [
        autoComplete('vue'),
        autoComplete('axios'),
        autoComplete('lodash'),
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: 'dist/index.full.js',
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: 'dist/vue-router.global.js'
        },
        {
          name: 'pinia',
          var: 'Pinia',
          path: 'dist/pinia.iife.js'
        },
        {
          name: 'echarts',
          var: 'echarts',
          path: 'dist/echarts.min.js'
        },
        {
          name: 'zrender',
          var: 'zrender',
          path: 'dist/zrender.js'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
        entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
        assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
        // 最小化拆分包
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      },
      plugins: [
        viteCompression({
          deleteOriginFile: true, // 删除原文件
          verbose: true, // 开启日志
          disable: false, // 是否禁用压缩
          threshold: 10240, // 文件大于10kb压缩
          algorithm: 'gzip', // 压缩算法
          ext: '.gz' // 压缩后文件后缀
        })
      ]
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        pure_funcs: ['console.log'], // 只删除所有的console.log
        drop_debugger: true,  // 删除debugger
      }
    }
  }
})
