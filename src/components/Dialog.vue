<template>

<el-dialog
    v-model="props.visible"
    :title="props.title"
    width="30%"
    @close="handleClose"
  >
    <span>{{ props.content }}</span>
    <template #footer>
      <span class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">Cancel</el-button> -->
        <el-button type="primary" @click="submit">
          {{ props.confirmText || '确定' }}
        </el-button>
      </span>
    </template>
  </el-dialog>

</template>

<script setup lang='ts'>
import {defineProps, defineEmits} from 'vue'

type DialogProps = {
  visible: boolean,
  close?: () => void,
  confirm: () => void,
  content: string,
  title: string,
  confirmText?: string,
}

const emit = defineEmits(['update:visible'])

const props = defineProps<DialogProps>()
const handleClose = () => {
  emit('update:visible', false)
  props.close && props.close()
}
const submit = () => {
  props.confirm()
  handleClose()
}
</script>

<style scoped>

</style>