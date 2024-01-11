import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import PlanView from '@/views/PlanView.vue'
import ContactView from '@/views/ContactView.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductView
  },
  {
    path: '/members',
    name: 'Team Members',
    component: ProductView
  },
  {
    path: '/plan',
    name: 'Business Plan',
    component: PlanView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
