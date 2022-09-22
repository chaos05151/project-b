<template>
  <div class="">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>积分系统</el-breadcrumb-item>
        <el-breadcrumb-item>成语项目</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="handle-box">
        强制规则:账单红包金额大于&nbsp;
        <el-input v-model="value" @blur="forceRule" style="width: 50px" class="w-50 m-2" size="small" />&nbsp;
        时，强制修改下发红包的额度，数值为0.01
        <div style="margin-top:10px;" v-show="whichTab == 0 && force_rule_value > 0">
          已设置强制规则，设置的值为：{{ force_rule_value }}
        </div>
        <div style="margin-top:10px;" v-show="whichTab == 1 && force_rule_value > 0">
          已设置强制规则，设置的值为：{{ force_rule_value }}
        </div>
        <div style="margin-top:10px;" v-show="whichTab == 2 && force_rule_value > 0">
          已设置强制规则，设置的值为：{{ force_rule_value }}
        </div>
      </div>
      <div style="position: relative">
        <el-tabs v-model="message" type="border-card" @tab-click="handleTabClick">
          <el-tab-pane label="闯关红包" name="first">
            <el-table :data="tableDataAAAA" style="width: 100%">
              <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHeaderFirstTab"
                :key="index">
                <template #default="scope">
                  <div v-show="item.editable || scope.row.editable" class="editable-row">
                    <template v-if="item.type === 'input'">
                      <el-input size="small" v-model="scope.row[item.prop]" :placeholder="`请输入${item.label}`" />
                    </template>
                    <template v-if="item.type === 'date'">
                      <el-date-picker v-model="scope.row[item.prop]" type="date" value-format="YYYY-MM-DD"
                        :placeholder="`请输入${item.label}`" />
                    </template>
                  </div>
                  <div v-show="!item.editable && !scope.row.editable" class="editable-row">
                    <span class="editable-row-span">{{
                        scope.row[item.prop]
                    }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template #default="scope">
                  <el-button size="small" @click="editRule(scope.row)">
                    编辑
                  </el-button>
                  <el-button size="small" type="danger" @click="handleFirstTabDelete(scope.row.id)">删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="激励红包" name="second">
            <el-table :data="tableDataBBBB" style="width: 100%">
              <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHeaderSecondTab"
                :key="index">
                <template #default="scope">
                  <div v-show="item.editable || scope.row.editable" class="editable-row">
                    <template v-if="item.type === 'input'">
                      <el-input size="small" v-model="scope.row[item.prop]" :placeholder="`请输入${item.label}`" />
                    </template>
                    <template v-if="item.type === 'date'">
                      <el-date-picker v-model="scope.row[item.prop]" type="date" value-format="YYYY-MM-DD"
                        :placeholder="`请输入${item.label}`" />
                    </template>
                  </div>
                  <div v-show="!item.editable && !scope.row.editable" class="editable-row">
                    <span class="editable-row-span">{{
                        scope.row[item.prop]
                    }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template #default="scope">
                  <el-button size="small" @click="editRule(scope.row)">
                    编辑
                  </el-button>
                  <el-button size="small" type="danger" @click="handleSecondTabDelete(scope.row.id)">
                    删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="免费领钱" name="third">
            <el-table :data="tableDataCCCC" style="width: 100%">
              <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHeaderThirdTab"
                :key="index">
                <template #default="scope">
                  <div v-show="item.editable || scope.row.editable" class="editable-row">
                    <template v-if="item.type === 'input'">
                      <el-input size="small" v-model="scope.row[item.prop]" :placeholder="`请输入${item.label}`" />
                    </template>
                    <template v-if="item.type === 'date'">
                      <el-date-picker v-model="scope.row[item.prop]" type="date" value-format="YYYY-MM-DD"
                        :placeholder="`请输入${item.label}`" />
                    </template>
                  </div>
                  <div v-show="!item.editable && !scope.row.editable" class="editable-row">
                    <span class="editable-row-span">{{
                        scope.row[item.prop]
                    }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template #default="scope">
                  <el-button size="small" @click="editRule(scope.row)">
                    编辑
                  </el-button>
                  <el-button size="small" type="danger" @click="handleThirdTabDelete(scope.row.id)">删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
        <el-button type="primary" size="small" @click="addRule" style="position: absolute; right: 10px; top: 5px">
          新增规则</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import {
  fetchIdiomFirstTableData,
  fetchIdiomSecondTableData,
  fetchIdiomThirdTableData,
  editIdiomFirstTableData,
  editIdiomSecondTableData,
  editIdiomThirdTableData,
  deleteIdiomFirstTableData,
  deleteIdiomSecondTableData,
  deleteIdiomThirdTableData,
  forceRuleIdiom,
  getForceRuleIdiom,
} from "../api/idiom";
import idiomjson from "../config/idiom.json";
const force_rule_value = ref(0)
const message = ref("first");
const value = ref("");
const options = ref([]);
const tableHeaderFirstTab = idiomjson.IdiomHeaderFirstTab.filter((column) => column.show);
const tableHeaderSecondTab = idiomjson.IdiomHeaderSecondTab.filter((column) => column.show);
const tableHeaderThirdTab = idiomjson.IdiomHeaderThirdTab.filter((column) => column.show);
// 获取表格数据
const tableDataAAAA = ref([]);
const tableDataBBBB = ref([]);
const tableDataCCCC = ref([]);
let whichTab = ref(0);
let query = reactive({
  product: "idiom",
  tabs: whichTab.value,
  pageIndex: 1,
  pageSize: 10,
});
// 获取强制规则数据
const getForceRuleData = () => {
  const data = {
    current_view: parseInt(whichTab.value) + 1
  }
  getForceRuleIdiom(data).then((res) => {
    if (res.status == 200) {
      force_rule_value.value = res.data;
    } else {
      force_rule_value.value = 0
    }
  });
};
const getData = () => {
  value.value = ''
  console.log("getData whichTab.value", whichTab.value);
  if (whichTab.value == 0) {
    getFirstTabData();
  } else if (whichTab.value == 1) {
    getSecondTabData();
  } else {
    getThirdTabData();
  }
  getForceRuleData();
};
// 获取闯关红包表格数据
const getFirstTabData = () => {
  fetchIdiomFirstTableData().then((res) => {
    console.log("getIdiomFirstTabdata", res.data);
    tableDataAAAA.value = res.data;
  });
};
// 获取激励红包表格数据
const getSecondTabData = () => {
  fetchIdiomSecondTableData().then((res) => {
    console.log("getIdiomSecondTabdata", res.data);
    tableDataBBBB.value = res.data;
  });
};
// 获取免费领钱表格数据
const getThirdTabData = () => {
  fetchIdiomThirdTableData().then((res) => {
    console.log("getIdiomThirdTabdata", res.data);
    tableDataCCCC.value = res.data;
  });
};
// 修改闯关红包表格数据
const editFirstTabData = (id, data) => {
  editIdiomFirstTableData(id, data).then((res) => {
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
  editIdiomSecondTableData(id, data).then((res) => {
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
  editIdiomThirdTableData(id, data).then((res) => {
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
const deleteFirstTabData = (id, data) => {
  deleteIdiomFirstTableData(id, data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("删除成功");
      getFirstTabData();
    }
  });
};
// 删除激励红包表格数据
const deleteSecondTabData = (id, data) => {
  deleteIdiomSecondTableData(id, data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("删除成功");
      getSecondTabData();
    }
  });
};
// 删除免费领钱表格数据
const deleteThirdTabData = (id) => {
  deleteIdiomThirdTableData(id).then((res) => {
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
  if (parseInt(valueFirst) > parseInt(valueSecond)) {
    ElMessage.error("后区间值必须大于前区间值！");
    return false
  } else {
    return true
  }
};
export default {
  name: "DynamicModifyTable",
  setup() {
    //默认加载第一个tab
    getData();
    return {
      message,
      query,
      options,
      value,
      whichTab,
      force_rule_value,
      tableDataAAAA,
      tableDataBBBB,
      tableDataCCCC,
      tableHeaderFirstTab,
      tableHeaderSecondTab,
      tableHeaderThirdTab,
    };
  },
  data() {
    return {};
  },
  methods: {
    //添加强制规则
    forceRule() {
      if (value.value) {
        if (!checkNonnegate(value.value)) return
        if (parseFloat(value.value) <= 0) {
          ElMessage.error("设置值必须大于0！");
          return
        }
        // 二次确认删除
        ElMessageBox.confirm("确定要添加强制规则吗？", "提示", {
          type: "warning",
        })
          .then(() => {
            const data = {
              current_view: parseInt(whichTab.value) + 1,
              reward: value.value,
            };
            console.log('parseFloat(value.value)', parseFloat(value.value))
            console.log('parseFloat(value.value)<=0', parseFloat(value.value) <= 0)
            forceRuleIdiom(data).then((res) => {
              if (res.status == 200) {
                ElMessage.success("添加强制规则成功！");
                getData()
              }
            });
          })
          .catch(() => { });
      }
    },
    addRule() {
      this.$router.push({
        name: "idiomrule",
        params: { whichTab: whichTab.value },
      });
    },
    editRule(row) {
      const rowdata = {
        id: row.id,
        balancefrom: row.balance.split(',')[0],
        balanceto: row.balance.split(',')[1],
        distribute_moneyfrom: row.distribute_money.split(',')[0],
        distribute_moneyto: row.distribute_money.split(',')[1],
        distribute_moneyconstant: row.distribute_moneyconstant,
        double_multiple: row.double_multiple,
      };
      this.$router.push({
        name: "idiomedit",
        params: {
          whichTab: whichTab.value,
          data: JSON.stringify(rowdata),
        },
      });
    },
    handleTabClick(tab) {
      whichTab.value = tab.index;
      console.log("whichTab.value", whichTab.value);
      getData();
    },
    handleFirstTabEdit(id, row) {
      const balancefrom = row.balance.split(',')[0]
      console.log('row.balance', balancefrom)
      const data = {
        balance: row.balance,
        distribute_money: row.distribute_money,
        double_multiple: row.double_multiple,
      };
      editFirstTabData(id, data);
    },
    handleSecondTabEdit(id, row) {
      const data = {
        balance: row.balance,
        distribute_money: row.distribute_money,
      };
      editSecondTabData(id, data);
    },
    handleThirdTabEdit(id, row) {
      const data = {
        balance: row.balance,
        distribute_money: row.distribute_money,
      };
      editThirdTabData(id, data);
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
  },
};
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
