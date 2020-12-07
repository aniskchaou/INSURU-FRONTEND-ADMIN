import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../components/Dashboard.vue'
import Client from '../components/Client.vue'
import Configuration from '../components/Configuration.vue'
import Contact from '../components/Contact.vue'
import Employee from '../components/Employee.vue'
import Entreprise from '../components/Entreprise.vue'
import Product from '../components/Product.vue'
import Rapport from '../components/Rapport.vue'
import Strategy from '../components/Strategy.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },{
    path: '/client',
    name: 'client',
    component: Client
  },{
    path: '/configuration',
    name: 'configuration',
    component: Configuration
  },{
    path: '/contact',
    name: 'contact',
    component: Contact
  },{
    path: '/employee',
    name: 'employee',
    component: Employee
  },{
    path: '/entreprise',
    name: 'entreprise',
    component: Entreprise
  },{
    path: '/product',
    name: 'product',
    component: Product
  },{
    path: '/rapport',
    name: 'rapport',
    component: Rapport
  },{
    path: '/strategy',
    name: 'strategy',
    component: Strategy
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router