<!--
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-17 13:43:52
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-19 14:25:02
 * @FilePath: \myblog_admin\src\App.vue
 * @Description: 入口文件
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
-->
<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/Login';


export default {
  name: 'App',
  components: {
    Login
}
}
</script>

<style>
#app {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
