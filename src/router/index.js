import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zu from '@/components/page/zu'
import je from '@/components/page/je'
import login from '@/components/page/login'
import register from '@/components/page/register'
Vue.use(Router)

export default new Router({
  model:'history',
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/phone',
      name: 'phone',
      component: zu
    },
    {
      path: '/je',
      name: 'je',
      component: je
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
    ,
    {
      path: '/register',
      name: 'register',
      component: register
    }    
  ]
})
