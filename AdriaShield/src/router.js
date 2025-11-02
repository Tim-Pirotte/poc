import { createRouter, createWebHistory } from 'vue-router';

import AreaInfoPage from './pages/AreaInfoPage.vue';
import AuthPage from './pages/AuthPage.vue';
import ConfirmPlanPage from './pages/ConfirmPlanPage.vue';
import FamilyPage from './pages/FamilyPage.vue';
import FollowingPage from './pages/FollowingPage.vue';
import MapPage from './pages/MapPage.vue';
import NotificationsPage from './pages/NotificationsPage.vue';
import PaymentFailedPage from './pages/PaymentFailedPage.vue';
import PlanPage from './pages/PlanPage.vue';
import SettingsPage from './pages/SettingsPage.vue';
import ShelterInfoPage from './pages/ShelterInfoPage.vue';
import ThankYouPage from './pages/ThankYouPage.vue';

const routes = [
  { path: '/', component: AuthPage, name: 'AuthPage' },
  { path: '/area-info', component: AreaInfoPage, name: 'AreaInfoPage' },
  { path: '/confirm-plan', component: ConfirmPlanPage, name: 'ConfirmPlanPage' },
  { path: '/family', component: FamilyPage, name: 'FamilyPage' },
  { path: '/following', component: FollowingPage, name: 'FollowingPage' },
  { path: '/map', component: MapPage, name: 'MapPage' },
  { path: '/notification-settings', component: NotificationsPage, name: 'NotificationsPage' },
  { path: '/payment-failed', component: PaymentFailedPage, name: 'PaymentFailedPage' },
  { path: '/plans', component: PlanPage, name: 'PlanPage' },
  { path: '/settings', component: SettingsPage, name: 'SettingsPage' },
  { path: '/shelter-info', component: ShelterInfoPage, name: 'ShelterInfoPage' },
  { path: '/thank-you', component: ThankYouPage, name: 'ThankYouPage' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
