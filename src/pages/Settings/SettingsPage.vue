<template>
  <div class="Container">
    <div class="SettingHeader">
      <div><BreadCrumbComponent /></div>
      <div><LogoComponent /></div>
    </div>

    <div>
      <UserInfo />
    </div>
  </div>
</template>

<script>
import BreadCrumbComponent from "../../components/BreadCrumbComponent.vue";
import LogoComponent from "../../components/LogoComponent.vue";
import UserInfo from "../../components/UserInfo.vue";

export default {
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
