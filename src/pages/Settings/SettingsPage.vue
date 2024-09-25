<template>
  <div class="Container">
    <div class="SettingHeader">
      <div><BreadCrumbComponent /></div>
      <div><LogoComponent /></div>
    </div>

    <div>
      <UserInfo />
    </div>

      <div>
        <p style="color: black;" v-for="user in users" :key="user.id" > {{ user.name }} </p>
      </div>


</div>
</template>

<script>
import BreadCrumbComponent from "../../components/BreadCrumbComponent.vue";
import LogoComponent from "../../components/LogoComponent.vue";
import UserInfo from "../../components/UserInfo.vue";
import userData from "../../users.json"





export default {


  data(){
  return{
    users: userData,
  }
},
  components: {
    UserInfo,
    BreadCrumbComponent,
    LogoComponent,
  },
};
</script>

<style>
.Container {
  background: white;
  width: 100vw; /* Viewport genişliği */
  height: 100vh;
  border: 1px solid transparent;
}
</style>
