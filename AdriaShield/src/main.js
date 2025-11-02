import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js';
import { loadPageLocale, loadCommonLocale } from './locale.js';

import './assets/styles/base.css';
import './assets/styles/reset.css';

loadCommonLocale();

router.beforeEach(async (to, _, next) => {
  if (to.name) {
    loadPageLocale(to.name);
  }

  next();
});

const app = createApp(App);

app.use(router).mount('#app');
