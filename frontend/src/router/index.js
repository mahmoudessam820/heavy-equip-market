import { createRouter, createWebHistory } from 'vue-router'


import Home from '../views/Home.vue'
import NewEquipment from '../views/equipment/NewEquipment.vue'
import NewEquipmentFamily from '../views/equipment/NewEquipmentFamily.vue'
import NewEquipmentDetails from '../views/equipment/NewEquipmentDetails.vue'
import UsedEquipment from '../views/used-equipment/UsedEquipment.vue'
import UsedEquipmentFamily from '../views/used-equipment/UsedEquipmentFamily.vue'
import UsedEquipmentDetails from '../views/used-equipment/UsedEquipmentDetails.vue'
import RentalEquipmentCatgories from '../views/rentals/RentalEquipmentCatgories.vue'
import Part from '../views/parts/Part.vue'
import Truck from '../views/trucks/Truck.vue'
import Service from '../views/services/Service.vue'
import ContsctUs from '../views/ContactUs.vue'
import Signin from '../views/account/Signin.vue'
import Login from '../views/account/Login.vue'
import NotFound from '../views/NotFound.vue'



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
      path: '/new-equipment-family',
      name: 'new-equipment-family',
      component: NewEquipmentFamily
    },
    {
      path: '/new-equipment-details',
      name: 'new-equipment-details',
      component: NewEquipmentDetails
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
      path: '/part',
      name: 'part',
      component: Part
    },
    {
      path: '/truck',
      name: 'truck',
      component: Truck
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
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    },
  ]
})

export default router
