import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Index from '../pages/Index.vue'
import Product from '../pages/Product.vue'
import Detail from '../pages/Detail.vue'
import Cart from '../pages/Cart.vue'
import Order from '../pages/Order.vue'
import OrderConfirm from '../pages/OrderConfirm.vue'
import OrderList from '../pages/OrderList.vue'
import OrderPay from '../pages/OrderPay.vue'
import AliPay from '../pages/AliPay.vue'
import Login from '../pages/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/index',
    children:[
      {
        path: '/index',
        name: 'Index',
        component: Index,
      },
      {
        path: '/product/:id',
        name: 'Product',
        component: Product,
      },
      {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail,
      }
    ]
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    children:[
      {
        path: 'list',
        name: 'OrderList',
        component: OrderList,
      },
      {
        path: 'confirm',
        name: 'OrderConfirm',
        component: OrderConfirm,
      },
      {
        path: 'pay',
        name: 'OrderPay',
        component: OrderPay,
      },
      {
        path: 'alipay',
        name: 'AliPay',
        component: AliPay,
      },
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
