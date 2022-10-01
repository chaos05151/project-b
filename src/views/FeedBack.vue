<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>风控系统</el-breadcrumb-item>
                <el-breadcrumb-item>用户管理</el-breadcrumb-item>
                <el-breadcrumb-item>用户反馈</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-select v-model="main_product_name_selected" placeholder="项目名称" class="m-2"

                    @change="getProductAndDataList">
                    <!-- <el-option label="全部" value="-1"></el-option> -->
                    <el-option v-for="item in options" :key="item.id" :label="item.main_product_name"
                        :value="item.id" />
                </el-select>

                <el-select v-model="product_name_selected" placeholder="应用名称" class="m-2" @change="getDataById">  
                        <el-option v-for="item in suboptions" :key="item.product_id" :label="item.product_name"
                        :value="item.product_id" />
                </el-select>
                <el-select v-model="value" placeholder="处理状态" class="m-2" @change="getStaus">
                    <!-- <el-option label="全部" value=""></el-option> -->
                    <el-option label="未处理" value="0"></el-option>
                    <el-option label="已处理" value="1"></el-option>
                </el-select>&nbsp;&nbsp;
                <el-button type="primary" @click="goback">返回</el-button>
            </div>
            <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">

                <el-table-column prop="main_product_name"  label="项目名称"></el-table-column>
                <el-table-column prop="product_name"  label="应用名称"></el-table-column>

                <el-table-column prop="id"  label="用户ID"></el-table-column>
                <el-table-column prop="nickname" label="用户名"></el-table-column>
                <el-table-column prop="tel" label="电话"></el-table-column>
                <el-table-column prop="oaid" label="数盟id"></el-table-column>
                <el-table-column prop="dispose_status" label="是否处理"></el-table-column>
                <el-table-column prop="updated_at" sortable label="反馈时间"></el-table-column>
                <el-table-column label="反馈详情" width="220" align="center">
                    <template #default="scope">
                        <el-button type="text" icon="el-icon-link"
                            @click="feedBackDetail(scope.row.id)">详情
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
import { ElMessage } from "element-plus";
import {
    fetchProductTableDataById,
    fetchMainProductList,
    fetchProductList,
} from "../api/product";
import {
    fetchFeedBackData
} from "../api/user";
import moment from "moment";
const main_product_name_selected = ref('')
const product_name_selected = ref('')
// check_main_product_name: 0:编缉和删除的是一级产品;1:编辑和删除的是二级产品
const check_main_product_name = ref(0)
const tableData = ref("");
const pageTotal = ref(0);
const main_product_value_select = ref('')

const product_type = ref("项目");

const value = ref('')
let options = ref([]);
let suboptions = ref([]);
const form = reactive({
});
const query=reactive({
    page_index:1,
    page_size:10
})

// 获取用户反馈
const getData = (data) => {
    fetchFeedBackData(data).then((res) => {
        tableData.value = res.data.lists.map((item) => {
          return {
            ...item,
            dispose_status:
              item.dispose_status == 1
                ? "已处理"
                : "未处理",
                updated_at:
                item.updated_at ? moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss") : ''
          };
        });
        pageTotal.value=res.data.total_count ? res.data.total_count : 0
        // console.log();
    }).catch(() => {
        
    });
}
const getProductDataList = () => {
    fetchMainProductList().then((res) => {
        options.value = res.data
    }).catch(() => {
        
    })
}

const getSubProductDataList = (query) => {
    const data = {
        main_product_id: query
    }
    fetchProductList(data).then((res) => {
        suboptions.value = res.data
    }).catch(() => {
        
    })
}


export default {
    name: "basetable",
    setup() {
        value.value = ''
        let data={
            page_index:1,
            page_size:10
        }
        getData(data);
        getProductDataList();
        const handlePageChange=(val)=>{query.page_index=val
            getDataById()
        }

        const getStaus=(val)=>{
            //  val=Number(val)
            //  if(val!==""){
            //     let data={
            //     ...query,
            //     dispose_status:val
            //  }
            //  getData(data)
            //  }else{
            //     getData(query)
            //  }
             getDataById()
            }
        
        const getProductAndDataList = () => {
            product_name_selected.value = ''
            
            if (main_product_name_selected.value) {
                getDataById()
                getSubProductDataList(main_product_name_selected.value)
            }
            
        }
        const getDataById = () => {
            if (main_product_name_selected.value) {
                if(product_name_selected.value){
                if(value.value){
                    const data = {
                    product_id: product_name_selected.value,
                    dispose_status: value.value,
                    ...query
                }
                getData(data)
                }else{
                    const data = {
                    product_id: product_name_selected.value,
                    ...query
                }
                getData(data)
                }
                }else {
                    if(value.value){
                    const data = {
                    main_product_id: main_product_name_selected.value,
                    dispose_status: value.value,
                    ...query
                }
                getData(data)
                }else{
                    const data = {
                    main_product_id: main_product_name_selected.value,
                    ...query
                }
                getData(data)
                }
                }
                
            }else{
                if(value.value){
                    const data = {
                    dispose_status: value.value,
                    ...query
                }
                getData(data)
                }else{
                    getData(query)
                }
            }
            
        }


         return {
            form,
            tableData,
            product_type,
            options,
            suboptions,
            main_product_name_selected,
            product_name_selected,
            main_product_value_select,
            check_main_product_name,
            query,
            pageTotal,
            getData,
            getProductAndDataList,
            getDataById,
            handlePageChange,
            getStaus,
            value,
        };
    },
    methods: {
        feedBackDetail(id) {
            this.$router.push({
                name: "feedbackdetail",
                params: { wechat_user_id: id },
            });
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
