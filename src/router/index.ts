import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/DemoIndex.vue';
import HomeView1 from '../views/DemoIndex1.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'index',
    component: HomeView,
  },
  {
    path: '/demo1',
    name: 'demo1',
    component: HomeView1,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
