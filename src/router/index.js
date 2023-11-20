import vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'

vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../pages/Main.vue'),
    name: 'Main',
    redirect: '/home',
    children: []
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

// 添加全局前置导航守卫
router.beforeEach((to, from, next) => {
  // 判断token存不存在
  const token = Cookies.get('token')
  // token不存在，说明当前用户是未登录，应该跳转至登录页
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') { // token存在，说明用户登录，此时跳转至首页
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router;


