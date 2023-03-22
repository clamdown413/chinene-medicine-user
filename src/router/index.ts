import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw, Router } from 'vue-router'

import FooterView from '../components/FootComponents.vue'
import HomeView from '../views/Home/Index.vue'
import SearchView from '../views/Search/Index.vue'
import SettingView from '../views/Setting/Index.vue'
import UploadView from '../views/Upload/Index.vue'
import LoginView from '../views/Login/Index.vue'
import RegisterView from '../views/Register/Index.vue'
import DetailView from '../views/Detail/Index.vue'
const routes: RouteRecordRaw[] = [

    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        components: {
            default: HomeView,
            footer: FooterView
        }
    }, {
        path: '/search',
        name: 'search',
        components: {
            default: SearchView,
            footer: FooterView
        }
    },
    {
        path: '/detail:id',
        name: "detail",
        components: { default: DetailView }
    },
    {
        path: '/setting',
        name: 'setting',
        components: {
            default: SettingView,
            footer: FooterView

        }
    }, {
        path: '/upload',
        name: 'upload',
        components: {
            default: UploadView,
            footer: FooterView
        }
    },
    {
        path: '/login',
        name: 'login',
        components: {
            default: LoginView,
            footer: FooterView
        }
    }, {
        path: '/register',
        name: 'register',
        components: {
            default: RegisterView,
            footer: FooterView
        }
    },

]


const router: Router = createRouter({
    history: createWebHistory(),
    routes
})

// 5.暴露路由
export default router