<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> 风控系统 </el-breadcrumb-item>
                <el-breadcrumb-item>产品管理</el-breadcrumb-item>
                <el-breadcrumb-item>风控配置</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <div>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>设备登录限制</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <el-divider />
                <el-form ref="formRef" :model="formDeviceLogin" label-width="280px">
                    <el-form-item label="允许模拟器登录" prop="simulator_login_status">
                        <el-switch v-model="formDeviceLogin.simulator_login_status"></el-switch>
                    </el-form-item>
                    <el-form-item label="允许多开设备登录" prop="more_open_login_status">
                        <el-switch v-model="formDeviceLogin.more_open_login_status"></el-switch>
                    </el-form-item>
                    <el-form-item label="允许异常设备登录" prop="exception_login_status">
                        <el-switch v-model="formDeviceLogin.exception_login_status"></el-switch>
                    </el-form-item>
                    <el-form-item label="单设备允许登录账号数" prop="one_device_login_num">
                        <el-input style="width: 150px" v-model="formDeviceLogin.one_device_login_num"></el-input>
                    </el-form-item>
                    <el-form-item label="允许模拟器设备看广告" prop="simulator_watch_advertisement_status">
                        <el-switch v-model="formDeviceLogin.simulator_watch_advertisement_status"></el-switch>
                    </el-form-item>
                    <el-form-item label="允许多开设备看广告" prop="more_open_watch_advertisement_status">
                        <el-switch v-model="formDeviceLogin.more_open_watch_advertisement_status"></el-switch>
                    </el-form-item>
                    <el-form-item label="允许异常设备看广告" prop="exception_device_watch_advertisement_status">
                        <el-switch v-model="formDeviceLogin.exception_device_watch_advertisement_status"></el-switch>
                    </el-form-item>
                    <el-form-item label="异常设备观看广告数量" prop="exception_device_watch_advertisement_num">
                        <el-input style="width: 150px"
                            v-model="formDeviceLogin.exception_device_watch_advertisement_num">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="生效时间" prop="appoint_time">
                        <el-date-picker v-model="formDeviceLogin.appoint_time" type="datetimerange" range-separator="To"
                            start-placeholder="Start date" end-placeholder="End date"
                            value-format="YYYY-MM-DD HH:mm:ss" />
                    </el-form-item>
                </el-form>
                <div>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>微信账号绑定</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <el-divider />
                <el-form ref="formRef" :model="formWechatBind" label-width="280px">
                    <el-form-item label="微信最多绑定账号数" prop="account_bind_num">
                        <el-input style="width: 150px" v-model="formWechatBind.account_bind_num"></el-input>
                    </el-form-item>
                    <el-form-item label="微信单日可提现数" prop="one_day_withdrawal_count">
                        <el-input style="width: 150px" v-model="formWechatBind.one_day_withdrawal_count">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="生效时间" prop="appoint_time">
                        <el-date-picker v-model="formWechatBind.appoint_time" type="datetimerange" range-separator="To"
                            start-placeholder="Start date" end-placeholder="End date"
                            value-format="YYYY-MM-DD HH:mm:ss" />
                    </el-form-item>
                </el-form>
                <div>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>实名认证&防沉迷</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <el-divider />
                <el-form ref="formRef" :model="formRealName" label-width="280px">
                    <el-form-item label="是否开启实名认证" prop="open_real_name_authentication_status">
                        <el-radio-group v-model="formRealName.real_name_authentication_node">
                            <el-radio label="1">不开启</el-radio>
                            <el-radio label="2">开启(非强制)</el-radio>
                            <el-radio label="3">开启(强制)</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="实名认证节点" prop="real_name_authentication_node">
                        <el-select v-model="formRealName.real_name_authentication_node" placeholder="请选择">
                            <el-option key="bbk" label="登录前" value="1"></el-option>
                            <el-option key="xtc" label="登录成功X次后" value="2"></el-option>
                            <el-option key="imoo" label="提现成功X次后" value="3"></el-option>
                            <el-option key="imoo" label="绑定微信后第二次登录" value="4"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="实名认证接口" prop="real_name_authentication_api">
                        <el-radio-group v-model="formRealName.real_name_authentication_api">
                            <el-radio label="1">阿里云</el-radio>
                            <el-radio label="2">中宣部</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item v-show="formRealName.real_name_authentication_api == 1" label="阿里云接口"
                        prop="aliyun_app_code">
                        <el-input style="width: 150px" v-model="formRealName.aliyun_app_code"></el-input>
                    </el-form-item>
                    <el-form-item v-show="formRealName.real_name_authentication_api == 2" label="zxb_app_id"
                        prop="zxb_app_id">
                        <el-input style="width: 150px" v-model="formRealName.zxb_app_id"></el-input>
                    </el-form-item>
                    <el-form-item v-show="formRealName.real_name_authentication_api == 2" label="zxb_biz_id"
                        prop="zxb_biz_id">
                        <el-input style="width: 150px" v-model="formRealName.zxb_biz_id"></el-input>
                    </el-form-item>
                    <el-form-item v-show="formRealName.real_name_authentication_api == 2" label="zxb_secret_key"
                        prop="zxb_secret_key">
                        <el-input style="width: 150px" v-model="formRealName.zxb_secret_key"></el-input>
                    </el-form-item>
                    <el-form-item v-show="formRealName.real_name_authentication_api == 2" label="是否开启数据上报"
                        prop="open_escalation_status">
                        <el-radio-group v-model="formRealName.open_escalation_status">
                            <el-radio label="1">关闭</el-radio>
                            <el-radio label="2">开启</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item v-show="formRealName.open_escalation_status == 2" label="中宣部上报接口"
                        prop="data_escalation_api">
                        <el-input style="width: 150px" v-model="formRealName.data_escalation_api"></el-input>
                    </el-form-item>
                    <el-form-item label="防沉迷开启" prop="anti_addiction_status">
                        <el-radio-group v-model="formRealName.anti_addiction_status">
                            <el-radio label="1">关闭</el-radio>
                            <el-radio label="2">部分开启</el-radio>
                            <el-radio label="3">全部开启</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item v-show="formRealName.anti_addiction_status == 2" label="部分开启条件" prop="anti_addiction_open_condition">
                        <el-radio-group v-model="formRealName.anti_addiction_open_condition">
                            <el-radio label="1">全部用户</el-radio>
                            <el-radio label="2">新用户</el-radio>
                            <el-radio label="3">老用户</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="生效时间" prop="appoint_time">
                        <el-date-picker v-model="formRealName.appoint_time" type="datetimerange" range-separator="To"
                            start-placeholder="Start date" end-placeholder="End date"
                            value-format="YYYY-MM-DD HH:mm:ss" />
                    </el-form-item>
                </el-form>
                <div>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>手机绑定</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <el-divider />
                <el-form ref="formRef" :model="formPhoneBind" label-width="280px">
                    <el-form-item label="开启手机绑定" prop="mobile_phone_bind_status">
                        <el-switch v-model="formPhoneBind.mobile_phone_bind_status"></el-switch>
                    </el-form-item>
                    <el-form-item label="手机绑定条件" prop="mobile_phone_bind_condition">
                        <el-radio-group v-model="formPhoneBind.mobile_phone_bind_condition">
                            <el-radio label="1">全部用户</el-radio>
                            <el-radio label="2">新用户</el-radio>
                            <el-radio label="3">老用户</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="生效时间" prop="appoint_time">
                        <el-date-picker v-model="formPhoneBind.appoint_time" type="datetimerange" range-separator="To"
                            start-placeholder="Start date" end-placeholder="End date"
                            value-format="YYYY-MM-DD HH:mm:ss" />
                    </el-form-item>
                </el-form>
                <div>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>隐私协议修改</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <el-divider />
                <el-form ref="formRef" :model="formPrivacy" label-width="280px">
                    <el-form-item label="用户协议地址" prop="user_agreement_url">
                        <el-input style="width: 150px" v-model="formPrivacy.user_agreement_url"></el-input>
                    </el-form-item>
                    <el-form-item label="隐私协议地址" prop="privacy_agreement_url">
                        <el-input style="width: 150px" v-model="formPrivacy.privacy_agreement_url">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="生效时间" prop="appoint_time">
                        <el-date-picker v-model="formPrivacy.appoint_time" type="datetimerange" range-separator="To"
                            start-placeholder="Start date" end-placeholder="End date"
                            value-format="YYYY-MM-DD HH:mm:ss" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">确定</el-button>
                        <el-button @click="onReset">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import moment from "moment";
import {
    addDeviceLogin,
    addPhoneBind,
    addPrivacy,
    addRealName,
    addWechatBind,
} from "../api/risk";
import { useRoute, useRouter } from "vue-router";
const formDeviceLogin = reactive({
});
const formWechatBind = reactive({
});
const formRealName = reactive({
});
const formPhoneBind = reactive({
});
const formPrivacy = reactive({
});
const formRef = ref(null);
//数字校验
const checkNonnegative = (value) => {
    if (value) {
        let z_reg = /^\d+(\.{0,1}\d+){0,1}$/;
        if (!z_reg.test(value)) {
            ElMessage.error("请先选择产品！");
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
        // formRef.value.resetFields();
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
        // formRef.value.resetFields();
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
        // formRef.value.resetFields();
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
        // formRef.value.resetFields();
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
        // formRef.value.resetFields();
        if (res.status == 200) {
            ElMessage.success("添加隐私协议成功");
        } else if (res.status == -1) {
            ElMessage.error("此游戏配置已存在！");
        }
    });
};
export default {
    name: "riskadd",
    setup() {
        const route = useRoute();
        const router = useRouter();
        const data = JSON.parse(route.params.data);
        console.log("route.params", route.params);
        console.log("route.params.data", route.params.data);
        const onSubmit = () => {
            // 表单校验
            formRef.value.validate((valid) => {
                if (valid) {
                    if (formDeviceLogin.one_device_login_num) {
                        if (!checkNonnegate(formDeviceLogin.one_device_login_num)) return;
                    }
                    if (formDeviceLogin.exception_device_watch_advertisement_num) {
                        if (!checkNonnegate(formDeviceLogin.exception_device_watch_advertisement_num))
                            return;
                    }
                    //设备登录
                    let appoint_time_format_device_login
          if (!formDeviceLogin.appoint_time) {
            appoint_time_format_device_login = moment().format("YYYY-MM-DD HH:mm:ss");
          } else {
            if(formDeviceLogin.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") && formDeviceLogin.appoint_time[1] > moment().format("YYYY-MM-DD HH:mm:ss"))
            appoint_time_format_device_login =
              formDeviceLogin.appoint_time[0] + "~" + formDeviceLogin.appoint_time[1];
              else {
                ElMessage.error("生效时间段不能在当前时间之前！");
                return
              }
          }
                    const deviceLoginData = {
                        config_type: 1, //配置类型：0，所有项目；1：指定项目
                        main_product_id: data.main_product_id, //父游戏id选填，选择父游戏id之后，只展示对应父游戏项目
                        main_product_name: data.main_product_name,
                        product_id: data.product_id, //子游戏id
                        product_name: data.product_name,
                        package_name: data.package_name,
                        simulator_login_status: formDeviceLogin.simulator_login_status ? 1 : 0, //模拟器登录
                        more_open_login_status: formDeviceLogin.more_open_login_status ? 1 : 0, //多开登录
                        exception_login_status: formDeviceLogin.exception_login_status ? 1 : 0, //异常登录
                        one_device_login_num: formDeviceLogin.one_device_login_num, //单设备登录数
                        exception_device_watch_advertisement_num: formDeviceLogin.exception_device_watch_advertisement_num, //异常设备观看广告数量
                        exception_device_watch_advertisement_status: formDeviceLogin.exception_device_watch_advertisement_status ? 1 : 0,
                        simulator_watch_advertisement_status:
                            formDeviceLogin.simulator_watch_advertisement_status ? 1 : 0, //模拟器观看广告
                        more_open_watch_advertisement_status:
                            formDeviceLogin.more_open_watch_advertisement_status ? 1 : 0, //多开设备看广告
                        appoint_time: appoint_time_format_device_login, //指定生效时间
                    };
                    addDeviceLoginData(deviceLoginData);

                    //微信账号绑定
                    if (formWechatBind.account_bind_num) {
                        if (!checkNonnegate(formWechatBind.account_bind_num)) return;
                    }
                    if (formWechatBind.one_day_withdrawal_count) {
                        if (!checkNonnegate(formWechatBind.one_day_withdrawal_count)) return;
                    }
                    let appoint_time_format_wechat_bind
          if (!formWechatBind.appoint_time) {
            appoint_time_format_wechat_bind = moment().format("YYYY-MM-DD HH:mm:ss");
          } else {
            if(formWechatBind.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") && formWechatBind.appoint_time[1] > moment().format("YYYY-MM-DD HH:mm:ss"))
            appoint_time_format_wechat_bind =
              formWechatBind.appoint_time[0] + "~" + formWechatBind.appoint_time[1];
              else {
                ElMessage.error("生效时间段不能在当前时间之前！");
                return
              }
          }
                    const wechatBindData = {
                        config_type: 1, //配置类型：0，所有项目；1：指定项目
                        main_product_id: data.main_product_id, //父游戏id选填，选择父游戏id之后，只展示对应父游戏项目
                        main_product_name: data.main_product_name,
                        product_id: data.product_id, //子游戏id
                        product_name: data.product_name,
                        package_name: data.package_name,
                        account_bind_num: formWechatBind.account_bind_num, //最多绑定数量
                        one_day_withdrawal_count: formWechatBind.one_day_withdrawal_count, //每日提现次数
                        appoint_time: appoint_time_format_wechat_bind, //指定生效时间
                    };
                    addWechatBindData(wechatBindData);

                    //实名认证
                    let appoint_time_format_real_name
                    if (!formRealName.appoint_time) {
                        appoint_time_format_real_name = moment().format("YYYY-MM-DD HH:mm:ss");
                    } else {
                        if (formRealName.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") && formRealName.appoint_time[1] > moment().format("YYYY-MM-DD HH:mm:ss"))
                            appoint_time_format_real_name =
                                formRealName.appoint_time[0] + "~" + formRealName.appoint_time[1];
                        else {
                            ElMessage.error("生效时间段不能在当前时间之前！");
                            return
                        }
                    }
                    const realNameData = {
                        config_type: 1, //配置类型：0，所有项目；1：指定项目
                        main_product_id: data.main_product_id, //父游戏id选填，选择父游戏id之后，只展示对应父游戏项目
                        main_product_name: data.main_product_name,
                        product_id: data.product_id, //子游戏id
                        product_name: data.product_name,
                        package_name: data.package_name,
                        open_real_name_authentication_status:
                            formRealName.open_real_name_authentication_status, //是否开启实名认证	1不开启  2开启（非强制） 3开启（强制）
                        real_name_authentication_node: formRealName.real_name_authentication_node, //实名认证节点	1登录前 2登陆成功xx后 3提现x次后 4绑定微信号第二次登录
                        real_name_authentication_api: formRealName.real_name_authentication_api, //实名认证接口	1阿里云 2中宣部
                        aliyun_app_code: formRealName.aliyun_app_code,
                        // zxb_app_id: null,
                        // zxb_biz_id: null,
                        // zxb_secret_key: null,
                        // open_escalation_status: 1, //系统用户行为数据上报开启	1关闭 2开启
                        // data_escalation_api: null, //上报接口
                        anti_addiction_status: parseInt(formRealName.anti_addiction_status), //防沉迷开启	1关闭 2部分开启 3全部开启
                        anti_addiction_open_condition: formRealName.anti_addiction_status == 2 ? parseInt(
                            formRealName.anti_addiction_open_condition
                  ) : '', //部分开启条件	1所有用户 2新用户 3老用户
                        appoint_time: appoint_time_format_real_name, //指定生效时间
                    };
                    addRealNameData(realNameData);

                    //手机绑定
                    let appoint_time_format_phone_bind
          if (!formPhoneBind.appoint_time) {
            appoint_time_format_phone_bind = moment().format("YYYY-MM-DD HH:mm:ss");
          } else {
            if(formPhoneBind.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") && formPhoneBind.appoint_time[1] > moment().format("YYYY-MM-DD HH:mm:ss"))
            appoint_time_format_phone_bind =
              formPhoneBind.appoint_time[0] + "~" + formPhoneBind.appoint_time[1];
              else {
                ElMessage.error("生效时间段不能在当前时间之前！");
                return
              }
          }
                    const phoneBindData = {
                        config_type: 1, //配置类型：0，所有项目；1：指定项目
                        main_product_id: data.main_product_id, //父游戏id选填，选择父游戏id之后，只展示对应父游戏项目
                        main_product_name: data.main_product_name,
                        product_id: data.product_id, //子游戏id
                        product_name: data.product_name,
                        package_name: data.package_name,
                        mobile_phone_bind_status: formPhoneBind.mobile_phone_bind_status ? 2 : 1, //是否开启手机绑定	1关闭 2开启
                        mobile_phone_bind_condition: parseInt(formPhoneBind.mobile_phone_bind_condition), //手机绑定条件	1新用户 2老用户 3所有用户
                        appoint_time: appoint_time_format_phone_bind, //指定生效时间
                    };
                    addPhoneBindData(phoneBindData);

                    //隐私协议
                    let appoint_time_format_privacy
          if (!formPrivacy.appoint_time) {
            appoint_time_format_privacy = moment().format("YYYY-MM-DD HH:mm:ss");
          } else {
            if(formPrivacy.appoint_time[0] > moment().format("YYYY-MM-DD HH:mm:ss") && formPrivacy.appoint_time[1] > moment().format("YYYY-MM-DD HH:mm:ss"))
            appoint_time_format_privacy =
              formPrivacy.appoint_time[0] + "~" + formPrivacy.appoint_time[1];
              else {
                ElMessage.error("生效时间段不能在当前时间之前！");
                return
              }
          }
                    const privacyData = {
                        config_type: 1, //配置类型：0，所有项目；1：指定项目
                        main_product_id: data.main_product_id, //父游戏id选填，选择父游戏id之后，只展示对应父游戏项目
                        main_product_name: data.main_product_name,
                        product_id: data.product_id, //子游戏id
                        product_name: data.product_name,
                        package_name: data.package_name,
                        user_agreement_url: formPrivacy.user_agreement_url, //用户协议
                        privacy_agreement_url: formPrivacy.privacy_agreement_url, //隐私协议
                        appoint_time: appoint_time_format_privacy, //指定生效时间
                    };
                    addPrivacyData(privacyData);

                    router.push("product");
                } else {
                    return false;
                }
            });
        };
        return {
            formRef,
            formDeviceLogin,
            formWechatBind,
            formRealName,
            formPhoneBind,
            formPrivacy,
            onSubmit,
        };
    },
    methods: {
        onReset() {
            formRef.value.resetFields();
            this.$router.push("/product");
        },
    },
};
</script>
