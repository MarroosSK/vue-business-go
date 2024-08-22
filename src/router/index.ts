import BusinessView from '@/views/BusinessView.vue'
import FindBusinessView from '@/views/FindBusinessView.vue'
import HomeView from '@/views/HomeView.vue'
import MyPlacesView from '@/views/MyPlacesView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/business',
      name: 'find-business',
      component: FindBusinessView
    },
    {
      path: '/business/:id',
      name: 'find-business-id',
      component: BusinessView
    },
    {
      path: '/my-places',
      name: 'my-places',
      component: MyPlacesView
    }
  ]
})

export default router
