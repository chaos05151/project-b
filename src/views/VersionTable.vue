<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>风控系统</el-breadcrumb-item>
                <el-breadcrumb-item>版本管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-select v-model="product_name_selected" placeholder="游戏选择" class="m-2"
                    @change="getProductAndDataList">
                    <el-option v-for="item in productoptions" :key="item.value" :label="item.label_name"
                        :value="item.value" />
                </el-select>
                <el-select v-model="channel_name_selected" placeholder="渠道选择" class="m-2"
                    @change="getChannelAndDataList">
                    <el-option label="全部" value="-1"></el-option>
                    <el-option v-for="item in channeloptions" :key="item.value" :label="item.label_name"
                        :value="item.value" />
                </el-select>&nbsp;&nbsp;
                <!-- <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button> -->
                <el-button type="primary" @click="handleAdd">新增版本</el-button>
            </div>
            <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
                <el-table-column prop="channel_name" label="渠道信息"></el-table-column>
                <el-table-column prop="versions_b" label="后端版本"></el-table-column>
                <el-table-column prop="created_at" label="创建时间"></el-table-column>
                <el-table-column prop="versions_c" label="前端最新版本"></el-table-column>
                <el-table-column prop="uptime" label="预期上线时间"></el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button size="small" type="danger" @click="handleDelete(scope.row.id)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background layout="total, prev, pager, next" :current-page="query.page_index"
                    :page-size="query.page_size" :total="pageTotal" @current-change="handlePageChange"></el-pagination>
            </div>
        </div>

        <!-- 新增弹出框 -->
        <el-dialog title="新增版本" v-model="addVisible" width="60%">
            <el-form label-width="110px">
                <el-form-item label="游戏选择">
                    <el-select style="width:18%" v-model="formAdd.add_product_name_selected" placeholder="游戏选择"
                        class="m-2">
                        <el-option v-for="item in addproductoptions" :key="item.value" :label="item.label_name"
                            :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="渠道选择">
                    <el-select ref="add_channel_name_selected_label" style="width:18%"
                        v-model="formAdd.add_channel_name_selected" placeholder="游戏选择" class="m-2">
                        <el-option v-for="item in addchanneloptions" :key="item.value" :label="item.label_name"
                            :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="后台版本">
                    <el-input style="width: 160px" v-model="formAdd.add_versions_b"></el-input>
                </el-form-item>
                <el-form-item label="前端版本">
                    <el-input style="width: 160px" v-model="formAdd.add_versions_c"></el-input>
                </el-form-item>
                <el-form-item label="预期上线时间" prop="uptime">
                    <el-date-picker v-model="formAdd.add_uptime" type="datetime" value-format="YYYY-MM-DD HH:mm:ss" />
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

<script>
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import {
    fetchVersionTableData,
    addVersionTableData,
    deleteVersionTableData,
    fetchProductChannelData,
} from "../api/product";
import moment from "moment";
// import table from "../mock/table.json";
const channel_name_selected = ref('')
const product_name_selected = ref('')
const add_channel_name_selected_label = ref('')
const query = reactive({
    page_index: 1,
    page_size: 10,
});
// check_main_product_name: 0:编缉和删除的是一级产品;1:编辑和删除的是二级产品
const check_main_product_name = ref(0)
const tableData = ref([]);
const pageTotal = ref(0);
const main_product_value_select = ref('')
const product_type = ref("一级游戏");
const form = reactive({})
const formAdd = reactive({})
const productoptions = ref([]);
const channeloptions = ref([]);

const addproductoptions = ref([]);
const addchanneloptions = ref([]);

// 获取游戏和渠道下拉框数据
const getProductChannelData = () => {
    fetchProductChannelData().then((res) => {
        if (res.status == 200) {
            productoptions.value = res.data.games
            product_name_selected.value = productoptions.value[0].value
            channeloptions.value = res.data.channels
            addproductoptions.value = res.data.games
            addchanneloptions.value = res.data.channels
        }
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
//版本号校验
const checkVersion = (value) => {
    if (value) {
        let z_reg = /^([0-9]\d|[0-9])(.([0-9]\d|\d)){2}$/;
        if (!z_reg.test(value)) {
            ElMessage.error("版本号格式为数字如:x.x.x");
            return false;
        } else {
            return true;
        }
    } else {
        ElMessage.error("请选择游戏！");
        return false;
    }
};
// 获取版本管理表格数据
const getData = (data) => {
    fetchVersionTableData(data).then((res) => {
        if (res.status == 200) {
            tableData.value = res.data.lists.map((item) => {
                return {
                    ...item,
                    created_at: moment(item.created_at).format("YYYY-MM-DD HH:mm:ss"),
                    uptime: moment(item.uptime).format("YYYY-MM-DD HH:mm:ss")
                };
            });
            pageTotal.value = res.data.total_count
        }
        else {
                ElMessage.error(res?.message);
        }
    }).catch(() => {
        // ElMessage.error("服务器异常！");
    });
};
const addVersionTabData = (data) => {
    addVersionTableData(data).then((res) => {
        if (res.status == 200) {
            ElMessage.success("添加版本成功");
            channel_name_selected.value = ''
            const data = {
                product_id: product_name_selected.value,
                ...query
            }
            getData(data)
        } else {
            ElMessage.error(res?.message);
        }
    });
};
const deleteVersionTabData = (data) => {
    deleteVersionTableData(data).then((res) => {
        if (res.status == 200) {
            ElMessage.success("删除版本成功");
            channel_name_selected.value = ''
            const data = {
                product_id: product_name_selected.value,
                ...query
            }
            getData(data)
        }
    });
};
export default {
    name: "basetable",
    setup() {
        channel_name_selected.value = ''
        const data = {
            product_id: product_name_selected.value,
            ...query
        }
        getData(data);
        getProductChannelData()
        // 查询操作
        const handleSearch = () => {
            query.pageIndex = 1;
            getData(query);
        };
        // 分页导航
        const handlePageChange = (val) => {
            query.page_index = val;
            getChannelAndDataList()
        };

        // 删除操作
        const handleDelete = (id) => {
            // 二次确认删除
            ElMessageBox.confirm("确定要删除吗？", "提示", {
                type: "warning",
            })
                .then(() => {
                    deleteVersionTabData(id)
                })
                .catch(() => { });
        };

        // 表格编辑时弹窗和保存
        const editVisible = ref(false);
        const addVisible = ref(false);
        const handleAdd = () => {
            addVisible.value = true;
        };
        const saveAdd = () => {
            addVisible.value = false;
            if (formAdd.add_uptime && formAdd.add_uptime < moment().format("YYYY-MM-DD HH:mm:ss")) {
                ElMessage.error("预期上线时间不能在当前时间之前！");
                return;
            }
            if (!checkVersion(formAdd.add_versions_b) || !checkVersion(formAdd.add_versions_c)) return
            const data = {
                product_id: formAdd.add_product_name_selected,
                channel: formAdd.add_channel_name_selected,
                // channel_name: formAdd.add_channel_name_selected.label,
                versions_b: formAdd.add_versions_b,
                versions_c: formAdd.add_versions_c,
                uptime: formAdd.add_uptime ? formAdd.add_uptime : moment().format("YYYY-MM-DD HH:mm:ss"),
            }
            addVersionTabData(data)
        };
        const getProductAndDataList = () => {
            getChannelAndDataList()
        };
        const getChannelAndDataList = () => {
            //获取二级游戏列表
            if (product_name_selected.value == -1 && channel_name_selected.value == -1) {
                getData(query)
            } else if (product_name_selected.value == -1 && channel_name_selected.value != -1) {
                const data = {
                    channel: channel_name_selected.value,
                    ...query
                }
                getData(data)
            } else if (product_name_selected.value != -1 && channel_name_selected.value == -1) {
                const data = {
                    product_id: product_name_selected.value,
                    ...query
                }
                getData(data)
            } else if (product_name_selected.value || channel_name_selected.value) {
                const data = {
                    product_id: product_name_selected.value,
                    channel: channel_name_selected.value,
                    ...query
                }
                getData(data)
            } else {
                getData(query)
            }
        };
        return {
            query,
            tableData,
            pageTotal,
            editVisible,
            addVisible,
            form,
            formAdd,
            handleSearch,
            handlePageChange,
            handleDelete,
            handleAdd,
            saveAdd,
            deleteVersionTabData,
            product_type,
            productoptions,
            channeloptions,
            addproductoptions,
            addchanneloptions,
            channel_name_selected,
            product_name_selected,
            main_product_value_select,
            check_main_product_name,
            add_channel_name_selected_label,
            getData,
            getProductAndDataList,
            getChannelAndDataList,
        };
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
