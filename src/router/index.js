/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from "@/pages/MSite/MSite";
import Search from "@/pages/Search/Search";
import Profile from "@/pages/Profile/Profile";
import Order from "@/pages/Order/Order";
import Login from "@/pages/Login/Login";
import Message from "@/pages/Login/Message/Message";
import Verification from "@/pages/Login/Verification/Verification";

Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {
            path: '/msite',
            component: MSite,
            meta: {
                showFooter: true
            }
        },

        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
            }
        },

        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        },

        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/login',
            component: Login,
            children: [
                {
                    path: '/login/message',
                    component: Message,
                },
                {
                    path: '/login/verification',
                    component: Verification,
                },
                {
                    path: '',
                    component: Message,
                }
            ]
        },
        {
            path: '/',
            component: MSite,
            meta: {
                showFooter: true
            }
        },

    ]
})
