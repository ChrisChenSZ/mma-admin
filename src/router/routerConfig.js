// let _import = filePath => import(`@/components/${filePath}.vue`)
let _import = filePath => import(`@/view/${filePath}.vue`)
// 有hidden 表示没有子路由，没有则表示有子路由
export default [
  {
    path: '/',
    redirect: '/login',
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
    path: '/upload',
    name: '上传',
    component: () => _import('layout/layout'),
    children: [
      {
        name: '上传1:单图片源码方式',
        path: 'one',
        component: () => _import('upload/one')
      },
      {
        name: '上传2:饿了么上传',
        path: 'two',
        component: () => _import('upload/two')
      },
      {
        name: '上传3:多图片源码',
        path: 'third',
        component: () => _import('upload/third')
      }
    ]
  },
  {
    path: '/richtext',
    name: '富文本',
    component: () => _import('layout/layout'),
    children: [
      {
        name: '富文本1',
        path: 'one',
        component: () => _import('richText/richTextOne')
      },
      {
        name: '富文本2',
        path: 'two',
        component: () => _import('richText/richTextTwo')
      }
    ]
  },
  {
    path: '/qrcode',
    noDropdown: true,
    component: () => _import('layout/layout'),
    children: [
      {
        path: 'index',
        name: 'QRcode',
        component: () => _import('qrcode/qrcode')
      }
    ]
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
      }
    ]
  },
  {
    path: '/test',
    name: '平常测试页',
    hidden: true,
    component: () => _import('test/test')
  },
  {
    path: '/identifyCode',
    name: '验证码',
    hidden: true,
    component: () => _import('identifyCode/identifyCode')
  }
]
