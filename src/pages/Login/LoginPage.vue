<!-- LoginPage.vue -->
<template>
  <div class="LoginContainer">
    <div class="LoginForm">
      <div>
        <LogoComponent style="padding-bottom: 20px" />
      </div>

      <IdInputComponent
        v-model="loginId"
        @loginIdChange="loginIdControl"
        style="margin-bottom: 20px; width: 100%"
      />
      <PasswordInputComponent
        v-model="loginPassword"
        @loginPasswordChange="loginPasswordControl"
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
import { loadUser } from "../../storage";
import { ElMessage } from "element-plus";
import { loadingPage } from "../../functions";
export default {
  data() {
    return {
      loginId: "",
      loginPassword: "",
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
      //storage.js içerisinde yazmış olduğumuz loadUser ile kişi bilgilerini çekebiliyor hale geliyoruz
      const users = loadUser();
      const user = users.find(
        (user) =>
          user.id === this.loginId && user.password === this.loginPassword
      );

      if (user) {
        loadingPage(() => {
          ElMessage({
            message: "Giriş Başarılı",
            type: "success",
          });
          this.$router.push({ name: "HomePage" });
        }, 1000);
      } else {
        ElMessage({
          message: "Giriş başarısız oldu. Bilgilerin doğruluğunu kontrol edin",
          type: "warning",
        });
      }
    },

    goToRegister() {
      loadingPage(() => {
        this.$router.push({ name: "RegisterPage" });
      }, 1000);
    },
  },
};
</script>
