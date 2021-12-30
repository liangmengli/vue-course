import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/utils'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})
const HAS_LOGIN = true

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGIN) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGIN) next({ name: 'home' })
    else next()
  }
})
router.afterEach((to, from, next) => {
  // loading=false
})
export default router
