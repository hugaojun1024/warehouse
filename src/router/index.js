import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginUser from '../components/LoginUser.vue'
import Home from '../views/Home'
import CarouselView from '../components/CarouselView'
import InventoryWarning from '../views/InventoryWarning'
import HeaderComp from '../components/HeaderComp'
import MessageMenu from '../components/MessageMenu'
import SuggestionsOffer from '../components/SuggestionsOffer'
import Message from '../components/Message.vue'
import UserProfile from "@/views/UserProfile.vue";
import MessageInfo from '../components/MessageInfo.vue'
import HeaderCompHasExit from '../components/HeaderCompHasExit'
import StockInquiry from '../views/StockInquiry'
import zicanView from "@/views/zicanView";
import SuggestionSuccess from "@/components/SuggestionSuccess.vue";
import test from "@/components/test.vue";
import NavigatorBar from "@/components/NavigatorBar"
import SuggestView from "@/views/SuggestView";
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeVue',
      component: Home
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
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/message_info',
      component: MessageInfo
    },
    {
      path: '/user_profile',
      component: UserProfile
    },
    {
      path: '/headerCompHasExit',
      component: HeaderCompHasExit
    },
    {
      path: '/stockInquiry',
      component: StockInquiry
    },
    {
      path: '/suggestionsOffer',
      component: SuggestionsOffer
    },
    {
      path:'/zicanView',
      component: zicanView
    },
    {
      path: '/suggestionSuccess',
      component: SuggestionSuccess
    },
    {
      path: '/test',
      component: test
    },
    {
      path: '/NavigatorBar',
      component: NavigatorBar
    },
    {
      path: '/SuggestView',
      component:SuggestView
    },
    {
      path:'/contact_us',
      component:ContactUs
    },
    {
      path:'/about_app',
      component:AboutApp
    }
  ]
})
