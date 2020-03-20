import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Admin from "@/views/admin";

import AboutChild01 from "@/views/children/aboutChild01";
import AboutChild02 from "@/views/children/aboutChild02";


import naming01 from "@/views/naming_view/naming01";
import naming02 from "@/views/naming_view/naming02";


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/about',
            name: 'about',
            components: {
                default: About,
                naming01: naming01,
                naming02: naming02
            },
            children: [
                {
                    path: '/',
                    name: 'AboutChild01',
                    component: AboutChild01
                },{
                    path: 'child02',
                    name: 'AboutChild02',
                    component: AboutChild02,

                    // 重定向的多种方法
                    /*
                    redirect: '/',
                    redirect: {
                        name: 'Home'
                    },
                    redirect: function() {
                        return '/home'
                    }*/
                },
            ]
        },{
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                login_require: true
            }
        },{
            path: '/admin',
            name: 'Admin',
            component: Admin,
            meta: {
                
            },
            beforeEnter: (to, from, next) => {
                console.log('hahha')
                // next('/')
                next()
            }
        }
    ]
});