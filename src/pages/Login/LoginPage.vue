<!-- LoginPage.vue -->
<!-- json-server --watch users.json -->
<template>
  <div class="LoginContainer">
    <div class="LoginForm">
      <div>
        <LogoComponent style="padding-bottom: 20px" />
      </div>

      <IdInputComponent
        v-model="loginData.username"
        style="margin-bottom: 20px; width: 100%"
      />
      <PasswordInputComponent
        v-model="loginData.password"
        style="width: 100%"
      />

      <div class="LoginButton">
        <ButtonComponent
          @loginClickHandler="loginUser"
          buttonName="Giriş"
          style="width: 50%"
        />
        <ButtonComponent
          @loginClickHandler="goToRegister"
          buttonName="Kayıt Ol"
          style="width: 50%"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "../../components/ButtonComponent.vue";
import IdInputComponent from "../../components/IdInputComponent.vue";
import PasswordInputComponent from "../../components/PasswordInputComponent.vue";
import LogoComponent from "../../components/LogoComponent.vue";
import { loadingPage } from "../../functions";
export default {
  data() {
    return {
      loginData: {
        username: null,
        password: null,
      },
    };
  },
  components: {
    PasswordInputComponent,
    IdInputComponent,
    ButtonComponent,
    LogoComponent,
  },
  methods: {
    loginUser() {
      /* this.$appAxios.get(`/users?id=${this.loginData.username}`).then((goHomePage) => {
        console.log(this.loginData.username);
      }); */


      this.$appAxios.get("/users", {
        params:{
          id: this.loginData.username,
          password: this.loginData.password
        },
      }).then(goHomePage => {console.log("welcome: ", this.loginData.username)})
      .catch(function (error) {
    console.log(error);
  })


      console.log(this.loginData.username);
    },


    goToRegister() {
      loadingPage(() => {
        this.$router.push({ name: "RegisterPage" });
      }, 1000);
    },
  },
};
</script>
