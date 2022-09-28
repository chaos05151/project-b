import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/',
        redirect: '/product'
    }, {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            // {
            //     path: "/video",
            //     name: "video",
            //     meta: {
            //         title: '短视频项目'
            //     },
            //     component: () => import( /* webpackChunkName: "table" */ "../views/VideoTable.vue")
            // }, {
            //     path: "/idiom",
            //     name: "idiom",
            //     meta: {
            //         title: '成语项目'
            //     },
            //     component: () => import( /* webpackChunkName: "table" */ "../views/IdiomTable.vue")
            // }, {
            //     path: "/dianxiao",
            //     name: "dianxiao",
            //     meta: {
            //         title: '点销项目'
            //     },
            //     component: () => import( /* webpackChunkName: "table" */ "../views/DianxiaoTable.vue")
            // } , 
            {
                path: '/404',
                name: '404',
                meta: {
                    title: '找不到页面'
                },
                component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
            }, {
                path: '/403',
                name: '403',
                meta: {
                    title: '没有权限'
                },
                component: () => import(/* webpackChunkName: "403" */ '../views/403.vue')
            }, {
                path: '/personal',
                name: 'personal',
                meta: {
                    title: '个人中心'
                },
                component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
            }, {
                path: '/editor',
                name: 'editor',
                meta: {
                    title: '富文本编辑器'
                },
                component: () => import(/* webpackChunkName: "editor" */ '../views/Editor.vue')
            }, {
                path: '/markdown',
                name: 'markdown',
                meta: {
                    title: 'markdown编辑器'
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/Markdown.vue')
            }, 
            // {
            //     path: '/idiomrule',
            //     name: 'idiomrule',
            //     meta: {
            //         title: '成语新增规则'
            //     },
            //     component: () => import(/* webpackChunkName: "markdown" */ '../views/IdiomAddRule.vue')
            // },{
            //     path: '/idiomedit',
            //     name: 'idiomedit',
            //     meta: {
            //         title: '成语修改规则'
            //     },
            //     component: () => import(/* webpackChunkName: "markdown" */ '../views/IdiomEditRule.vue')
            // },  {
            //     path: '/videorule',
            //     name: 'videorule',
            //     meta: {
            //         title: '短视频新增规则'
            //     },
            //     component: () => import(/* webpackChunkName: "markdown" */ '../views/VideoAddRule.vue')
            // }, 
            {
                path: '/form',
                name: 'form',
                meta: {
                    title: '新增规则'
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/BaseForm.vue')
            }, {
                path: '/product',
                name: 'product',
                meta: {
                    title: '产品管理'
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/ProductTable.vue')
            },{
                path: '/version',
                name: 'version',
                meta: {
                    title: '版本管理'
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/VersionTable.vue')
            },{
                path: '/basetable',
                name: 'basetable',
                meta: {
                    title: 'BaseTable'
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/BaseTable.vue')
            }, {
                path: '/user',
                name: 'user',
                meta: {
                    title: '用户管理'
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/UserTable.vue')
            },{
                path: '/productrisk',
                name: 'productrisk',
                meta: {
                    title: '产品风控配置'
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/ProductRisk.vue')
            }, {
                path: '/risk',
                name: 'riskmanage',
                meta: {
                    title: '风控管理'
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/RiskTable.vue')
            },{
                path: '/riskadd',
                name: 'riskadd',
                meta: {
                    title: '风控配置'
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/RiskAdd.vue')
            },{
                path: '/riskedit',
                name: 'riskedit',
                meta: {
                    title: '风控配置'
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/RiskEdit.vue')
            },{
                path: '/userdetail',
                name: 'userdetail',
                meta: {
                    title: '用户详情'
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/UserDetail.vue')
            }, {
                path: '/blacklist',
                name: 'blacklist',
                meta: {
                    title: '黑名单'
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/BlackList.vue')
            }, {
                path: '/feedback',
                name: 'feedback',
                meta: {
                    title: '用户反馈'
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/FeedBack.vue')
            }, {
                path: '/feedbackdetail',
                name: 'feedbackdetail',
                meta: {
                    title: '反馈详情'
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/FeedBackDetail.vue')
            }, {
                path: '/upload',
                name: 'upload',
                meta: {

                    title: '文件上传'
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/Upload.vue')

            }, 
            // {
            //     path: '/excel',
            //     name: 'excel',
            //     meta: {
            //         title: '点消Excel上传'
            //     },
            //     component: () => import(/* webpackChunkName: "markdown" */ '../views/UploadExcel.vue')
            // },  
            // {
            //     path: '/videoexcel',
            //     name: 'videoexcel',
            //     meta: {
            //         title: '短视频Excel上传'
            //     },
            //     component: () => import(/* webpackChunkName: "markdown" */ '../views/VideoUploadExcel.vue')
            // },         
             {
                path: '/withdraw',
                name: 'withdraw',
                meta: {
                    title: '提现配置'
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/WithdrawTable.vue')

            },  {

                path: '/withdrawdetail',
                name: 'withdrawdetail',
                meta: {
                    title: '提现审核'
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/WithdrawDetail.vue')
            } ,{
                path :'/withdrawdetailall',
                name:'withdrawdetailall',
                meta:{
                    title:'提现成功记录'
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/WithdrawDetailAll.vue')
            }, {
                path :'/withdrawreview',
                name:'withdrawreview',
                meta:{
                    title:'提现成功记录'
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/withdrawReview.vue')
            },{
                path:'/keybehavior',
                name:'keybehavior',
                meta:{
                    title:'关键行为配置'
                },
                component:()=>import('../views/KeyBehavior.vue')
            },{
                path:'/keybehavioradd',
                name:'keybehavioradd',
                meta:{
                    title:'添加关键行为配置'
                },
                component:()=>import('../views/KeyBehaviorAdd.vue')
            },{
                path:'/keybehavioreidtor',
                name:'keybehavioreidtor',
                meta:{
                    title:'添加关键行为配置'
                },
                component:()=>import('../views/KeyBehaviorEidtor.vue')


            }
        ]
    }, {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import( /* webpackChunkName: "login" */ "../views/Login.vue")
    }
    , {
        path: "/icon",
        name: "Icon",
        meta: {
            title: '图标'
        },
        component: () => import( /* webpackChunkName: "login" */ "../views/Icon.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | 流量商业化B端`;
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin'
            ? next()
            : next('/403');
    } else {
        next();
    }
});

export default router;