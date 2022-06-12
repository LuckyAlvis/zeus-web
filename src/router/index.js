import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from '../components/welcome/Welcome'
import Bill from '../components/finance/baseFinanceManager/bill'
import AccountDetail from '../components/finance/baseFinanceManager/accountDetail'
import FinanceHealth from '../components/finance/baseFinanceManager/financeHealth'
import TargetMonitor from '../components/finance/baseFinanceManager/targetMonitor'
import InvestmentTracking from '../components/finance/assetAllocationAnalysis/investmentTracking'
import OperationLogging from '../components/finance/assetAllocationAnalysis/operationLogging'
// import Empty from '../components/empty/Empty'
// import Users from '../components/user/Users'
// import Users1 from '../components/user/Users1'
// import GaoDeMap from '../components/gaodeMap/GaoDeMap'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        {
          path: '/bill',
          component: Bill
        },
        {
          path: '/welcome',
          component: Welcome
        },
        {
          path: '/accountDetail',
          component: AccountDetail
        },
        {
          path: '/financeHealth',
          component: FinanceHealth
        },
        {
          path: '/targetMonitor',
          component: TargetMonitor
        },
        {
          path: '/investmentTracking',
          component: InvestmentTracking
        },
        {
          path: '/operationLogging',
          component: OperationLogging
        }
      ]
    }
    // { path: '/map', component: GaoDeMap }
  ]
})

// router.beforeEach((to, from, next) => {
//   // to 将要访问的路径
//   // from 代表从哪个路径跳转而来
//   // next 是一个函数，表示放行
//   // next（）放行 next('/login') 强制跳转
//   if (to.path === '/login') return next()
//   // 获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next('/login')
//   next()
// })

export default router
