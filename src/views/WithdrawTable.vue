<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>风控系统</el-breadcrumb-item>
                <el-breadcrumb-item>提现配置</el-breadcrumb-item>
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
                </el-select>&nbsp;&nbsp;
                <el-button v-show="showWithdraw" type="primary" @click="withdrawShow = true"> 默认规则</el-button>
                <el-button type="primary" @click="handleAdd">提现设置</el-button>
                <el-drawer v-model="withdrawShow" title="提现默认规则信息：" direction="rtl" size="50%">
                    <el-form ref="formRef" :model="form" label-width="280px">
                        <el-form-item label="是否允许所有用户提现" prop="user_withdrawal_status">
                            <el-switch disabled v-model="form.user_withdrawal_status"></el-switch>
                        </el-form-item>
                        <el-form-item label="是否允许自然量登录" prop="biomass_login_status">
                            <el-switch disabled v-model="form.biomass_login_status"></el-switch>
                        </el-form-item>
                        <el-form-item label="提现审核标准" prop="withdrawal_audit_standard">
                            <el-input disabled style="width: 150px" v-model="form.withdrawal_audit_standard"></el-input>
                        </el-form-item>
                        <el-form-item label="单日提现次数" prop="withdrawal_count">
                            <el-input disabled style="width: 150px" v-model="form.withdrawal_count">
                            </el-input>
                        </el-form-item>
                    </el-form>
                </el-drawer>
            </div>
            <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
                <el-table-column prop="main_product_id"  label="项目ID"></el-table-column>
                <el-table-column prop="main_product_name" label="项目名称"></el-table-column>
                <el-table-column prop="product_id" label="应用ID"></el-table-column>
                <el-table-column prop="product_name" label="应用名称"></el-table-column>

                <el-table-column prop="unaudit_orders_count" label="未审核订单数"></el-table-column>
                <el-table-column prop="unaudit_reward_sum" label="未审核总金额"></el-table-column>
                <el-table-column prop="apply_users_count" label="申请人数"></el-table-column>
                <el-table-column prop="user_withdrawal_status" label="用户提现">
                    <template #default="scope">
                        <el-tag :type="
                            scope.row.user_withdrawal_status === '允许'
                                ? ''
                                : scope.row.user_withdrawal_status === '禁止'
                                    ? 'danger'
                                    : ''
                        ">{{ scope.row.user_withdrawal_status }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="biomass_login_status" label="自然量登录">
                    <template #default="scope">
                        <el-tag :type="
                            scope.row.biomass_login_status === '允许'
                                ? ''
                                : scope.row.biomass_login_status === '禁止'
                                    ? 'danger'
                                    : ''
                        ">{{ scope.row.biomass_login_status }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="withdrawal_audit_standard" label="提现审核标准"></el-table-column>
                <el-table-column prop="withdrawal_count" label="单用户当天提现次数"></el-table-column>
                <el-table-column label="操作" width="220" align="center">
                    <template #default="scope">
                        <el-button type="text" icon="el-icon-link" @click="withdrawDetail(scope.row.main_product_name,scope.row.main_product_id,scope.row.product_name,scope.row.product_id)">人工审核
                        </el-button>
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.row.id, scope.row)">提现设置
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background layout="total, prev, pager, next" :current-page="query.page_index"
                  :page-size="query.page_size" :total="pageTotal" @current-change="handlePageChange"></el-pagination>
              </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑提现配置" v-model="editVisible" width="60%">
            <el-form ref="formRef" :rules="rules" :model="formEdit" label-width="280px">
                <el-form-item label="是否允许所有用户提现" prop="user_withdrawal_status">
                    <el-switch v-model="formEdit.user_withdrawal_status"></el-switch>
                </el-form-item>
                <el-form-item label="是否允许自然量登录" prop="biomass_login_status">
                    <el-switch v-model="formEdit.biomass_login_status"></el-switch>
                </el-form-item>
                <el-form-item label="提现审核标准" prop="withdrawal_audit_standard">
                    <el-input style="width: 150px" v-model="formEdit.withdrawal_audit_standard"></el-input>
                </el-form-item>
                <el-form-item label="单日提现次数" prop="withdrawal_count">
                    <el-input style="width: 150px" v-model="formEdit.withdrawal_count">
                    </el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="editVisible = false">取 消</el-button>
                    <el-button type="primary" @click="saveEdit">确 定</el-button>
                </span>
            </template>
        </el-dialog>

        <!-- 新增弹出框 -->
        <el-dialog title="新增提现配置" v-model="addVisible" width="60%">
            <el-form ref="formRef" :rules="rules" :model="formAdd" label-width="280px">
                <el-form-item label="配置类型" prop="config_type">
                    <el-radio-group v-model="formAdd.config_type">
                        <el-radio label="0">所有项目</el-radio>
                        <el-radio label="1">指定项目</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item v-show="formAdd.config_type == 1" label="项目" prop="main_product_name_selected">
                    <el-select v-model="main_product_name_selected" placeholder="项目" class="m-2"

                        @change="getProductAndDataList">
                        <el-option v-for="item in options" :key="item.id" :label="item.main_product_name"
                            :value="item.id" />
                    </el-select>
                </el-form-item>

                <el-form-item v-show="formAdd.config_type == 1" label="应用" prop="product_name_selected">
                    <el-select multiple v-model="product_name_selected" placeholder="应用" class="m-2">

                        <el-option v-for="item in suboptions" :key="item.product_id" :label="item.product_name"
                            :value="item.product_id" />
                    </el-select>
                </el-form-item>
                <el-form-item label="是否允许所有用户提现" prop="user_withdrawal_status">
                    <el-switch v-model="formAdd.user_withdrawal_status"></el-switch>
                </el-form-item>
                <el-form-item label="是否允许自然量登录" prop="biomass_login_status">
                    <el-switch v-model="formAdd.biomass_login_status"></el-switch>
                </el-form-item>
                <el-form-item label="提现审核标准" prop="withdrawal_audit_standard">
                    <el-input style="width: 150px" v-model="formAdd.withdrawal_audit_standard"></el-input>
                </el-form-item>
                <el-form-item label="单日提现次数" prop="withdrawal_count">
                    <el-input style="width: 150px" v-model="formAdd.withdrawal_count">
                    </el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="addVisible = false">取 消</el-button>
                    <el-button type="primary" @click="saveAdd">确 定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>



<script setup>

import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import {
    fetchProductTableDataById,
    fetchMainProductList,
    fetchProductList,
} from "../api/product";
import {
    withdrawAdd,
    withdrawList,
    withdrawUpdate,
} from "../api/user";
// import table from "../mock/table.json";
const main_product_name_selected = ref('')
const product_name_selected = ref('')
const query = reactive({
  page_index: 1,
  page_size: 10,
});
const pageTotal = ref(0);
const search_main_product_name_selected = ref('')
const search_product_name_selected = ref('')
const form = reactive({
});
const formAdd = reactive({
})
// const formEdit = reactive({
// });
const formRef = ref(null);
const showWithdraw = ref(false)
const withdrawShow = ref(false)
const tableData = ref([]);
const main_product_value_select = ref('')

const product_type = ref("项目");

let options = ref([]);
let suboptions = ref([]);
let addoptions = ref([]);
const dateRange=ref()


// 获取提现列表
const getData = (data,selectedMainProductName) => {
    withdrawList(data).then((res) => {
        if(res.status == 200){
tableData.value = res.data.lists.filter(
            (column) => column.config_type != 0
        ).map((item) => {
          return {
            ...item,
            biomass_login_status:
              item.biomass_login_status == 1
                ? "允许"
                : "禁止",
            user_withdrawal_status:
              item.user_withdrawal_status == 1
                ? "允许"
                : "禁止"
          };
        });
        // selectedMainProductName == 1 ,即为选中了某个游戏进行查询，否则就是要查全部的需要去掉默认规则一条数据
        pageTotal.value = selectedMainProductName == 1 ? res.data.total_count : res.data.total_count - 1
        form.value = res.data.lists.filter(
            (column) => column.config_type == 0
        )[0];
        if (form.value.config_type == 0) {
            showWithdraw.value = true
            form.user_withdrawal_status = form.value.user_withdrawal_status == 1 ? true : false
            form.biomass_login_status = form.value.biomass_login_status == 1 ? true : false //隐私协议
            form.withdrawal_audit_standard = form.value.withdrawal_audit_standard//提现审核标准
            form.withdrawal_count = form.value.withdrawal_count //单日用户提现次数
        }
        }else{
                ElMessage.error(res?.message);
        }
        
    }).catch(() => {
    });
};
//数字状态值转换：0：不允许；1：允许
const convertNumToString = idValue => {
    if (idValue == 1) return '允许'
    if (idValue == 0) return '不允许'
}





//获取项目产品信息
// 获取具体的二级产品
// const getSubDataById = (product_id) => {
//     fetchProductTableDataById(product_id).then((res) => {
//         console.log("getSubDataById", res.data);
//         tableData.value = res.data;
//     }).catch(() => {
//         ElMessage.error("服务器异常！");
//     });
// };

const getProductDataList = () => {
    fetchMainProductList().then((res) => {
        options.value = res.data;
        addoptions.value = res.data;
    }).catch(() => {
        // ElMessage.error("服务器异常！");
    });
};

const getSubProductDataList = (query) => {
    const data = {
        main_product_id: query
    }
    fetchProductList(data).then((res) => {
        suboptions.value = res.data;
    }).catch(() => {
        // ElMessage.error("getSubProductDataList服务器异常！");
    });
};
//添加提现配置
const withdrawAddData = (data) => {
    withdrawAdd(data).then((res) => {
        // formRef.value.resetFields();
        if (res.status == 200) {
            ElMessage.success("添加提现配置成功");
            getData(query)
        } else if (res.status == -1) {
            ElMessage.error("此游戏配置已存在！");
        }
    });
};
//添加提现配置
const withdrawUpdateData = (id, data) => {
    withdrawUpdate(id, data).then((res) => {
        // formRef.value.resetFields();
        if (res.status == 200) {
            ElMessage.success("修改提现配置成功");
            getData(query)
        }
    });
};


//数字校验
const checkNonnegative = (value) => {
    if (value) {
        let z_reg = /^\d+(\.{0,1}\d+){0,1}$/;
        if (!z_reg.test(value)) {
            ElMessage.error("请先选择产品！");
            return false;
        } else {
            return true;
        }
    } else {
        ElMessage.error("请选择游戏！");
        return false;
    }
};
//验证是否是非负数
const checkNonnegate = (value) => {
    if (value) {
        let z_reg = /^\d+(\.{0,1}\d+){0,1}$/;
        if (!z_reg.test(value)) {
            ElMessage.error("请输入数字！");
            return false;
        } else {
            return true;
        }
    }
};
        main_product_name_selected.value = ''
        product_name_selected.value = ''
        const rules = {
        };
        getData(query);
        getProductDataList();

        const router = useRouter()
        const  withdrawDetail=(mName,mId,pName,product_id)=>{
            router.push({
                name:"withdrawdetail",
                params:{
                    main_product_name:mName,
                    main_product_id:mId,
                    product_id:product_id,
                    product_name:pName
                },
            })
        }


        //获取已审核的体现记录 
const withDrawRecord=(mName,pName)=>{
    // console.log(mName,pName,pId);

    let mId=mName;
    let pId=pName;
            if(typeof(pName)=="number"){
                suboptions.value.map(item=>{
                    if(item.product_id==pName){
                        mName=item.main_product_name
                        pName=item.product_name
                    return 
                    }
                })
            }else if(typeof(mName)=="number"&&pName==""){
                options.value.map(item=>{
                    if(item.id==mName){
                        mName=item.main_product_name
                    }
                    return
                })
            }
            dateRange.value=null;
            console.log(mName,pName,mId,pId);
            router.push({
                name:'withdrawdetailall',
                params:{
                    main_product_name:mName,
                    product_name:pName,
                    product_id:pId,
                    main_product_id:mId
                }
            })
        }
        

        let formEdit = reactive({
            id: "",
            main_product_id: "",
            product_id: "",
            main_product_name: "",
            product_name: "",
            user_withdrawal_status: "",
            biomass_login_status: "",
            withdrawal_audit_standard: "",
            withdrawal_count: ""
        });

        // 表格编辑时弹窗和保存
        const editVisible = ref(false);
        const addVisible = ref(false);
        let idx = -1;
        const handleEdit = (index, row) => {
            idx = index;
            Object.keys(formEdit).forEach((item) => {
                if (item == 'user_withdrawal_status') {
                    formEdit[item] = row[item] == '允许' ? true : false
                }
                else if (item == 'biomass_login_status') { formEdit[item] = row[item] == '允许' ? true : false }
                else {
                    formEdit[item] = row[item];
                }

            });
            editVisible.value = true;
        };
        const handleAdd = () => {
            addVisible.value = true;
        };
            // 分页导航
    const handlePageChange = (val) => {
      query.page_index = val;
      getProductAndDataList()
    };
        const saveEdit = () => {
            editVisible.value = false;
            if (formEdit.withdrawal_audit_standard) {
                if (!checkNonnegate(formEdit.withdrawal_audit_standard)) return
            }
            if (formEdit.withdrawal_count) {
                if (!checkNonnegate(formEdit.withdrawal_count)) return
            }
            const data = {
                user_withdrawal_status: formEdit.user_withdrawal_status ? 1 : 0, //用户协议
                biomass_login_status: formEdit.biomass_login_status ? 1 : 0, //隐私协议
                withdrawal_audit_standard: formEdit.withdrawal_audit_standard,//提现审核标准
                withdrawal_count: formEdit.withdrawal_count, //单日用户提现次数
            };
            withdrawUpdateData(formEdit.id, data);
        };
        const saveAdd = () => {
            addVisible.value = false;
            if (formAdd.withdrawal_audit_standard) {
                if (!checkNonnegate(formAdd.withdrawal_audit_standard)) return
            }
            if (formAdd.withdrawal_count) {
                if (!checkNonnegate(formAdd.withdrawal_count)) return
            }

            if (formAdd.config_type) {
                if (formAdd.config_type == 1) {
                    if (!checkNonnegative(main_product_name_selected.value)) return;
                    product_name_selected.value.forEach(function (val) {
                        if (!checkNonnegative(val)) return;
                        const product_name = suboptions.value.filter(
                            (column) => column.product_id == val
                        );
                        const data = {
                            config_type: 1, //配置类型：0，所有项目；1：指定项目

                            main_product_id: product_name[0].main_product_id, //项目id选填，选择项目id之后，只展示对应项目项目
                            main_product_name: product_name[0].main_product_name,
                            product_id: product_name[0].product_id, //应用id

                            product_name: product_name[0].product_name,
                            user_withdrawal_status: formAdd.user_withdrawal_status ? 1 : 0, //用户协议
                            biomass_login_status: formAdd.biomass_login_status ? 1 : 0, //隐私协议
                            withdrawal_audit_standard: formAdd.withdrawal_audit_standard,//提现审核标准
                            withdrawal_count: formAdd.withdrawal_count, //单日用户提现次数
                        };
                        withdrawAddData(data);
                    });

                    main_product_name_selected.value = '';
                    product_name_selected.value = '';
                    suboptions.value = ''
                } else {
                    const globaldata = {
                        config_type: 0, //配置类型：0，所有项目；1：指定项目
                        user_withdrawal_status: formAdd.user_withdrawal_status ? 1 : 0, //用户协议
                        biomass_login_status: formAdd.biomass_login_status ? 1 : 0, //隐私协议
                        withdrawal_audit_standard: formAdd.withdrawal_audit_standard,//提现审核标准
                        withdrawal_count: formAdd.withdrawal_count, //单日用户提现次数
                    };
                    withdrawAddData(globaldata);
                }
            } else {
                ElMessage.error("必须选择配置类型！");
                return;
            }
        };
        const getProductAndDataList = () => {
            console.log(main_product_name_selected.value);
            product_name_selected.value = ''
            suboptions.value = ''

            if (main_product_name_selected.value == -1 || !main_product_name_selected.value) {
                console.log("1");
                getData(query)
            } else {
                const data = {
                    main_product_id: main_product_name_selected.value,
                    ...query
                }
                getData(data,1)
                getSubProductDataList(main_product_name_selected.value)
            }
        }
        const getDataById = () => {

            if (main_product_name_selected.value == -1 || !main_product_name_selected.value) {
                getData(query)
            }
            else if (product_name_selected.value == -1) {
                const data = {
                    main_product_id: main_product_name_selected.value,
                    ...query
                }
                getData(data,1)
            } else {
                const data = {
                    product_id: product_name_selected.value,
                    ...query
                }
                getData(data,1)
            }
        }
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
