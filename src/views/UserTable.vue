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
        <el-select style="width:12%" v-model="main_product_name_selected" placeholder="项目" class="m-2"
          @change="getProductAndDataList">
          <el-option label="全部" value="-1"></el-option>
          <el-option v-for="item in options" :key="item.id" :label="item.main_product_name" :value="item.id" />
        </el-select>
        <el-select style="width:12%" v-model="product_name_selected" placeholder="应用" class="m-2"
          @change="getDataById">
          <el-option label="全部" value="-1"></el-option>
          <el-option v-for="item in suboptions" :key="item.product_id" :label="item.product_name"
            :value="item.product_id" />
        </el-select>
        <el-select style="width:20% ;margin: 0 5px;" v-model="withdraw_user_selected" placeholder="提现用户" class="m-2"
          @change="getWithdrawUser">
          <el-option v-for="item in useroptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-input v-model="idnicknamephonemobile" @input="searchByIdNickNameIpMobile" style="width: 200px ;padding: 0 5px;"
          class="w-50 m-2" placeholder="请输入id/用户名/手机号/ip" />
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
        <!-- <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button> -->
        <!-- <el-button type="primary" @click="withDraw()">提现设置</el-button> -->
        <!-- <el-button type="primary" @click="blackList()">查看黑名单</el-button> -->
        <!-- <el-button type="primary" @click="userFeedback()">用户反馈</el-button> -->
        <el-button type="primary" @click="exportExcel()">导出Excel</el-button>
      </div>
      <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
        <el-table-column prop="main_product_name" label="项目"></el-table-column>
        <el-table-column prop="product_name" label="应用"></el-table-column>
        <el-table-column prop="id" label="用户id"></el-table-column>
        <el-table-column prop="oaid" label="数盟id"></el-table-column>
        <el-table-column prop="is_buy" label="是否买量用户"></el-table-column>
        <el-table-column prop="nickname" label="用户名"></el-table-column>
        <el-table-column prop="tel" label="手机号"></el-table-column>
        <el-table-column sortable prop="reward" label="累积佣金"></el-table-column>
        <el-table-column sortable prop="withdraw_reward" label="已提现佣金"></el-table-column>
        <el-table-column sortable prop="withdraw_times" label="已提现次数"></el-table-column>
        <el-table-column prop="ip" label="注册ip"></el-table-column>
        <el-table-column prop="ip_address" label="ip地址"></el-table-column>
        <el-table-column prop="created_at" label="注册时间"></el-table-column>
        <!-- <el-table-column
          prop="bind_account_count"
          label="关联账号数"
        ></el-table-column>
        <el-table-column prop="illegal_time" label="拉黑时间"></el-table-column> -->
        <el-table-column label="操作" width="220" align="center">
          <template #default="scope">
            <el-button type="text" icon="el-icon-link" @click="userDetail(scope.row.id)">详情
            </el-button>
            <el-button type="text" v-show="scope.row.blacklisted != 1" icon="el-icon-delete" class="red"
              @click="addBlackList(scope.row.id)">
              加入黑名单
            </el-button>
            <el-button type="text" v-show="scope.row.blacklisted == 1" icon="el-icon-edit"
              @click="removeBlackList(scope.row.id)">
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

<script setup>
import { ref, reactive } from "vue";
import { Search } from "@element-plus/icons";
import { ElMessage, ElMessageBox } from "element-plus";
import { usermodular } from '../store/user'
import { fetchMainProductList, fetchProductList } from "../api/product";
import { fetchUserListData, addBlacklist, removeBlacklist } from "../api/user";
import { exportExcelData } from "../utils/export2excel"
import moment from "moment";
import { useRouter  } from 'vue-router'


// import table from "../mock/table.json";
const userouter=useRouter()
const main_product_name_selected = ref("");
const product_name_selected = ref("");
const withdraw_user_selected = ref("")
// check_main_product_name: 0:编缉和删除的是一级产品;1:编辑和删除的是二级产品
const check_main_product_name = ref(0);
const tableData = ref([]);
const tableExportData = ref([]);
const pageTotal = ref(0);
const user=usermodular()
const dateRange=ref();
const idnicknamephonemobile = ref("");
const main_product_value_select = ref("");
const product_type = ref("项目");
const dataExport = ref({})
const query = reactive({
  keywords: '',
  page_index: 1,
  page_size: 10,
});
let options = ref([]);
let suboptions = ref([]);
let useroptions = ref([
  {
    "value": "-1",
    "label": "全部"
  },
  {
    "value": "1",
    "label": "已提现用户"
  },
  {
    "value": "0",
    "label": "未提现用户"
  }]
);

// 获取用户列表数据
const getUserListData = (data) => {
  fetchUserListData(data)
    .then((res) => {
      if (res.status == 200) {
        
        tableData.value = res.data.lists.map((item) => {
          return {
            ...item,
            is_buy: item.is_buy == 1 ? '是' : '否',
            created_at: moment(item.created_at).format("YYYY-MM-DD HH:mm:ss"),
          };
        });
        // console.log(tableData.value)
        pageTotal.value = res.data.total_count
        dataExport.value = JSON.parse(JSON.stringify(data))
        console.log(dataExport.value)
    .catch(() => { });

      } else {
          ElMessage.error(res?.message);
      }

    })
    .catch(() => { });
};



// clear
const clearOptions = () => {
  main_product_name_selected.value = ''
  product_name_selected.value = ''
  withdraw_user_selected.value = ''
  idnicknamephonemobile.value = ''
  query.keywords = ''
}
//获取项目产品信息
const getProductDataList = () => {
  fetchMainProductList()
    .then((res) => {
      options.value = res.data;
    })
    .catch(() => {
      //   ElMessage.error("服务器异常！");
    });
};
//根据项目获取应用产品信息
const getSubProductDataList = (query) => {
  const data = {
    main_product_id: query,
  };
  fetchProductList(data)
    .then((res) => {
      suboptions.value = res.data;
    })
    .catch(() => {
      //   ElMessage.error("服务器异常！");
    });
};
//加入黑名单禁止登录
const addBlackListData = (id) => {
  addBlacklist(id)
    .then((res) => {
      if (res.status == 200) {
        ElMessage.success("加入黑名单成功！");
        getUserListData(query);
      }
    })
    .catch(() => {
      //   ElMessage.error("服务器异常！");
    });
};
//移出黑名单禁止登录
const removeBlackListData = (id) => {
  removeBlacklist(id)
    .then((res) => {
      if (res.status == 200) {
        ElMessage.success("移出黑名单成功！");
        getUserListData(query);
      }
    })
    .catch(() => {
      //   ElMessage.error("服务器异常！");
    });
};
//数字校验
const checkNonnegative = (value) => {
  if (value) {
    let z_reg = /^\d+(\.{0,1}\d+){0,1}$/;
    if (!z_reg.test(value)) {
      return false;
    } else {
      return true;
    }
  }
};
//日期
const handleDate=()=>{
  console.log(dateRange.value);
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
    clearOptions()
    //获取项目
    getProductDataList();
    //获取用户列表
    getUserListData(query);

    // 加入黑名单禁止登录
    const addBlackList = (id) => {
      // 二次确认删除
      ElMessageBox.confirm("确定加入黑名单？", "提示", {
        type: "warning",
      })
        .then(() => {
          addBlackListData(id);
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
          removeBlackListData(id);
        })
        .catch(() => { });
    };
    const getProductAndDataList = () => {
      // product_name_selected.value = '';
      // suboptions.value = ''
      //项目选择全部
      if (main_product_name_selected.value == -1) {
        //应用选择全部
        if (product_name_selected.value == -1) {
          if (withdraw_user_selected.value && withdraw_user_selected.value >= 0) {
            const data = {
              withdraw_user: withdraw_user_selected.value,
              ...query
            };
            getUserListData(data);
          } else {
            getUserListData(query);
          }
        } else if (product_name_selected.value && product_name_selected.value > 0) {
          if (withdraw_user_selected.value && withdraw_user_selected.value >= 0) {
            const data = {
              product_id: product_name_selected.value,
              withdraw_user: withdraw_user_selected.value,
              ...query
            };
            getUserListData(data);
          } else {
            const data = {
              product_id: product_name_selected.value,
              ...query
            };
            getUserListData(data);
          }
        } else {
          if (withdraw_user_selected.value && withdraw_user_selected.value >= 0) {
            const data = {
              withdraw_user: withdraw_user_selected.value,
              ...query
            };
            getUserListData(data);
          } else {
            getUserListData(query);
          }
        }
      } else if (main_product_name_selected.value && main_product_name_selected.value > 0) {
        if (product_name_selected.value == -1) {
          //提现用户:0,未提现用户；1,已提现用户
          if (withdraw_user_selected.value && withdraw_user_selected.value >= 0) {
            const data = {
              main_product_id: main_product_name_selected.value,
              withdraw_user: withdraw_user_selected.value,
              ...query
            };
            getUserListData(data);
          } else {
            const data = {
              main_product_id: main_product_name_selected.value,
              ...query
            };
            getUserListData(data);
          }
        } else if (product_name_selected.value && product_name_selected.value > 0) {
          if (withdraw_user_selected.value && withdraw_user_selected.value >= 0) {
            const data = {
              product_id: product_name_selected.value,
              withdraw_user: withdraw_user_selected.value,
              ...query
            };
            getUserListData(data);
          } else {
            const data = {
              product_id: product_name_selected.value,
              ...query
            };
            getUserListData(data);
          }
        } else {
          if (withdraw_user_selected.value && withdraw_user_selected.value >= 0) {
            const data = {
              main_product_id: main_product_name_selected.value,
              withdraw_user: withdraw_user_selected.value,
              ...query
            };
            getUserListData(data);
          } else {
            const data = {
              main_product_id: main_product_name_selected.value,
              ...query
            };
            getUserListData(data);
          }
        }
        //获取应用列表
        getSubProductDataList(main_product_name_selected.value)
      } else {
        if (withdraw_user_selected.value && withdraw_user_selected.value >= 0) {
          const data = {
            withdraw_user: withdraw_user_selected.value,
            ...query
          };
          getUserListData(data);
        } else {
          getUserListData(query);
        }
      }
    };
    const getDataById = () => {
      getProductAndDataList()
    }

    const getWithdrawUser = () => {
      getProductAndDataList()
    };
    // 分页导航
    const handlePageChange = (val) => {
      query.page_index = val;
      getProductAndDataList()
    };
    // frontend filter
    // tableData.value = tableData.value
    //   .filter((item) => {
    //     if (checkNonnegative(idnicknamephonemobile.value))
    //       return (
    //         JSON.stringify(item.id).indexOf(idnicknamephonemobile.value) !=
    //         -1
    //       );
    //     else
    //       return (
    //         JSON.stringify(item).indexOf(idnicknamephonemobile.value) != -1
    //       );
    //   })
    //   .map((item) => {
    //     return {
    //       ...item,
    //       created_at: moment(item.created_at).format("YYYY-MM-DD HH:mm:ss"),
    //     };
    //   });
    const searchByIdNickNameIpMobile = () => {
      if (idnicknamephonemobile.value) {
        query.keywords = idnicknamephonemobile.value
        getProductAndDataList()
      } else {
        query.keywords = ''
        getProductAndDataList()
      }
    }
   //提现设置的路由
    const withDraw=()=>{ 
      userouter.push("/withdraw")

    }
    //详情跳转
    const  userDetail=(id)=>{
      userouter.push({
        name: "userdetail",

        params: { wechat_user_id: id },
      })
      console.log(id)
      user.setuserDetail(id)
     
    }
    //黑名单跳转
    const blackList=()=>{
      userouter.push("/blacklist")
    }
    //用户反馈跳转
    const userFeedback=()=>{
      userouter.push("/feedback")
    }
    //excel导出
    const exportExcel=()=>{
      dataExport.value.page_size = pageTotal.value ? pageTotal.value <= 10000 ? pageTotal.value  : 10000 : 10
        fetchUserListData(dataExport.value)
    .then((res) => {
      if (res.status == 200) {
        tableExportData.value = res.data.lists.map((item) => {
          return {
            ...item,
            is_buy: item.is_buy == 1 ? '是' : '否',
            created_at: moment(item.created_at).format("YYYY-MM-DD HH:mm:ss"),
          };
        });

        //表头中文名
      const titleArr = [
        "项目",
        "应用",
        "用户id",
        "数盟id",
        "是否买量用户",
        "用户名",
        "手机号",
        "累积佣金",
        "已提现佣金",
        "已提现次数",
        "注册ip",
        "ip地址",
        "注册时间",
      ];
      const data = tableExportData.value.map((item) => {
        return {
          main_product_name: item.main_product_name,
          product_name: item.product_name,
          id: item.id,
          oaid: item.oaid,
          is_buy: item.is_buy == 1 ? '是' : '否',
          nickname: item.nickname,
          tel: item.tel,
          reward: item.reward,
          withdraw_reward: item.withdraw_reward,
          withdraw_times: item.withdraw_times,
          ip: item.ip,
          ip_address: item.ip_address,
          created_at: moment(item.created_at).format("YYYY-MM-DD HH:mm:ss")
        };
      });
      
      exportExcelData(data, "UserTable", titleArr, "UserTable");
        
      } else {
        if (res.message) {
          ElMessage.error(res.message);
        } else {
          ElMessage.error('后端api接口异常！');
        }
      }

    })


    }
</script>

<style scoped>
.handle-box {
  height: 90px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content:flex-start;
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
