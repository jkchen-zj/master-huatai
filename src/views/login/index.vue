<template>
    <div class="login-contain">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
           <div class="title-container">
            <h3 class="title">Man HuaTai</h3>
          </div>

           <el-form-item prop="username" class="">
             <span class="icon-contain">
                  <i class="el-icon-user-solid"></i>
                </span>
            <el-input
              ref="username"
              v-model="ruleForm.username"
              placeholder="Username"
              name="username"
              type="text"
              tabindex="1"
              autocomplete="on"
            />
          </el-form-item>

          <el-form-item  prop="password">
              <span class="icon-contain">
                <i class="el-icon-lock"></i>
              </span>
              <el-input type="password" placeholder="Password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item class="loginForm ct">
              <div class="thirdparty-button">Enter the system</div>
              <!-- <el-button type="primary" @click="submitForm('ruleForm')" class="thirdparty-button">Enter the system</el-button> -->
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
      var username = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账户'));
        }else {
          callback();
        }
      };
      return {
        ruleForm: {
          password: '',
          username:'',
        },
        rules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: username, trigger: 'blur' }
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

// reset element
<style lang="scss">
input:-webkit-autofill {
  box-shadow: 0 0 0px 1000px rgba(54,71,130,0.1) inset !important;

  -webkit-text-fill-color: #fff !important;

  -webkit-background-clip:text;

}
  .login-contain{
    .el-form-item__error{
      left: 50px;
    }
    .el-input{
      .el-form-item{
       
      }
      input{
        color: #fff;
        overflow: hidden;
        background-color: transparent;
        border: 1px solid  rgba(255,255,255,0.4);
      }
    }
  }
  .el-button--primary{
    padding: 0px;
  }
</style>

<style lang="scss" scoped>
    .login-contain{
        min-height: 100%;
        width: 100%;
        overflow: hidden;
        position: relative;
        &:after{
          content: '';
          display: block;
          position: absolute;
          top: 0px;
          left: 0;
          width: 102%;
          height: 103%;
          margin-left: -1%;
          margin-top: -1%;
          background-image: url('../../../public/login/backgroud.jpg');
          background-repeat: no-repeat;
          background-size: 100%;
          z-index: -1;
          filter: blur(6px);
        }

        .demo-ruleForm{
          width: 450px;
          margin: 0px auto;
          margin-top: 180px;
          padding: 15px 10px;
          border-radius: 4px;
          background: linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.0));
          // border: 1px solid  rgba(255,255,255,0.2);
          .title-container{
            font-family: 'Rayleigh';
          }
        }
        .icon-contain{
          width: 30px;
          height: 100%;
          display: inline-block;
          padding: 5px 5px 5px 15px;
          i{
            font-size: 20px;
            color: #fff;
          }
        }
        .el-input{
          width: 85%;
        }
      .thirdparty-button,.thirdparty-button:after{
        width: 180px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        position: relative;
        border: none;
        font-size: 16px;
        border-radius: 0px;
        background: linear-gradient(45deg,transparent 5%,#ff013c 5%);
        color: #fff;
        letter-spacing: 3px;
        box-shadow: 4px 0px 0px #00E6F6;
        outline: transparent;
        font-family: 'BebasNeue',cursive;
      }
      .thirdparty-button:after{
        --slice-0:inset(50% 50% 50% 50%);
        --slice-1:inset(80% -6px 0 0);
        --slice-2:inset(50% -6px 30% 0);
          // translate(-10px, 15px);

        --slice-3:inset(10% -6px 85% 0);
        --slice-4:inset(40% -6px 43% 0);
        --slice-5:inset(80% -3px 5% 0);

        content: 'Enter the system';
        display: block;
        position: absolute;
        top:0;
        left: 0;
        bottom: 0;
        background: linear-gradient(45deg,transparent 3%,#00E6F6 3%,#00E6F6 5%,#ff013c 5%);
        text-shadow: -1.5px -1.5px 0px #f8f005, 1.5px 1.5px 0px #00e6f6;
        clip-path: var(--slice-0);
        transform: translate(-10px,5px);
      }
      .thirdparty-button:hover:after{
        animation:glitch 1s;
        animation-timing-function: steps(2,end);
      }

      .title{
        text-align: center;
        color: #fff;
        font-size: 55px;
        margin-bottom: 30px;
      }
    }








@keyframes glitch {
  0% {
    clip-path: var(--slice-1);
   transform: translate(-10px,5px);
  }
  
  10% {
    clip-path: var(--slice-3);
    transform: translate(0px,10px);
  }
  
  20% {
    clip-path: var(--slice-1);
    transform: translate(-5px,5px);
  }
  
  30% {
    clip-path: var(--slice-3);
    transform: translate(5px,10px);
  }
  
  40% {
    clip-path: var(--slice-2);
    transform: translate(0px,-15px);
  }
  
  50% {
    clip-path: var(--slice-3);
    transform: translate(10px,20px);
  }
  
  60% {
    clip-path: var(--slice-4);
    transform: translate(-5px,10px);
  }
  
  70% {
    clip-path: var(--slice-2);
  transform: translate(0px,0px);
  }
  
  80% {
    clip-path: var(--slice-5);
    transform: translate(-10px,-20px);
  }
  
  90% {
    clip-path: var(--slice-1);
    transform: translate(5px,0px);
  }
  
  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
}

</style>