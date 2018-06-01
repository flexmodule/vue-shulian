import Vue from "vue";
import Router from "vue-router";
//引入setWechatTitle动态改变Title
import setWechatTitle from "@/utils/setWechatTitle";

//导入路由map
import routes from "./map";

Vue.use(Router);

const router = new Router({
    routes
    // mode: 'history'
});
router.beforeEach((to, from, next) => {
    /**
     * 动态改变页面的title值
     */
    document.title = to.meta.title;
    setWechatTitle(to.meta.title);
    next();
});
export default router;