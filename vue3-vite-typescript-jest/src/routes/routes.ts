import { RouteRecordRaw } from 'vue-router';

import App from '@/App.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: App,
    },
];

export default routes;
