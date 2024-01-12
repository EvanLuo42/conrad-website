import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import PlanView from '@/views/PlanView.vue'
import AboutView from '@/views/AboutView.vue'
import MembersView from '@/views/MembersView.vue'

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
    component: MembersView
  },
  {
    path: '/plan',
    name: 'Business Plan',
    component: PlanView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: AboutView
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
