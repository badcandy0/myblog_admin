/*
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-18 19:55:01
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-19 09:15:33
 * @FilePath: \myblog_admin\.eslintrc.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
 */
module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/essential',
      'eslint:recommended'
    ],
    parserOptions: {
      parser: '@babel/eslint-parser'
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
       //在rules中添加自定义规则
       //关闭组件命名规则
       "vue/multi-word-component-names":"off",
       'semi':0
    },
    overrides: [
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)',
          '**/tests/unit/**/*.spec.{j,t}s?(x)'
        ],
        env: {
          jest: true
        }
      }
    ]
  }
  