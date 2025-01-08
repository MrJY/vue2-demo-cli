import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/DemoIndex.vue';
import SortableNative from '../components/sortable/SortableNative.vue';
import VueDraggable from '../components/vue-draggable/VueDraggable.vue';
import TransferDemo from '../components/transfer/TransferDemo.vue';
import ExportPage from '@/page/export/export-page.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'index',
        component: HomeView,
    },
    {
        path: '/export',
        name: 'export',
        component: ExportPage,
    },
    {
        path: '/demo1',
        name: 'demo1',
        component: SortableNative,
    },
    {
        path: '/demo2',
        name: 'demo2',
        component: VueDraggable,
    },
    {
        path: '/demo3',
        name: 'demo3',
        component: TransferDemo,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
