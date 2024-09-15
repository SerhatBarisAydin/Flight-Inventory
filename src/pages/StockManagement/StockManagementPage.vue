<!-- <template>
  <div class="stock-management-container">
    <div>
      <el-button
        style="display: flex; margin: 10px"
        size="small"
        type="warning"
        plain
        @click="handleClick"
        >Geri Dön</el-button
      >
    </div>

    <el-table :data="filterTableData" style="width: 100%">
      <el-table-column label="Plane Id" prop="plane_id" />
      <el-table-column label="Model" prop="model" />
      <el-table-column label="capacity" prop="capacity" />
      <el-table-column label="Last Maintenance" prop="last_maintenance" />
      <el-table-column label="Next Maintenance" prop="next_maintenance" />
      <el-table-column label="Home Base" prop="home_base" />
      <el-table-column label="Current Flight" prop="current_flight" />
      <el-table-column label="Destination" prop="destination" />
      <el-table-column align="right">
        <template #header>
          <el-input
            v-model="search"
            size="small"
            placeholder="Type to search"
          />
        </template>
        <template #default="scope">
          <el-button
            size="default"
            @click="handleEdit(scope.$index, scope.row)"
          >
            Edit
          </el-button>
          <el-button
            size="default"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { loadingPage } from "../../functions";


export default {
  data() {
    return {
      search: "",  // Arama terimi için input
    };
  },
  computed: {
    // Vuex store'dan "filteredFlights" getter'ını kullanarak filtrelenmiş flight verilerini alıyoruz
    ...mapGetters(["filteredFlights"]),
    
    // Arama terimine göre filtrelenmiş veriyi Vuex getter'ı üzerinden çekiyoruz
    filterTableData() {
      // Eğer Vuex store'da arama işlemi yapılmıyorsa, burada filtreleme yapabilirsiniz
      const allFlights = this.filteredFlights; // Vuex store'dan alınan tüm flight verileri
      if (!this.search) return allFlights;

      return allFlights.filter(flight =>
        flight.model.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    // Vuex store'dan "editFlight", "deleteFlight", ve "loadFlights" action'larını kullanmak için
    ...mapActions(["editFlight", "deleteFlight", "loadFlights"]),

    // Düzenleme işlemi
    handleEdit(index, flight) {
      const updatedFlight = { ...flight, model: "Updated Model" };  // Örnek güncelleme
      this.editFlight({ index, updatedFlight });
    },

    // Silme işlemi
    handleDelete(index) {
      this.deleteFlight(index);  // Vuex action'ı kullanarak flight verisini siliyoruz
    },

    // Geri butonuna tıklandığında yükleme animasyonu ve geri yönlendirme
    handleClick() {
      loadingPage(() => {
        this.$router.back();  // Vue Router ile geri yönlendirme
      }, 500);
    },
  },
  created() {
    // Component ilk yüklendiğinde tüm flight verisini Vuex store'dan yüklüyoruz
    this.loadFlights(); // Method'u çağırmalısınız
  },
};
</script>

 -->


<template>


  <div class="stock-management-container">
   <!--  <div>
      <el-button
        style="display: flex; margin: 10px"
        size="small"
        type="warning"
        plain
        @click="handleClick"
        >Geri Dön</el-button
      >
    </div> -->
<div class="SettingHeader">
  <div> <BreadCrumbComponent /> 
          </div>
            <div> <LogoComponent/> </div>
          
</div>

  <div>

    <StatisticsComponent/>
    <el-divider/>


  </div>

    <el-table :data="filterTableData" style="width: 100%">
      <el-table-column label="Plane Id" prop="plane_id" />
      <el-table-column label="Model" prop="model" />
      <el-table-column label="capacity" prop="capacity" />
      <el-table-column label="Last Maintenance" prop="last_maintenance" />
      <el-table-column label="Next Maintenance" prop="next_maintenance" />
      <el-table-column label="Home Base" prop="home_base" />
      <el-table-column label="Current Flight" prop="current_flight" />
      <el-table-column label="Destination" prop="destination" />
      <el-table-column align="right">
        <template #header>
          <el-input
            v-model="search"
            size="small"
            placeholder="Type to search"
          />
        </template>
        <template #default="scope">
          <el-button
            size="default"
            @click="handleEdit(scope.$index, scope.row)"
          >
            Edit
          </el-button>
          <el-button
            size="default"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import FlightInventoryData from "../StockManagement/FlightInventoryData.json";
import { loadingPage } from "../../functions";
import PageHeaderComponent from "../../components/PageHeaderComponent.vue";
import StatisticsComponent from "../../components/StatisticsComponent.vue"
import BreadCrumbComponent from "../../components/BreadCrumbComponent.vue";
import LogoComponent from "../../components/LogoComponent.vue";

// Reaktif değişkenler
const search = ref("");
const tableData = FlightInventoryData; // JSON dosyasından veri al

// Arama ve filtreleme işlevi
const filterTableData = computed(() =>
  tableData.filter((data) =>
    Object.values(data).some((value) =>
      value.toString().toLowerCase().includes(search.value.toLowerCase())
    )
  )
);

// Düzenleme işlevi
const handleEdit = (index, row) => {
  console.log(index, row);
};

// Silme işlevi
const handleDelete = (index, row) => {
  console.log(index, row);
};

export default {
  setup() {
    return {
      search,
      filterTableData,
      handleEdit,
      handleDelete,
    };
  },

  methods: {
    handleClick() {
      loadingPage(() => {
        this.$router.back();
      }, 500);
    },

  },
  components:{
      PageHeaderComponent,
      StatisticsComponent,
      BreadCrumbComponent,
      LogoComponent
    },


  computed: {
    getFilteredFlights() {
      return this.$store.getters.filteredFlights;
    },
  },
};
</script>
