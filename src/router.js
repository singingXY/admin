import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/AddUser',
      name: 'AddUser',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "AddUser" */ './views/AddUser.vue'),
    },
    {
      path: '/AddEquipment',
      name: 'AddEquipment',
      component: () => import('./views/AddUser.vue'),
    },
    {
      path: '/ModifyUser',
      name: 'ModifyUser',
      component: () => import('./views/ModifyUser.vue'),
    },
    {
      path: '/QA',
      name: 'QA',
      component: () => import('./views/QA.vue'),
    },
  ],
})
