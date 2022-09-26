<template>
  <div class="">
    <div class="crumbs" style="position:relative">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>风控系统</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户详情</el-breadcrumb-item>
      </el-breadcrumb>
      
    </div>
    <div class="container">
      <el-button type="primary" @click="goback" style="float:right">
        返回</el-button>
      <el-form :model="userDetail" :inline="true">
        <el-form-item label="用户id">
          {{ userDetail.id }}
        </el-form-item>
        <el-form-item label="用户名">
          {{ userDetail.nickname }}
        </el-form-item>
        <el-form-item label="手机号码">
          {{ userDetail.tel }}
        </el-form-item>
        <el-form-item label="设备关联号">
          {{ userDetail.bind_account_count }}
        </el-form-item>
      </el-form>
      <el-form :model="userDetail" :inline="true">
        <el-form-item label="累积积分">
          {{ userDetail.reward }}
        </el-form-item>
        <el-form-item label="累积提现">
          {{ userDetail.withdraw_reward }}
        </el-form-item>
        <el-form-item label="已提现次数">
          {{ userDetail.withdraw_times }}
        </el-form-item>
        <el-form-item label="是否实名制">
          {{ userDetail.real_name_authenticated }}
        </el-form-item>
      </el-form>
      <el-form :model="userDetail" :inline="true">
        <el-form-item label="注册IP">
          {{ userDetail.ip }}
        </el-form-item>
        <el-form-item label="IP地址">
          {{ userDetail.ip_address }}
        </el-form-item>
        <el-form-item label="数盟ID">
          {{ userDetail.oaid }}
        </el-form-item>
      </el-form>
      <el-form :model="userDetail">
        <el-form-item label="封禁状态">
          <el-radio-group @change="blackedDays" v-model="userDetail.blacked_days">
            <el-radio :label="0">正常</el-radio>
            <el-radio :label="3">封禁3天</el-radio>
            <el-radio :label="7">封禁7天</el-radio>
            <el-radio :label="-1">永久封禁</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="允许提现">
          <el-radio-group @change="withDrawable" v-model="userDetail.withdrawable">
            <el-radio :label="true">允许</el-radio>
            <el-radio :label="false">禁止</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>

      <!-- <el-button type="primary" style='position: absolute;right:10px;top:1px;'>添加规则</el-button> -->
      <div>
        <el-tabs
          v-model="message"
          type="border-card"
          @tab-click="handleTabClick"
        >
          <el-tab-pane label="提现记录" name="first">
            <el-table :data="tableDataAAAA" style="width: 100%">
              <el-table-column
                :prop="item.prop"
                :label="item.label"
                v-for="(item, index) in tableHeaderFirstTab"
                :key="item.prop"
              >
                <template #default="scope">
                  <div
                    v-show="item.editable || scope.row.editable"
                    class="editable-row"
                  >
                    <template v-if="item.type === 'input'">
                      <el-input
                        size="small"
                        v-model="scope.row[item.prop]"
                        :placeholder="`请输入${item.label}`"
                        @change="handleEdit(scope.$index, scope.row)"
                      />
                    </template>
                    <template v-if="item.type === 'date'">
                      <el-date-picker
                        v-model="scope.row[item.prop]"
                        type="date"
                        value-format="YYYY-MM-DD"
                        :placeholder="`请输入${item.label}`"
                        @change="handleEdit(scope.$index, scope.row)"
                      />
                    </template>
                  </div>
                  <div
                    v-show="!item.editable && !scope.row.editable"
                    class="editable-row"
                  >
                    <span class="editable-row-span">{{
                      scope.row[item.prop]
                    }}</span>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="登录记录" name="second">
            <el-table :data="tableDataBBBB" style="width: 100%">
              <el-table-column
                :prop="item.prop"
                :label="item.label"
                v-for="(item, index) in tableHeaderSecondTab"
                :key="item.prop"
              >
                <template #default="scope">
                  <div
                    v-show="item.editable || scope.row.editable"
                    class="editable-row"
                  >
                    <template v-if="item.type === 'input'">
                      <el-input
                        size="small"
                        v-model="scope.row[item.prop]"
                        :placeholder="`请输入${item.label}`"
                        @change="handleEdit(scope.$index, scope.row)"
                      />
                    </template>
                    <template v-if="item.type === 'date'">
                      <el-date-picker
                        v-model="scope.row[item.prop]"
                        type="date"
                        value-format="YYYY-MM-DD"
                        :placeholder="`请输入${item.label}`"
                        @change="handleEdit(scope.$index, scope.row)"
                      />
                    </template>
                  </div>
                  <div
                    v-show="!item.editable && !scope.row.editable"
                    class="editable-row"
                  >
                    <span class="editable-row-span">{{
                      scope.row[item.prop]
                    }}</span>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
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
import { useRoute } from "vue-router";
import userjson from "../config/user.json";
import moment from "moment";
import {
  fetchUserLoginData,
  fetchUserWithdrawData,
  fetchUserDetailData,
  updateUserDetail,
} from "../api/user";
const whichTab = ref(0);
const message = ref("first");
const tableDataAAAA = ref([]);
const tableDataBBBB = ref([]);
const userDetail = reactive({});
const tableHeaderFirstTab = userjson.RiskHeaderFirstTab;
const tableHeaderSecondTab = userjson.RiskHeaderSecondTab;
const wechat_user_id = ref("");
const query = reactive({
  page_index: 1,
  page_size: 10,
});
const pageTotal=ref(0)
const id=ref("")
//获取提现记录
const getUserWithdrawData = (id) => {
  const data={
    ...id,
    page_index:query.page_index,
    page_size:query.page_size
  }
  console.log(data);
  fetchUserWithdrawData(data)
    .then((res) => {
      console.log("getUserWithdrawData", res);
      pageTotal.value=res.data.total_count
      tableDataAAAA.value = res.data.lists.map((item) => {
          return {
            ...item,
            updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss"),
            status:
              item.status == 1 ? "待审核" : item.status == 2 ? "提现中" : item.status == 3 ? "已提现" : item.status == 4 ? "拒绝提现" :item.status == 5 ? "提现失败" :  "未知状态"
          };
        });
      console.log("tableDataAAAA.value", tableDataAAAA.value);
    })
    .catch(() => {
      // ElMessage.error("服务器异常！");
    });
};
//获取用户详情记录
const getUserDetailData = (data) => {
  fetchUserDetailData(data)
    .then((res) => {
      console.log("getUserDetailData", res.data);
      userDetail.value = res.data;
      console.log("userDetail", userDetail.value);
      console.log("userDetail.blacked_days", userDetail.value.blacked_days);
      console.log("userDetail.withdrawable", userDetail.value.withdrawable);
      userDetail.id = userDetail.value.id;
      userDetail.oaid = userDetail.value.oaid;
      userDetail.blacked_days = userDetail.value.blacked_days;
      userDetail.withdrawable = userDetail.value.withdrawable;
      userDetail.nickname = userDetail.value.nickname;
      userDetail.tel = userDetail.value.tel;
      userDetail.bind_account_count = userDetail.value.bind_account_count;
      userDetail.real_name_authenticated = userDetail.value
        .real_name_authenticated
        ? "是"
        : "否";
      userDetail.withdraw_reward = userDetail.value.withdraw_reward;
      userDetail.withdraw_times = userDetail.value.withdraw_times;
      userDetail.reward = userDetail.value.reward;
      userDetail.ip = userDetail.value.ip;
      userDetail.ip_address = userDetail.value.ip_address;
    })
    .catch(() => {
      // ElMessage.error("服务器异常！");
    });
};
//获取登录记录
const getUserLoginData = () => {
  const data={
    uid:id.value,
    page_index:query.page_index,
    page_size:query.page_size
  }
  console.log(data);
  fetchUserLoginData(data)
    .then((res) => {
      console.log("getUserLoginData", res.data);
      pageTotal.value=res.data.total_count
      tableDataBBBB.value = res.data.lists.map((item) => {
          return {
            ...item,
            updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss")
          };
        });
      console.log("tableDataAAAA.value", tableDataBBBB.value);
    })
    .catch(() => {
      // ElMessage.error("服务器异常！");
    });
};
//修改用户数据
const updateUserDetailData = (id,data) => {
  updateUserDetail(id,data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("修改成功！");
    }
  });
};
// 获取表格数据
const getData = (id) => {
  const data = {
    wechat_user_id: id,
    page_index:query.page_index,
    page_size:query.page_size
  };
  const logindata = {
    uid: id,
    page_index:query.page_index,
    page_size:query.page_size
  };
  if (whichTab.value == 0) {
    getUserWithdrawData(data);
  } else if (whichTab.value == 1) {
    getUserLoginData(logindata);
  }
};

export default {
  name: "DynamicModifyTable",
  setup() {
    const route = useRoute();
    wechat_user_id.value = route.params.wechat_user_id;
    id.value=route.params.wechat_user_id
    console.log("wechat_user_id", wechat_user_id.value);
    getData(wechat_user_id.value);
    getUserDetailData(wechat_user_id.value);
    const handlePageChange=(val)=>{
      query.page_index = val;
      console.log(wechat_user_id.value);
      getUserDetailData(wechat_user_id.value)
      getUserLoginData()
    }
    return {
      message,
      whichTab,
      wechat_user_id,
      userDetail,
      tableDataAAAA,
      tableDataBBBB,
      tableHeaderFirstTab,
      tableHeaderSecondTab,
      query,
      pageTotal,
      id,
      handlePageChange
    };
  },
  data() {
    return {};
  },
  methods: {
    handleTabClick(tab) {
      // formRef.value.resetFields();
      whichTab.value = tab.index;
      console.log("whichTab", whichTab.value);
      getData(wechat_user_id.value);
    },
    blackedDays(){
      const data ={
        blacked_days: userDetail.blacked_days
      }
      updateUserDetailData(wechat_user_id.value,data)
    },
    withDrawable(){
      const data ={
        withdrawable: userDetail.withdrawable
      }
      updateUserDetailData(wechat_user_id.value,data)
    },
    goback(){
         this.$router.go(-1)
        }
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
