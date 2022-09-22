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
            <el-breadcrumb-item v-show="this.$route.params.whichTab == 0"
              >设备登录限制</el-breadcrumb-item
            >
            <el-breadcrumb-item v-show="this.$route.params.whichTab == 1"
              >微信账号绑定</el-breadcrumb-item
            >
            <el-breadcrumb-item v-show="this.$route.params.whichTab == 2"
              >实名认证&防沉迷</el-breadcrumb-item
            >
            <el-breadcrumb-item v-show="this.$route.params.whichTab == 3"
              >手机绑定</el-breadcrumb-item
            >
            <el-breadcrumb-item v-show="this.$route.params.whichTab == 4"
              >隐私协议</el-breadcrumb-item
            >
            <el-breadcrumb-item v-show="this.$route.params.whichTab == 5"
              >假页面</el-breadcrumb-item
            >
            <el-breadcrumb-item>修改配置</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-divider />
        <el-form
          ref="formRef"
          v-show="this.$route.params.whichTab == 0"
          :rules="rules"
          :model="form"
          label-width="280px"
        >
          <el-form-item label="允许模拟器登录" prop="simulator_login_status">
            <el-switch v-model="form.simulator_login_status"></el-switch>
          </el-form-item>
          <el-form-item label="允许多开设备登录" prop="more_open_login_status">
            <el-switch v-model="form.more_open_login_status"></el-switch>
          </el-form-item>
          <el-form-item label="允许异常设备登录" prop="exception_login_status">
            <el-switch v-model="form.exception_login_status"></el-switch>
          </el-form-item>
          <el-form-item
            label="单设备允许登录账号数"
            prop="one_device_login_num"
          >
            <el-input
              style="width: 150px"
              v-model="form.one_device_login_num"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="允许模拟器设备看广告"
            prop="simulator_watch_advertisement_status"
          >
            <el-switch
              v-model="form.simulator_watch_advertisement_status"
            ></el-switch>
          </el-form-item>
          <el-form-item
            label="允许多开设备看广告"
            prop="more_open_watch_advertisement_status"
          >
            <el-switch
              v-model="form.more_open_watch_advertisement_status"
            ></el-switch>
          </el-form-item>
          <el-form-item
            label="允许异常设备看广告"
            prop="exception_device_watch_advertisement_status"
          >
            <el-switch
              v-model="form.exception_device_watch_advertisement_status"
            ></el-switch>
          </el-form-item>
          <el-form-item
            label="异常设备观看广告数量"
            prop="exception_device_watch_advertisement_num"
          >
            <el-input
              style="width: 150px"
              v-model="form.exception_device_watch_advertisement_num"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="生效时间" prop="appoint_time">
            <el-date-picker
              v-model="form.appoint_time"
              type="datetimerange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
              value-format="YYYY-MM-DD HH:mm:ss"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">确定</el-button>
            <el-button @click="onReset">取消</el-button>
          </el-form-item>
        </el-form>
        <el-form
          ref="formRef"
          v-show="this.$route.params.whichTab == 1"
          :rules="rules"
          :model="form"
          label-width="280px"
        >
          <el-form-item label="微信最多绑定账号数" prop="account_bind_num">
            <el-input
              style="width: 150px"
              v-model="form.account_bind_num"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="微信单日可提现数"
            prop="one_day_withdrawal_count"
          >
            <el-input
              style="width: 150px"
              v-model="form.one_day_withdrawal_count"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="生效时间" prop="appoint_time">
            <el-date-picker
              v-model="form.appoint_time"
              type="datetimerange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
              value-format="YYYY-MM-DD HH:mm:ss"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSecondSubmit">确定</el-button>
            <el-button @click="onReset">取消</el-button>
          </el-form-item>
        </el-form>
        <el-form
          ref="formRef"
          v-show="this.$route.params.whichTab == 2"
          :rules="rules"
          :model="form"
          label-width="280px"
        >
          <el-form-item
            label="是否开启实名认证"
            prop="open_real_name_authentication_status"
          >
            <el-radio-group v-model="form.open_real_name_authentication_status">
              <el-radio :label="1">不开启</el-radio>
              <el-radio :label="2">开启(非强制)</el-radio>
              <el-radio :label="3">开启(强制)</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="实名认证节点"
            prop="real_name_authentication_node"
          >
            <el-select
              v-model="form.real_name_authentication_node"
              placeholder="请选择"
            >
              <el-option key="bbk" label="登录前" value="1"></el-option>
              <el-option key="xtc" label="登录成功X次后" value="2"></el-option>
              <el-option key="imoo" label="提现成功X次后" value="3"></el-option>
              <el-option
                key="imoo"
                label="绑定微信后第二次登录"
                value="4"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="实名认证接口"
            prop="real_name_authentication_api"
          >
            <el-radio-group v-model="form.real_name_authentication_api">
              <el-radio :label="1">阿里云</el-radio>
              <el-radio :label="2">中宣部</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            v-show="form.real_name_authentication_api == 1"
            label="阿里云接口"
            prop="aliyun_app_code"
          >
            <el-input
              style="width: 150px"
              v-model="form.aliyun_app_code"
            ></el-input>
          </el-form-item>
          <el-form-item
            v-show="form.real_name_authentication_api == 2"
            label="zxb_app_id"
            prop="zxb_app_id"
          >
            <el-input style="width: 150px" v-model="form.zxb_app_id"></el-input>
          </el-form-item>
          <el-form-item
            v-show="form.real_name_authentication_api == 2"
            label="zxb_biz_id"
            prop="zxb_biz_id"
          >
            <el-input style="width: 150px" v-model="form.zxb_biz_id"></el-input>
          </el-form-item>
          <el-form-item
            v-show="form.real_name_authentication_api == 2"
            label="zxb_secret_key"
            prop="zxb_secret_key"
          >
            <el-input
              style="width: 150px"
              v-model="form.zxb_secret_key"
            ></el-input>
          </el-form-item>
          <el-form-item
            v-show="form.real_name_authentication_api == 2"
            label="是否开启数据上报"
            prop="open_escalation_status"
          >
            <el-radio-group v-model="form.open_escalation_status">
              <el-radio :label="1">关闭</el-radio>
              <el-radio :label="2">开启</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            v-show="form.open_escalation_status == 2"
            label="中宣部上报接口"
            prop="data_escalation_api"
          >
            <el-input
              style="width: 150px"
              v-model="form.data_escalation_api"
            ></el-input>
          </el-form-item>
          <el-form-item label="防沉迷开启" prop="anti_addiction_status">
            <el-radio-group v-model="form.anti_addiction_status">
              <el-radio :label="1">关闭</el-radio>
              <el-radio :label="2">部分开启</el-radio>
              <el-radio :label="3">全部开启</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
          v-show="form.anti_addiction_status == 2"
            label="部分开启条件"
            prop="anti_addiction_open_condition"
          >
            <el-radio-group v-model="form.anti_addiction_open_condition">
              <el-radio :label="1">全部用户</el-radio>
              <el-radio :label="2">新用户</el-radio>
              <el-radio :label="3">老用户</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="生效时间" prop="appoint_time">
            <el-date-picker
              v-model="form.appoint_time"
              type="datetimerange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
              value-format="YYYY-MM-DD HH:mm:ss"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onThirdSubmit">确定</el-button>
            <el-button @click="onReset">取消</el-button>
          </el-form-item>
        </el-form>
        <el-form
          ref="formRef"
          v-show="this.$route.params.whichTab == 3"
          :rules="rules"
          :model="form"
          label-width="280px"
        >
          <el-form-item label="开启手机绑定" prop="mobile_phone_bind_status">
            <el-switch v-model="form.mobile_phone_bind_status"></el-switch>
          </el-form-item>
          <el-form-item label="手机绑定条件" prop="mobile_phone_bind_condition">
            <el-radio-group v-model="form.mobile_phone_bind_condition">
              <el-radio :label="1">全部用户</el-radio>
              <el-radio :label="2">新用户</el-radio>
              <el-radio :label="3">老用户</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="生效时间" prop="appoint_time">
            <el-date-picker
              v-model="form.appoint_time"
              type="datetimerange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
              value-format="YYYY-MM-DD HH:mm:ss"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onFourSubmit">确定</el-button>
            <el-button @click="onReset">取消</el-button>
          </el-form-item>
        </el-form>
        <el-form
          ref="formRef"
          v-show="this.$route.params.whichTab == 4"
          :rules="rules"
          :model="form"
          label-width="280px"
        >
          <el-form-item label="用户协议地址" prop="user_agreement_url">
            <el-input
              style="width: 150px"
              v-model="form.user_agreement_url"
            ></el-input>
          </el-form-item>
          <el-form-item label="隐私协议地址" prop="privacy_agreement_url">
            <el-input style="width: 150px" v-model="form.privacy_agreement_url">
            </el-input>
          </el-form-item>
          <el-form-item label="生效时间" prop="appoint_time">
            <el-date-picker
              v-model="form.appoint_time"
              type="datetimerange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
              value-format="YYYY-MM-DD HH:mm:ss"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onFiveSubmit">确定</el-button>
            <el-button @click="onReset">取消</el-button>
          </el-form-item>
        </el-form>
        <el-form ref="formRef"
          v-show="this.$route.params.whichTab == 5"
          :rules="rules"
          :model="form"
          label-width="280px">
          <el-form-item label="指定游戏">
            <el-input style="width: 150px" v-model="product_name" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="渠道选择">
            <el-input style="width: 150px" v-model="channel_name" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="选择版本">
            <el-input style="width: 150px" v-model="version_name" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="关闭广告">
            <el-switch v-model="openAD"
            :active-value=0
            :inactive-value=1></el-switch>
          </el-form-item>
          <el-form-item label="开启假页面">
            <el-switch v-model="openFakePage"
            :active-value=1
            :inactive-value=0></el-switch>
          </el-form-item>
          <el-form-item label="指定生效日期">
          <el-date-picker
            v-model="dateSelect"
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

<script>
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import {
  updatePhoneBind,
  updatePrivacy,
  updateDeviceLogin,
  updateWechatBind,
  updateRealName,
  updateFakePageData
} from "../api/risk";
import moment from "moment";
const form = reactive({});
const formRef = ref(null);
const product_name=ref("");
const channel_name=ref("");
const openAD=ref(1);
const openFakePage=ref(0);
const version_name=ref("");
const start_date=ref("");
const end_date=ref("");
const dateSelect=ref([]);
//修改设备登录
const updateDeviceLoginData = (id, data) => {
  updateDeviceLogin(id, data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("修改设备登录成功");
    }
  });
};
//修改微信账号绑定
const updateWechatBindData = (id, data) => {
  updateWechatBind(id, data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("修改微信账号绑定成功");
    }
  });
};
//修改手机绑定
const updatePhoneBindData = (id, data) => {
  updatePhoneBind(id, data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("修改手机绑定成功");
    }
  });
};
//修改防沉迷
const updateRealNameData = (id, data) => {
  updateRealName(id, data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("修改防沉迷成功");
    }
  });
};
//修改隐私协议
const updatePrivacyData = (id, data) => {
  updatePrivacy(id, data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("修改隐私协议成功");
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
export default {
  name: "riskadd",
  setup() {
    const route = useRoute();
    const data = JSON.parse(route.params.data);
    console.log("route.params", route.params);
    console.log("route.params.data", route.params.data);
    //设备登录
    if (route.params.whichTab == 0) {
      form.simulator_login_status =
        data.simulator_login_status == 1 ? true : false;
      form.more_open_login_status =
        data.more_open_login_status == 1 ? true : false;
      form.simulator_login_status =
        data.simulator_login_status == 1 ? true : false;
      form.one_device_login_num = data.one_device_login_num;
      form.exception_device_watch_advertisement_num =
        data.exception_device_watch_advertisement_num;
      form.simulator_watch_advertisement_status =
        data.simulator_watch_advertisement_status == 1 ? true : false;
      form.more_open_watch_advertisement_status =
        data.more_open_watch_advertisement_status == 1 ? true : false;
      form.exception_device_watch_advertisement_status =
        data.exception_device_watch_advertisement_status == 1 ? true : false;
    }

    //微信绑定
    if (route.params.whichTab == 1) {
      form.account_bind_num = data.account_bind_num;
      form.one_day_withdrawal_count = data.one_day_withdrawal_count;
    }

    //实名认证
    if (route.params.whichTab == 2) {
      form.open_real_name_authentication_status =
        data.open_real_name_authentication_status; //是否开启实名认证	1不开启  2开启（非强制） 3开启（强制）
      form.real_name_authentication_node = data.real_name_authentication_node; //实名认证节点	1登录前 2登陆成功xx后 3提现x次后 4绑定微信号第二次登录
      form.real_name_authentication_api = data.real_name_authentication_api; //实名认证接口	1阿里云 2中宣部
      form.aliyun_app_code = data.aliyun_app_code;
      // zxb_app_id: null,
      // zxb_biz_id: null,
      // zxb_secret_key: null,
      // open_escalation_status: 1, //系统用户行为数据上报开启	1关闭 2开启
      // data_escalation_api: null, //上报接口
      form.anti_addiction_status = data.anti_addiction_status; //防沉迷开启	1关闭 2部分开启 3全部开启
      form.anti_addiction_open_condition = data.anti_addiction_status == 2 ? 
                    data.anti_addiction_open_condition
                   : '';//部分开启条件	1所有用户 2新用户 3老用户
    }

    //手机绑定
    if (route.params.whichTab == 3) {
      form.mobile_phone_bind_status =
        data.mobile_phone_bind_status == 1 ? true : false;
      form.mobile_phone_bind_condition = data.mobile_phone_bind_condition;
    }

    //隐私协议
    if (route.params.whichTab == 4) {
      form.privacy_agreement_url = data.privacy_agreement_url;
      form.user_agreement_url = data.user_agreement_url;
    }

    //假页面
    if(route.params.whichTab == 5){
       
      console.log(data);
      product_name.value=data.product_name;
      channel_name.value=data.channel;
      version_name.value=data.game_version;
      openAD.value=data.open_advertising;
      openFakePage.value=data.open_fake_page;
      start_date.value=data.start_date;
      end_date.value=data.end_date;
      dateSelect.value=[data.start_date,data.end_date];
    }
    console.log(openAD.value,openFakePage.value);

    form.id = data.id;
    // let appoint_time_format = data.appoint_time.split('~')
    // console.log('data.appoint_time', data.appoint_time.split('~'))
    if(form.appoint_time){
      form.appoint_time = data.appoint_time.split("~");
    }
    
    // form.appoint_time = appoint_time_format[1] ? {0:appoint_time_format[0],1:appoint_time_format[1]} : {0:appoint_time_format[0]} ;
    console.log("form.appoint_time", form.appoint_time);
    const rules = {};
    return {
      rules,
      formRef,
      form,
      product_name,
      channel_name,
      version_name,
      start_date,
      end_date,
      dateSelect,
      openAD,
      openFakePage
    };
  },
  methods: {
    // 设备登录限制提交
    onSubmit() {
      let appoint_time_format;
      if (!form.appoint_time) {
        appoint_time_format = moment().format("YYYY-MM-DD HH:mm:ss");
      } else {
        if (
          form.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") &&
          form.appoint_time[1] > moment().format("YYYY-MM-DD HH:mm:ss")
        )
          appoint_time_format =
            form.appoint_time[0] + "~" + form.appoint_time[1];
        else {
          if (
            form.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") &&
            !form.appoint_time[1]
          )
            appoint_time_format = form.appoint_time[0];
          else {
            if (!form.appoint_time[0])
              appoint_time_format = moment().format("YYYY-MM-DD HH:mm:ss");
            else {
              ElMessage.error("生效时间段不能在当前时间之前！");
              return;
            }
          }
        }
      }
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
          const data = {
            simulator_login_status: form.simulator_login_status ? 1 : 0, //模拟器登录
            more_open_login_status: form.more_open_login_status ? 1 : 0, //多开登录
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
          updateDeviceLoginData(form.id, data);

          this.$router.push("/risk");
        } else {
          return false;
        }
      });
    },

    //微信账号绑定提交
    onSecondSubmit() {
      let appoint_time_format;
      if (!form.appoint_time) {
        appoint_time_format = moment().format("YYYY-MM-DD HH:mm:ss");
      } else {
        if (
          form.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") &&
          form.appoint_time[1] > moment().format("YYYY-MM-DD HH:mm:ss")
        )
          appoint_time_format =
            form.appoint_time[0] + "~" + form.appoint_time[1];
        else {
          if (
            form.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") &&
            !form.appoint_time[1]
          )
            appoint_time_format = form.appoint_time[0];
          else {
            if (!form.appoint_time[0])
              appoint_time_format = moment().format("YYYY-MM-DD HH:mm:ss");
            else {
              ElMessage.error("生效时间段不能在当前时间之前！");
              return;
            }
          }
        }
      }
      // 表单校验
      formRef.value.validate((valid) => {
        if (valid) {
          if (form.account_bind_num) {
            if (!checkNonnegate(form.account_bind_num)) return;
          }
          if (form.one_day_withdrawal_count) {
            if (!checkNonnegate(form.one_day_withdrawal_count)) return;
          }
          console.log("form", form);
          const data = {
            account_bind_num: form.account_bind_num, //最多绑定数量
            one_day_withdrawal_count: form.one_day_withdrawal_count, //每日提现次数
            appoint_time: appoint_time_format, //指定生效时间
          };
          updateWechatBindData(form.id, data);

          this.$router.push("/risk");
        } else {
          return false;
        }
      });
    },

    //实名认证提交
    onThirdSubmit() {
      let appoint_time_format;
      if (!form.appoint_time) {
        appoint_time_format = moment().format("YYYY-MM-DD HH:mm:ss");
      } else {
        if (
          form.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") &&
          form.appoint_time[1] > moment().format("YYYY-MM-DD HH:mm:ss")
        )
          appoint_time_format =
            form.appoint_time[0] + "~" + form.appoint_time[1];
        else {
          if (
            form.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") &&
            !form.appoint_time[1]
          )
            appoint_time_format = form.appoint_time[0];
          else {
            if (!form.appoint_time[0])
              appoint_time_format = moment().format("YYYY-MM-DD HH:mm:ss");
            else {
              ElMessage.error("生效时间段不能在当前时间之前！");
              return;
            }
          }
        }
      }
      // 表单校验
      formRef.value.validate((valid) => {
        if (valid) {
          console.log("form", form);
          const data = {
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
          updateRealNameData(form.id, data);

          this.$router.push("/risk");
        } else {
          return false;
        }
      });
    },

    //手机绑定提交
    onFourSubmit() {
      let appoint_time_format;
      if (!form.appoint_time) {
        appoint_time_format = moment().format("YYYY-MM-DD HH:mm:ss");
      } else {
        if (
          form.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") &&
          form.appoint_time[1] > moment().format("YYYY-MM-DD HH:mm:ss")
        )
          appoint_time_format =
            form.appoint_time[0] + "~" + form.appoint_time[1];
        else {
          if (
            form.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") &&
            !form.appoint_time[1]
          )
            appoint_time_format = form.appoint_time[0];
          else {
            if (!form.appoint_time[0])
              appoint_time_format = moment().format("YYYY-MM-DD HH:mm:ss");
            else {
              ElMessage.error("生效时间段不能在当前时间之前！");
              return;
            }
          }
        }
      }
      // 表单校验
      formRef.value.validate((valid) => {
        if (valid) {
          const data = {
            mobile_phone_bind_status: form.mobile_phone_bind_status ? 1 : 2, //是否开启手机绑定	1开启 2关闭
            mobile_phone_bind_condition: parseInt(
              form.mobile_phone_bind_condition
            ), //手机绑定条件	1新用户 2老用户 3所有用户
            appoint_time: appoint_time_format, //指定生效时间
          };
          updatePhoneBindData(form.id, data);

          this.$router.push("/risk");
        } else {
          return false;
        }
      });
    },
    //隐私协议提交
    onFiveSubmit() {
      let appoint_time_format;
      if (!form.appoint_time) {
        appoint_time_format = moment().format("YYYY-MM-DD HH:mm:ss");
      } else {
        if (
          form.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") &&
          form.appoint_time[1] > moment().format("YYYY-MM-DD HH:mm:ss")
        )
          appoint_time_format =
            form.appoint_time[0] + "~" + form.appoint_time[1];
        else {
          if (
            form.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") &&
            !form.appoint_time[1]
          )
            appoint_time_format = form.appoint_time[0];
          else {
            if (!form.appoint_time[0])
              appoint_time_format = moment().format("YYYY-MM-DD HH:mm:ss");
            else {
              ElMessage.error("生效时间段不能在当前时间之前！");
              return;
            }
          }
        }
      }
      // 表单校验
      formRef.value.validate((valid) => {
        if (valid) {
          const data = {
            user_agreement_url: form.user_agreement_url, //用户协议
            privacy_agreement_url: form.privacy_agreement_url, //隐私协议
            appoint_time: appoint_time_format, //指定生效时间
          };
          updatePrivacyData(form.id, data);
          this.$router.push("/risk");
        } else {
          return false;
        }
      });
    },

    //假页面提交
    onSixSubmit(){
      dateSelect.value
      if(dateSelect.value){
        let startDate=dateSelect.value[0]
        let endDate=dateSelect.value[1]
        if(typeof(dateSelect.value[0])=='object'){
          startDate=moment(dateSelect.value[0]).format("YYYY-MM-DD HH:mm:ss")
          endDate=moment(dateSelect.value[1]).format("YYYY-MM-DD HH:mm:ss")
        }
        let data={
        open_advertising:Number(openAD.value),
        open_fake_page:Number(openFakePage.value),
        start_date:startDate,
        end_date: endDate
      }
      console.log(form.id,data);
      updateFakePageData(form.id,data).then(res=>{
        if(res.status==200){
          ElMessage({
            message: '修改成功',
            type: 'success',
          })
        }
        
      })
      }else {
        ElMessage.error("下拉框的值不能为空");
      }
     
    },
    
    // 重置
    onReset() {
      console.log("formRef.value", formRef.value);
      formRef.value.resetFields();
      this.$router.push("/risk");
    },
  },
};
</script>
