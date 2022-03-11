import { createRouter, createWebHistory } from 'vue-router'
import Login from "../views/Login-user";
import Trading from "../views/Trading-Tool";
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/trading',
    name: 'Trading',
    component: Trading
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router