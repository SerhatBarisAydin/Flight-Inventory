<template>
    <el-card style="width: 360px; max-height: 360px; cursor: pointer; margin:20px;" shadow="hover" @click="emit('cardClickHandler')">
      <template #footer>{{cardHeaderName}}</template>

      
      <el-empty
      :image="cardImage"
      />


      
    </el-card>
  </template>

<script setup>

const emit = defineEmits(['cardClickHandler'])

const props = defineProps({
    cardHeaderName:{
        type: String,
        required: true
    },
    cardImage:{
      type: String,
      required: true
    }
   
})






</script>



