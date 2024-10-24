<template>
  <div class="RegisterContainer">
    <div class="header">
      <LogoComponent />
    </div>
    <div class="registerPageInputs">
      <TextInputComponent
        v-model="userData.name"
        placeholder="Name"
        style="
          height: 30px;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        "
      />

      <TextInputComponent
        v-model="userData.id"
        type="text"
        placeholder="Username"
        style="height: 30px; width: 100%"
      />

      <TextInputComponent
        v-model="userData.password"
        type="password"
        placeholder="Password"
        style="height: 30px; width: 100%"
      />

      <TextInputComponent
        v-model="userData.phone"
        type="number"
        placeholder="Enter your phone number"
        style="height: 30px; width: 100%"
      />

      <RegionSelector
        v-model="userData.region"
        placeholder="Choose your region"
        style="height: 30px; width: 100%"
      />
    </div>
    <div class="LoginButton">
      <ButtonComponent buttonName="Kaydet" @loginClickHandler="registerUser" />
      <ButtonComponent buttonName="Geri Dön" @loginClickHandler="goBack" />
    </div>
  </div>
</template>

<script>
import ButtonComponent from "../../components/ButtonComponent.vue";
import TextInputComponent from "../../components/TextInputComponent.vue";
import RegionSelector from "../../components/RegionSelector.vue";
import LogoComponent from "../../components/LogoComponent.vue";
import CryptoJS from "crypto-js";
import { loadingPage } from "../../functions";

export default {
  data() {
    return {
      userData: {
        id: null,
        name: null,
        password: null,
        phone: null,
        region: null,
      },
    };
  },
  components: {
    TextInputComponent,
    ButtonComponent,
    RegionSelector,
    LogoComponent,
  },
  methods: {
    registerUser() {
      //AES Şifreleme yönteminde her defasında farklı şifre ürettipi için SHA256 kullanımı tercih edildi.
      const password = CryptoJS.SHA256(this.userData.password).toString();
      console.log(password);

      this.$appAxios
        .post("/users", { ...this.userData, password })
        .then(this.goBack());

      /* Kullanıcıya ait verileri users.json dosyasından çekmeye yarar */
      /*  this.$appAxios.get(`/users?id=${idNumber}`).then(getUserById =>{
        console.log("user by id :> " , getUserById);
      }) */
      /* 
      this.$appAxios
        .get("/users", {
          params: {
            id: idNumber,
            name: username,
          },
        })
        .then((getUserData) => {
          console.log("userdata => ", getUserData);
        });
 */
    },

    goBack() {
      loadingPage(() => {
        this.$router.push({ name: "LoginPage" });
      }, 1000);
    },
  },
};
</script>
