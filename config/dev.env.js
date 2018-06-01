'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_ROOT: '"http://mobile.testapi2.healthydoc.com.cn/"' //正式生产环境地址
    //API_ROOT: '"http://mobileapi.dev.sc.cn/"' //本地测试服务器地址
    // API_ROOT: '"http://mobileapi.test.sc.cn/"' //测试生产环境地址
})