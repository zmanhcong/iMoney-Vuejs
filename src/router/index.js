import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: 'default'
      },
      component: () => import(/* webpackChunkName: "home" */ '../views/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        layout: 'auth'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "register" */ '../views/register.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        layout: 'auth'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
    }
  ]
})

export default router
