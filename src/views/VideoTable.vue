<template>
    <div class="">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>积分系统</el-breadcrumb-item>
                <el-breadcrumb-item>短视频项目</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div v-show="1 == 2" class="handle-box">
                产品:&nbsp;&nbsp;&nbsp;&nbsp;
                <el-select v-model="value" placeholder="地址" class="m-2">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>
            <div style="position:relative">
                <el-tabs v-model="message" type="border-card" @tab-click="handleTabClick">
                    <el-tab-pane label="答题红包" name="first">
                        <el-table :data="tableDataAAAA"  style="width: 100%">
                            <el-table-column :sortable="item.sortable" width="130px" :prop="item.prop"  :label="item.label"
                                v-for="(item, index) in tableHeaderFirstTab" :key="item.prop">
                                <template #default="scope">
                                    <div v-show="item.editable || scope.row.editable" class="editable-row">
                                        <template v-if="item.type === 'input'">
                                            <el-input size="small" v-model="scope.row[item.prop]"
                                                :placeholder="`请输入${item.label}`"
                                                />
                                        </template>
                                        <template v-if="item.type === 'date'">
                                            <el-date-picker v-model="scope.row[item.prop]" type="date"
                                                value-format="YYYY-MM-DD" :placeholder="`请输入${item.label}`"
                                                 />
                                        </template>
                                    </div>
                                    <div v-show="!item.editable && !scope.row.editable" class="editable-row">
                                        <span class="editable-row-span">{{ scope.row[item.prop] }}</span>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                <template #default="scope">
                                    <el-button v-show="!scope.row.editable" size="small"
                                        @click="scope.row.editable = true">
                                        编辑
                                    </el-button>
                                    <el-button v-show="scope.row.editable" size="small" type="success"
                                        @click="handleFirstTabEdit(scope.row.id, scope.row)">确定</el-button>
                                    <el-button size="small" type="danger" @click="handleFirstTabDelete(scope.row.id)">删除
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="每日任务红包" name="second">
                        <el-table :data="tableDataBBBB" style="width: 100%">
                            <el-table-column :sortable="item.sortable" :prop="item.prop" :label="item.label"
                                v-for="(item, index) in tableHeaderSecondTab" :key="item.prop">
                                <template #default="scope">
                                    <div v-show="item.editable || scope.row.editable" class="editable-row">
                                        <template v-if="item.type === 'input'">
                                            <el-input size="small" v-model="scope.row[item.prop]"
                                                :placeholder="`请输入${item.label}`" />
                                        </template>
                                        <template v-if="item.type === 'date'">
                                            <el-date-picker v-model="scope.row[item.prop]" type="date"
                                                value-format="YYYY-MM-DD" :placeholder="`请输入${item.label}`" />
                                        </template>
                                    </div>
                                    <div v-show="!item.editable && !scope.row.editable" class="editable-row">
                                        <span class="editable-row-span">{{ scope.row[item.prop] }}</span>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                <template #default="scope">
                                    <el-button v-show="!scope.row.editable" size="small"
                                        @click="scope.row.editable = true">
                                        编辑
                                    </el-button>
                                    <el-button v-show="scope.row.editable" size="small" type="success"
                                        @click="handleSecondTabEdit(scope.row.id, scope.row)">确定</el-button>
                                    <el-button size="small" type="danger" @click="handleSecondTabDelete(scope.row.id)">
                                        删除
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="特殊规则" name="third">
                        <el-table :data="tableDataCCCC" style="width: 100%">
                            <el-table-column :prop="item.prop" :label="item.label"
                                v-for="(item, index) in tableHeaderThirdTab" :key="item.prop">
                                <template #default="scope">
                                    <div v-show="item.editable || scope.row.editable" class="editable-row">
                                        <template v-if="item.type === 'input'">
                                            <el-input size="small" v-model="scope.row[item.prop]"
                                                :placeholder="`请输入${item.label}`" />
                                        </template>
                                        <template v-if="item.type === 'date'">
                                            <el-date-picker v-model="scope.row[item.prop]" type="date"
                                                value-format="YYYY-MM-DD" :placeholder="`请输入${item.label}`" />
                                        </template>
                                    </div>
                                    <div v-show="!item.editable && !scope.row.editable" class="editable-row">
                                        <span class="editable-row-span">{{ scope.row[item.prop] }}</span>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                <template #default="scope">
                                    <el-button v-show="!scope.row.editable" size="small"
                                        @click="scope.row.editable = true">
                                        编辑
                                    </el-button>
                                    <el-button v-show="scope.row.editable" size="small" type="success"
                                        @click="handleThirdTabEdit(scope.row.id, scope.row)">确定</el-button>
                                    <el-button size="small" type="danger" @click="handleThirdTabDelete(scope.row.id)">删除
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                </el-tabs>
                <el-button type="primary" size="small" @click="addRule" style='position: absolute;right:10px;top:5px;'>
                    新增规则</el-button>
            </div>

        </div>
    </div>
</template>

<script>
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import {
    fetchVideoFirstTableData,
    fetchVideoSecondTableData,
    fetchVideoThirdTableData,
    editVideoFirstTableData,
    editVideoSecondTableData,
    editVideoThirdTableData,
    deleteVideoFirstTableData,
    deleteVideoSecondTableData,
    deleteVideoThirdTableData,
} from "../api/video";
import videojson from "../config/video.json";
// import export_json_to_excel from "../utils/export2excel"
const message = ref("first");
const options = videojson.options
const value = ref('')
const tableHeaderFirstTab = videojson.VideoHeaderFirstTab.filter((column) => column.show);
const tableHeaderSecondTab = videojson.VideoHeaderSecondTab.filter((column) => column.show);
const tableHeaderThirdTab = videojson.VideoHeaderThirdTab.filter((column) => column.show);
// 获取表格数据
const tableDataAAAA = ref([]);
const tableDataBBBB = ref([]);
const tableDataCCCC = ref([]);
let whichTab = ref(0);
let query = reactive({
    product: "Video",
    tabs: whichTab.value,
    pageIndex: 1,
    pageSize: 10,
});
const getData = () => {
    console.log("getData whichTab.value", whichTab.value);
    if (whichTab.value == 0) {
        getFirstTabData();
    } else if (whichTab.value == 1) {
        getSecondTabData();
    } else {
        getThirdTabData();
    }
};
// 获取闯关红包表格数据
const getFirstTabData = () => {
    query = reactive({
        product: "Video",
        tabs: whichTab.value,
        pageIndex: 1,
        pageSize: 10,
    });
    fetchVideoFirstTableData(query).then((res) => {
        console.log("getVideoFirstTabdata", res.data);
        tableDataAAAA.value = res.data;
            // excel表示导入的模块对象      //import方法执行完毕返回的是一个promise对象，
            // 在then方法中我们可以拿到使用的模块对象
            // export_json_to_excel({
            //     header: video.VideoHeaderExport2Excel, // 表头 必填
            //     data: res.data, // 具体数据 必填
            //     filename: "excel-list", // 文件名称
            //     autoWidth: true, // 宽度是否自适应
            //     bookType: "xlsx" // 生成的文件类型
            // })
    });
};
// 获取激励红包表格数据
const getSecondTabData = () => {
    query = reactive({
        product: "Video",
        tabs: whichTab.value,
        pageIndex: 1,
        pageSize: 10,
    });
    fetchVideoSecondTableData(query).then((res) => {
        console.log("getVideoSecondTabdata", res.data);
        tableDataBBBB.value = res.data;
    });
};
// 获取免费领钱表格数据
const getThirdTabData = () => {
    query = reactive({
        product: "Video",
        tabs: whichTab.value,
        pageIndex: 1,
        pageSize: 10,
    });
    fetchVideoThirdTableData(query).then((res) => {
        console.log("getVideoThirdTabdata", res.data);
        tableDataCCCC.value = res.data;
    });
};
// 修改闯关红包表格数据
const editFirstTabData = (id, data) => {
    editVideoFirstTableData(id, data).then((res) => {
        if (res.status == 200) {
            ElMessage.success("修改成功");
            getFirstTabData();
        } else {
            ElMessage.error("修改失败");
            getFirstTabData();
        }
    }).catch(() => {
        ElMessage.error("修改失败");
        getFirstTabData();
    });
};
// 修改激励红包表格数据
const editSecondTabData = (id, data) => {
    editVideoSecondTableData(id, data).then((res) => {
        if (res.status == 200) {
            ElMessage.success("修改成功");
            getSecondTabData();
        } else {
            ElMessage.error("修改失败");
            getSecondTabData();
        }
    }).catch(() => {
        ElMessage.error("修改失败");
        getSecondTabData();
    })
};
// 修改免费领钱表格数据
const editThirdTabData = (id, data) => {
    editVideoThirdTableData(id, data).then((res) => {
        if (res.status == 200) {
            ElMessage.success("修改成功");
            getThirdTabData();
        } else {
            ElMessage.error("修改失败");
            getThirdTabData();
        }
    }).catch(() => {
        ElMessage.error("修改失败");
        getThirdTabData();
    });
};
// 删除闯关红包表格数据
const deleteFirstTabData = (id) => {
    deleteVideoFirstTableData(id).then((res) => {
        if (res.status == 200) {
            ElMessage.success("删除成功");
            getFirstTabData();
        }
    });
};
// 删除激励红包表格数据
const deleteSecondTabData = (id) => {
    deleteVideoSecondTableData(id).then((res) => {
        if (res.status == 200) {
            ElMessage.success("删除成功");
            getSecondTabData();
        }
    });
};
// 删除免费领钱表格数据
const deleteThirdTabData = (id) => {
    deleteVideoThirdTableData(id).then((res) => {
        if (res.status == 200) {
            ElMessage.success("删除成功");
            getThirdTabData();
        }
    });
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
//验证是否是非负数
const checkBetween = (valueFirst, valueSecond) => {
    if (parseFloat(valueFirst) > parseFloat(valueSecond)) {
        ElMessage.error("后区间值必须大于前区间值！");
        return false
    } else {
        return true
    }
};
export default {
    name: "DynamicModifyTable",
    setup() {

        // video.getList({ query }).then(res => {
        //     console.log('video ',res)
        // })
        getData()
        return {
            message,
            query,
            options,
            value,
            tableDataAAAA,
            tableDataBBBB,
            tableDataCCCC,
            tableHeaderFirstTab,
            tableHeaderSecondTab,
            tableHeaderThirdTab,
        }
    },
    data() {
        return {
        }
    },
    methods: {
        addRule() {
            this.$router.push({
                name: "videorule",
                params: { whichTab: whichTab.value },
            });
        },
        handleTabClick(tab) {
            whichTab.value = tab.index;
            console.log("whichTab.value", whichTab.value);
            getData();
        },
        handleFirstTabEdit(id, row) {
            const data = {
                balance: row.balance,
                sixty_rate: row.sixty_rate,
                thirty_rate: row.thirty_rate,
                ten_rate: row.ten_rate,
                double_multiple: row.double_multiple,
                answer_multiple: row.answer_multiple,
                answer_count: row.answer_count,
            };
            editFirstTabData(id, data);
        },
        handleSecondTabEdit(id, row) {
            if (row.discount_distribute) {
                        if (!checkNonnegate(row.discount_distribute)) return
                        if(parseFloat(row.discount_distribute) > 10){
                            ElMessage.error("请输入小于10的数字！");
                            return
                        }
                    }
            const data = {
                balance: row.balance,
                distribute_money: row.distribute_money,
                answer_count: row.answer_count,
                discount_distribute: row.discount_distribute,
            };
            editSecondTabData(id, data);
        },
        handleThirdTabEdit(id, row) {
            console.log('handleThirdTabEdit row', row)
            const data = {
                balance: row.balance,
                one_to_five: row.one_to_five,
                six_to_ten: row.six_to_ten,
                eleven_to_twenty: row.eleven_to_twenty,
                double_multiple: row.double_multiple,
                answer_multiple: row.answer_multiple,
            };
            editThirdTabData(id, data);
            // if (checkNonnegative(data.balance)) {
            //     editThirdTabData(id, data);
            // } else {
            //     ElMessage.error("请正确输入！");
            //     getThirdTabData();
            // }

        },
        // FirstTab删除操作
        handleFirstTabDelete(id) {
            // 二次确认删除
            ElMessageBox.confirm("确定要删除吗？", "提示", {
                type: "warning",
            })
                .then(() => {
                    deleteFirstTabData(id);
                })
                .catch(() => { });
        },
        // SecondTab删除操作
        handleSecondTabDelete(id) {
            // 二次确认删除
            ElMessageBox.confirm("确定要删除吗？", "提示", {
                type: "warning",
            })
                .then(() => {
                    deleteSecondTabData(id);
                })
                .catch(() => { });
        },
        // ThirdTab删除操作
        handleThirdTabDelete(id) {
            // 二次确认删除
            ElMessageBox.confirm("确定要删除吗？", "提示", {
                type: "warning",
            })
                .then(() => {
                    deleteThirdTabData(id);
                })
                .catch(() => { });
        },
    }
}
</script>

<style scoped>
.edit-icon {
    cursor: pointer;
}

.editable-row {
    display: flex;
    align-items: center;
}

.editable-row-span {
    display: inline-block;
    margin-right: 6px;
}

.menu-item {
    height: 32px;
    line-height: 32px;
    padding-left: 12px;
}

.menu-item:hover {
    color: #fff;
    background: #409eff;
    cursor: pointer;
}

.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.message-title {
    cursor: pointer;
}

.handle-row {
    margin-top: 30px;
}
</style>