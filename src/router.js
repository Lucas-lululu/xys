import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Body from './views/Body.vue'
import about from './components/about.vue'
import joinus from './components/joinus.vue'
import brand from './components/brand.vue'

import navigationbar from './components/navigationbar.vue'
import recommend from './components/Exhibition/recommend.vue'
import fashion from './components/Exhibition/fashion.vue'
import beautymakeup from './components/Exhibition/beautymakeup.vue'
import deliciousfood from './components/Exhibition/deliciousfood.vue'
import motion from './components/Exhibition/motion.vue'
import video from './components/Exhibition/video.vue'
import travel from './components/Exhibition/travel.vue'
import skincare from './components/Exhibition/skincare.vue'
import infant from './components/Exhibition/infant.vue'
import read from './components/Exhibition/read.vue'
import fmen from './components/Exhibition/fmen.vue'

import error from './components/404.vue'
import login from './components/Login.vue'
import userCore from './components/userCore.vue'

Vue.use(Router)

export default new Router({
  base:process.env.BASE_URL,
  routes: [
    {path:'/',component:Home,children:[
      {path:"",component:Body},
      {path:"/index",component:Body},
      {path:'/about',component:about},
      {path:'/joinus',component:joinus},
      {path:'/brand',component:brand},
      {path:'/navigationbar',component:navigationbar,children:[
        {path:'/',component:recommend},
        {path:'/Recommend',component:recommend},
        {path:'/fashion',component:fashion},
        {path:'/beautymakeup',component:beautymakeup},
        {path:'/deliciousfood',component:deliciousfood},
        {path:'/motion',component:motion},
        {path:'/video',component:video},
        {path:'/travel',component:travel},
        {path:'/skincare',component:skincare},
        {path:'/infant',component:infant},
        {path:'/read',component:read},
        {path:'/fmen',component:fmen},
      ]},
      {path:'/userCore',component:userCore},
    ]
  },
  {path:'/login',component:login},
  {path:'/*',component:error},
  ],
})
