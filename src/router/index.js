import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Opiniones from '../views/Opiniones.vue'
import Edicion from '../views/Edicion.vue'
import NotFound from '../views/NotFound.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import(/* webpackChunkName: "administracion" */ '../views/Administracion.vue')
  },
  {
    path:'/opiniones',
    name: 'Opiniones',
    component: Opiniones
  },
  { 
    path:'/opinion/:index',
    name: 'Opinion',
    props: true,
    component: Edicion,
  },
  { 
    path:'*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
