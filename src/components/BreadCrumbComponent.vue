<template>
  <el-breadcrumb separator="/">
    <!-- <el-breadcrumb-item v-for="(route, index) in breadcrumbs" :key="index">
      <router-link :to="route.path"> {{ route.meta.breadcrumb }} </router-link>
    </el-breadcrumb-item> -->

    <el-breadcrumb-item style="margin-top: 20px;" v-for="(route, index) in breadcrumbs" :key="index">
      <p>kagjlkdjglkdag</p>
    </el-breadcrumb-item>


    


    <!-- <el-breadcrumb-item>
      <a href="/">promotion management</a>
    </el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item> -->
  </el-breadcrumb>
</template>

<script>
import { routes } from '../router';

export default {
  /* data(){

   return{
    RouteValues: {
      name:"",
      path:""
    }
   }

  }, */

  methods: {},

  /* mounted(){
      const RouteNames = routes.map(routes => routes.name)
      const RoutePath = routes.map(routes => routes.name)

      this.name = RouteNames
      this.path = RoutePath


      console.log(RouteNames)
      console.log(RoutePath)
      console.log()
    }, */

  computed: {
    breadcrumbs() {
      
      const arr = []

      const MatchedRoutes = this.$route.matched


      arr.push(MatchedRoutes)

      console.log(arr)

      
    },

    
  },



  
};
</script>
