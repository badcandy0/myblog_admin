<!--
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-18 19:42:55
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-18 20:46:34
 * @FilePath: \myblog_admin\src\components\login\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
-->
<template>
  <div>
    <div id="Login">
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
            <el-button type="primary" >登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
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
};
</script>

<style scoped>
#Login {
   position: absolute;
   width: 400px;
   left: 35%;
   top: 25%;
}
</style>