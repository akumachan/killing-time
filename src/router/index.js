import { createRouter, createWebHashHistory } from 'vue-router'
import OfficialJoke from '@/views/OfficialJoke'
import Bored from '@/views/Bored'
import CorporateBullshit from '@/views/CorporateBullshit'
import NotFound from '@/views/NotFound'
import Home from '@/views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/official-joke',
    name: 'OfficialJoke',
    component: OfficialJoke,
  },
  {
    path: '/corporate-bullshit/',
    name: 'CorporateBullshit',
    component: CorporateBullshit
  },
  {
    path: '/bored/',
    name: 'Bored',
    component: Bored
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
