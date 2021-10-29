import { createRouter, createWebHistory } from '@ionic/vue-router';
//import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Registrarse from '../views/Registrarse.vue'
import Categorias from '../views/Categorias.vue'
import Edad2y6 from '../views/categorias/Edad2y6.vue'
import Edad7y10 from '../views/categorias/Edad7y10.vue'
import Colores from '../views/categorias/Colores.vue'
import Familia from '../views/categorias/Familia.vue'
import Vocales from '../views/categorias/Vocales.vue'
import Rutina from '../views/categorias/Rutina.vue'
import SubirContenido from '../views/SubirContenido.vue'
import Test from '../views/Test.vue'

const routes = [
  {
    path: '/',
    redirect: '/registrarse'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registrarse',
    name: 'Registrarse',
    component: Registrarse
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: Categorias
  },
  {
     path: '/edad2y6',
     name: 'Edad2y6',
     component: Edad2y6
  },
  {
     path: '/edad7y10',
     name: 'Edad7y10',
     component: Edad7y10
  },
  {
     path: '/colores',
     name: 'Colores',
     component: Colores
  },
  {
     path: '/familia',
     name: 'Familia',
     component: Familia
  },
  {
     path: '/Vocales',
     name: 'Vocales',
     component: Vocales
  },
  {
     path: '/rutina',
     name: 'Rutina',
     component: Rutina
  },
  {
     path: '/subircontenido',
     name: 'SubirContenido',
     component: SubirContenido
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
