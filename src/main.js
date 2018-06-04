// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入插件 使用插件
import './plugins'

//引入rem
import '@/utils/rem'

//引入自定义指令
import '@/directive/'
//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


//引入better-scroll 
// import BScroll from 'better-scroll'

//引入百度地图
import BMap from 'BMap'

// 引入axios
import service from "@/utils/request"
Vue.prototype.$http = service

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})