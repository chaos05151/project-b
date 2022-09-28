<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>风控系统</el-breadcrumb-item>
                <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">

                <el-select v-model="main_product_name_selected" placeholder="项目名称" class="m-2"

                    @change="getProductAndDataList">
                    <el-option label="全部" value="-1"></el-option>
                    <el-option v-for="item in options" :key="item.id" :label="item.main_product_name"
                        :value="item.id" />
                </el-select>
                <el-select v-model="product_name_selected" placeholder="应用名称" class="m-2" @change="getDataById">

                    <el-option label="全部" value="-1"></el-option>
                    <el-option v-for="item in suboptions" :key="item.product_id" :label="item.product_name"
                        :value="item.product_id" />
                </el-select>
                <el-date-picker
                style="margin: 0 6px"
                    v-model="dateRange"
                    type="daterange"
                    range-separator="→"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    value-format="YYYY-MM-DD"
                    @change="handleDate"
                />
                &nbsp;&nbsp;
                <el-button type="primary" @click="goback">返回</el-button>
            </div>
            <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
                <el-table-column prop="id" label="用户id"></el-table-column>
                <el-table-column prop="nickname" label="用户名"></el-table-column>
                <el-table-column prop="oaid" label="数盟id"></el-table-column>
                <el-table-column prop="ip" label="用户ip"></el-table-column>
                <el-table-column prop="ip_address" label="用户ip地址"></el-table-column>
                <el-table-column prop="bind_account_count" label="关联账号数"></el-table-column>
                <el-table-column prop="illegal_time" label="拉黑时间"></el-table-column>
                <el-table-column label="操作" width="220" align="center">
                    <template #default="scope">
                        <el-button type="text" icon="el-icon-link" @click="userDetail(scope.row.id)">详情
                        </el-button>
                        <el-button type="text" icon="el-icon-edit" @click="removeBlackList(scope.row.id)">
                            移出黑名单
                        </el-button>
                    </template>
                </el-table-column>
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
import { ElMessage, ElMessageBox } from "element-plus";
import {
    fetchMainProductList,
    fetchProductList,
} from "../api/product";
import {
    fetchBlackListData,
    addBlacklist,
    removeBlacklist,
} from "../api/user";
// import table from "../mock/table.json";
const query = reactive({
  page_index: 1,
  page_size: 10,
});
const pageTotal = ref(0);
const main_product_name_selected = ref('')
const product_name_selected = ref('')
const tableData = ref([]);
const dateRange=ref();
const main_product_value_select = ref('')
const product_type = ref("项目");
let options = ref([]);
let suboptions = ref([]);

// 获取黑名单列表数据
const getUserListData = (data) => {
    fetchBlackListData(data).then((res) => {
        if(res.status == 200){
        tableData.value = res.data.lists;
        pageTotal.value = res.data.total_count ? res.data.total_count : 0
        }else{
            ElMessage.error(res?.message);
        }
    }).catch(() => {
        
    });
};

const getProductDataList = () => {
    fetchMainProductList().then((res) => {
        options.value = res.data;
    }).catch(() => {
        
    });
};

const getSubProductDataList = (query) => {
    const data = {
        main_product_id: query
    }
    fetchProductList(data).then((res) => {
        suboptions.value = res.data;
    }).catch(() => {
        
    });
};
//加入黑名单禁止登录
const addBlackListData = (id) => {
    addBlacklist(id).then((res) => {
        if (res.status == 200) {
            ElMessage.success("加入黑名单成功！");
            getUserListData(query)
        }
    }).catch(() => {
        
    });
};
//移出黑名单禁止登录
const removeBlackListData = (id) => {
    removeBlacklist(id).then((res) => {
        if (res.status == 200) {
            ElMessage.success("移出黑名单成功！");
            getUserListData(query)
        }
    }).catch(() => {
        
    });
};

//日期
const handleDate=()=>{
  // console.log(dateRange.value);
  if(dateRange.value!=null){
    query.start_date=dateRange.value[0]
    query.end_date=dateRange.value[1]
    
  }else{
    delete query.start_date
    delete query.end_date
  }
  console.log(query)
  getUserListData(query)
}
export default {
    name: "basetable",
    setup() {

        getProductDataList()
        //获取用户列表
        getUserListData(query)

        // 加入黑名单禁止登录
        const addBlackList = (id) => {
            // 二次确认删除
            ElMessageBox.confirm("确定加入黑名单？", "提示", {
                type: "warning",
            })
                .then(() => {
                    addBlackListData(id)
                })
                .catch(() => { });
        };
        // 加入黑名单禁止登录
        const removeBlackList = (id) => {
            // 二次确认删除
            ElMessageBox.confirm("确定移出黑名单？", "提示", {
                type: "warning",
            })
                .then(() => {
                    removeBlackListData(id)
                })
                .catch(() => { });
        };
        const getProductAndDataList = () => {
            product_name_selected.value = ''
            suboptions.value = ''

            if (main_product_name_selected.value == -1) {
                getUserListData(query)
            } else {
                const data = {
                    main_product_id: main_product_name_selected.value,
                    ...query
                }
                getUserListData(data)
                getSubProductDataList(main_product_name_selected.value)
            }
        }
        const getDataById = () => {

            if (product_name_selected.value == -1) {
                const data = {
                    main_product_id: main_product_name_selected.value,
                    ...query
                }
                getUserListData(data)
            } else {
                const data = {
                    product_id: product_name_selected.value,
                    ...query
                }
                getUserListData(data)
            }
        }
        // 分页导航
    const handlePageChange = (val) => {
      query.page_index = val;
      getProductAndDataList()
    }
        return {
            tableData,
            query,
            pageTotal,
            removeBlackList,
            addBlackList,
            handlePageChange,
            product_type,
            options,
            suboptions,
            main_product_name_selected,
            product_name_selected,
            main_product_value_select,
            dateRange,
            getProductAndDataList,
            getDataById,
            handleDate
        };
    },
    methods: {
        withDraw() {
            this.$router.push("/withdraw")
        },
        userDetail(id) {
            this.$router.push({
                name: "userdetail",
                params: { wechat_user_id: id },
            });
        },
        blackList() {
            this.$router.push("/blacklist")
        },
        userFeedback() {
            this.$router.push("/feedback")
        },
        goback(){
         this.$router.go(-1)
        }
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
