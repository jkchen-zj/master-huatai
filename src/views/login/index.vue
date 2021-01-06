<template>
    <div class="login-contain">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item  prop="user">
                <span class="icon-contain">
                  <i class="el-icon-user-solid"></i>
                </span>
                <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item  prop="password">
                <span class="icon-contain">
                  <i class="el-icon-lock"></i>
                </span>
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item class="loginForm">
                <el-button type="primary" @click="submitForm('ruleForm')" class="thirdparty-button">Enter the system</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var user = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账户'));
        }else {
          callback();
        }
      };
      return {
        ruleForm: {
          password: '',
          user:'',
        },
        rules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          user: [
            { validator: user, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
}
</script>

<style lang="scss" scoped>
    .login-contain{
        min-height: 100%;
        width: 100%;
        background-color: #2d3a4b;
        overflow: hidden;
        .demo-ruleForm{
          width: 500px;
          margin: 0px auto;
          margin-top: 300px;
        }
        .icon-contain{
          width: 30px;
          height: 100%;
          display: inline-block;
          padding: 5px 5px 5px 15px;
          i{
            font-size: 20px;
          }
        }
        .el-input{
          width: 85%;
        }
      .thirdparty-button{
        border: none;
        border-radius: 0px;
        background: linear-gradient(45deg,transparent 5%,#ff013c 5%);
        color: #fff;
        letter-spacing: 3px;
        box-shadow: 6px 0px 0px #00E6F6;
        outline: transparent;
      }
    }
</style>