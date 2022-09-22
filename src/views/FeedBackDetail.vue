<template>
  <div class="">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>风控系统</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>反馈详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="Title">
        <span>用户反馈</span>
        <el-button type="primary" @click="goback">返回</el-button>
      </div>
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
        <el-form-item label="IP">
          {{ userDetail.ip }}
        </el-form-item>
        <el-form-item label="IP地址">
          {{ userDetail.ip_address }}
        </el-form-item>
        <el-form-item label="设备ID">
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
        <el-form-item label="反馈内容">
          <el-input style="width: 480px" v-model="feedbackDetail.feedback_content" disabled=true :rows="5" type="textarea" />
        </el-form-item>
        <el-form-item label="处理状态">
          <el-select v-model="value" clearable placeholder="Select" @change="handleSelectChange">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="处理情况备注">
          <el-input @blur="handleMark" style="width: 480px" v-model="dispose_remark"  :rows="5" type="textarea" />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useRoute } from "vue-router";
import userjson from "../config/user.json";
import {
  fetchFeedBackDetail,
  fetchUserDetailData,
  updateUserDetail,
  fetchFeedBackDetailChange
} from "../api/user";
const userDetail = reactive({});
const feedbackDetail = reactive({});
const dispose_remark=ref()
const wechat_user_id = ref("");
const value=ref("")
const options=ref([
  {
    value:0,
    label:"未处理"
  },{
    value:1,
    label:"已处理"
  }
])

//获取用户详情记录
const getUserDetailData = (data) => {
  fetchUserDetailData(data)
    .then((res) => {
      console.log("getUserDetailData", res.data);
      userDetail.value = res.data;
      console.log("userDetail", userDetail.value);
      console.log("userDetail.blacked_days", userDetail.value.blacked_days);
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
      // value.value=userDetail.value.dispose_status==0?"未处理":"已处理"
    })
    .catch(() => {
      // ElMessage.error("服务器异常！");
    });
};

//修改用户数据
const updateUserDetailData = (id, data) => {
  updateUserDetail(id, data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("修改成功！");
    }
  });
};

//获取用户反馈记录
const getFeedBackDetailData = (data) => {
  fetchFeedBackDetail(data)
    .then((res) => {
      console.log("getUserDetailData", res.data);
      feedbackDetail.value = res.data;
      value.value=res.data.dispose_status==1?"已处理":"未处理"
      feedbackDetail.feedback_content = feedbackDetail.value.feedback_content;
      dispose_remark.value=res.data.dispose_remark;
      console.log("res.data.dispose_status",res.data.dispose_status,value.value);
    })
    .catch(() => {
      // ElMessage.error("服务器异常！");
    });
};


//修改用户处理状态
const changeUserStaus=(id,data)=>{
  fetchFeedBackDetailChange(id,data).then(res=>{
    if (res.status == 200) {
      ElMessage.success("修改成功！");
    }
  }).catch(() => {
      // ElMessage.error("服务器异常！");
    });
}

export default {
  name: "DynamicModifyTable",
  setup() {
    const route = useRoute();
    wechat_user_id.value = route.params.wechat_user_id;
    console.log("wechat_user_id", wechat_user_id.value);
    getUserDetailData(wechat_user_id.value);
    getFeedBackDetailData(wechat_user_id.value)
    const handleSelectChange=(val)=>{
      // console.log(dispose_remark.value);
      
      let data={
        dispose_status:val,
        dispose_remark:dispose_remark.value
      }
  
      
      if(val!==""){
        console.log(userDetail.id,data);
        changeUserStaus(userDetail.id,data)
      }
    }
    const handleMark=()=>{
      let data={
        dispose_status:value.value,
        dispose_remark:dispose_remark.value
      }
      if(value.value!==""){
        changeUserStaus(userDetail.id,data)
      }
    }
    return {
      wechat_user_id,
      userDetail,
      feedbackDetail,
      value,
      options,
      dispose_remark,
      handleSelectChange,
      handleMark
    };
  },
  methods: {
    blackedDays() {
      const data = {
        blacked_days: userDetail.blacked_days
      }
      updateUserDetailData(wechat_user_id.value, data)
    },
    withDrawable() {
      const data = {
        withdrawable: userDetail.withdrawable
      }
      updateUserDetailData(wechat_user_id.value, data)
    },
    goback(){
    this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.Title{
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-left: 8px;
  margin-bottom: 20px;
  justify-content: space-between;
}

.Title>span{
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
}

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
