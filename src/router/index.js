import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Contact from '../views/Contact.vue'
import ContactDetails from '../views/ContactDetails.vue'
import StatisticsPage from '../views/StatisticsPage.vue'
import ContactEdit from '../views/ContactEdit.vue'



const routerOptions = {
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/contact/:_id',
      component: ContactDetails
    },
    {
      path: '/contact/edit/:_id?',
      component: ContactEdit
    },
    {
      path: '/stats',
      component: StatisticsPage
    },
    // {
    // path: '/about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('../views/AboutView.vue'),
    // },
  ],
}
const router = createRouter(routerOptions)
export default router
