import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw, Router } from 'vue-router'



import HomeView from '../views/Home/Index.vue'
import SearchView from '../views/Search/Index.vue'
import SettingView from '../views/Setting/Index.vue'
import UploadView from '../views/Upload/Index.vue'

import DetailView from '../views/Detail/Index.vue'
const routes: RouteRecordRaw[] = [

    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    }, {
        path: '/search',
        name: 'search',
        component: SearchView,
    },
    {
        path: '/detail:id',
        name: "detail",
        component: DetailView
    },
    {
        path: '/setting',
        name: 'setting',
        component: SettingView
    }, {
        path: '/upload',
        name: 'upload',
        component: UploadView
    }
]


const router: Router = createRouter({
    history: createWebHistory(),
    routes
})

// 5.暴露路由
export default router