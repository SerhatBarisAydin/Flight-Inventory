<template>
  <div class="common-layout" >
    <el-container>
      <el-aside style="width: 250px; border: none; background: #f5f7fa">
        <div style="padding: 20px;">

          <ProfilePic />
          <h3>Hello, {{getUser}}</h3>
        
      
      </div>
        <el-divider />

        <MenuComponent />

        

      </el-aside>

      <el-container>
        
        <el-header style="border: none; background: #F2F6FC; height: 120px;">

          
          <div style="display: flex; justify-content: space-between; flex-direction: row;" >
            <div> <BreadCrumbComponent /> </div>
            <div> <LogoComponent style="margin-top: 10px"/> </div>
          </div>
            
         
          
          
          
        </el-header>
        <el-main style="border: none; background: #ffffff">
          <div class="mainContent">
            <div>
              
              <CardComponent
                cardHeaderName="Flight Inventory Management"
                cardImage="https://th.bing.com/th/id/R.73e53d4939d9d0277b14bd80d2a3ca91?rik=VrdOV6A9ryh9eA&riu=http%3a%2f%2fwww.qstockinventory.com%2fwp-content%2fuploads%2f2014%2f01%2fbigstock-A-surplus-or-oversupply-of-pro-38532283.jpg&ehk=FDYq%2fMBLgheGHoGAADCCMYaaB9pZn2noTXR66r1D%2fZw%3d&risl=&pid=ImgRaw&r=0"
                @cardClickHandler="handleCardClick"
              />
            </div>

            <div v-for="item in 25" key="item"><CardComponent /></div>
            
          </div>
        </el-main>

        <el-footer style="border: none; background: #333333">
          Footer
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import MenuComponent from "./MenuComponent.vue";
import ProfilePic from "./ProfilePicComponent.vue";
import { loadingPage } from "../functions";
import BreadCrumbComponent from "./BreadCrumbComponent.vue";
import { loadUser } from "../storage";
import LogoComponent from "./LogoComponent.vue";

export default {
  components: {
    CardComponent,
    ProfilePic,
    MenuComponent,
    BreadCrumbComponent,
    LogoComponent
  },

  inject: ['HelloUser'],

  methods: {

    //sayfa geçişi
    handleCardClick() {
      loadingPage(() => {
        this.$router.push({ name: "StockManagement" });
      }, 500);
    },
  },

  computed:{
    UserName(){
      const users = loadUser();
      
      const getUser = users.map((users) => users.id) 
      
      

      return 
    }
  }





};
</script>
<style>
.mainContent {
  /* display: grid;
  grid-template-columns: 200px 200px 200px; 
  grid-template-rows: auto; 
  gap: 200px; 
  background-color: #fafafa; */

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.common-layout{
  padding: 0px;
  margin: 0px;
}
</style>
