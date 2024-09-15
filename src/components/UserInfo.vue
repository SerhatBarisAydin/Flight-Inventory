<template>
  

    <el-descriptions
      class="margin-top"
      title="User Info"
      :column="2"
      :size="size"
      border
    >
      <template #extra>
        <el-button type="primary">Operation</el-button>
      </template>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <user />
            </el-icon>
            Username
          </div>
        </template>
        {{getUserInfo}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <iphone />
            </el-icon>
            Telephone
          </div>
        </template>
        18100000000
      </el-descriptions-item>
      
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <tickets />
            </el-icon>
            Department
          </div>
        </template>
        <el-tag size="default">School</el-tag>
      </el-descriptions-item>
      
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <location />
            </el-icon>
            Place
          </div>
        </template>
        Suzhou
      </el-descriptions-item>

    </el-descriptions>
    
  
    
  </template>
  
  <script>
import { Iphone, Location, Tickets, User } from '@element-plus/icons-vue';
import { loadUser } from '../storage';

export default {
  data() {
    return {
      size: 'default',
     
    };
  },
  computed: {
    getUserInfo(){

      /* const getUser = loadUser();
      const getUserName = getUser.map(users => users.username )
      

      return getUserName; */

      const userInfo = loadUser().map(users => users.id)
      return userInfo
      
    },



    iconStyle() {
      const marginMap = {
        large: '8px',
        default: '6px',
        small: '4px',
      };
      return {
        marginRight: marginMap[this.size] || marginMap.default,
      };
    },
    blockMargin() {
      const marginMap = {
        large: '32px',
        default: '28px',
        small: '24px',
      };
      return {
        marginTop: marginMap[this.size] || marginMap.default,
      };
    },
  },
};



</script>
  
  <style scoped>
  .el-descriptions {
    margin-top: 20px;
  }
  .cell-item {
    display: flex;
    align-items: center;
  }
  .margin-top {
    margin-top: 20px;
  }
  </style>
  