import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routerOptions = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name: 'home',
      component: HomePage
    },
    {
      path: '/contact',
      // name: 'home',
      component: Contacts
    },
    {
      path: '/contact/:_id',
      // name: 'home',
      component: ContactDetails
    },
    {
      path: '/stats',
      // name: 'home',
      component: StatisticsPage
    },
    {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

const router = createRouter(routerOptions)
export default router
