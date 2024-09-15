
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: "LoginPage",
        path: "/Login",
        component: () => import("./pages/Login/LoginPage.vue"),
        meta:{
            breadcrumb: 'LoginPage'
        }

    },
    {
        name: "HomePage",
        path: "/Home",
        component: () => import("./pages/Home/HomePage.vue"),
        meta:{
            breadcrumb: 'HomePage'
        }

    },
    {
        name: "RegisterPage",
        path: "/Register",
        component: () => import("./pages/Register/RegisterPage.vue"),
        meta:{
            breadcrumb:'RegisterPage'
        }
    },
    {
        name:"StockManagement",
        path:"/StockManagement",
        component: () => import("./pages/StockManagement/StockManagementPage.vue"),
        meta:{
            breadcrumb: 'StockManagement'
        }
    },
    {
        name:"Settings",
        path:"/Settings",
        component: () => import("./pages/Settings/SettingsPage.vue"),
        meta:{
            breadcrumb: 'Settings'
        }
    }
    
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export {routes}
export default router;