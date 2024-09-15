<template>
    <el-input type="password" v-model="input" style="width: 240px" placeholder="Password" />
  </template>
  
  <script lang="ts" setup>
  import { ref, watch } from 'vue'
  const input = ref('')
  
  const emit = defineEmits(['loginPasswordChange'])

  watch(input, (value) => {
    emit('loginPasswordChange', value)
  })
  
  </script>