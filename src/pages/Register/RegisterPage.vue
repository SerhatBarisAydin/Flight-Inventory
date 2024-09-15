<template>
  <div class="RegisterContainer">
    <div class="header">
      <LogoComponent />
    </div>
    <div class="registerPageInputs">
      <TextInputComponent
        v-model="newName"
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
        v-model="newId"
        type="text"
        placeholder="Username"
        style="height: 30px; width: 100%;"
      />

      <TextInputComponent
        v-model="newPassword"
        type="password"
        placeholder="Password"
        style="height: 30px; width: 100%;"
      />

      <TextInputComponent
        v-model="newPhone"
        type="number"
        placeholder="Enter your phone number"
        style="height: 30px; width: 100%;"
      />

      <RegionSelector
        v-model="newRegion"
        placeholder="Choose your region"
        @DateTime="DateTimeHandler"
        style="height: 30px; width: 100%;"
        
      />
    </div>
    <div class="LoginButton">
      <ButtonComponent buttonName="Kaydet" @loginClickHandler="registerUser" />
     <ButtonComponent buttonName="Geri Dön" @loginClickHandler="goBack" />
    </div>
  </div>
</template>

<script>
import { saveUser } from "../../storage";
import ButtonComponent from "../../components/ButtonComponent.vue";
import TextInputComponent from "../../components/TextInputComponent.vue";
import { ElLoading, ElMessage } from "element-plus";
import { loadingPage } from "../../functions";
import RegionSelector from "../../components/RegionSelector.vue";
import LogoComponent from "../../components/LogoComponent.vue";

export default {
  data() {
    return {
      newId: "",
      newName: "",
      newPassword: "",
      newPhone: "",
      newRegion: "",
    };
  },
  components: {
    TextInputComponent,
    ButtonComponent,
    RegionSelector,
    LogoComponent,
  },
  methods: {
    goBack() {
      const loading = ElLoading.service({
        lock: true,
        text: "",
        background: "rgba(0,0,0,0.7)",
      });
      setTimeout(() => {
        loading.close(), this.$router.push({ name: "LoginPage" });
      }, 1500);
    },

    DateTimeHandler(value) {
      value = this.newBirthdate;
    },

    //newUserData içerisinde
    registerUser() {
      const controlBlankSpaces =
        this.newId != "" &&
        this.newName != "" &&
        this.newPassword != "" &&
        this.newPhone != "" &&
        this.newRegion != "";
      //Buradaki if bloğu register edilirken boş veri kaydedilmemesi adına girilmesi gereken bilgilerin eksiksiz girilmesini sağlar
      if (controlBlankSpaces) {
        const newUserData = {
          id: this.newId,
          name: this.newName,
          password: this.newPassword,
          phone: this.newPhone,
          region: this.newRegion,
        };

        saveUser(newUserData);
        console.log("user Registered: ", newUserData);

        loadingPage(() => {
          ElMessage({
            message: "Kayıt başarıyla oluşturuldu",
            type: "success",
          });
          this.$router.push({ name: "LoginPage" });
        }, 1500);
      } else {
        ElMessage({
          message: "Boş alan bırakılamaz",
          type: "error",
        });
      }
    },
  },
};
</script>
