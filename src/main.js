import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import dataV from '@jiaminghi/data-view'

import Element from 'element-ui'
import './styles/element-variables.scss'
import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log
import * as echarts from 'echarts'
import BaiduMap from 'vue-baidu-map';

import * as filters from './filters' // global filters
import $ from 'jquery'
window.jQuery = $
window.$ = $
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  locale: enLang // 如果使用中文，无需设置，请删除
})

Vue.use(BaiduMap, {
  ak: '0fAFiU3jZlGqwPwpc19z0ul1KZG5bQ61'
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
// Vue.prototype.$axios = axios
Vue.use(Antd)
Vue.use(dataV)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
