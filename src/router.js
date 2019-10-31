import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import counter from '@/pages/counter'
import list from '@/pages/list'
import recipe from '@/pages/recipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/counter',
      name: 'counter',
      component: counter
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/recipe',
      name: 'recipe',
      component: recipe
    }
  ]
})
