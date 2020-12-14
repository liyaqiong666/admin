<template>
    <div id="login">

        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
            <h2>UNI-ADMIN</h2>
            <el-form-item prop="username">
                <el-input type="username" v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm()">立即登录</el-button>
            </el-form-item>
        </el-form>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm:{
                username:"",
                password:"",
            },
            rules:{
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
            }
        }
    },
    methods: {
        // 点击 登录
        submitForm(){
            this.$axios.post("http://ceshi5.dishait.cn/admin/login",{
                username:this.ruleForm.username,
                password:this.ruleForm.password,
            }).then((res) => {
                console.log(res);
                if(res.data.msg == 'ok'){
                    localStorage.setItem("token",res.data.data.token);
                    this.$router.push("/user");
                    this.$message({
                        showClose: true,
                        message: '恭喜你，登录成功！',
                    });
                }
            }).catch((error) => {
                console.log(error);
                this.$message({
                    showClose: true,
                    message: '登录失败！',
                    type: 'error'
                });
            })
        }
    },
}
</script>

<style lang="scss">
#login{
    width: 100%;
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-top:100px;
    .el-form{
        width: 480px;
        height: 320px;
        border:1px solid lightgray;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        h2{
            width: 100%;
            color:gray;
            text-align: center;
            border-bottom: 1px solid lightgray;
            padding-bottom: 20px;
        }
        .el-form-item{
            width: 85%;
            .el-button{
                width: 100%;
                background-color: #008080;
            }
        }
    }
}
</style>