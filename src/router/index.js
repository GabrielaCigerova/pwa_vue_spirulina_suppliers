import { createMemoryHistory, createRouter } from 'vue-router'

import SuppliersList from "@/components/SuppliersList.vue";
import SuppliersMap from "@/components/SuppliersMap.vue";
import Supplier from "@/components/Supplier.vue";
import Home from "@/components/Home.vue";


const routes = [
    {path: '/', component: Home},
    {path: '/suppliers', component: SuppliersList}, /* * This is static way. Dynamic is using component: () => import('../views/AboutView.vue') */
    {path: '/map', component: SuppliersMap},
    {path: '/supplier', component: Supplier},
]



const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router