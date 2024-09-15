<template>
  <div class="homeContainer">
    <div>
      <LayoutContainerComponent />

      <BacktopComponent />
    </div>
  </div>
</template>

<script>
import CardComponent from "../../components/CardComponent.vue";
import { loadingPage } from "../../functions";
import LayoutContainerComponent from "../../components/LayoutContainerComponent.vue";
import BacktopComponent from "../../components/BacktopComponent.vue";
import { loadUser } from "../../storage";

export default {
  data() {
    return {
      HelloUser: "Baris",
    };
  },
  provide() {
    return {
      HelloUser: this.HelloUser, // 'provide' ile HelloUser verisini paylaşıyoruz
    };
  },
  components: {
    CardComponent,
    LayoutContainerComponent,
    BacktopComponent,
  },
  methods: {
    handleCardClick() {
      loadingPage(() => {
        this.$router.push({ name: "StockManagement" });
      }, 500);
    },

    /* for ile veri içerisinde dolaşıp kullanıcı adı ile uyusan değeri eşleyebilir.*/

    /* USERNAME HOME PAGE INDE GÖZĞKMESİ İÇİN  */
    methods: {
      loadUserName() {
        const getUsers = loadUser();
        this.HelloUser = getUsers.map((users) => users.name);
        console.log(this.HelloUser)
      },
    },

    mounted() {
      this.loadUserName(); // Bileşen yüklendiğinde kullanıcı adını getiriyoruz
    },
  },
};
</script>
