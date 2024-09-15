<template>
    <div class="demo-image">
      <div v-for="fit in fits" :key="fit" class="block">
        
        <el-image style="width: 100px; height: 100px" :src="url" :fit="fit" />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import type { ImageProps } from 'element-plus'
  
  const fits = [
    
    'cover',
    
  ] as ImageProps['fit'][]
  const url =
    'https://i.pinimg.com/originals/ab/9d/16/ab9d160d211535fb7d23625be2a2884e.png'
  </script>
  
  <style scoped>
  .demo-image .block {
    padding: 0px , 20px;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    vertical-align: top;
  }
  .demo-image .block:last-child {
    border-right: none;
  }
  .demo-image .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }
  </style>
  