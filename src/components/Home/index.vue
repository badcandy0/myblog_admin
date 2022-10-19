<!--
 * @Author: Badcandy 568197314@qq.com
 * @Date: 2022-10-18 20:06:48
 * @LastEditors: Badcandy 568197314@qq.com
 * @LastEditTime: 2022-10-19 17:59:46
 * @FilePath: \myblog_admin\src\components\Home\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Badcandy 568197314@qq.com, All Rights Reserved. 
-->
<template>
  <div id="Home">

    <div class="avatar">
      <el-card shadow="hover"><el-avatar :size="100" :src="avatar"></el-avatar></el-card>
      <!-- <el-card shadow="hover"></el-card> -->
      <el-button type="primary" @click.native="goEditor" plain>新建文章</el-button>
    </div>
    <div class="blogShow">
      <el-form>
        <el-form-item :inline="true">
          <el-row :gutter="24">
            <el-col :span="16">textTitle</el-col>
            <el-col :span="4">
              <el-button type="primary" icon="el-icon-edit" ></el-button
            ></el-col>
            <el-col :span="4">
              <el-button type="danger" icon="el-icon-delete" ></el-button
            ></el-col>
          </el-row>
          <el-divider></el-divider>  
        </el-form-item>
      </el-form>
      
    </div>
    <router-view name="Editor"/>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return {
      avatar:'https://img1.imgtp.com/2022/10/19/WunNc5Jh.png'
    }
  },
  methods:{
    goEditor(){
      this.$router.push({ name:"Editor"})
    }
  }
};
</script>

<style scoped>
#Home {
  position: absolute;
  width: 100%;
}
.blogShow{
  position: relative;
  left:30%;
  margin-top:10%;
  width: 500px;
}
.avatar{
  position: fixed;
  left: 5%;
  top: 15%;
}
.el-card {
  margin-bottom: 10px;
}
.el-button{
  
  width: 100%;
}
</style>