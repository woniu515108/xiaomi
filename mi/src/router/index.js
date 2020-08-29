import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Index from '../pages/Index.vue'


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
        component: ()=> import('./../pages/Product.vue')
      },
      {
        path: '/detail/:id',
        name: 'Detail',
        component: ()=>import('./../pages/Detail.vue')
      }
    ]
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ()=>import('./../pages/Cart.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('./../pages/Login.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: ()=>import('./../pages/Order.vue'),
    children:[
      {
        path: 'list',
        name: 'OrderList',
        component: ()=>import('./../pages/OrderList.vue')
      },
      {
        path: 'confirm',
        name: 'OrderConfirm',
        component: ()=>import('./../pages/OrderConfirm.vue')
      },
      {
        path: 'pay',
        name: 'OrderPay',
        component: ()=>import('./../pages/OrderPay.vue')
      },
      {
        path: 'alipay',
        name: 'AliPay',
        component: ()=>import('./../pages/AliPay.vue')
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
