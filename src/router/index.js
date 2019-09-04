import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const ROUTES = [
  {
    path: '/',
    name: 'webMain',
    redirect: '/main',
  },
  {/* 主页 */
    path: '/main',
    name: 'main',
    component: () => import('@/components/main/main.vue')
  },
  {
    path: '/CSS3',
    name: 'CSS3',
    meta: {
      title: 'CSS3-瀑布流布局',
    },
    component: () => import('@views/CSS3/index.vue')
  },
  {
    path: '/JavaScript',
    name: 'JavaScript',
    meta: {
      title: 'JavaScript-瀑布流布局',
    },
    component: () => import('@views/JavaScript/index.vue')
  },
  {
    path: '/jQuery',
    name: 'jQuery',
    meta: {
      title: 'jQuery-瀑布流布局',
    },
    component: () => import('@views/jQuery/index.vue')
  },
]

const ROUTER = new Router({
  routes: ROUTES
});


export default ROUTER
