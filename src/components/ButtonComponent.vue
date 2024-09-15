<template>

    <div class="buttonComponent">
        <!-- <el-button @click="$router.push({name:'HomePage'})" type="success" plain>Giriş</el-button>
        <el-button @click="$router.push({name:'RegisterPage'})" type="success" plain>Kayıt Ol</el-button> -->
        
        <el-button @click="emit('loginClickHandler')" type="success" plain style="width: 80px;" >{{ buttonName }}</el-button>
        <!-- <el-button @click="emit('loginClickHandler')" type="success" plain>Kayıt Ol</el-button> -->

    </div>

</template>

<script setup>


import { defineEmits } from 'vue';

const emit = defineEmits(['loginClickHandler'])

const props = defineProps({
    buttonName:{ String,
    Required: true
    }
})





</script>

<style>




</style>