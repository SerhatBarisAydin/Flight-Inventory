<template>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          style="width: 250px;"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="4" @click="SettingButtonClick">
            <el-icon><setting /></el-icon>
            <span >Settings</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </template>
  
  <script setup>

import { useRouter } from "vue-router";
import { loadingPage } from "../functions";


  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
  
  /* const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
  }
  
  const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
  } */


  const router = useRouter();

  const SettingButtonClick = () => {
    loadingPage(() => {
        router.push({name:"Settings"})
    }, 600);
  }

  


  </script>
  
