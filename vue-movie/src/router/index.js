import Vue from 'vue'
import Router from 'vue-router'
// 路由懒加载
const Index = resolve => require(['@/views/index.vue'],resolve)
const Search = resolve => require(['@/views/search.vue'],resolve)
const Detail = resolve => require(['@/views/detail.vue'],resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      components: {
          default: Index
      }
    },
    {
      path: 'search',
      name: 'Search',
      components: {
          default: Search
      }
    },
    {
      path:'detail',
      name: 'Detail',
      components: {
          default: Detail
      }
    }
  ]
})
