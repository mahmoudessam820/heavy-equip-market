import { createRouter, createWebHistory } from 'vue-router'


import Home from '../views/Home.vue'
import NewEquipment from '../views/NewEquipment.vue'
import NewMachineFamily from '../views/NewMachineFamily.vue'
import EquipmentDetails from '../views/EquipmentDetails.vue'
import UsedEquipment from '../views/UsedEquipment.vue'
import UsedEquipmentFamily from '../views/UsedEquipmentFamily.vue'
import UsedEquipmentDetails from '../views/UsedEquipmentDetails.vue'
import RentalEquipmentCatgories from '../views/RentalEquipmentCatgories.vue'
import Parts from '../views/Parts.vue'
import Trucks from '../views/Trucks.vue'
import Service from '../views/Service.vue'
import ContsctUs from '../views/ContactUs.vue'
import Signin from '../views/Signin.vue'
import Login from '../views/Login.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new-equipment',
      name: 'new-equipment',
      component: NewEquipment
    },
    {
      path: '/new-machine-family',
      name: 'new-machine-family',
      component: NewMachineFamily
    },
    {
      path: '/equipment-details',
      name: 'equipment-details',
      component: EquipmentDetails
    },
    {
      path: '/used-equipment',
      name: 'used-equipment',
      component: UsedEquipment
    },
    {
      path: '/used-equipment-family',
      name: 'used-equipment-family',
      component: UsedEquipmentFamily
    },
    {
      path: '/used-equipment-Details',
      name: 'used-equipment-Details',
      component: UsedEquipmentDetails
    },
    {
      path: '/rental-equipment-catgories',
      name: 'rental-equipment-catgories',
      component: RentalEquipmentCatgories
    },
    {
      path: '/parts',
      name: 'parts',
      component: Parts
    },
    {
      path: '/trucks',
      name: 'trucks',
      component: Trucks
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContsctUs
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

export default router
