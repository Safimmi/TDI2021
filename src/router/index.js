import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: "/login",
    name: "Login", 
    component: () => import("../views/Login.vue")
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/DashAdmin/DashAdministrador.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component: () => import('../components/DashMiembro/Formulario.vue')
  },
  {
    path: '/dashboardM',
    name: 'DashboardM',
    component: () => import('../views/DashboardM.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashadministrador',
    name: 'DashAdministrador',
    component: () => import('../components/DashAdmin/DashAdministrador.vue')
  },
  {
    path:'/perfiladmin',
    name: 'PerfilAdmin',
    component: () => import('../components/DashAdmin/PerfilAdmin.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})




export default router
