import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Home from '../views/Home.vue'
import CrearOferta from '../views/CrearOferta.vue'
import OfertasTerminadas from '../views/OfertasTerminadas'

import NavegacionMenu from '../components/NavegacionMenu.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    {
        path: '/Oferta',
        name: 'CrearOferta',
        component: NavegacionMenu,
        props: {
            pageName:'Ofertas de trabajo',
        },
        children: [{
                path: '',
                component: CrearOferta
        }]
    },
    {
        path: '/ofertas-culminadas',
        name: 'OfertasCulminadas',
        component: NavegacionMenu,
        props: {
            pageName:'Ofertas culminadas',
        },
        children: [{
            path: '',
            component: OfertasTerminadas
        }]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
