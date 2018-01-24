<template>
  <div class="layout">
    <el-container class="home-container">
      <!--头部-->
      <el-header  height="100px" class="default-header" >Chris 后台</el-header>
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
                text-color="#fff"
                background-color="#003a8c"
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
          <el-footer>Footer</el-footer>
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
      routes: routes
    }
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
  @import "../../styles/color.scss";
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
