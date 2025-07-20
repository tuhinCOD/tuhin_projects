import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashlayout',
      component: () => import('../layouts/dashlayout/index.vue'),
      redirect: { path: '/users'},
      children: [
        {
          path: '/users',
          name: 'users',
          component: () => import('../views/users/index.vue')
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: '404-page',
      component: () => import('../views/404-page/index.vue')
    }
  ]
})

export default router
