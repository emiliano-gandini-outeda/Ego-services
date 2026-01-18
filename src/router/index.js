import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
/*   {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue')
  }, */
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import('../views/PricingView.vue')
  },
  {
    path: '/me',
    name: 'me',
    component: () => import('../views/MeView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }

    if (savedPosition) {
      return savedPosition
    }

    return { top: 0 }
  }
})

export default router