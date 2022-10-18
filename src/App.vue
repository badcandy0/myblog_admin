<!--
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-17 13:43:52
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-18 20:13:05
 * @FilePath: \myblog_admin\src\App.vue
 * @Description: 入口文件
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
-->
<template>
  <div id="app">
   <Login></Login>
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
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
