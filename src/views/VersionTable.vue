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
        <addversiontable :addVisible="addVisible" @update-add="getData" >
        </addversiontable>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import addversiontable from '../componentsadds/addversiontable.vue'
import {
    fetchVersionTableData,
    deleteVersionTableData,
    fetchProductChannelData,
} from "../api/product";
import moment from "moment";
const addVisible = ref(false);
const channeloptions = ref([]);
const tableData = ref([]);
const product_name_selected = ref('')
const channel_name_selected = ref('')
const productoptions = ref([]);

const query = reactive({
    page_index: 1,
    page_size: 10,
});

const pageTotal = ref(0);
//挂载
const getProductAndDataList = () => {
    getChannelAndDataList()
};
//获取用户数据
const getData = async (data) => {
    try {
        const res = await fetchVersionTableData(data)
        if (res.status == 200) {
            tableData.value = await res.data.lists.map((item) => {
                return {
                    ...item,
                    created_at: moment(item.created_at).format("YYYY-MM-DD HH:mm:ss"),
                    uptime: moment(item.uptime).format("YYYY-MM-DD HH:mm:ss")
                };
            });
            pageTotal.value = res.data.total_count
        }
    } catch (error) {
        // console.log(error)
        ElMessage.error("服务器异常！");
    }
    addVisible.value=false
  
};
// 获取游戏和渠道下拉框数据

const getProductChannelData = async () => {
    try {
        const res = await fetchProductChannelData()
        if (res.status == 200) {
            productoptions.value = res.data.games
            product_name_selected.value = productoptions.value[0].value
            // console.log(product_name_selected)

            channeloptions.value = res.data.channels
            // addproductoptions.value = res.data.games
            // addchanneloptions.value = res.data.channels

        }
        else {
            if (res.message) {
                ElMessage.error(res.message);
            } else {
                ElMessage.error('后端api接口异常！');
            }
        }
    } catch (error) {
        // console.log(error)
        ElMessage.error("服务器异常！");
    }
    getChannelAndDataList()
};

const getChannelAndDataList = () => {
    // console.log(product_name_selected.value,channel_name_selected.value)
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

const handleDelete = async (id) => {
    // 二次确认删除
    try {
        await ElMessageBox.confirm("确定要删除吗？", "提示", {
            type: "warning",
        })
        await deleteVersionTableData(id)
        ElMessage.success("删除版本成功");
        await getData()

    } catch (error) {
        ElMessage.error('请重试');
    }


};
// 分页导航
const handlePageChange = (val) => {
    query.page_index = val;
    getChannelAndDataList()
};
//组件的分装

const handleAdd = () => {
    addVisible.value = true;
};
getData()
getProductChannelData()
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

