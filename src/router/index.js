import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import isAuthenticated from '@/utils/isAuthenticated.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    }
  ],
})

const requiresAuthGuard = async (to, from, next) => {
  const authenticated = await isAuthenticated()

  if (to.meta.requiresAuth && !authenticated) {
    next('/')
    return
  }

  // If user is authenticated and trying to access login page, redirect to where they came from
  if (authenticated && to.path === '/') {
    next(from.path !== '/' ? from.path : '/home')
    return
  }

  next()
}

router.beforeEach(requiresAuthGuard)
export default router
