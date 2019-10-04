import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import counter from '@/components/pages/counter'
import list from '@/components/pages/list'

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
    }
  ]
})
