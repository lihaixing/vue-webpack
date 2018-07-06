import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName:'home' */'@/pages/Home')
    },
    {
      path: '/todo',
      name: 'todos',
      component: () => import(/* webpackChunkName:'todos' */'@/pages/todos')
    }
  ]
})
