<!--
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-18 19:42:55
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-19 14:24:37
 * @FilePath: \myblog_admin\src\components\login\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
-->
<template>
  <div id="Login">
    <div>
      <el-card shadow="hover">
        <el-form label-position="left">
          <el-form-item label="用户名:">
            <el-input placeholder="请输入用户名" v-model="userName" clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="密码:">
            <el-input
              placeholder="请输入密码"
              v-model="pwd"
              show-password
              clearable
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" round plain @click.native="login"
              >登录</el-button
            >
            <!-- <router-link>
              <el-button type="primary" round plain>登录</el-button>
            </router-link> -->
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      pwd: "",
    };
  },
  methods: {
    login() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
#Login {
  position: absolute;
  width: 400px;
  left: 35%;
  margin-top: 12%;
}
</style>