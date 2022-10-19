/*
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-17 13:43:52
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-19 15:01:44
 * @FilePath: \myblog_admin\vue.config.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    port:4000, //配置项目启动端口号
  }
})
