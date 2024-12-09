import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FruitsView from '@/views/FruitsView.vue'
import ContactView from '@/views/ContactView.vue'
import LoginView from '@/views/LoginView.vue'
import SigninComp from '@/components/SigninComp.vue'
import SignupComp from '@/components/SignupComp.vue'
import FriendsView from '@/views/FriendsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
    path: "/fruits",
    name: "fruits",
    component: FruitsView
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  },
  {
    path: "/signin",
    name: "signin",
    component: SigninComp
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupComp
  },
  {
    path: '/friends',
    name: 'friends',
    component: FriendsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
