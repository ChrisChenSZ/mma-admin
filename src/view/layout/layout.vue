<template>
  <div class="layout">
    <el-container class="home-container">
      <!--头部-->
      <el-header  height="100px" class="default-header" >通用 后台</el-header>
      <!--内容-->
      <el-container class="home-container">
        <!--侧边路由-->
        <el-aside width="252px">
          <el-row class="tac">
            <el-col>
              <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :text-color="'#fff'"
                :background-color="tapColor"
                active-text-color="#ffd04b"
              >
                <side-bar :routes="routes"></side-bar>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <!--右边内容区-->
        <el-container>
          <el-main>
            <!--第三层路由-->
            <router-view></router-view>
          </el-main>
          <!--右边内容区底部-->
          <el-footer >Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideBar from '@/view/layout/sideBar.vue'
import routes from '@/router/routerConfig.js'
export default {
  data () {
    return {
      routes: routes,
      tapColor: ''
    }
  },
  mounted () {
    // 转为RGB(22,33,33) 因为谷歌拿不到背景颜色，要做兼容
    HTMLElement.prototype.__defineGetter__('currentStyle', function () {
      return this.ownerDocument.defaultView.getComputedStyle(this, null)
    })
    var color = document.getElementsByClassName('el-footer')[0].currentStyle.backgroundColor
    function zeroFillHex (num, digits) {
      var s = num.toString(16)
      while (s.length < digits) {
        s = '0' + s
      }
      return s
    }
    function rgb2hex (rgb) {
      if (rgb.charAt(0) === '#') {
        return rgb
      }
      var ds = rgb.split(/\D+/)
      var decimal = Number(ds[1]) * 65536 + Number(ds[2]) * 256 + Number(ds[3])
      console.log('fdsfds', zeroFillHex(decimal, 6))
      return '#' + zeroFillHex(decimal, 6)
    }
    // RGB转化成16进制格式
    this.tapColor = rgb2hex(color)
    console.log(this.tapColor)
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {
    SideBar
  }
}
</script>

<style lang="scss">
  @import "../../assets/styles/color.scss";
  .layout{
    height: 100%;
  }
  .el-header, .el-footer {
    background: $blue-8;
    color:white;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: $blue-9;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
/*.el-menu-item-group{*/
  /*background-color: #0050b3;*/
/*}*/
  .home-container{
    height: 100%;
  }
</style>
