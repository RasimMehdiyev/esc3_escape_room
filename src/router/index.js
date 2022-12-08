import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../pages/WelcomePage.vue'
// import ExplanationPage from '../pages/ExplanationPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomePage
    },
    {
      path:'/explanation',
      name: 'explanation',
      component: () => import('../pages/ExplanationPage.vue')
    },
    {
      path:'/clue',
      name: 'clue',
      component: () => import('../pages/CluePage.vue')
    },
    {
      path:'/qr',
      name: 'qr',
      component: () => import('../pages/TestQR.vue')
    },
    {
      path:'/participants',
      name: 'participants',
      component: () => import('../pages/Participants.vue')
    },
    {
      path:'/bomb-module',
      name: 'bomb-module',
      component: () => import('../pages/BombModule.vue')
    },
    {
      path:'/voice-filtering',
      name: 'voice-filtering',
      component: () => import('../pages/VoiceFiltering.vue')
    },
    {
      path:'/draw-box',
      name: 'draw-box',
      component: () => import('../pages/DrawBox.vue')
    },
    {
      path:'/portal-gun',
      name: 'portal-gun',
      component: () => import('../pages/PortalGun.vue')
    },
    {
      path:'/block-box',
      name: 'block-box',
      component: () => import('../pages/BlockBox.vue')
    },
    {
      path:'/leaderboard',
      name: 'leaderboard',
      component: ()=> import ('../pages/LeaderBoard.vue')
    }
  ]
})

export default router
