import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
    state: () => {
        return {
            collapse: true,
            menu:[
                {
                    icon: "el-icon-lx-cascades",
                    index: "1",
                    title: "产品管理",
                    subs: [
                        {
                            index: "/product",
                            title: "应用中心",
                        },
                        {
                            index: "/version",
                            title: "版本管理",
                        },
                    ],
                },
                {
                    icon: "el-icon-lx-sort",
                    index: "2",
                    title: "用户管理",
                    subs: [
                        {
                            index: "/user",
                            title: "用户信息",
                        },
                        {
                            index: "/blacklist",
                            title: "黑名单",
                        }
                    ],
                },
                {
                    icon: "el-icon-lx-service",
                    index: "3",
                    title: "客服中心",
                    subs: [
                        {
                            index: "/feedback",
                            title: "用户反馈",
                        },
                        {
                            index: "/withdraw",
                            title: "提现审核",
                        },
                        {
                            index:"/withdrawdetailall",
                            title:"提现记录"
                        }
                    ],
                },
                {
                    icon: "el-icon-lx-link",
                    index: "4",
                    title: "风控管理",
                    subs: [
                        {
                            index: "/risk",
                            title: "风险控制",
                        },
                        // {
                        //     index: "/",
                        //     title: "风险规则配置",
                        // },
                        {
                            index:"/keybehavior",
                            title:"关键行为配置"
                        }
                    ],
                },
                
            ]
        }
    },
    getters: {
        
    },
    actions: {
        handleCollapse() {
            this.collapse = !this.collapse;
        }
    }
})