import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/', 
        // 重定向到首页
        redirect: '/index'
    },
    {
        path: '/index', // 首页
        name: 'index',
        component: () => import('../views/index/index.vue')
    },
    {
        path: '/find', // 发现页
        name: 'find',
        component: () => import('../views/find/find.vue')
    },
    {
        path: '/message', // 消息页
        name: 'message',
        component: () => import('../views/message/message.vue')
    },
    {
        path: '/my', // 我的
        name: 'my',
        component: () => import('../views/my/my.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router