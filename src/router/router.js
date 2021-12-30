import Home from '../views/Home'

const routes = [
  {
    path: '/',
    name: 'home',
    alias: 'home_alias',
    component: Home,
    props: route => ({
      food: route.query.food
    })
    // beforeEnter: (to, from, next) => {
    //   console.log(from)
    //   // if (from.name === 'About') alert("这是从about来的")
    //   // else alert("这不是从about来的")
    //   next()
    // }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'apple'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:name',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'children',
        component: () => import('@/views/children.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/children.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    redirect: to => {
      return {
        name: 'Home'
      }
    }
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }

]

export default routes
