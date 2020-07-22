import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category=() => import('../views/category/Category.vue')
const Cart = () => import ('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const GoodsList = () => import('../views/goodslist/goodsList.vue')
const GoodsDetails = () => import('../views/goodsdetails/goodsDetails.vue')

// 安装插件
Vue.use(VueRouter)
// 定义映射关系
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path:'/goodslist/:cid',
    component: GoodsList
  },
  {
    path:'/details/:goods_id',
    component: GoodsDetails
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]
// 创建路由对象
const router = new VueRouter({
  routes,
  mode: 'history'
})
// 导出路由对象
export default router
