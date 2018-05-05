// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from '@/api/api.js'
import 'normalize.css'
import '@/assets/icons/iconfont.js'
import mixin from '@/common/mixin.js'
import VueQriously from 'vue-qriously'
Vue.use(VueQriously)
require('core-js')
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = api
/* eslint-disable no-new */
Vue.mixin(mixin)
new Vue({
  el: '#app',
  router,
  ElementUI,
  components: {
    App
  },
  template: '<App/>'
})
