<template>
    <div class="login">
      <div style="margin: 20px;"></div>
      <div class="login-lable">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" :rules="rules" status-icon>
          <el-form-item label="账号"  prop="name">
            <svg class="icon user" aria-hidden="true">
              <use xlink:href="#icon-iconzh1"></use>
            </svg>
            <el-input v-model="formLabelAlign.name" placeholder="请输入账号" >
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <svg class="icon user" aria-hidden="true">
              <use xlink:href="#icon-ai-password"></use>
            </svg>
            <el-input v-model="formLabelAlign.password" :type="pwdType" placeholder="请输入密码" ></el-input>
          </el-form-item>
          <!--<el-form-item label="活动形式">-->
            <!--<el-input v-model="formLabelAlign.type"></el-input>-->
          <!--</el-form-item>-->
          <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin" class="login-btn">登录</el-button>
        </el-form>
        <drag-verify :width="200"
                     :height="20"
                     :text="'滑动'"
                     :success-text="'滑动成功'"
                     :background="'#40a9ff'"
                     :progress-bar-bg="'#ff7875'"
                     :completed-bg="'#40a9ff'"
                     :handler-bg="'#fff'"
                     :handler-icon="handlerIcon"
                     :text-size="'15px'"
                     :success-icon="successIcon"
                     :circle="true"
                     @passcallback="chang"></drag-verify>
      </div>
    </div>
</template>

<script>
import dragVerify from 'vue-drag-verify'
import Cookies from 'js-cookie'
import sha1 from 'sha1'
export default {
  data () {
    return {
      handlerIcon: require('../../assets/images/@1xsheng.png'),
      successIcon: require('../../assets/images/@1xsheng1.png'),
      labelPosition: 'left',
      formLabelAlign: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ]
      },
      pwdType: 'password',
      loading: false
    }
  },
  methods: {
    handleLogin () {
      if (this.formLabelAlign.password) {
        this.formLabelAlign.password = sha1(this.formLabelAlign.password)
      }
      this.$http.login(this.formLabelAlign.name, this.formLabelAlign.password).then(res => {
        console.log('登陆接口', res)
        Cookies.set('token', res.token)
        this.$router.push({path: '/home'})
      })
      console.log(this.formLabelAlign.name, this.formLabelAlign.password)
    },
    chang () {
      alert(1)
    }
  },
  components: {
    dragVerify
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/styles/color";
  .login{
  width: 100%;
  height: 100%;
  background-color:  $blue-10;
  display: flex;
 align-items: center;
  }
  .login-lable{
    margin: 0 auto;
    width: 40%;
  }

  .user{
    font-size: 20px;
    position: absolute;
    left: 5px;
    top:10px;
    z-index:30;
  }
</style>
