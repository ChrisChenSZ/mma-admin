import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'
// import HelloWorld from '@/components/HelloWorld'
import routes from '@/router/routerConfig.js'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  const token = Cookies.get('mma_token')
  if (token) {
    console.log(2222)
    next()
  } else {
    console.log(to.path)
    if (to.path === '/login') {
      console.log('111', to.path)
      next()
    } else {
      next('/login')
    }
  }
  // next()
})
export default router
