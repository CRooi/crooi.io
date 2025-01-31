import {createRouter, RouteRecordRaw, Router, createWebHistory} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./components/Home.vue'),
        meta: {
            title: 'CRooi'
        }
    },
    {
        path: '/:pathMatch(.*)',
        component: () => import('./components/404.vue'),
        meta: {
            title: '404'
        }
    }
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes
})

export default router