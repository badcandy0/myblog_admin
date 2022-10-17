/*
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-17 13:43:52
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-17 15:35:46
 * @FilePath: \myblog_admin\src\main.js
 * @Description: 文件主要入口
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from 'vue-router'
import Vuex from 'vuex'

Vue.use(ElementUI);
Vue.use(Vuex);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
