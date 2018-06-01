//按需加载路由
const HelloWorld = r => require.ensure([], () => r(require("@/components/HelloWorld")))
const date = r => require.ensure([], () => r(require("@/components/date")))
//首页
const home = r => require.ensure([], () => r(require("@/views/home")), "home")
/* 
 * 用户模块 start 
 */
const UserModule = r => require.ensure([], () => r(require("@/views/user/")), "UserModule")
// 注册页面模块
const RegisterModule = r => require.ensure([], () => r(require("@/views/user/register/")), "RegisterModule")
const RegisterInput = r => require.ensure([], () => r(require("@/views/user/register/inputNumber")), "RegisterModule")
const RegisterCheck = r => require.ensure([], () => r(require("@/views/user/register/checkNumber")), "RegisterModule")
const RegisterSetting = r => require.ensure([], () => r(require("@/views/user/register/settingPwd")), "RegisterModule")
// 登陆页面模块
const LoginModule = r => require.ensure([], () => r(require("@/views/user/login/")), "LoginModule")
//忘记密码模块
const ForgetPwdModule = r => require.ensure([], () => r(require("@/views/user/forgetPwd/")), "ForgetPwdModule")
const ForgetPwdInput = r => require.ensure([], () => r(require("@/views/user/forgetPwd/inputNumber")), "ForgetPwdModule")
const ForgetPwdCheck = r => require.ensure([], () => r(require("@/views/user/forgetPwd/checkNumber")), "ForgetPwdModule")
const ForgetPwdSetting = r => require.ensure([], () => r(require("@/views/user/forgetPwd/settingPwd")), "ForgetPwdModule")
//修改密码
const UpdatePwdModule = r => require.ensure([], () => r(require("@/views/user/updatePwd/")), "UpdatePwdModule")
const UpdatePwdCheck = r => require.ensure([], () => r(require("@/views/user/updatePwd/checkNumber")), "UpdatePwdModule")
const UpdatePwdSetting = r => require.ensure([], () => r(require("@/views/user/updatePwd/settingPwd")), "UpdatePwdModule")
//服务条款页面模块-用户协议
const ServiceTermModule = r => require.ensure([], () => r(require("@/views/user/serviceTerm")), "ServiceTermModule")
//鉴权页面模块
const AuthModule = r => require.ensure([], () => r(require("@/views/user/auth/"), "AuthModule"))
const AuthCompanyInfo = r => require.ensure([], () => r(require("@/views/user/auth/companyInfo"), "AuthModule"))
const AuthStaffInfo = r => require.ensure([], () => r(require("@/views/user/auth/staffInfo"), "AuthModule"))
const AuthResultShow = r => require.ensure([], () => r(require("@/views/user/auth/resultShow"), "AuthModule"))
//个人中心模块
const UserInfoModule = r => require.ensure([], () => r(require("@/views/user/info"), "UserInfoModule"))
//编辑个人信息
const UserEditModule = r => require.ensure([], () => r(require("@/views/user/edit/"), "UserEditModule"))
//常见问题
const UserQuesitonModule = r => require.ensure([], () => r(require("@/views/user/question/"), "UserQuesitonModule"))
const UserQuesitonList = r => require.ensure([], () => r(require("@/views/user/question/list/"), "UserQuesitonModule"))
const UserQuestionClass = r => require.ensure([], () => r(require("@/views/user/question/class/"), "UserQuesitonModule"))
const UserQuestionDetail = r => require.ensure([], () => r(require("@/views/user/question/detail/"), "UserQuesitonModule"))
//设置
const UserOptionModule = r => require.ensure([], () => r(require("@/views/user/option/"), "UserOptionModule"))
//用户协议
const ProtocolModule = r => require.ensure([], () => r(require("@/views/user/option/protocol/"), "ProtocolModule"))
/* 
 * 用户模块 end 
 */
//error页面模块
const ErrorModule = r => require.ensure([], () => r(require("@/views/error/404")), "ErrorModule")
//医院地址
const Adress = r => require.ensure([], () => r(require("@/views/adress/")), "Adress")
const AdressHos = r => require.ensure([], () => r(require("@/views/adress/showAdress/")), "AdressHos")
    // 医院地址导航路线
const HosRoute = r => require.ensure([], () => r(require("@/views/adress/showRoute/")), "HosRoute")
    /**
     * 路由的配置过程中每个路径都要设置meta属性并且添加title值
     */
const routes = [{
        path: "*",
        redirect: "/error/404"
    },
    {
        path: "/",
        redirect: "/user/login",
        meta: { title: "首页" }
    },
    {
        path: "/adress",
        component: Adress,
        meta: { title: "医院地址" },
        redirect: "/adress/hos-adress",
        children: [{
            path: "hos-adress",
            meta: { title: "医院地址" },
            component: AdressHos
        }, {
            path: "hos-route",
            meta: { title: "查看路线" },
            name: "HosRoute",
            component: HosRoute
        }, ]
    },
    {
        path: '/date',
        component: date,
        meta: { title: '日历' }
    },
    {
        path: '/home',
        component: home,
        meta: { title: '首页' }
    },
    {
        path: "/user",
        name: "user",
        meta: { title: "登录注册" },
        component: UserModule,
        redirect: "/user/login",
        children: [{
                path: "register",
                name: "Register",
                redirect: "/user/register/input-number",
                meta: { title: "注册" },
                component: RegisterModule,
                children: [{
                        path: "input-number",
                        meta: { title: "注册" },
                        component: RegisterInput
                    },
                    {
                        path: "check-number/:number",
                        meta: { title: "注册" },
                        component: RegisterCheck
                    },
                    {
                        path: "setting-pwd/:number/:token",
                        meta: { title: "注册" },
                        component: RegisterSetting
                    }
                ]
            },
            {
                path: "login",
                name: "Login",
                meta: { title: "登录" },
                component: LoginModule
            },
            {
                path: "forget",
                name: "Forget",
                redirect: "/user/forget/input-number",
                meta: { title: "忘记密码" },
                component: ForgetPwdModule,
                children: [{
                        path: "input-number",
                        meta: { title: "忘记密码" },
                        component: ForgetPwdInput
                    },
                    {
                        path: "check-number/:number",
                        meta: { title: "忘记密码" },
                        component: ForgetPwdCheck
                    },
                    {
                        path: "setting-pwd/:number/:token",
                        meta: { title: "忘记密码" },
                        component: ForgetPwdSetting
                    }
                ]
            },
            {
                path: "update",
                name: "Update",
                redirect: "/user/update/check-number",
                meta: { title: "修改密码" },
                component: UpdatePwdModule,
                children: [{
                        path: "check-number/:number",
                        meta: { title: "修改密码" },
                        component: UpdatePwdCheck
                    },
                    {
                        path: "setting-pwd/:number/:token",
                        meta: { title: "修改密码" },
                        component: UpdatePwdSetting
                    }
                ]
            },
            {
                path: "service-term",
                meta: { title: "用户协议" },
                component: ServiceTermModule
            },
            {
                path: "auth",
                name: "Auth",
                redirect: "/user/auth/company-info",
                meta: { title: "企业团检" },
                component: AuthModule,
                children: [{
                    path: "company-info",
                    meta: { title: "企业团检" },
                    component: AuthCompanyInfo
                }, {
                    //path: "staff-info/:name/:mode",
                    path: "staff-info/:name",
                    meta: { title: "企业团检" },
                    component: AuthStaffInfo
                }, {
                    path: "result",
                    meta: { title: "企业团检" },
                    component: AuthResultShow
                }]

            },
            /* 个人中心 */
            {
                path: "info",
                name: "Info",
                meta: { title: "个人中心" },
                component: UserInfoModule,
            },
            {
                path: "edit",
                name: "Edit",
                meta: { title: "个人信息" },
                component: UserEditModule
            },
            {
                path: "question",
                name: "Question",
                redirect: "/user/question/list",
                meta: { title: "常见问题" },
                component: UserQuesitonModule,
                children: [{
                    path: "list",
                    meta: { title: "常见问题" },
                    component: UserQuesitonList
                }, {
                    path: "class/:class",
                    meta: { title: "常见问题" },
                    component: UserQuestionClass
                }, {
                    path: "class/:class/:id",
                    meta: { title: "常见问题" },
                    component: UserQuestionDetail
                }]
            },
            {
                path: "option",
                name: "Option",
                meta: { title: "设置" },
                component: UserOptionModule
            },
            {
                path: "protocol",
                name: "Protocol",
                meta: { title: "用户协议" },
                component: ProtocolModule
            }
        ]
    },
    {
        path: "/error/404",
        name: "404",
        meta: { title: "404" },
        component: ErrorModule
    },
]

export default routes