// let _import = filePath => import(`@/components/${filePath}.vue`)
let _import = filePath => import(`@/view/${filePath}.vue`)

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    name: 'HelloWorld',
    component: () => _import('HelloWorld')
  },
  {
    path: '/login',
    name: '登陆',
    component: () => _import('login/login')
  },
  {
    path: '/home',
    name: '首页',
    component: () => _import('layout/layout')
  }
]
