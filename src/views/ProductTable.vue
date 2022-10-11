<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>风控系统</el-breadcrumb-item>
                <el-breadcrumb-item>产品管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-select v-model="main_product_name_selected" placeholder="项目" class="m-2"
                    @change="getProductAndDataList">
                    <el-option label="全部" value="-1"></el-option>
                    <el-option v-for="item in options" :key="item.id" :label="item.main_product_name"
                        :value="item.id" />
                </el-select>
                <el-select v-model="product_name_selected" placeholder="应用" class="m-2" @change="getDataById">
                    <el-option label="全部" value="-1"></el-option>
                    <el-option v-for="item in suboptions" :key="item.product_id" :label="item.product_name"
                        :value="item.product_id" />
                </el-select>&nbsp;&nbsp;
                <!-- <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button> -->
                <el-button type="primary" v-if="button_edit" @click="handleAdd">新增项目</el-button>
            </div>
            <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
                <el-table-column prop="main_product_id" sortable label="父游戏ID"></el-table-column>
                <el-table-column prop="main_product_name" label="父游戏"></el-table-column>
                <el-table-column prop="product_id" label="子游戏ID"></el-table-column>
                <el-table-column prop="product_name" label="子游戏"></el-table-column>
                <el-table-column prop="md5key" label="md5key"></el-table-column>
                <el-table-column prop="package_name" label="包名"></el-table-column>
                <el-table-column label="操作" width="220" align="center">
                    <template #default="scope">
                        <el-button type="text" v-if="button_edit" v-show="scope.row.product_id >''" icon="el-icon-link"
                            @click="riskManage(scope.row)">风控配置
                        </el-button>
                        <el-button type="text" v-if="button_edit" v-show="scope.row.product_id > ''" icon="el-icon-edit"
                            @click="handleEdit(scope.row.id, scope.row)">编辑
                        </el-button>
                        <el-button type="text" v-if="button_edit" icon="el-icon-delete" class="red"
                            @click="handleDelete(scope.row.main_product_id, scope.row.product_id)">删除
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
        <el-dialog title="编辑" v-model="editVisible" width="60%">
            <el-form v-show="check_main_product_name == 0" label-width="110px">
                <el-form-item label="项目名">
                    <el-input v-model="form.main_product_name"></el-input>
                </el-form-item>
            </el-form>
            <el-form v-show="check_main_product_name == 1" label-width="110px">
                <el-form-item label="应用名">
                    <el-input disabled v-model="form.product_name"></el-input>
                </el-form-item>
                <el-form-item label="包名">
                    <el-input v-model="form.package_name"></el-input>
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
        <el-dialog title="新增项目" v-model="addVisible" width="60%">
            <el-form label-width="70px">
                <el-form-item label="游戏类型" prop="resource">
                    <el-radio-group v-model="product_type">
                        <el-radio label="项目"></el-radio>
                        <el-radio label="应用"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item v-show="product_type == '应用'" label="项目" prop="resource">
                    <el-select v-model="add_main_product_name_selected" placeholder="项目" class="m-2">
                        <el-option v-for="item in addoptions" :key="item.id" :label="item.main_product_name"
                            :value="item.id" />
                    </el-select>
                </el-form-item>

                <el-form-item v-show="product_type == '项目'" label="项目">
                    <el-input v-model="formAdd.main_product_name"></el-input>
                </el-form-item>
                <el-form-item v-show="product_type == '应用'" label="应用">
                    <el-input v-model="formAdd.product_name"></el-input>
                </el-form-item>
                <el-form-item v-show="product_type == '应用'" label="包名">
                    <el-input v-model="formAdd.package_name"></el-input>
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
import { useRouter } from "vue-router";
import {showButton} from '../utils/showButton'
import { ElMessage, ElMessageBox } from "element-plus";
import {
    fetchProductTableData,
    fetchProductTableDataById,
    editProductTableData,
    editSubProductTableData,
    deleteProductTableData,
    deleteSubProductTableData,
    addProductTableData,
    addSubProductTableData,
    fetchMainProductList,
    fetchProductList,
} from "../api/product";
import { useProject } from '../store/project'

const button_edit=showButton('product:product:edit')

const router=useRouter()
const useproject = useProject()
const query = reactive({
    page_index: 1,
    page_size: 10,
});
const pageTotal = ref(0);
// import table from "../mock/table.json";
const main_product_name_selected = ref('')
const add_main_product_name_selected = ref('')
const product_name_selected = ref('')
// check_main_product_name: 0:编缉和删除的是一级产品;1:编辑和删除的是二级产品
const check_main_product_name = ref(0)
const tableData = ref([]);
const main_product_value_select = ref('')
const product_type = ref("项目");
let options = ref([]);
let suboptions = ref([]);
let addoptions = ref([]);

// 获取产品管理表格数据
const getData = (data) => {
    fetchProductTableData(data).then((res) => {
        if (res.status == 200) {
            pageTotal.value = res.data.total_count;
            tableData.value = res.data.lists;
        }
        else {
            ElMessage.error(res?.message);
        }
    }).catch(() => {
        // ElMessage.error("服务器异常！");
    });
};
// 获取具体的二级产品
const getSubDataById = (product_id) => {
    fetchProductTableDataById(product_id).then((res) => {
        if (res.status == 200)
            tableData.value = res.data;
        else {
            if (res.message) {
                ElMessage.error(res.message);
            } else {
                ElMessage.error('后端api接口异常！');
            }
        }
    }).catch(() => {
        // ElMessage.error("服务器异常！");
    });
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
// 修改项目数据
const editProductTabData = (id, data) => {
    editProductTableData(id, data).then((res) => {
        if (res.status == 200) {
            ElMessage.success("修改成功");
            getData(query);
            getProductDataList();
        } else {
            ElMessage.error("修改失败");
            getData(query);
        }
    }).catch(() => {
        ElMessage.error("修改失败");
        getData(query);
    });
};
// 修改应用数据
const editSubProductTabData = (id, data) => {
    editSubProductTableData(id, data).then((res) => {
        if (res.status == 200) {
            ElMessage.success("修改成功");
            getData(query);
            getProductDataList();
        } else {
            ElMessage.error("修改失败");
            getData(query);
        }
    }).catch(() => {
        ElMessage.error("修改失败");
        getData(query);
    });
};
// 删除项目
const deleteProductTabData = (id) => {
    deleteProductTableData(id).then((res) => {
        if (res.status == 200) {
            ElMessage.success("删除成功");
            getData(query);
            getProductDataList();
        } else if (res.status == -1) {
            ElMessage.error("请先删除对应的应用！");
        }
    });
};
// 删除项目
const deleteSubProductTabData = (id) => {
    deleteSubProductTableData(id).then((res) => {
        if (res.status == 200) {
            ElMessage.success("删除成功");
            getData(query);
            getProductDataList();
        }
    });
};
const addProductTabData = (data) => {
    addProductTableData(data).then((res) => {
        if (res.status == 200) {
            ElMessage.success("新增项目成功");
            getData(query)
            getProductDataList()
        }
    });
};
const addSubProductTabData = (id, data) => {
    addSubProductTableData(id, data).then((res) => {
        if (res.status == 200) {
            ElMessage.success("新增应用成功");
            getData(query)
            getProductDataList()
        }
    });
};

    name: "basetable",
    
        main_product_name_selected.value = ''
        product_name_selected.value = ''
        getData(query);
        getProductDataList();
        // 查询操作
        const handleSearch = () => {
            query.pageIndex = 1;
            getData(query);
        };
        // 分页导航
        const handlePageChange = (val) => {
            query.page_index = val;
            getDataById()
        };

        // 删除操作
        const handleDelete = (main_product_id, product_id) => {
            // 二次确认删除
            ElMessageBox.confirm("确定要删除吗？", "提示", {
                type: "warning",
            })
                .then(() => {
                    if (product_id > '') {
                        deleteSubProductTabData(product_id)
                    } else {
                        deleteProductTabData(main_product_id)
                    }
                })
                .catch(() => { });
        };

        // 表格编辑时弹窗和保存
        const editVisible = ref(false);
        const addVisible = ref(false);
        let form = reactive({
            id: "",
            main_product_id: "",
            product_id: "",
            main_product_name: "",
            product_name: "",
            package_name: "",
        });
        let formAdd = reactive({
            main_product_name: "",
            product_name: "",
            package_name: "",
        });
        let idx = -1;
        const handleEdit = (index, row) => {
            check_main_product_name.value = ref('')
            if (row.product_id == '') {
                check_main_product_name.value = 0
            } else {
                check_main_product_name.value = 1
            }
            idx = index;
            Object.keys(form).forEach((item) => {
                form[item] = row[item];
            });
            editVisible.value = true;
        };
        const handleAdd = () => {
            addVisible.value = true;
        };
        const saveEdit = () => {
            editVisible.value = false;
            const main_data = {
                main_product_name: form.main_product_name
            }
            const data = {
                // product_name: form.product_name,
                package_name: form.package_name
            }
            if (check_main_product_name.value == 1) {
                editSubProductTabData(form.product_id, data)
            }
            // else {
            //     editProductTabData(form.main_product_id, main_data)
            // }
        };
        const saveAdd = () => {
            addVisible.value = false;
            let data = {
                main_product_name: formAdd.main_product_name,
            }
            if (product_type.value == '项目') {
                if (formAdd.main_product_name) {
                    addProductTabData(data)
                } else {
                    ElMessage.error("游戏名不能为空！");
                    return
                }
            } else {
                if (formAdd.product_name && formAdd.package_name && add_main_product_name_selected.value) {
                    data = {
                        product_name: formAdd.product_name,
                        package_name: formAdd.package_name,
                    }
                    addSubProductTabData(add_main_product_name_selected.value, data)
                } else {
                    ElMessage.error("游戏名和包名不能为空！");
                    return
                }
                // let main_product_name = options.value.find(val => val.main_product_id == main_product_name_selected.value).main_product_name

            }
        };
        const getProductAndDataList = () => {
            product_name_selected.value = ''
            //获取应用列表
            if (main_product_name_selected.value == -1) {
                getData(query)
            } else {
                const data = {
                    main_product_id: main_product_name_selected.value,
                    ...query
                }
                getData(data)
                getSubProductDataList(main_product_name_selected.value)
            }
        }
        const getDataById = () => {
            //通过应用id获取对应应用
            if (main_product_name_selected.value == -1) {
                getData(query)
            }
            else if (product_name_selected.value == -1) {
                const data = {
                    main_product_id: main_product_name_selected.value,
                    ...query
                }
                getData(data)
            } else {
                const data = {
                    product_id: product_name_selected.value,
                    ...query
                }
                getData(data)
            }
        }
       
    
    const riskManage=(row)=>{
        router.push({
                name: "productrisk",
            });
           
            useproject.setproduct(row)

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
