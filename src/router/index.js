import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginUser from '../components/LoginUser.vue'
import Home from '../components/Home'
import CarouselView from '../components/CarouselView'
import InventoryWarning from '../components/InventoryWarning'
import HeaderComp from '../components/HeaderComp'
import MessageMenu from '../components/MessageMenu'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeVue',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/loginUser',
    component: LoginUser
  },
  {
    path: '/carouselview',
    component: CarouselView
  },
  {
    path: '/inventoryWarning',
    component: InventoryWarning
  },
  {
    path: '/headerComp',
    component: HeaderComp
  },
  {
    path: '/messageMenu',
    component: MessageMenu
  }
]

const router = new VueRouter({
  routes
})

export default router