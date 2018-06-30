import Vue from 'vue';
import Router from 'vue-router';
import ViewerPage from './views/ViewerPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/viewer',
      name: 'viewer',
      component: ViewerPage,
    },
  ],
});
