/*
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-17 15:54:44
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-19 18:00:40
 * @FilePath: \myblog_admin\src\routers\index.js
 * @Description: 路由的核心文件
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
 */
import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
// 组件模块
import Home from '@/components/Home';
import Login from '@/components/Login';
import Editor from '@/pages/Editor';
Vue.use(Router)  //Vue全局使用Router

export default new Router({
    routes: [
        {
            name: 'Login',
            path: '/',
            component: Login
        },
        {
            name: 'Home',
            path: '/home',
            component: Home
        }, 
        {
            path: '/',
            redirect: Login
        },
        {
            path: '/editor',
            name: 'Editor',
            component: Editor
        }
    ]
})
