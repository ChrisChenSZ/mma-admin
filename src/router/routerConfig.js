// let _import = filePath => import(`@/components/${filePath}.vue`)
let _import = filePath => import(`@/view/${filePath}.vue`)
// 有hidden 表示没有子路由，没有则表示有子路由
export default [
  {
    path: '/',
    redirect: '/home/index',
    name: '我',
    hidden: true,
    noDropdown: true,
    component: () => _import('layout/layout')
  },
  {
    path: '/home',
    noDropdown: true,
    component: () => _import('layout/layout'),
    children: [
      {
        path: 'index',
        name: '首页',
        component: () => _import('home/home')
      }
    ]
  },
  {
    path: '/login',
    name: '登陆',
    hidden: true,
    component: () => _import('login/login')
  },
  {
    path: '/events',
    name: '赛事',
    component: () => _import('layout/layout'),
    redirect: '/events/index',
    children: [
      {
        path: '/events/index',
        name: '赛事首页',
        component: () => _import('events/events'),
        children: [
          {
            path: 'name',
            name: '孙路由',
            component: () => _import('events/grandChild')
          },
          {
            path: '/events/index/name2',
            name: '孙路由二',
            component: () => _import('events/grandChild2'),
            children: [
              {
                path: 'lastChild',
                name: '曾孙路由',
                component: () => _import('events/grandChildChild')
              }
            ]
          }
        ]
      },
      {
        path: '/test2',
        name: '测试二',
        noDropdown: true
      }
    ]
  }
]
