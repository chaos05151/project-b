<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>风控系统</el-breadcrumb-item>
                <el-breadcrumb-item>用户管理</el-breadcrumb-item>
                <el-breadcrumb-item>人工审核记录</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-select v-model="main_product_name_selected" placeholder="项目" class="m-2"
                    @change="getProductAndDataList">
                    <el-option v-for="item in options" :key="item.id" :label="item.main_product_name"
                        :value="item.id" />
                </el-select>
                <el-select v-model="product_name_selected" placeholder="应用" class="m-2" @change="getDataById">
                    <el-option v-for="item in suboptions" :key="item.product_id" :label="item.product_name"
                        :value="item.product_id" />
                </el-select>
                <el-date-picker v-model="dateRange" type="daterange" range-separator="→" @change="handleDate"
                    start-placeholder="开始日期" end-placeholder="结束日期" />
                <el-button type="primary" @click="getExcel">导出</el-button>
                <el-button type="primary"
                    @click="goback">返回</el-button>
            </div>
            <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
                <el-table-column prop="wechat_user_id" label="用户ID"></el-table-column>
                <el-table-column prop="main_product_name" label="项目"></el-table-column>
                <el-table-column prop="product_name" label="应用"></el-table-column>
                <el-table-column prop="nickname" label="用户名"></el-table-column>
                <el-table-column prop="bind_account_count" label="设备关联账号"></el-table-column>
                <el-table-column prop="amount" label="申请提现金额"></el-table-column>
                <el-table-column prop="oaid" label="数盟id"></el-table-column>
                <el-table-column prop="ip" label="ip"></el-table-column>
                <el-table-column prop="ip_address" label="ip地址"></el-table-column>
                <el-table-column prop="updated_at" sortable label="提现时间"></el-table-column>
                <el-table-column prop="status" label="状态"></el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background layout="total, prev, pager, next" :current-page="query.page_index"
                    :page-size="query.page_size" :total="pageTotal" @current-change="handlePageChange"></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import {
    fetchProductTableDataById,
    fetchMainProductList,
    fetchProductList,
} from "../api/product";
import moment from "moment";
import {
    withdrawCheckList,
    withdrawCheck
} from "../api/user";
import { exportExcelData } from "../utils/export2excel"
// import table from "../mock/table.json";
const main_product_name_selected = ref("")
const product_name_selected = ref("")
const tableData = ref([]);
const tableExportData = ref([]);
let main_product_id = ref("")
const product_type = ref("项目");
const widthdrawDetail = reactive({
});
const dataExport = ref({})
const pageTotal = ref(0);
const query = reactive({
    page_index: 1,
    page_size: 10,
});

let options = ref([]);
let suboptions = ref([]);
let addoptions = ref([]);
const dateRange = ref()
const isShow = ref(false)

// 获取提现审核列表
const getData = (data) => {
    withdrawCheckList(data).then((res) => {
        tableData.value = res.data?.lists.map((item) => {
            return {
                ...item,
                updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss"),
                status:item.status==1?"待审核":item.status==2?"提现中":item.status==3?"已提现":item.status==4?"拒绝提现":item.status==5?"提现失败":"",
            };
        });
        pageTotal.value = res.data.total_count
        widthdrawDetail.apply_users_count = res.data.apply_users_count
        widthdrawDetail.unaudit_orders_count = res.data.unaudit_orders_count
        widthdrawDetail.unaudit_reward_sum = res.data.unaudit_reward_sum
        dataExport.value = JSON.parse(JSON.stringify(data))
    }).catch((err) => {
    }).then(() => {
    })
};
//获取项目产品信息
const getProductDataList = () => {
    fetchMainProductList().then((res) => {
        options.value = res.data;
        addoptions.value = res.data;
    }).catch(() => {
        // ElMessage.error("服务器异常！");
    });
};
//根据项目获取应用产品信息
const getSubProductDataList = (query) => {
    const data = {
        main_product_id: query
    }
    fetchProductList(data).then((res) => {
        suboptions.value = res.data;
    }).catch(() => {
        // ElMessage.error("服务器异常！");
    });
};
//提现审批：2：同意；1：拒绝
const withdrawCheckData = (id, status) => {
    const data = {
        id,
        status
    }
    withdrawCheck(data).then((res) => {
        if (res.status == 200) {
            ElMessage.success("审核成功！");
            getData(query)
        } else {
            ElMessage.error(res.message);
        }
    }).catch(() => {
    });
};
export default {
    name: "basetable",
    setup() {
        main_product_name_selected.value = ''
        product_name_selected.value = ''
        const route = useRoute()
        const router = useRouter()
        if (route.params.product_name !== "") {
            main_product_name_selected.value = route.params.main_product_name
            product_name_selected.value = route.params.product_name
            query.product_id = route.params.product_id
            main_product_id.value = route.params.main_product_id
            getSubProductDataList(route.params.main_product_id)
        } else {
            if (route.params.main_product_name !== "") {
                main_product_name_selected.value = route.params.main_product_name
                query.main_product_id = route.params.main_product_id
                main_product_id.value = route.params.main_product_id
                getSubProductDataList(route.params.main_product_id)
            }else {
                getSubProductDataList()
            }
        }
        console.log(main_product_name_selected.value,product_name_selected.value,);
        // const goback = (mName, pName, pId) => {
        //     if (typeof (pName) == "number") {
        //         suboptions.value.map(item => {
        //             if (item.product_id == pName) {
        //                 mName = item.main_product_name
        //                 pName = item.product_name
        //                 return
        //             }
        //         })
        //     } else if (typeof (mName) == "number" && pName == "") {
        //         options.value.map(item => {
        //             if (item.id == mName) {
        //                 mName = item.main_product_name
        //             }
        //             return
        //         })
        //     }
        //     dateRange.value = null;
        //     router.push({
        //         name: 'withdrawdetail',
        //         params: {
        //             main_product_name: mName,
        //             product_name: pName,
        //             product_id: pId,
        //             main_product_id: main_product_id.value
        //         }
        //     })
        // }
        const goback=()=>{
            router.go(-1)
        }


        getData(query);
        getProductDataList();
        //时间选择
        const handleDate = (val) => {
            if (val !== null) {
                let date = []
                val.forEach(item => {
                    if (item != null) {
                        date.push(moment(item).format("YYYY-MM-DD HH:mm:ss"))
                    }
                })
                // console.log(date);
                let params = {
                    ...query,
                    start_date: date[0],
                    end_date: date[1]
                }
                query.start_date = date[0];
                query.end_date = date[1];
                getData(params)
            } else {
                getData(query)
            }


        }

        //获取已审核的体现记录 同时隐藏用户提现记录按钮
        const get = () => {
            isShow.value = !isShow.value
            query.status = 3
            getData(query)

        }


        // 导出为excel
        const getExcel = () => {
            //处理导出数据
            dataExport.value.page_size = pageTotal.value ? pageTotal.value <= 10000 ? pageTotal.value : 10000 : 10
            withdrawCheckList(dataExport.value)
                .then((res) => {
                    if (res.status == 200) {
                        tableExportData.value = res.data.lists.map((item) => {
                            return {
                                wechat_user_id: item.wechat_user_id,
                                main_product_name: item.main_product_name,
                                product_name: item.product_name,
                                nickname: item.nickname,
                                bind_account_count: item.bind_account_count,
                                amount: item.amount,
                                oaid: item.oaid,
                                ip: item.ip,
                                ip_address: item.ip_address,
                                updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss"),
                                status:item.status==1?"待审核":item.status==2?"提现中":item.status==3?"已提现":item.status==4?"拒绝提现":item.status==5?"提现失败":"",
                            };

                        });
                        const titleArr = [
                            "用户ID",
                            "项目",
                            "应用",
                            "用户名",
                            "设备关联账号",
                            "申请提现金额",
                            "数盟id",
                            "ip",
                            "ip地址",
                            "提现时间",
                            "提现状态",
                        ]

                        // let data = JSON.parse(JSON.stringify(tableExportData.value))
                        exportExcelData(tableExportData.value, "人工审核记录", titleArr, "提现记录");
                        // console.log(res.data.lists);
                    } else {
                        if (res.message) {
                            ElMessage.error(res.message);
                        } else {
                            ElMessage.error('后端api接口异常！');
                        }
                    }

                })
        }

        const getProductAndDataList = () => {
            product_name_selected.value = ""
            //获取应用列表
            if (main_product_name_selected.value == -1) {
                getData(query)
            } else {
                const data = {
                    ...query,
                    main_product_id: main_product_name_selected.value,

                }
                query.product_id = ""
                main_product_id.value = main_product_name_selected.value
                getData(data)
                getSubProductDataList(main_product_name_selected.value)
            }
        }
        // 分页导航
        const handlePageChange = (val) => {
            query.page_index = val;
            if (main_product_name_selected.value == -1) {
                getData(query)
            } else if (main_product_name_selected.value > 0) {
                if (product_name_selected.value == -1) {
                    const data = {
                        main_product_id: main_product_name_selected.value,
                        ...query
                    }
                    getData(data)
                } else if (product_name_selected.value > 0) {
                    const data = {
                        ...query,
                        product_id: product_name_selected.value,

                    }
                    getData(data)
                } else {
                    const data = {
                        ...query,
                        main_product_id: main_product_name_selected.value,

                    }
                    getData(data)
                }
            } else {
                const data = {
                    ...query
                }
                getData(data)
            }
        };
        const getDataById = () => {
            //通过应用id获取对应二级游戏
            if (product_name_selected.value == -1) {
                const data = {
                    ...query,
                    product_id: main_product_name_selected.value,

                }
                if (data.product_id == -1) {
                    delete data.product_id
                }
                getData(data)
            } else {
                const data = {
                    ...query,
                    product_id: product_name_selected.value,

                }
                query.product_id = product_name_selected.value
                if (data.product_id == -1) {
                    delete data.product_id
                }
                getData(data)
            }
        }
        return {
            tableData,
            widthdrawDetail,
            product_type,
            options,
            suboptions,
            addoptions,
            main_product_name_selected,
            product_name_selected,
            getProductAndDataList,
            getDataById,
            query,
            handlePageChange,
            pageTotal,
            handleDate,
            dateRange,
            getExcel,
            isShow,
            get,
            goback,
            main_product_id
        };
    },
    methods: {
        withdrawDetail(id) {
            this.$router.push({
                name: "userdetail",
                params: { wechat_user_id: id },
            });
        },
    },
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}

.table {
    width: 100%;
    font-size: 14px;
}

.agree {
    color: #67c23a;
}

.red {
    color: #ff0000;
}

.mr10 {
    margin-right: 10px;
}

.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>