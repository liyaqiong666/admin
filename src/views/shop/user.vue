<template>
    <div>

        <!-- <el-container>
            <el-header>Header</el-header> -->
            <el-container>
                <el-aside width="200px">
                    <el-menu
                        router
                        default-active="/shop/list">
                        <el-menu-item index="/shop/list">
                            <i class="el-icon-s-claim"></i>
                            <span slot="title">商品列表</span>
                        </el-menu-item>
                        <el-menu-item index="/shop/cate">
                            <i class="el-icon-s-help"></i>
                            <span slot="title">分类列表</span>
                        </el-menu-item>
                        <el-menu-item index="/shop/good">
                            <i class="el-icon-s-help"></i>
                            <span slot="title">商品规格</span>
                        </el-menu-item>
                        <el-menu-item>
                            <i class="el-icon-s-help"></i>
                            <span slot="title">商品类型</span>
                        </el-menu-item>
                        <el-menu-item>
                            <i class="el-icon-s-help"></i>
                            <span slot="title">商品评论</span>
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