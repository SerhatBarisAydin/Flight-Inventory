<template>
    <el-page-header style="background: #f4f4f5; padding: 20px;" >
      <template #breadcrumb>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: './Home' }">
            homepage
          </el-breadcrumb-item>
          <el-breadcrumb-item
            ><a href="./page-header.html">route 1</a></el-breadcrumb-item
          >
          <el-breadcrumb-item>route 2</el-breadcrumb-item>
        </el-breadcrumb>
      </template>
      <template #content >
        <span class="text-large font-600 mr-3"> Title </span>
      </template>
    </el-page-header>
  </template>

  