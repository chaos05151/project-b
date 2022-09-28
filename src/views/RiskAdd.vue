<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item> 风控系统 </el-breadcrumb-item>
        <el-breadcrumb-item>风控管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="form-box" style="height:2000px">
        <div>
          <el-breadcrumb separator="/">

            <el-breadcrumb-item v-show="this.$route.params.whichTab == 0">设备登录限制</el-breadcrumb-item>
            <el-breadcrumb-item v-show="this.$route.params.whichTab == 1">微信账号绑定</el-breadcrumb-item>
            <el-breadcrumb-item v-show="this.$route.params.whichTab == 2">实名认证&防沉迷</el-breadcrumb-item>
            <el-breadcrumb-item v-show="this.$route.params.whichTab == 3">手机绑定</el-breadcrumb-item>
            <el-breadcrumb-item v-show="this.$route.params.whichTab == 4">隐私协议</el-breadcrumb-item>
            <el-breadcrumb-item v-show="this.$route.params.whichTab == 5">假页面</el-breadcrumb-item>

            <el-breadcrumb-item>新增配置</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-divider />

        <el-form ref="formRef" v-show="this.$route.params.whichTab == 0" :rules="rules" :model="form"

          label-width="280px">
          <!-- <el-form-item label="配置类型" prop="config_type">
            <el-radio-group v-model="form.config_type">
              <el-radio label="0">所有项目</el-radio>
              <el-radio label="1">指定项目</el-radio>
            </el-radio-group>
          </el-form-item> -->
          <el-form-item v-show="form.config_type == 1" label="项目" prop="main_product_name_selected">
            <el-select v-model="main_product_name_selected" placeholder="项目" class="m-2"
              @change="getProductAndDataList">
              <el-option v-for="item in options" :key="item.id" :label="item.main_product_name" :value="item.id" />
            </el-select>
          </el-form-item>
          <el-form-item v-show="form.config_type == 1" label="应用" prop="product_name_selected">
            <el-select multiple v-model="product_name_selected" placeholder="应用" class="m-2">
              <el-option v-for="item in suboptions" :key="item.product_id" :label="item.product_name"
                :value="item.product_id" />
            </el-select>
          </el-form-item>
          <el-form-item label="允许模拟器登录" prop="simulator_login_status">
            <el-switch v-model="form.simulator_login_status"></el-switch>
          </el-form-item>
          <el-form-item label="允许多开设备登录" prop="more_open_login_status">
            <el-switch v-model="form.more_open_login_status"></el-switch>
          </el-form-item>
          <el-form-item label="允许风险设备登录" prop="risk_device_disabled_status">
            <el-switch v-model="form.risk_device_disabled_status"></el-switch>
          </el-form-item>
          <el-form-item label="允许异常设备登录" prop="exception_login_status">
            <el-switch v-model="form.exception_login_status"></el-switch>
          </el-form-item>
          <el-form-item label="单设备允许登录账号数" prop="one_device_login_num">
            <el-input style="width: 150px" v-model="form.one_device_login_num"></el-input>
          </el-form-item>
          <el-form-item label="允许模拟器设备看广告" prop="simulator_watch_advertisement_status">
            <el-switch v-model="form.simulator_watch_advertisement_status"></el-switch>
          </el-form-item>
          <el-form-item label="允许多开设备看广告" prop="more_open_watch_advertisement_status">
            <el-switch v-model="form.more_open_watch_advertisement_status"></el-switch>
          </el-form-item>
          <el-form-item label="允许异常设备看广告" prop="exception_device_watch_advertisement_status">
            <el-switch v-model="form.exception_device_watch_advertisement_status"></el-switch>
          </el-form-item>
          <el-form-item label="异常设备观看广告数量" prop="exception_device_watch_advertisement_num">
            <el-input style="width: 150px" v-model="form.exception_device_watch_advertisement_num">
            </el-input>
          </el-form-item>
          <el-form-item label="生效时间" prop="appoint_time">
            <el-date-picker v-model="form.appoint_time" type="datetimerange" range-separator="To"
              start-placeholder="Start date" end-placeholder="End date" value-format="YYYY-MM-DD HH:mm:ss" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">确定</el-button>
            <el-button @click="onReset">取消</el-button>
          </el-form-item>
        </el-form>

        <el-form ref="formRef" v-show="route.params.whichTab == 1" :rules="rules" :model="form"
          label-width="280px">
          <!-- <el-form-item label="配置类型" prop="config_type">
            <el-radio-group v-model="form.config_type">
              <el-radio label="0">所有项目</el-radio>
              <el-radio label="1">指定项目</el-radio>
            </el-radio-group>
          </el-form-item> -->
          <el-form-item v-show="form.config_type == 1" label="项目" prop="main_product_name_selected">
            <el-select v-model="main_product_name_selected" placeholder="项目" class="m-2"
              @change="getProductAndDataList">
              <el-option v-for="item in options" :key="item.id" :label="item.main_product_name" :value="item.id" />
            </el-select>
          </el-form-item>
          <el-form-item v-show="form.config_type == 1" label="应用" prop="product_name_selected">
            <el-select multiple v-model="product_name_selected" placeholder="应用" class="m-2">
              <el-option v-for="item in suboptions" :key="item.product_id" :label="item.product_name"
                :value="item.product_id" />
            </el-select>
          </el-form-item>
          <el-form-item label="微信最多绑定账号数" prop="account_bind_num">
            <el-input style="width: 150px" v-model="form.account_bind_num"></el-input>
          </el-form-item>
          <el-form-item label="微信单日可提现数" prop="one_day_withdrawal_count">
            <el-input style="width: 150px" v-model="form.one_day_withdrawal_count">
            </el-input>
          </el-form-item>
          <el-form-item label="生效时间" prop="appoint_time">
            <el-date-picker v-model="form.appoint_time" type="datetimerange" range-separator="To"
              start-placeholder="Start date" end-placeholder="End date" value-format="YYYY-MM-DD HH:mm:ss" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSecondSubmit">确定</el-button>
            <el-button @click="onReset">取消</el-button>
          </el-form-item>
        </el-form>

        <el-form ref="formRef" v-show="route.params.whichTab == 2" :rules="rules" :model="form"

          label-width="280px">
          <!-- <el-form-item label="配置类型" prop="config_type">
            <el-radio-group v-model="form.config_type">
              <el-radio label="0">所有项目</el-radio>
              <el-radio label="1">指定项目</el-radio>
            </el-radio-group>
          </el-form-item> -->
          <el-form-item v-show="form.config_type == 1" label="项目" prop="main_product_name_selected">
            <el-select v-model="main_product_name_selected" placeholder="项目" class="m-2"
              @change="getProductAndDataList">
              <el-option v-for="item in options" :key="item.id" :label="item.main_product_name" :value="item.id" />
            </el-select>
          </el-form-item>
          <el-form-item v-show="form.config_type == 1" label="应用" prop="product_name_selected">
            <el-select multiple v-model="product_name_selected" placeholder="应用" class="m-2">
              <el-option v-for="item in suboptions" :key="item.product_id" :label="item.product_name"
                :value="item.product_id" />
            </el-select>
          </el-form-item>
          <el-form-item label="是否开启实名认证" prop="open_real_name_authentication_status">
            <el-radio-group v-model="form.open_real_name_authentication_status">
              <el-radio label="1">不开启</el-radio>
              <el-radio label="2">开启(非强制)</el-radio>
              <el-radio label="3">开启(强制)</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="实名认证节点" prop="real_name_authentication_node">
            <el-select v-model="form.real_name_authentication_node" placeholder="请选择">
              <el-option key="bbk" label="登录前" value="1"></el-option>
              <el-option key="xtc" label="登录成功X次后" value="2"></el-option>
              <el-option key="imoo" label="提现成功X次后" value="3"></el-option>
              <el-option key="imoo" label="绑定微信后第二次登录" value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="实名认证接口" prop="real_name_authentication_api">
            <el-radio-group v-model="form.real_name_authentication_api">
              <el-radio label="1">阿里云</el-radio>
              <el-radio label="2">中宣部</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-show="form.real_name_authentication_api == 1" label="阿里云接口" prop="aliyun_app_code">
            <el-input style="width: 150px" v-model="form.aliyun_app_code"></el-input>
          </el-form-item>
          <el-form-item v-show="form.real_name_authentication_api == 2" label="zxb_app_id" prop="zxb_app_id">
            <el-input style="width: 150px" v-model="form.zxb_app_id"></el-input>
          </el-form-item>
          <el-form-item v-show="form.real_name_authentication_api == 2" label="zxb_biz_id" prop="zxb_biz_id">
            <el-input style="width: 150px" v-model="form.zxb_biz_id"></el-input>
          </el-form-item>
          <el-form-item v-show="form.real_name_authentication_api == 2" label="zxb_secret_key" prop="zxb_secret_key">
            <el-input style="width: 150px" v-model="form.zxb_secret_key"></el-input>
          </el-form-item>
          <el-form-item v-show="form.real_name_authentication_api == 2" label="是否开启数据上报" prop="open_escalation_status">
            <el-radio-group v-model="form.open_escalation_status">
              <el-radio label="1">关闭</el-radio>
              <el-radio label="2">开启</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-show="form.open_escalation_status == 2" label="中宣部上报接口" prop="data_escalation_api">
            <el-input style="width: 150px" v-model="form.data_escalation_api"></el-input>
          </el-form-item>
          <el-form-item label="防沉迷开启" prop="anti_addiction_status">
            <el-radio-group v-model="form.anti_addiction_status">
              <el-radio label="1">关闭</el-radio>
              <el-radio label="2">部分开启</el-radio>
              <el-radio label="3">全部开启</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-show="form.anti_addiction_status == 2" label="部分开启条件" prop="anti_addiction_open_condition">
            <el-radio-group v-model="form.anti_addiction_open_condition">
              <el-radio label="1">全部用户</el-radio>
              <el-radio label="2">新用户</el-radio>
              <el-radio label="3">老用户</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="生效时间" prop="appoint_time">
            <el-date-picker v-model="form.appoint_time" type="datetimerange" range-separator="To"
              start-placeholder="Start date" end-placeholder="End date" value-format="YYYY-MM-DD HH:mm:ss" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onThirdSubmit">确定</el-button>
            <el-button @click="onReset">取消</el-button>
          </el-form-item>
        </el-form>

        <el-form ref="formRef" v-show="route.params.whichTab == 3" :rules="rules" :model="form"

          label-width="280px">
          <!-- <el-form-item label="配置类型" prop="config_type">
            <el-radio-group v-model="form.config_type">
              <el-radio label="0">所有项目</el-radio>
              <el-radio label="1">指定项目</el-radio>
            </el-radio-group>
          </el-form-item> -->
          <el-form-item v-show="form.config_type == 1" label="项目" prop="main_product_name_selected">
            <el-select v-model="main_product_name_selected" placeholder="项目" class="m-2"
              @change="getProductAndDataList">
              <el-option v-for="item in options" :key="item.id" :label="item.main_product_name" :value="item.id" />
            </el-select>
          </el-form-item>
          <el-form-item v-show="form.config_type == 1" label="应用" prop="product_name_selected">
            <el-select multiple v-model="product_name_selected" placeholder="应用" class="m-2">
              <el-option v-for="item in suboptions" :key="item.product_id" :label="item.product_name"
                :value="item.product_id" />
            </el-select>
          </el-form-item>
          <el-form-item label="开启手机绑定" prop="mobile_phone_bind_status">
            <el-switch v-model="form.mobile_phone_bind_status"></el-switch>
          </el-form-item>
          <el-form-item label="手机绑定条件" prop="mobile_phone_bind_condition">
            <el-radio-group v-model="form.mobile_phone_bind_condition">
              <el-radio label="1">全部用户</el-radio>
              <el-radio label="2">新用户</el-radio>
              <el-radio label="3">老用户</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="生效时间" prop="appoint_time">
            <el-date-picker v-model="form.appoint_time" type="datetimerange" range-separator="To"
              start-placeholder="Start date" end-placeholder="End date" value-format="YYYY-MM-DD HH:mm:ss" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onFourSubmit">确定</el-button>
            <el-button @click="onReset">取消</el-button>
          </el-form-item>
        </el-form>

        <el-form ref="formRef" v-show="route.params.whichTab == 4" :rules="rules" :model="form"

          label-width="280px">
          <!-- <el-form-item label="配置类型" prop="config_type">
            <el-radio-group v-model="form.config_type">
              <el-radio label="0">所有项目</el-radio>
              <el-radio label="1">指定项目</el-radio>
            </el-radio-group>
          </el-form-item> -->
          <el-form-item v-show="form.config_type == 1" label="项目" prop="main_product_name_selected">
            <el-select v-model="main_product_name_selected" placeholder="项目" class="m-2"
              @change="getProductAndDataList">
              <el-option v-for="item in options" :key="item.id" :label="item.main_product_name" :value="item.id" />
            </el-select>
          </el-form-item>
          <el-form-item v-show="form.config_type == 1" label="应用" prop="product_name_selected">
            <el-select multiple v-model="product_name_selected" placeholder="应用" class="m-2">
              <el-option v-for="item in suboptions" :key="item.product_id" :label="item.product_name"
                :value="item.product_id" />
            </el-select>
          </el-form-item>
          <el-form-item label="用户协议地址" prop="user_agreement_url">
            <el-input style="width: 150px" v-model="form.user_agreement_url"></el-input>
          </el-form-item>
          <el-form-item label="隐私协议地址" prop="privacy_agreement_url">
            <el-input style="width: 150px" v-model="form.privacy_agreement_url">
            </el-input>
          </el-form-item>
          <el-form-item label="生效时间" prop="appoint_time">
            <el-date-picker v-model="form.appoint_time" type="datetimerange" range-separator="To"
              start-placeholder="Start date" end-placeholder="End date" value-format="YYYY-MM-DD HH:mm:ss" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onFiveSubmit">确定</el-button>
            <el-button @click="onReset">取消</el-button>
          </el-form-item>
        </el-form>
        <el-form
        ref="formRef"

          v-show="route.params.whichTab == 5"

          :rules="rules"
          :model="form"
          label-width="280px"
        >
          <el-form-item label="项目">
            <el-select placeholder="项目" v-model="main_game_selected" @change="getPorductList" class="m-2">
              <el-option
              v-for="item in main_gameChanneVersionList"
              :key="item.value"
              :label="item.label_name"
              :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
           <el-form-item
           label="应用"
           prop="game_selected"
           >
              <el-select
                  v-model="game_selected"
                  placeholder="应用"
                  class="m-2"
                  @change="getChannelList"
                
              >
              <!-- <el-option
                    :key="gameChannelVersionList.value"
                    :label="gameChannelVersionList.label_name"
                    :value="gameChannelVersionList.value"
                  /> -->
              <el-option
                    v-for="item in gameChannelVersionList"
                    :key="item.value"
                    :label="item.label_name"
                    :value="item.value"
                  />
              </el-select>
           </el-form-item>
           <el-form-item
           label="渠道选择"
           >
            <el-select
            v-model="channel_selected"
            placeholder="渠道选择"
            @change="getVersionList"
            >
              <el-option
              v-for="item in channelList"
              :key="item.value"
              :label="item.label_name"
              :value="item.value"
              ></el-option>
            </el-select>
           </el-form-item>
           <el-form-item 
           label="选择版本"
           >
            <el-select
            v-model="game_version_selected"
            placeholder="选择版本"
            @change="getVersionSelect"
            >
            <el-option
              v-for="item in versionList"
              :key="item.value"
              :label="item.label_name"
              :value="item.value"
              ></el-option>
          </el-select>
          </el-form-item>
          <el-form-item
          label="关闭广告"
          >
            <el-switch
          v-model="openAD"
          active-value=0
          inactive-value=1
          ></el-switch>
          </el-form-item>
          <el-form-item
          label="开启假页面"
          >
            <el-switch
            v-model="openFakePage"
            active-value=1
            inactive-value=0
            ></el-switch>
          </el-form-item>
          <el-form-item
          label="指定生效日期"
          >
          <el-date-picker
        v-model="form.appoint_time"
        type="datetimerange"
        range-separator="→"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSixSubmit">确定</el-button>
            <el-button @click="onReset">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>


<script setup>

import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import { fetchMainProductList, fetchProductList } from "../api/product";
import {
  addDeviceLogin,
  addPhoneBind,
  addPrivacy,
  addRealName,
  addWechatBind,
  getGameChannelVersionList,
  addFakePageData
} from "../api/risk";
import moment from "moment";

import { useRoute,useRouter } from "vue-router";
const route=useRoute()
const router=useRouter()

const main_product_name_selected = ref("");
const product_name_selected = ref([]);
let options = ref();
let suboptions = ref();
const form = reactive({
  config_type:1
});
const formRef = ref(null);
const openAD=ref(1);
const openFakePage=ref(0);
const main_game_selected=ref("");
const main_game_selected_name=ref("");
const game_selected=ref("");
const game_selected_name=ref("")
const channel_selected=ref("");
const game_version_selected=ref("");
const main_gameChanneVersionList=ref("");
const gameChannelVersionList=ref("");
const channelList=ref("");
const versionList=ref("");
//获取项目产品信息
const getProductDataList = () => {
  fetchMainProductList()
    .then((res) => {
      console.log("getProductDataList", res.data);
      options.value = res.data;
      console.log("options.value.main_product_name", options.value);
    })
    .catch(() => {
      // ElMessage.error("服务器异常！");
    });
};
//根据项目获取应用产品信息
const getSubProductDataList = (query) => {
  const data = {
    main_product_id: query,
  };
  fetchProductList(data)
    .then((res) => {
      console.log("getSubProductDataList", res.data);
      //   suboptions.value = suboptions.value ? suboptions.value.concat(res.data) : res.data;
      suboptions.value = res.data;
      console.log("suboptions.value", suboptions.value);
    })
    .catch(() => {
      // ElMessage.error("服务器异常！");
    });
};
//假页面获取指定游戏、渠道、版本
const getSelectLists=()=>{
  getGameChannelVersionList()
  .then((res)=>{
    // gameChannelVersionList.value=res.data
    console.log("main_gameChanneVersionList",res);
    main_gameChanneVersionList.value=res.data
  })
  .catch(()=>{
    // ElMessage.error("服务器异常！");
  })
}

//获取应用列表，项目选择
const getPorductList=(val)=>{
  console.log("erjiyx",val);
  game_selected.value=""
  game_version_selected.value=""
  channel_selected.value=""
  main_game_selected.value=val
  main_gameChanneVersionList.value.forEach(item=>{
    if(item.value==val){
      console.log("item.label_name",item.label_name);
      main_game_selected_name.value=item.label_name
      gameChannelVersionList.value=item.children
    }
  })
  console.log(" main_game_selected_name.value", main_game_selected_name.value);
  console.log("760",gameChannelVersionList.value);
}


//获取渠道列表，应用选择
const getChannelList=(val)=>{
  console.log(val);
  game_version_selected.value=""
  channel_selected.value=""
  game_selected.value=val
  console.log(gameChannelVersionList.value);
 /////
    // game_selected_name.value=gameChannelVersionList.value.label_name
    // channelList.value=gameChannelVersionList.value.children
  ////
  gameChannelVersionList.value.forEach(item=>{
    if(item.value==val){
      game_selected_name.value=item.label_name
      channelList.value=item.children
    }
  })
  console.log("780",channelList.value);
}

//获取版本列表，渠道选择
const getVersionList=(val)=>{
  game_version_selected.value=""
  channel_selected.value=val;
  channelList.value.forEach(item=>{
    if(item.value==val){
      if(item.children){
        versionList.value=item.children
      }
      
    }
  })
  // console.log(version.value);
}


//版本选择
const getVersionSelect=(val)=>{
  console.log(val);
  game_version_selected.value=val

}



//数字校验
const checkNonnegative = (value) => {
  if (value) {
    let z_reg = /^\d+(\.{0,1}\d+){0,1}$/;
    if (!z_reg.test(value)) {
      ElMessage.error("请先选择游戏！");
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
//添加设备登录
const addDeviceLoginData = (data) => {
  addDeviceLogin(data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("添加设备登录成功");
    } else if (res.status == -1) {
      ElMessage.error("此游戏配置已存在！");
    }
  });
};
//添加微信账号绑定
const addWechatBindData = (data) => {
  addWechatBind(data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("添加微信账号绑定成功");
    } else if (res.status == -1) {
      ElMessage.error("此游戏配置已存在！");
    }
  });
};
//添加手机绑定
const addPhoneBindData = (data) => {
  addPhoneBind(data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("添加手机绑定成功");
    } else if (res.status == -1) {
      ElMessage.error("此游戏配置已存在！");
    }
  });
};
//添加防沉迷
const addRealNameData = (data) => {
  addRealName(data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("添加防沉迷成功");
    } else if (res.status == -1) {
      ElMessage.error("此游戏配置已存在！");
    }
  });
};
//添加隐私协议
const addPrivacyData = (data) => {
  addPrivacy(data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("添加隐私协议成功");
    } else if (res.status == -1) {
      ElMessage.error("此游戏配置已存在！");
    }
  });
};

    const rules = {};

    getSelectLists()

    //获取项目产品信息
    getProductDataList();

    const getProductAndDataList = () => {
      product_name_selected.value = '';
      //获取应用列表
      getSubProductDataList(main_product_name_selected.value);
    };



    // 设备登录限制提交
  const  onSubmit=()=> {

      // 表单校验
      formRef.value.validate((valid) => {
        if (valid) {
          if (form.one_device_login_num) {
            if (!checkNonnegate(form.one_device_login_num)) return;
          }
          if (form.exception_device_watch_advertisement_num) {
            if (!checkNonnegate(form.exception_device_watch_advertisement_num))
              return;
          }
          let appoint_time_format;
          if (!form.appoint_time) {
            appoint_time_format = moment().format("YYYY-MM-DD HH:mm:ss");
          } else {
            if (form.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") && form.appoint_time[1] > moment().format("YYYY-MM-DD HH:mm:ss"))
              appoint_time_format =
                form.appoint_time[0] + "~" + form.appoint_time[1];
            else {
              ElMessage.error("生效时间段不能在当前时间之前！");
              return
            }
          }
          if (form.config_type) {
            if (form.config_type == 1) {
              if (!checkNonnegative(main_product_name_selected.value)) return;
              product_name_selected.value.forEach(function (val) {
                if (!checkNonnegative(val)) return;
                const product_name = suboptions.value.filter(
                  (column) => column.product_id == val
                );
                const data = {
                  config_type: 1, //配置类型：0，所有项目；1：指定项目
                  main_product_id: product_name[0].main_product_id, //父游戏id选填，选择父游戏id之后，只展示对应父游戏项目
                  main_product_name: product_name[0].main_product_name,
                  product_id: product_name[0].product_id, //子游戏id
                  product_name: product_name[0].product_name,
                  package_name: product_name[0].package_name,
                  simulator_login_status: form.simulator_login_status ? 1 : 0, //模拟器登录
                  more_open_login_status: form.more_open_login_status ? 1 : 0, //多开登录
                  risk_device_disabled_status:form.risk_device_disabled_status ? 1 : 0,//风险设备
                  exception_login_status: form.exception_login_status ? 1 : 0, //异常登录
                  one_device_login_num: form.one_device_login_num, //单设备登录数
                  exception_device_watch_advertisement_num:
                    form.exception_device_watch_advertisement_num, //异常设备观看广告数量
                  exception_device_watch_advertisement_status:
                    form.exception_device_watch_advertisement_status ? 1 : 0,
                  simulator_watch_advertisement_status:
                    form.simulator_watch_advertisement_status ? 1 : 0, //模拟器观看广告
                  more_open_watch_advertisement_status:
                    form.more_open_watch_advertisement_status ? 1 : 0, //多开设备看广告
                  appoint_time: appoint_time_format, //指定生效时间
                };
                console.log(data);
                addDeviceLoginData(data);
              });
            } else {
              const globaldata = {
                config_type: 0, //配置类型：0，所有项目；1：指定项目
                simulator_login_status: form.simulator_login_status ? 1 : 0, //模拟器登录
                more_open_login_status: form.more_open_login_status ? 1 : 0, //多开登录
                risk_device_disabled_status:form.risk_device_disabled_status ? 1 : 0,//风险设备
                exception_login_status: form.exception_login_status ? 1 : 0, //异常登录
                one_device_login_num: form.one_device_login_num, //单设备登录数
                exception_device_watch_advertisement_num:
                  form.exception_device_watch_advertisement_num, //异常设备观看广告数量
                simulator_watch_advertisement_status:
                  form.simulator_watch_advertisement_status ? 1 : 0, //模拟器观看广告
                more_open_watch_advertisement_status:
                  form.more_open_watch_advertisement_status ? 1 : 0, //多开设备看广告
                appoint_time: appoint_time_format, //指定生效时间
              };
              console.log(globaldata);
              addDeviceLoginData(globaldata);
            }
          } else {
            ElMessage.error("必须选择配置类型！");
            return;
          }


          router.push("/risk");

        } else {
          return false;
        }
      });

    }

    //微信账号绑定提交
  const  onSecondSubmit=()=> {

      // 表单校验
      formRef.value.validate((valid) => {
        if (valid) {
          if (form.account_bind_num) {
            if (!checkNonnegate(form.account_bind_num)) return;
          }
          if (form.one_day_withdrawal_count) {
            if (!checkNonnegate(form.one_day_withdrawal_count)) return;
          }
          let appoint_time_format;
          if (!form.appoint_time) {
            appoint_time_format = moment().format("YYYY-MM-DD HH:mm:ss");
          } else {
            if (form.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") && form.appoint_time[1] > moment().format("YYYY-MM-DD HH:mm:ss"))
              appoint_time_format =
                form.appoint_time[0] + "~" + form.appoint_time[1];
            else {
              ElMessage.error("生效时间段不能在当前时间之前！");
              return
            }
          }
          if (form.config_type) {
            if (form.config_type == 1) {
              if (!checkNonnegative(main_product_name_selected.value)) return;
              product_name_selected.value.forEach(function (val) {
                if (!checkNonnegative(val)) return;
                const product_name = suboptions.value.filter(
                  (column) => column.product_id == val
                );
                const data = {
                  config_type: 1, //配置类型：0，所有项目；1：指定项目
                  main_product_id: product_name[0].main_product_id, //父游戏id选填，选择父游戏id之后，只展示对应父游戏项目
                  main_product_name: product_name[0].main_product_name,
                  product_id: product_name[0].product_id, //子游戏id
                  product_name: product_name[0].product_name,
                  package_name: product_name[0].package_name,
                  account_bind_num: form.account_bind_num, //最多绑定数量
                  one_day_withdrawal_count: form.one_day_withdrawal_count, //每日提现次数
                  appoint_time: appoint_time_format, //指定生效时间
                };
                console.log("data", data);
                addWechatBindData(data);
              })
            } else {
              const globaldata = {
                config_type: 0, //配置类型：0，所有项目；1：指定项目
                account_bind_num: form.account_bind_num, //最多绑定数量
                one_day_withdrawal_count: form.one_day_withdrawal_count, //每日提现次数
                appoint_time: appoint_time_format, //指定生效时间
              };
              console.log("globaldata", globaldata);
              addWechatBindData(globaldata);
            }
          } else {
            ElMessage.error("必须选择配置类型！");
            return;
          }


          router.push("/risk");

        } else {
          return false;
        }
      });

    }

    //实名认证提交
   const onThirdSubmit=()=> {

      formRef.value.validate((valid) => {
        if (valid) {
          let appoint_time_format;
          if (!form.appoint_time) {
            appoint_time_format = moment().format("YYYY-MM-DD HH:mm:ss");
          } else {
            if (form.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") && form.appoint_time[1] > moment().format("YYYY-MM-DD HH:mm:ss"))
              appoint_time_format =
                form.appoint_time[0] + "~" + form.appoint_time[1];
            else {
              ElMessage.error("生效时间段不能在当前时间之前！");
              return
            }
          }
          if (form.config_type) {
            if (form.config_type == 1) {
              if (!checkNonnegative(main_product_name_selected.value)) return;
              product_name_selected.value.forEach(function (val) {
                if (!checkNonnegative(val)) return;
                const product_name = suboptions.value.filter(
                  (column) => column.product_id == val
                );
                const data = {
                  config_type: 1, //配置类型：0，所有项目；1：指定项目
                  main_product_id: product_name[0].main_product_id, //父游戏id选填，选择父游戏id之后，只展示对应父游戏项目
                  main_product_name: product_name[0].main_product_name,
                  product_id: product_name[0].product_id, //子游戏id
                  product_name: product_name[0].product_name,
                  package_name: product_name[0].package_name,
                  open_real_name_authentication_status:
                    form.open_real_name_authentication_status, //是否开启实名认证	1不开启  2开启（非强制） 3开启（强制）
                  real_name_authentication_node: form.real_name_authentication_node, //实名认证节点	1登录前 2登陆成功xx后 3提现x次后 4绑定微信号第二次登录
                  real_name_authentication_api: form.real_name_authentication_api, //实名认证接口	1阿里云 2中宣部
                  aliyun_app_code: form.aliyun_app_code,
                  // zxb_app_id: null,
                  // zxb_biz_id: null,
                  // zxb_secret_key: null,
                  // open_escalation_status: 1, //系统用户行为数据上报开启	1关闭 2开启
                  // data_escalation_api: null, //上报接口
                  anti_addiction_status: parseInt(form.anti_addiction_status), //防沉迷开启	1关闭 2部分开启 3全部开启
                  anti_addiction_open_condition: form.anti_addiction_status == 2 ? parseInt(
                    form.anti_addiction_open_condition
                  ) : '', //部分开启条件	1所有用户 2新用户 3老用户
                  appoint_time: appoint_time_format, //指定生效时间
                };
                addRealNameData(data);
              })
            } else {
              const globaldata = {
                config_type: 0, //配置类型：0，所有项目；1：指定项目
                open_real_name_authentication_status:
                  form.open_real_name_authentication_status, //是否开启实名认证	1不开启  2开启（非强制） 3开启（强制）
                real_name_authentication_node: form.real_name_authentication_node, //实名认证节点	1登录前 2登陆成功xx后 3提现x次后 4绑定微信号第二次登录
                real_name_authentication_api: form.real_name_authentication_api, //实名认证接口	1阿里云 2中宣部
                aliyun_app_code: form.aliyun_app_code,
                // zxb_app_id: null,
                // zxb_biz_id: null,
                // zxb_secret_key: null,
                // open_escalation_status: 1, //系统用户行为数据上报开启	1关闭 2开启
                // data_escalation_api: null, //上报接口
                anti_addiction_status: parseInt(form.anti_addiction_status), //防沉迷开启	1关闭 2部分开启 3全部开启
                anti_addiction_open_condition: form.anti_addiction_status == 2 ? parseInt(
                    form.anti_addiction_open_condition
                  ) : '', //部分开启条件	1所有用户 2新用户 3老用户
                appoint_time: appoint_time_format, //指定生效时间
              };
              addRealNameData(globaldata);
            }
          } else {
            ElMessage.error("必须选择配置类型！");
            return;
          }

          router.push("/risk");

        } else {
          return false;
        }
      });

    }

    //手机绑定提交
 const   onFourSubmit=()=> {

      // 表单校验
      formRef.value.validate((valid) => {
        if (valid) {
          let appoint_time_format;
          if (!form.appoint_time) {
            appoint_time_format = moment().format("YYYY-MM-DD HH:mm:ss");
          } else {
            if (form.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") && form.appoint_time[1] > moment().format("YYYY-MM-DD HH:mm:ss"))
              appoint_time_format =
                form.appoint_time[0] + "~" + form.appoint_time[1];
            else {
              ElMessage.error("生效时间段不能在当前时间之前！");
              return
            }
          }
          if (form.config_type) {
            if (form.config_type == 1) {
              if (!checkNonnegative(main_product_name_selected.value)) return;
              product_name_selected.value.forEach(function (val) {
                if (!checkNonnegative(val)) return;
                const product_name = suboptions.value.filter(
                  (column) => column.product_id == val
                );
                const data = {
                  config_type: 1, //配置类型：0，所有项目；1：指定项目
                  main_product_id: product_name[0].main_product_id, //父游戏id选填，选择父游戏id之后，只展示对应父游戏项目
                  main_product_name: product_name[0].main_product_name,
                  product_id: product_name[0].product_id, //子游戏id
                  product_name: product_name[0].product_name,
                  package_name: product_name[0].package_name,
                  mobile_phone_bind_status: form.mobile_phone_bind_status ? 2 : 1, //是否开启手机绑定	1关闭 2开启
                  mobile_phone_bind_condition: parseInt(
                    form.mobile_phone_bind_condition
                  ), //手机绑定条件	1新用户 2老用户 3所有用户
                  appoint_time: appoint_time_format, //指定生效时间
                };
                addPhoneBindData(data);
              })
            } else {
              const globaldata = {
                config_type: 0, //配置类型：0，所有项目；1：指定项目
                mobile_phone_bind_status: form.mobile_phone_bind_status ? 2 : 1, //是否开启手机绑定	1关闭 2开启
                mobile_phone_bind_condition: parseInt(
                  form.mobile_phone_bind_condition
                ), //手机绑定条件	1新用户 2老用户 3所有用户
                appoint_time: appoint_time_format, //指定生效时间
              };
              addPhoneBindData(globaldata);
            }
          } else {
            ElMessage.error("必须选择配置类型！");
            return;
          }
          router.push("/risk");

        } else {
          return false;
        }
      });

    }
    //隐私协议提交
  const  onFiveSubmit=()=> {

      formRef.value.validate((valid) => {
        if (valid) {
          let appoint_time_format;
          if (!form.appoint_time) {
            appoint_time_format = moment().format("YYYY-MM-DD HH:mm:ss");
          } else {
            if (form.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") && form.appoint_time[1] > moment().format("YYYY-MM-DD HH:mm:ss"))
              appoint_time_format =
                form.appoint_time[0] + "~" + form.appoint_time[1];
            else {
              ElMessage.error("生效时间段不能在当前时间之前！");
              return
            }
          }
          if (form.config_type) {
            if (form.config_type == 1) {
              if (!checkNonnegative(main_product_name_selected.value)) return;
              product_name_selected.value.forEach(function (val) {
                if (!checkNonnegative(val)) return;
                const product_name = suboptions.value.filter(
                  (column) => column.product_id == val
                );
                const data = {
                  config_type: 1, //配置类型：0，所有项目；1：指定项目
                  main_product_id: product_name[0].main_product_id, //父游戏id选填，选择父游戏id之后，只展示对应父游戏项目
                  main_product_name: product_name[0].main_product_name,
                  product_id: product_name[0].product_id, //子游戏id
                  product_name: product_name[0].product_name,
                  package_name: product_name[0].package_name,
                  user_agreement_url: form.user_agreement_url, //用户协议
                  privacy_agreement_url: form.privacy_agreement_url, //隐私协议
                  appoint_time: appoint_time_format, //指定生效时间
                };
                addPrivacyData(data);
              })
            } else {
              const globaldata = {
                config_type: 0, //配置类型：0，所有项目；1：指定项目
                user_agreement_url: form.user_agreement_url, //用户协议
                privacy_agreement_url: form.privacy_agreement_url, //隐私协议
                appoint_time: appoint_time_format, //指定生效时间
              };
              addPrivacyData(globaldata);
            }
          } else {
            ElMessage.error("必须选择配置类型！");
            return;
          }

          router.push("/risk");

        } else {
          return false;
        }
      });

    }
    //假页面提交
 const   onSixSubmit=()=>{

      if(main_game_selected.value!=""&&game_selected.value!=""&&channel_selected.value!=""&&game_version_selected.value!=""){
        let arr=[]

        if (!form.appoint_time) {
            // appoint_time_format = moment().format("YYYY-MM-DD HH:mm:ss");
            arr=[moment().format("YYYY-MM-DD HH:mm:ss"),""]
          } else {
            if (moment(form.appoint_time[0]).format("YYYY-MM-DD HH:mm:ss") > moment().format("YYYY-MM-DD HH:mm:ss") && moment(form.appoint_time[1]).format("YYYY-MM-DD HH:mm:ss") > moment().format("YYYY-MM-DD HH:mm:ss")){
              arr=form.appoint_time.map(item=>{
                  return moment(item).format("YYYY-MM-DD HH:mm:ss")
                })
            }  
            else {
              ElMessage.error("生效时间段不能在当前时间之前！");
              return
            }
          }
          console.log("arr",arr);




        // console.log(arr);
      // arr=arr.map(item=>{
      //   return moment(item).format("YYYY-MM-DD")
      // })
      let data={
        main_product_id:main_game_selected.value,
        main_product_name:main_game_selected_name.value,
        product_id:game_selected.value,
        product_name:game_selected_name.value,
        channel:channel_selected.value,
        game_version:game_version_selected.value,
        open_advertising:Number(openAD.value),
        open_fake_page:Number(openFakePage.value),
        start_date:arr[0],
        end_date:arr[1]
      }
     
      console.log(data);
      addFakePageData(data).then(res=>{
        if(res.status==200){
          ElMessage.success("添加成功");


          router.push("/risk");

        }else{
          ElMessage.error(res.message)
        }
      })

      } else{
        ElMessage.error('下拉框的值不能为空')
        return 
      }
      
    

    }
    // 重置
 const   onReset=()=> {
      //   formRef.value.resetFields();
      main_product_name_selected.value = '';
      product_name_selected.value = '';
      router.push("/risk");
    }
  


</script>
