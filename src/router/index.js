// ==|== Imports ===================================================================================
import { createRouter, createWebHistory } from 'vue-router';

// ==|== Routes ====================================================================================
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('@/views/Timeline.vue')
  },
  {
    path: '/transitions',
    name: 'Transitions',
    component: () => import('@/views/Transitions.vue')
  },
  {
    path: '/transitionscomponent',
    name: 'TransitionsComponent',
    component: () => import('@/views/TransitionsComponent.vue')
  },
  {
    path: '/composables1',
    name: 'Composables1',
    component: () => import('@/views/composables/Composables1.vue')
  },
  {
    path: '/composables2',
    name: 'Composables2',
    component: () => import('@/views/composables/Composables2.vue')
  },
  {
    path: '/composables3',
    name: 'Composables3',
    component: () => import('@/views/composables/Composables3.vue')
  },
  {
    path: '/numbers',
    name: 'Numbers',
    component: () => import('@/views/Numbers.vue')
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/PageNotFound.vue')
  }
];

// ==|== Router ====================================================================================
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// ==|== Export ====================================================================================
export default router;
