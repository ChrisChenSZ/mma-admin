<template>
  <div>
    <template v-for="item in routes" >
      <router-link v-if="!item.hidden&&item.noDropdown&&item.children.length>0" :to="item.path+'/'+item.children[0].path" :key="item.path" class='submenu-title-noDropdown'>
        <el-menu-item :index="item.path+'/'+item.children[0].path" >
          <span>{{item.children[0].name}}</span>
        </el-menu-item>
      </router-link>
        <el-submenu :index="item.name"
                    v-if="!item.noDropdown&&!item.hidden"
                    :key="item.path">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.name}}</span>
          </template>
          <!--子路由开始-->
          <template v-for="child in item.children">
            <side-bar :routes="[child]" v-if="child.children&&child.children.length > 0" :key="child.name"></side-bar>
            <router-link v-else :to="item.path + '/' + child.path" :key="child.name">
              <el-menu-item :index="item.path + '/' + child.path">
                {{child.name}}
              </el-menu-item>
            </router-link>
          </template>
          <!--子路由结束-->
        </el-submenu>
        <!--<el-menu-item index="2">-->
          <!--<i class="el-icon-menu"></i>-->
          <!--<span slot="title">导航二</span>-->
        <!--</el-menu-item>-->
      <!--父路由开始-->
      <!--<router-link :to="item.path" v-if="item.hidden" :key="item.path">-->
        <!--<el-menu-item :index="item.path">-->
          <!--{{item.name}}-->
        <!--</el-menu-item>-->
      <!--</router-link>-->
      <!--父路由结束-->
    </template>
  </div>
</template>

<script>
export default {
  name: 'sideBar',
  props: {
    routes: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
</style>
