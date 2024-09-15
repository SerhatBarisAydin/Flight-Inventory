<template>
    <el-input type="text" v-model="input" style="width: 240px" placeholder="Username" />
  </template>
  
  <script lang="js" setup>
  import { ref, watch } from 'vue'
  const input = ref('')

const emit = defineEmits(['LoginIdChange'])
watch(input,(value) => {
  emit('LoginIdChange', value)
} )

  </script>