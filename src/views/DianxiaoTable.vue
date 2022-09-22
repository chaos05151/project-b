<template>
    <div class="">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>积分系统</el-breadcrumb-item>
                <el-breadcrumb-item>点消项目</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-button type="primary" size="small" @click="addRule" style='position: absolute;right:30px;top:38px;'>导入Excel数据</el-button>
            <div>
                <el-tabs v-model="message" type="border-card" @tab-click="handleTabClick">
                    <el-tab-pane label="结算红包发放" name="first">
                        <el-table :data="tableDataAAAA" style="width: 100%">
                            <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHeaderFirstTab"
                                :key="item.prop">
                                <template #default="scope">
                                    <div v-show="item.editable || scope.row.editable" class="editable-row">
                                        <template v-if="item.type === 'input'">
                                            <el-input size="small" v-model="scope.row[item.prop]"
                                                :placeholder="`请输入${item.label}`"
                                                @change="handleEdit(scope.$index, scope.row)" />
                                        </template>
                                        <template v-if="item.type === 'date'">
                                            <el-date-picker v-model="scope.row[item.prop]" type="date"
                                                value-format="YYYY-MM-DD" :placeholder="`请输入${item.label}`"
                                                @change="handleEdit(scope.$index, scope.row)" />
                                        </template>
                                    </div>
                                    <div v-show="!item.editable && !scope.row.editable" class="editable-row">
                                        <span class="editable-row-span">{{ scope.row[item.prop] }}</span>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="红包发放保底" name="second">
                        <el-table :data="tableDataBBBB" style="width: 100%">
                            <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHeaderSecondTab"
                                :key="item.prop">
                                <template #default="scope">
                                    <div v-show="item.editable || scope.row.editable" class="editable-row">
                                        <template v-if="item.type === 'input'">
                                            <el-input size="small" v-model="scope.row[item.prop]"
                                                :placeholder="`请输入${item.label}`"
                                                @change="handleEdit(scope.$index, scope.row)" />
                                        </template>
                                        <template v-if="item.type === 'date'">
                                            <el-date-picker v-model="scope.row[item.prop]" type="date"
                                                value-format="YYYY-MM-DD" :placeholder="`请输入${item.label}`"
                                                @change="handleEdit(scope.$index, scope.row)" />
                                        </template>
                                    </div>
                                    <div v-show="!item.editable && !scope.row.editable" class="editable-row">
                                        <span class="editable-row-span">{{ scope.row[item.prop] }}</span>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="关卡内红包" name="third">
                        <el-table :data="tableDataCCCC" style="width: 100%">
                            <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHeaderThirdTab"
                                :key="item.prop">
                                <template #default="scope">
                                    <div v-show="item.editable || scope.row.editable" class="editable-row">
                                        <template v-if="item.type === 'input'">
                                            <el-input size="small" v-model="scope.row[item.prop]"
                                                :placeholder="`请输入${item.label}`"
                                                @change="handleEdit(scope.$index, scope.row)" />
                                        </template>
                                        <template v-if="item.type === 'date'">
                                            <el-date-picker v-model="scope.row[item.prop]" type="date"
                                                value-format="YYYY-MM-DD" :placeholder="`请输入${item.label}`"
                                                @change="handleEdit(scope.$index, scope.row)" />
                                        </template>
                                    </div>
                                    <div v-show="!item.editable && !scope.row.editable" class="editable-row">
                                        <span class="editable-row-span">{{ scope.row[item.prop] }}</span>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="抽奖触发配置表" name="four">
                        <el-table :data="tableDataDDDD" style="width: 100%">
                            <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHeaderFourTab"
                                :key="item.prop">
                                <template #default="scope">
                                    <div v-show="item.editable || scope.row.editable" class="editable-row">
                                        <template v-if="item.type === 'input'">
                                            <el-input size="small" v-model="scope.row[item.prop]"
                                                :placeholder="`请输入${item.label}`"
                                                @change="handleEdit(scope.$index, scope.row)" />
                                        </template>
                                        <template v-if="item.type === 'date'">
                                            <el-date-picker v-model="scope.row[item.prop]" type="date"
                                                value-format="YYYY-MM-DD" :placeholder="`请输入${item.label}`"
                                                @change="handleEdit(scope.$index, scope.row)" />
                                        </template>
                                    </div>
                                    <div v-show="!item.editable && !scope.row.editable" class="editable-row">
                                        <span class="editable-row-span">{{ scope.row[item.prop] }}</span>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="抽奖奖励" name="five">
                        <el-table :data="tableDataEEEE" style="width: 100%">
                            <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHeaderFiveTab"
                                :key="item.prop">
                                <template #default="scope">
                                    <div v-show="item.editable || scope.row.editable" class="editable-row">
                                        <template v-if="item.type === 'input'">
                                            <el-input size="small" v-model="scope.row[item.prop]"
                                                :placeholder="`请输入${item.label}`"
                                                @change="handleEdit(scope.$index, scope.row)" />
                                        </template>
                                        <template v-if="item.type === 'date'">
                                            <el-date-picker v-model="scope.row[item.prop]" type="date"
                                                value-format="YYYY-MM-DD" :placeholder="`请输入${item.label}`"
                                                @change="handleEdit(scope.$index, scope.row)" />
                                        </template>
                                    </div>
                                    <div v-show="!item.editable && !scope.row.editable" class="editable-row">
                                        <span class="editable-row-span">{{ scope.row[item.prop] }}</span>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="抽奖奖励" name="six">
                        <el-table :data="tableDataFFFF" style="width: 100%">
                            <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHeaderSixTab"
                                :key="item.prop">
                                <template #default="scope">
                                    <div v-show="item.editable || scope.row.editable" class="editable-row">
                                        <template v-if="item.type === 'input'">
                                            <el-input size="small" v-model="scope.row[item.prop]"
                                                :placeholder="`请输入${item.label}`"
                                                @change="handleEdit(scope.$index, scope.row)" />
                                        </template>
                                        <template v-if="item.type === 'date'">
                                            <el-date-picker v-model="scope.row[item.prop]" type="date"
                                                value-format="YYYY-MM-DD" :placeholder="`请输入${item.label}`"
                                                @change="handleEdit(scope.$index, scope.row)" />
                                        </template>
                                    </div>
                                    <div v-show="!item.editable && !scope.row.editable" class="editable-row">
                                        <span class="editable-row-span">{{ scope.row[item.prop] }}</span>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="抽奖奖励" name="seven">
                        <el-table :data="tableDataGGGG" style="width: 100%">
                            <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHeaderSevenTab"
                                :key="item.prop">
                                <template #default="scope">
                                    <div v-show="item.editable || scope.row.editable" class="editable-row">
                                        <template v-if="item.type === 'input'">
                                            <el-input size="small" v-model="scope.row[item.prop]"
                                                :placeholder="`请输入${item.label}`"
                                                @change="handleEdit(scope.$index, scope.row)" />
                                        </template>
                                        <template v-if="item.type === 'date'">
                                            <el-date-picker v-model="scope.row[item.prop]" type="date"
                                                value-format="YYYY-MM-DD" :placeholder="`请输入${item.label}`"
                                                @change="handleEdit(scope.$index, scope.row)" />
                                        </template>
                                    </div>
                                    <div v-show="!item.editable && !scope.row.editable" class="editable-row">
                                        <span class="editable-row-span">{{ scope.row[item.prop] }}</span>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="抽奖奖励" name="eight">
                        <el-table :data="tableDataHHHH" style="width: 100%">
                            <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHeaderEightTab"
                                :key="item.prop">
                                <template #default="scope">
                                    <div v-show="item.editable || scope.row.editable" class="editable-row">
                                        <template v-if="item.type === 'input'">
                                            <el-input size="small" v-model="scope.row[item.prop]"
                                                :placeholder="`请输入${item.label}`"
                                                @change="handleEdit(scope.$index, scope.row)" />
                                        </template>
                                        <template v-if="item.type === 'date'">
                                            <el-date-picker v-model="scope.row[item.prop]" type="date"
                                                value-format="YYYY-MM-DD" :placeholder="`请输入${item.label}`"
                                                @change="handleEdit(scope.$index, scope.row)" />
                                        </template>
                                    </div>
                                    <div v-show="!item.editable && !scope.row.editable" class="editable-row">
                                        <span class="editable-row-span">{{ scope.row[item.prop] }}</span>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="抽奖奖励" name="nine">
                        <el-table :data="tableDataIIII" style="width: 100%">
                            <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHeaderNineTab"
                                :key="item.prop">
                                <template #default="scope">
                                    <div v-show="item.editable || scope.row.editable" class="editable-row">
                                        <template v-if="item.type === 'input'">
                                            <el-input size="small" v-model="scope.row[item.prop]"
                                                :placeholder="`请输入${item.label}`"
                                                @change="handleEdit(scope.$index, scope.row)" />
                                        </template>
                                        <template v-if="item.type === 'date'">
                                            <el-date-picker v-model="scope.row[item.prop]" type="date"
                                                value-format="YYYY-MM-DD" :placeholder="`请输入${item.label}`"
                                                @change="handleEdit(scope.$index, scope.row)" />
                                        </template>
                                    </div>
                                    <div v-show="!item.editable && !scope.row.editable" class="editable-row">
                                        <span class="editable-row-span">{{ scope.row[item.prop] }}</span>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                </el-tabs>
            </div>

        </div>
    </div>
</template>

<script>
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import dianxiaojson from "../config/dianxiao.json"
import {
    fetchFindByModelName
} from "../api/dianxiao";

const value = ref('')
const message = ref("first");
const tableDataAAAA = ref([])
const tableDataBBBB = ref([])
const tableDataCCCC = ref([])
const tableDataDDDD = ref([])
const tableDataEEEE = ref([])
const tableDataFFFF = ref([])
const tableDataGGGG = ref([])
const tableDataHHHH = ref([])
const tableDataIIII = ref([])
const whichTab = ref(0);
const options = dianxiaojson.options
const tableHeaderFirstTab = dianxiaojson.DianxiaoHeaderFirstTab;
const tableHeaderSecondTab = dianxiaojson.DianxiaoHeaderSecondTab;
const tableHeaderThirdTab = dianxiaojson.DianxiaoHeaderThirdTab;
const tableHeaderFourTab = dianxiaojson.DianxiaoHeaderFourTab;
const tableHeaderFiveTab = dianxiaojson.DianxiaoHeaderFiveTab;
const tableHeaderSixTab = dianxiaojson.DianxiaoHeaderSixTab;
const tableHeaderSevenTab = dianxiaojson.DianxiaoHeaderSevenTab;
const tableHeaderEightTab = dianxiaojson.DianxiaoHeaderEightTab;
const tableHeaderNineTab = dianxiaojson.DianxiaoHeaderNineTab;
// 获取表格数据
// 获取用户列表数据
const getData = (model_name) => {
    const data={
        model_name
    }
    fetchFindByModelName(data).then((res) => {
        console.log("fetchFindByModelName", res.data);
        if(whichTab.value == 0) tableDataAAAA.value = res.data;
        if(whichTab.value == 1) tableDataBBBB.value = res.data;
        if(whichTab.value == 2) tableDataCCCC.value = res.data;
        if(whichTab.value == 3) tableDataDDDD.value = res.data;
        if(whichTab.value == 4) tableDataEEEE.value = res.data;
        console.log("tableDataAAAA", tableDataAAAA.value);
    }).catch(() => {
    });
};

export default {
    name: "DynamicModifyTable",
    setup() {
        getData('MoneyConfig')
        return {
            message,
            options,
            value,
            tableDataAAAA,
            tableDataBBBB,
            tableDataCCCC,
            tableDataDDDD,
            tableDataEEEE,
            tableDataFFFF,
            tableDataGGGG,
            tableDataHHHH,
            tableDataIIII,
            tableHeaderFirstTab,
            tableHeaderSecondTab,
            tableHeaderThirdTab,
            tableHeaderFourTab,
            tableHeaderFiveTab,
            tableHeaderSixTab,
            tableHeaderSevenTab,
            tableHeaderEightTab,
            tableHeaderNineTab,
        }
    },
    data() {
        return {
        }
    },
    methods: {
        addRule() {
            this.$router.push('/excel')
        },
        handleTabClick(tab) {
            whichTab.value = tab.index
            console.log('whichTab', whichTab.value);
            if(whichTab.value == 0) getData('MoneyConfig')
            if(whichTab.value == 1) getData('AdRedBag')
        },
        handleEdit(row) {
            row.editable = true;
        },
        // AAAA删除操作
        handleADelete(index) {
            // 二次确认删除
            ElMessageBox.confirm("确定要删除吗？", "提示", {
                type: "warning",
            })
                .then(() => {

                    ElMessage.success("删除成功");
                    this.tableDataAAAA.splice(index, 1);
                })
                .catch(() => { });
        },
        // AAAA删除操作
        handleBDelete(index) {
            // 二次确认删除
            ElMessageBox.confirm("确定要删除吗？", "提示", {
                type: "warning",
            })
                .then(() => {

                    ElMessage.success("删除成功");
                    this.tableDataBBBB.splice(index, 1);
                })
                .catch(() => { });
        },
        // AAAA删除操作
        handleCDelete(index) {
            // 二次确认删除
            ElMessageBox.confirm("确定要删除吗？", "提示", {
                type: "warning",
            })
                .then(() => {

                    ElMessage.success("删除成功");
                    this.tableDataCCCC.splice(index, 1);
                })
                .catch(() => { });
        },
        prepend(index) {
            item.editable = true
            this.tableData.splice(index, 0, item);
        },
        append(index) {
            item.editable = true
            this.tableData.splice(index + 1, 0, item);
        },
        deleteCurrentColumn(index) {
            this.tableHeader.splice(index, 1);
        },
        insertBefore(index) {
            header.editable = true;
            this.tableHeader.splice(index, 0, header);
        },
        insertAfter(index) {
            header.editable = true;
            this.tableHeader.splice(index + 1, 0, header);
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