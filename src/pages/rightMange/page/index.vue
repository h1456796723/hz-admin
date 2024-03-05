<template>
  <el-upload
    v-model:file-list="fileList"
    class="upload-demo"
    multiple
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :limit="3"
    :before-upload="beforeUpload"
  >
    <el-button type="primary">Click to upload</el-button>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
  </el-upload>
  <el-button type="primary" @click="preview">预览</el-button>
</template>

<script setup lang="ts">
import { ref } from "vue";

import type { UploadProps, UploadUserFile } from "element-plus";

const fileList = ref<UploadUserFile[]>([]);

const handleRemove: UploadProps["onRemove"] = (file, uploadFiles) => {
  console.log(file, uploadFiles);
};

const handlePreview: UploadProps["onPreview"] = (uploadFile) => {
  console.log(uploadFile);
};

const beforeUpload: UploadProps["beforeUpload"] = (rawFile) => {
  console.log(rawFile);
  return false
}

const preview = () => {
  console.log(fileList.value, 'file');
}
</script>

<style scoped></style>
