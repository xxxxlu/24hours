import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import CheckoutPersonalInfo from '../views/CheckoutPersonalInfo.vue'
import PaymentSuccess from '../views/PaymentSuccess.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/checkout/personal-info',
    name: 'CheckoutPersonalInfo',
    component: CheckoutPersonalInfo
  },
  {
    path: '/payment-success',
    name: 'PaymentSuccess',
    component: PaymentSuccess
  }
]

const router = new VueRouter({
  mode: 'hash', // 改为hash模式避免服务器端重定向问题
  routes
})

export default router
