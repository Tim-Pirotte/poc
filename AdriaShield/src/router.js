import { createRouter, createWebHistory } from 'vue-router'

import AreaInfoPage from './pages/AreaInfoPage.vue';
import AuthPage from './pages/AuthPage.vue';
import ConfirmPlanPage from './pages/ConfirmPlanPage.vue';
import FamilyPage from './pages/FamilyPage.vue';
import FollowingPage from './pages/FollowingPage.vue';
import MapPage from './pages/MapPage.vue';
import NotificationsPage from './pages/NotificationsPage.vue';
import PlanPage from './pages/PlanPage.vue';
import SettingsPage from './pages/SettingsPage.vue';
import ShelterInfoPage from './pages/ShelterInfoPage.vue';
import ThankYouPage from './pages/ThankYouPage.vue';

const routes = [
  { path: '/', component: AuthPage },

  { path: '/area-info', component: AreaInfoPage },
  { path: '/confirm-plan', component: ConfirmPlanPage },
  { path: '/family', component: FamilyPage },
  { path: '/following', component: FollowingPage },
  { path: '/map', component: MapPage },
  { path: '/notification-settings', component: NotificationsPage },
  { path: '/plans', component: PlanPage },
  { path: '/settings', component: SettingsPage },
  { path: '/shelter-info', component: ShelterInfoPage },
  { path: '/thank-you', component: ThankYouPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
