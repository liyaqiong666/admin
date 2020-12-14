<template>
  <div id="app">

    <el-container>
      <el-header v-show="this.$route.meta.isShow">
        <h2>UNI-ADMIN</h2>
        <el-menu
          :router="true"
          default-active="/user"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="/user">首页</el-menu-item>
          <el-menu-item index="/shop">商品</el-menu-item>
          <el-menu-item index="/order">订单</el-menu-item>
          <el-menu-item index="/member">会员</el-menu-item>
          <el-menu-item index="/set">设置</el-menu-item>
          <el-submenu index="2">
            <template slot="title">admin</template>
            <el-menu-item @click="exit()">退出登录</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <router-view></router-view>
    </el-container>

  </div>
</template>

<script>
export default {
  methods: {
    exit(){
      localStorage.removeItem("token");
      this.$router.push("/login");
      this.$http("http://ceshi5.dishait.cn/admin/logout","post").then((res) => {
        console.log(res);
      });
      this.$message({
        showClose: true,
        message: '退出登录！',
      });
    }
  },
}
</script>

<style lang="scss">
 .el-header {
    background-color: #545c64;
    color: #fff;
    text-align: center;
    // line-height: 60px;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
 