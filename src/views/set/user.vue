<template>
    <div>

        <!-- <el-container>
            <el-header>Header</el-header> -->
            <el-container>
                <el-aside width="200px">
                    <el-menu
                        router
                        default-active="/set/set">
                        <el-menu-item index="/set/set">
                            <i class="el-icon-s-help"></i>
                            <span slot="title">基础设置</span>
                        </el-menu-item>
                        <el-menu-item>
                            <i class="el-icon-s-help"></i>
                            <span slot="title">物流设置</span>
                        </el-menu-item>
                        <el-menu-item>
                            <i class="el-icon-s-help"></i>
                            <span slot="title">管理员管理</span>
                        </el-menu-item>
                        <el-menu-item>
                            <i class="el-icon-s-help"></i>
                            <span slot="title">交易设置</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        <!-- </el-container> -->
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss">
.el-aside {
    height: 80vh;
    // background-color: #D3DCE6;
    color: #333;
    text-align: left;
    // line-height: 200px;
}
  
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    // line-height: 160px;
}
</style>