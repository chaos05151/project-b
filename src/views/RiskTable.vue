<template>
  <div class="">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>风控系统</el-breadcrumb-item>
        <el-breadcrumb-item>风控配置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="handle-box">
        <!-- 项目:&nbsp;&nbsp; -->
        <el-select v-model="main_product_name_selected" placeholder="项目" class="m-2" @change="getProductAndDataList">
          <el-option label="全部" value="-1"></el-option>
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.main_product_name"
            :value="item.id"
          /> </el-select
        >&nbsp;&nbsp;
        <el-button
          v-show="showDeviceLogin && whichTab == 0"
          type="primary"
          @click="deviceLoginShow = true"
        >
          默认规则
        </el-button>
        <el-button
          v-show="showWechatBind && whichTab == 1"
          type="primary"
          @click="wechatBindShow = true"
        >
          默认规则
        </el-button>
        <el-button
          v-show="showRealName && whichTab == 2"
          type="primary"
          @click="realNameShow = true"
        >
          默认规则
        </el-button>
        <el-button
          v-show="showPhoneBind && whichTab == 3"
          type="primary"
          @click="phoneBindShow = true"
        >
          默认规则
        </el-button>
        <el-button
          v-show="showPrivacy && whichTab == 4"
          type="primary"
          @click="privacyShow = true"
        >
          默认规则
        </el-button>
        <el-button type="primary" @click="addRule"> 新增项目 </el-button>
        <el-drawer
          v-model="deviceLoginShow"
          title="设备登录限制默认规则信息："
          direction="rtl"
          size="50%"
        >
          <el-form
            ref="formRef"
            :rules="rules"
            :model="form"
            label-width="280px"
          >
            <el-form-item label="允许模拟器登录" prop="simulator_login_status">
              <el-switch v-model="form.simulator_login_status" active-value="允许" inactive-value="不允许"></el-switch>
            </el-form-item>
            <el-form-item
              label="允许多开设备登录"
              prop="more_open_login_status"
            >
            <el-switch v-model="form.more_open_login_status" active-value="允许" inactive-value="不允许"></el-switch>
            </el-form-item>
            <el-form-item
              label="允许风险设备登录"
              prop="risk_device_disabled_status"
            >
            <el-switch v-model="form.risk_device_disabled_status" active-value="允许" inactive-value="不允许"></el-switch>
            </el-form-item>
            <el-form-item
              label="允许异常设备登录"
              prop="exception_login_status"
            >
            <el-switch v-model="form.exception_login_status" active-value="允许" inactive-value="不允许"></el-switch> 
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
            <el-switch v-model="form.simulator_watch_advertisement_status" active-value="允许" inactive-value="不允许"></el-switch>
            </el-form-item>
            <el-form-item
              label="允许多开设备看广告"
              prop="more_open_watch_advertisement_status"
            >
            <el-switch v-model="form.more_open_watch_advertisement_status" active-value="允许" inactive-value="不允许"></el-switch>
            </el-form-item>
            <el-form-item
              label="允许异常设备看广告"
              prop="exception_device_watch_advertisement_status"
            >
            <el-switch v-model="form.exception_device_watch_advertisement_status" active-value="允许" inactive-value="不允许"></el-switch>
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
              <el-date-picker v-model="form.appoint_time" type="datetimerange" range-separator="To"
              start-placeholder="Start date" end-placeholder="End date" value-format="YYYY-MM-DD HH:mm:ss"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"  @click="deviceLoginShow = false">取消</el-button>
              <el-button type="primary" @click="submitDefault">保存</el-button>
            </el-form-item>
          </el-form> 
        </el-drawer>
        <el-drawer
          v-model="wechatBindShow"
          title="微信账号绑定默认规则信息："
          direction="rtl"
          size="50%"
        >
          <el-form
            ref="formRef"
            :rules="rules"
            :model="form"
            label-width="280px"
          >
            <el-form-item label="最多绑定数量" prop="account_bind_num">
              <el-input
                
                style="width: 150px"
                v-model="form.account_bind_num"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="每日提现次数" prop="one_day_withdrawal_count">
              <el-input
                
                style="width: 150px"
                v-model="form.one_day_withdrawal_count"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="生效时间" prop="appoint_time">
              <el-date-picker v-model="form.appoint_time" type="datetimerange" range-separator="To"
              start-placeholder="Start date" end-placeholder="End date" value-format="YYYY-MM-DD HH:mm:ss"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"  @click="wechatBindShow = false">取消</el-button>
              <el-button type="primary" @click="submitDefault">保存</el-button>
            </el-form-item>
          </el-form>
        </el-drawer>
        <el-drawer
          v-model="realNameShow"
          title="实名认证&防沉迷默认规则信息："
          direction="rtl"
          size="50%"
        >
          <el-form
            ref="formRef"
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
              <el-select v-model="form.real_name_authentication_node" placeholder="请选择">
                            <el-option key="bbk" label="登录前" :value="1"></el-option>
                            <el-option key="xtc" label="登录成功X次后" :value="2"></el-option>
                            <el-option key="imoo" label="提现成功X次后" :value="3"></el-option>
                            <el-option key="imoo" label="绑定微信后第二次登录" :value="4"></el-option>
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
            <el-form-item label="阿里云接口" v-show="form.real_name_authentication_api == 1" prop="aliyun_app_code">
              <el-input
                
                style="width: 150px"
                v-model="form.aliyun_app_code"
              ></el-input>
            </el-form-item>
            <el-form-item v-show="form.real_name_authentication_api == 2" label="zxb_app_id"
                        prop="zxb_app_id">
                        <el-input style="width: 150px" v-model="form.zxb_app_id"></el-input>
              </el-form-item>
              <el-form-item v-show="form.real_name_authentication_api == 2" label="zxb_biz_id"
                        prop="zxb_biz_id">
                        <el-input style="width: 150px" v-model="form.zxb_biz_id"></el-input>
              </el-form-item>
              <el-form-item v-show="form.real_name_authentication_api == 2" label="zxb_secret_key"
                        prop="zxb_secret_key">
                        <el-input style="width: 150px" v-model="form.zxb_secret_key"></el-input>
              </el-form-item>
            <el-form-item label="防沉迷开启" prop="anti_addiction_status">
              <el-radio-group v-model="form.anti_addiction_status">
                            <el-radio :label="1">关闭</el-radio>
                            <el-radio :label="2">部分开启</el-radio>
                            <el-radio :label="3">全部开启</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="开启条件" v-show="form.real_name_authentication_api == 2" prop="anti_addiction_open_condition">
              <el-radio-group v-model="form.anti_addiction_open_condition">
                            <el-radio :label="1">全部用户</el-radio>
                            <el-radio :label="2">新用户</el-radio>
                            <el-radio :label="3">老用户</el-radio>
                        </el-radio-group>
              <el-input
                
                style="width: 150px"
                v-model="form.anti_addiction_open_condition"
              ></el-input>
            </el-form-item>
            <el-form-item label="生效时间" prop="appoint_time">
              <el-date-picker v-model="form.appoint_time" type="datetimerange" range-separator="To"
              start-placeholder="Start date" end-placeholder="End date" value-format="YYYY-MM-DD HH:mm:ss"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"  @click="realNameShow = false">取消</el-button>
              <el-button type="primary" @click="submitDefault">保存</el-button>
            </el-form-item>
          </el-form>
        </el-drawer>
        <el-drawer
          v-model="phoneBindShow"
          title="手机绑定默认规则信息："
          direction="rtl"
          size="50%"
        >
          <el-form
            ref="formRef"
            :rules="rules"
            :model="form"
            label-width="280px"
          >
            <el-form-item
              label="是否开启手机绑定"
              prop="mobile_phone_bind_status"
            >
            <el-switch v-model="form.mobile_phone_bind_status" :active-value="2" :inactive-value="1"></el-switch>
            </el-form-item>
            <el-form-item
              label="手机绑定条件"
              prop="mobile_phone_bind_condition"
            >
            <el-radio-group v-model="form.mobile_phone_bind_condition">
                            <el-radio :label="1">全部用户</el-radio>
                            <el-radio :label="2">新用户</el-radio>
                            <el-radio :label="3">老用户</el-radio>
                        </el-radio-group>
            </el-form-item>
            <el-form-item label="生效时间" prop="appoint_time">
              <el-date-picker v-model="form.appoint_time" type="datetimerange" range-separator="To"
              start-placeholder="Start date" end-placeholder="End date" value-format="YYYY-MM-DD HH:mm:ss"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"  @click="phoneBindShow = false">取消</el-button>
              <el-button type="primary" @click="submitDefault">保存</el-button>
            </el-form-item>
          </el-form>
        </el-drawer>
        <el-drawer
          v-model="privacyShow"
          title="隐私协议默认规则信息："
          direction="rtl"
          size="50%"
        >
          <el-form
            ref="formRef"
            :rules="rules"
            :model="form"
            label-width="280px"
          >
            <el-form-item label="用户协议" prop="user_agreement_url">
              <el-input
                style="width: 150px"
                v-model="form.user_agreement_url"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="隐私协议" prop="privacy_agreement_url">
              <el-input
               
                style="width: 150px"
                v-model="form.privacy_agreement_url"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="生效时间" prop="appoint_time">
              <el-date-picker v-model="form.appoint_time" type="datetimerange" range-separator="To"
              start-placeholder="Start date" end-placeholder="End date" value-format="YYYY-MM-DD HH:mm:ss"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"   @click="privacyShow = false">取消</el-button>
              <el-button type="primary" @click="submitDefault">保存</el-button>
            </el-form-item>
          </el-form>
        </el-drawer>
      </div>
      <!-- <el-button type="primary" style='position: absolute;right:10px;top:1px;'>添加规则</el-button> -->
      <div>
        <el-tabs v-model="message" type="border-card" @tab-click="handleTabClick">
          <el-tab-pane label="设备登录限制" name="first">
            <el-table :data="tableDataAAAA" style="width: 100%">
              <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHeaderFirstTab"
                :key="item.prop">
                <template #default="scope">
                  <div v-show="item.editable || scope.row.editable" class="editable-row">
                    <template v-if="item.type === 'input'">
                      <el-input :disabled="item.isedited" v-show="item.show" size="small" v-model="scope.row[item.prop]"
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
                  <el-button type="text" icon="el-icon-edit" @click="handleDeviceLoginEdit(scope.row.id, scope.row)">编辑
                  </el-button>
                  <el-button type="text" icon="el-icon-delete" @click="handleDeviceLoginDelete(scope.row.id)">删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="pagination">
              <el-pagination background layout="total, prev, pager, next" :current-page="query.page_index"
                :page-size="query.page_size" :total="pageTotal" @current-change="handleDevicePageChange">
              </el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="微信账号绑定" name="second">
            <el-table :data="tableDataBBBB" style="width: 100%">
              <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHeaderSecondTab"
                :key="item.prop">
                <template #default="scope">
                  <div v-show="item.editable || scope.row.editable" class="editable-row">
                    <template v-if="item.type === 'input'">
                      <el-input :disabled="item.isedited" size="small" v-model="scope.row[item.prop]"
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
                  <el-button type="text" icon="el-icon-edit" @click="handleWechatBindEdit(scope.row.id, scope.row)">编辑
                  </el-button>
                  <el-button type="text" icon="el-icon-delete" @click="handleWechatBindDelete(scope.row.id)">删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="pagination">
              <el-pagination background layout="total, prev, pager, next" :current-page="query.page_index"
                :page-size="query.page_size" :total="pageTotal" @current-change="handleWechatPageChange">
              </el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="实名认证&防沉迷" name="third">
            <el-table :data="tableDataCCCC" style="width: 100%">
              <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHeaderThirdTab"
                :key="item.prop">
                <template #default="scope">
                  <div v-show="item.editable || scope.row.editable" class="editable-row">
                    <template v-if="item.type === 'input'">
                      <el-input :disabled="item.isedited" size="small" v-model="scope.row[item.prop]"
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
                  <el-button type="text" icon="el-icon-edit" @click="handleRealNameEdit(scope.row.id, scope.row)">编辑
                  </el-button>
                  <el-button type="text" icon="el-icon-delete" @click="handleRealNameDelete(scope.row.id)">删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="pagination">
              <el-pagination background layout="total, prev, pager, next" :current-page="query.page_index"
                :page-size="query.page_size" :total="pageTotal" @current-change="handleRealNamePageChange">
              </el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="手机绑定" name="four">
            <el-table :data="tableDataDDDD" style="width: 100%">
              <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHeaderFourTab"
                :key="item.prop">
                <template #default="scope">
                  <div v-show="item.editable || scope.row.editable" class="editable-row">
                    <template v-if="item.type === 'input'">
                      <el-input :disabled="item.isedited" size="small" v-model="scope.row[item.prop]"
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
                  <el-button type="text" icon="el-icon-edit" @click="handlePhoneBindEdit(scope.row.id, scope.row)">编辑
                  </el-button>
                  <el-button type="text" icon="el-icon-delete" @click="handlePhoneBindDelete(scope.row.id)">删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="pagination">
              <el-pagination background layout="total, prev, pager, next" :current-page="query.page_index"
                :page-size="query.page_size" :total="pageTotal" @current-change="handlePhoneBindPageChange">
              </el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="隐私协议" name="five">
            <el-table :data="tableDataEEEE" style="width: 100%">
              <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHeaderFiveTab"
                :key="item.prop">
                <template #default="scope">
                  <div v-show="item.editable || scope.row.editable" class="editable-row">
                    <template v-if="item.type === 'input'">
                      <el-input :disabled="item.isedited" size="small" v-model="scope.row[item.prop]"
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
                  <el-button type="text" icon="el-icon-edit" @click="handlePrivacyEdit(scope.row.id, scope.row)">编辑
                  </el-button>
                  <el-button type="text" icon="el-icon-delete" @click="handlePrivacyDelete(scope.row.id)">删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="pagination">
              <el-pagination background layout="total, prev, pager, next" :current-page="query.page_index"
                :page-size="query.page_size" :total="pageTotal" @current-change="handlePrivacyPageChange">
              </el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="假页面" name="six">
            <el-table :data="tableDataFFFF" style="width: 100%">
              <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in tableHeaderSixTab"
                :key="item.prop">
              </el-table-column>
              <el-table-column label="操作">
                <template #default="scope">
                  <el-button type="text" icon="el-icon-edit" @click="handleFakePageEdit(scope.row.id, scope.row)">编辑
                  </el-button>
                  <el-button type="text" icon="el-icon-delete" @click="handleFakePageDelete(scope.row.id)">删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="pagination">
              <el-pagination background layout="total, prev, pager, next" :current-page="query.page_index"
                :page-size="query.page_size" :total="pageTotal" @current-change="handlePageChange"></el-pagination>
            </div>
            <!-- <el-button type="danger" @click="handleFakePageEdit">测试</el-button> -->
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {  useRouter } from "vue-router";
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import riskjson from "../config/risk.json";
import { fetchMainProductList } from "../api/product";
import {
  fetchDeviceLoginTableData,
  fetchWechatBindTableData,
  fetchPrivacyTableData,
  fetchRealNameTableData,
  fetchPhoneBindTableData,
  deleteDeviceLogin,
  deleteWechatBind,
  deleteRealName,
  deletePhoneBind,
  deletePrivacy,
  getFakePageData,
  deleteFakePageData,
  updatePhoneBind,
  updatePrivacy,
  updateDeviceLogin,
  updateWechatBind,
  updateRealName,
  addDeviceLogin,
  addPhoneBind,
  addPrivacy,
  addRealName,
  addWechatBind,
} from "../api/risk";
import moment from "moment";
import { main } from "@popperjs/core";
const router=useRouter()
const main_product_name_selected = ref("");
const formRef = ref(null);
const whichTab = ref('0');
const message = ref("first");
let options = ref([]);
const query = reactive({
  page_index: 1,
  page_size: 10,
  config_type:1
});
const pageTotal = ref(0);
const deviceLoginShow = ref(false);
const wechatBindShow = ref(false);
const phoneBindShow = ref(false);
const realNameShow = ref(false);
const privacyShow = ref(false);
const showDeviceLogin = ref(false);
const showWechatBind = ref(false);
const showPhoneBind = ref(false);
const showRealName = ref(false);
const showPrivacy = ref(false);
const form = reactive({});
const tableDataAAAA = ref([]);
const tableDataBBBB = ref([]);
const tableDataCCCC = ref([]);
const tableDataDDDD = ref([]);
const tableDataEEEE = ref([]);
const tableDataFFFF = ref([]);
const tableHeaderFirstTab = riskjson.RiskHeaderFirstTab.filter(
  (column) => column.show
);
const tableHeaderSecondTab = riskjson.RiskHeaderSecondTab.filter(
  (column) => column.show
);
const tableHeaderThirdTab = riskjson.RiskHeaderThirdTab.filter(
  (column) => column.show
);
const tableHeaderFourTab = riskjson.RiskHeaderFourTab.filter(
  (column) => column.show
);
const tableHeaderFiveTab = riskjson.RiskHeaderFiveTab.filter(
  (column) => column.show
);
const tableHeaderSixTab = riskjson.RiskHeaderSixTab.filter(
  (column) => column.show
);
//数字状态值转换：0：不允许；1：允许
const convertNumToString = (idValue) => {
  if (idValue == 1) return "允许";
  if (idValue == 0) return "不允许";
};
//获取项目产品信息 select框
const getProductDataList = () => {
  fetchMainProductList()
    .then((res) => {
      options.value = res.data;
    })
    .catch(() => {
      // ElMessage.error("服务器异常！");
    });
};
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
//提交默认配置
const submitDefault=()=>{
  let appoint_time_format
 
  console.log(whichTab.value);
  switch(whichTab.value){
    case '0':
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
        //   formRef.value.validate((valid) => {
        // if (valid) {
        //   if (form.one_device_login_num) {
        //     if (!checkNonnegate(form.one_device_login_num)) return;
        //   }
        //   if (form.exception_device_watch_advertisement_num) {
        //     if (!checkNonnegate(form.exception_device_watch_advertisement_num))
        //       return;
        //   }
          let data0 = {
            simulator_login_status: form.simulator_login_status=="允许"? 1 : 0, //模拟器登录
            more_open_login_status: form.more_open_login_status=="允许"? 1 : 0, //多开登录
            risk_device_disabled_status:form.risk_device_disabled_status=="允许"? 1 : 0,//风险设备
            exception_login_status: form.exception_login_status=="允许"? 1 : 0, //异常登录
            one_device_login_num:Number(form.one_device_login_num) , //单设备登录数
            exception_device_watch_advertisement_num:
              Number(form.exception_device_watch_advertisement_num), //异常设备观看广告数量
            simulator_watch_advertisement_status:
              form.simulator_watch_advertisement_status=="允许"? 1 : 0, //模拟器观看广告
            more_open_watch_advertisement_status:
              form.more_open_watch_advertisement_status=="允许"? 1 : 0, //多开设备看广告
            appoint_time: appoint_time_format, //指定生效时间
            congfig_type:0
          };
          console.log(data0);
          addDeviceLoginData(data0)
          // updateDeviceLoginData(main_product_name_selected.value, data0);
        // } else {
        //   return false;
        // }
      // });
      break;
    case '1':
      console.log("1");
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
      // formRef.value.validate((valid) => {
      //   if (valid) {
      //     if (form.account_bind_num) {
      //       if (!checkNonnegate(form.account_bind_num)) return;
      //     }
      //     if (form.one_day_withdrawal_count) {
      //       if (!checkNonnegate(form.one_day_withdrawal_count)) return;
      //     }
          console.log("form", form);
          let data1 = {
            account_bind_num:Number(form.account_bind_num) , //最多绑定数量
            one_day_withdrawal_count:Number(form.one_day_withdrawal_count), //每日提现次数
            appoint_time: appoint_time_format, //指定生效时间
            congfig_type:0
          };
          console.log(data1);
          addWechatBindData(data1)
        // } else {
        //   return false;
        // }
      // });
      break;
    case '2':
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
      // formRef.value.validate((valid) => {
      //   if (valid) {
      //     console.log("form", form);
          let  data2 = {
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
            congfig_type:0
          };
          console.log(data2);
          addRealNameData(data2)

      //   } else {
      //     return false;
      //   }
      // });
      break;
    case '3':
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
      // formRef.value.validate((valid) => {
      //   if (valid) {
          let data3 = {
            mobile_phone_bind_status: form.mobile_phone_bind_status ? 1 : 2, //是否开启手机绑定	1开启 2关闭
            mobile_phone_bind_condition: parseInt(
              form.mobile_phone_bind_condition
            ), //手机绑定条件	1新用户 2老用户 3所有用户
            appoint_time: appoint_time_format, //指定生效时间
            congfig_type:0
          };
          console.log(data3);
          addPhoneBindData(data3);
      //   } else {
      //     return false;
      //   }
      // });
      break;
    case '4':
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
      // formRef.value.validate((valid) => {
        // if (valid) {
          let data4 = {
            user_agreement_url: form.user_agreement_url, //用户协议
            privacy_agreement_url: form.privacy_agreement_url, //隐私协议
            appoint_time: appoint_time_format, //指定生效时间
            congfig_type:0
          };
          console.log(data4);
          addPrivacyData(data4);
        // } else {
        //   return false;
        // }
      // });
      break;
  }
 
}
//获取默认规则defaultRules
const getDefaultRules=()=>{
  let data={
    config_type:0
  }
  console.log("getDefaultRules",typeof(whichTab.value),whichTab.value);
  switch (whichTab.value){
    case '0':
    fetchDeviceLoginTableData(data).then(res=>{
      if(res.status==200){
        res.data.lists.map(item=>{
          return{
            ...item,
            updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss"),
            simulator_login_status:
              item.simulator_login_status == 1 ? "允许" : "不允许",
            more_open_login_status:
              item.more_open_login_status == 1 ? "允许" : "不允许",
            risk_device_disabled_status:
               item.risk_device_disabled_status == 1 ? "允许" : "不允许",
            exception_login_status:
              item.exception_login_status == 1 ? "允许" : "不允许",
            simulator_watch_advertisement_status:
              item.simulator_watch_advertisement_status == 1
                ? "允许"
                : "不允许",
            more_open_watch_advertisement_status:
              item.more_open_watch_advertisement_status == 1
                ? "允许"
                : "不允许",
          }
        })
        form.value = res.data.lists.filter((column) => column.config_type != 1)[0];
      if (form.value.config_type == 0) {
        console.log(form.value.config_type);
        showDeviceLogin.value = true;
        form.appoint_time = "";
        form.one_device_login_num = form.value.one_device_login_num;
        form.exception_device_watch_advertisement_num =
          form.value.exception_device_watch_advertisement_num;
        form.simulator_login_status = convertNumToString(
          form.value.simulator_login_status
        );
        form.more_open_login_status = convertNumToString(
          form.value.more_open_login_status
        );
        form.risk_device_disabled_status = convertNumToString(
          form.value.risk_device_disabled_status
        );
        form.exception_login_status = convertNumToString(
          form.value.exception_login_status
        );
        form.simulator_watch_advertisement_status = convertNumToString(
          form.value.simulator_watch_advertisement_status
        );
        form.more_open_watch_advertisement_status = convertNumToString(
          form.value.more_open_watch_advertisement_status
        );
        form.exception_device_watch_advertisement_status = convertNumToString(
          form.value.exception_device_watch_advertisement_status
        );
        console.log("871",form);
      }
      }
    }).catch(err=>{
      console.log(err);
    })
      break;
    case '1':
    fetchWechatBindTableData(data).then(res=>{
      res.data.lists.map(item=>{
        return {
            ...item,
            updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss")
          };
      })
      form.value = res.data.lists.filter((column) => column.config_type != 1)[0];
      if (form.value.config_type == 0) {
        console.log(form.value.config_type);
        showWechatBind.value = true;
        form.account_bind_num = form.value.account_bind_num;
        form.one_day_withdrawal_count = form.value.one_day_withdrawal_count;
        form.appoint_time = "";
      }
    }).catch(err=>{console.log(err);})
      break;
    case '2':
    fetchRealNameTableData(data).then(res=>{
      res.data.lists.map(item=>{
        return {
            ...item,
            updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss"),
            open_real_name_authentication_status:
            item.open_real_name_authentication_status,
            real_name_authentication_node:
              item.real_name_authentication_node,
            anti_addiction_status:
              item.anti_addiction_status,
            anti_addiction_open_condition:
              item.anti_addiction_open_condition,
            real_name_authentication_api:
              item.real_name_authentication_api 
          };
      })
      form.value = res.data.lists.filter((column) => column.config_type != 1)[0];
      if (form.value.config_type == 0) {
        showRealName.value = true;
        form.open_real_name_authentication_status=
        ///////////////////
            form.value.open_real_name_authentication_status,
            form.real_name_authentication_node=
              form.value.real_name_authentication_node ;
            form.anti_addiction_status=
              form.value.anti_addiction_status;
            form.anti_addiction_open_condition=
              form.value.anti_addiction_open_condition;
            form.real_name_authentication_api=
              form.value.real_name_authentication_api;
            form.zxb_app_id=null,
            form.zxb_biz_id=null,
            form.zxb_secret_key=null,
            form.open_escalation_status=1
              // zxb_app_id: null,
                        // zxb_biz_id: null,
                        // zxb_secret_key: null,
                        // open_escalation_status: 1,
      }
    }).catch(err=>{console.log(err);})
      break;
    case '3':
    fetchPhoneBindTableData(data).then(res=>{
      res.data.lists.map(item=>{
        return {
            ...item,
            mobile_phone_bind_status:item.mobile_phone_bind_status,
            mobile_phone_bind_condition:item.mobile_phone_bind_condition,
            updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss")
          };
      })
      form.value = res.data.lists.filter((column) => column.config_type != 1)[0];
      if (form.value.config_type == 0) {
        showPhoneBind.value = true;
        form.mobile_phone_bind_status = form.value.mobile_phone_bind_status;
        form.mobile_phone_bind_condition =
          form.value.mobile_phone_bind_condition;
        form.appoint_time = "";
      }
    }).catch(err=>{console.log(err);})
      break;
    case '4':
    fetchPrivacyTableData(data).then(res=>{
      res.data.lists.map(item=>{
        return {
            ...item,
            updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss")
          };
      })
      form.value = res.data.lists.filter((column) => column.config_type != 1)[0];
      if (form.value.config_type == 0) {
        showPrivacy.value = true;
        form.user_agreement_url = form.value.user_agreement_url;
        form.privacy_agreement_url = form.value.privacy_agreement_url;
        form.appoint_time = "";
      }
    }).catch(err=>{console.log(err);})
      break;
    case '5':
      break;
  }
}
//获取设备登录信息所有数据
const getDeviceLoginDataList = (data) => {
  fetchDeviceLoginTableData(data)
    .then((res) => {
      if(res.status ==200){
//config_type:0,默认规则;1,单个产品配置
      //表格数据展示单个产品的配置
      console.log("table1",res.data.lists);
      tableDataAAAA.value = res.data.lists
        .filter((column) => column.config_type != 0)
        .map((item) => {
          return {
            ...item,
            updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss"),
            simulator_login_status:
              item.simulator_login_status == 1 ? "允许" : "不允许",
            more_open_login_status:
              item.more_open_login_status == 1 ? "允许" : "不允许",
            risk_device_disabled_status:
               item.risk_device_disabled_status == 1 ? "允许" : "不允许",
            exception_login_status:
              item.exception_login_status == 1 ? "允许" : "不允许",
            simulator_watch_advertisement_status:
              item.simulator_watch_advertisement_status == 1
                ? "允许"
                : "不允许",
            more_open_watch_advertisement_status:
              item.more_open_watch_advertisement_status == 1
                ? "允许"
                : "不允许",
          };
        });
        console.log("791",tableDataAAAA.value);
        pageTotal.value = res.data.total_count
  
      
      }else{
            if(res.message){
                ElMessage.error(res.message);
            }else{
                ElMessage.error('后端api接口异常！');
            }

        }


    })
    .catch(() => {
      // ElMessage.error("服务器异常！");
    });
    console.log(tableDataAAAA.value);
};
//获取设备登录信息所对应的项目数据
const getSelectedDeviceLoginDataList = (main_product_id) => {
  const data = {
    main_product_id,
    ...query
  };
  fetchDeviceLoginTableData(data)
    .then((res) => {
      tableDataAAAA.value = res.data.lists
        .filter((column) => column.config_type != 0)
        .map((item) => {
          return {
            ...item,
            updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss"),
            simulator_login_status:
              item.simulator_login_status == 1 ? "允许" : "不允许",
            more_open_login_status:
              item.more_open_login_status == 1 ? "允许" : "不允许",
            risk_device_disabled_status:
              risk_device_disabled_status == 1? "允许" : "不允许",
            exception_login_status:
              item.exception_login_status == 1 ? "允许" : "不允许",
            simulator_watch_advertisement_status:
              item.simulator_watch_advertisement_status == 1
                ? "允许"
                : "不允许",
            more_open_watch_advertisement_status:
              item.more_open_watch_advertisement_status == 1
                ? "允许"
                : "不允许"
          };
        });
        pageTotal.value = res.data.total_count
    })
    .catch(() => {
      // ElMessage.error("服务器异常！");
    });
};
//获取微信账号绑定所有数据
const getWechatBindDataList = (data) => {
  fetchWechatBindTableData(data)
    .then((res) => {
      tableDataBBBB.value = res.data.lists.filter(
        (column) => column.config_type != 0
      ).map((item) => {
          return {
            ...item,
            updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss")
          };
        });
        pageTotal.value = res.data.total_count

    })
    .catch(() => {
      ElMessage.error("服务器异常！");
    });
};
//获取微信账号绑定所对应的项目数据
const getSelectedWechatBindDataList = (main_product_id) => {
  const data = {
    main_product_id,
    ...query
  };
  fetchWechatBindTableData(data)
    .then((res) => {
      tableDataBBBB.value = res.data.lists.filter(
        (column) => column.config_type != 0
      ).map((item) => {
        return {
          ...item,
          updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss")
        };
      });
      pageTotal.value = res.data.total_count
      form.value = res.data.lists.filter((column) => column.config_type != 1)[0];
      if (form.value.config_type == 0) {
        showWechatBind.value = true;
        form.account_bind_num = form.value.account_bind_num;
        form.one_day_withdrawal_count = form.value.one_day_withdrawal_count;
        form.appoint_time = form.value.appoint_time;
      }
    })
    .catch(() => {
      // ElMessage.error("服务器异常！");
    });
};
//实名认证&防沉迷
const getRealNameDataList = (data) => {
  fetchRealNameTableData(data)
    .then((res) => {
      tableDataCCCC.value = res.data.lists
        .filter((column) => column.config_type != 0)
        .map((item) => {
          return {
            ...item,
            updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss"),
            open_real_name_authentication_status:
              item.open_real_name_authentication_status == 1
                ? "不开启"
                : item.open_real_name_authentication_status == 2
                  ? "开启(非强制)"
                  : "开启(强制)",
            real_name_authentication_node:
              item.real_name_authentication_node == 1
                ? "登录前"
                : item.anti_addiction_open_condition == 2
                  ? "登录成功XX后"
                  : item.anti_addiction_open_condition == 3
                    ? "提现X次后"
                    : "绑定微信后第二次登录",
            anti_addiction_status:
              item.anti_addiction_status == 1
                ? "关闭"
                : item.anti_addiction_status == 2
                  ? "部分开启"
                  : "全部开启",
            anti_addiction_open_condition:
              item.anti_addiction_open_condition == 1
                ? "所有用户"
                : item.anti_addiction_open_condition == 2
                  ? "新用户"
                  : item.anti_addiction_open_condition == 3
                    ? "老用户" : "",
            real_name_authentication_api:
              item.real_name_authentication_api == 1 ? "阿里云" : "中宣部"
          };
        });
        pageTotal.value = res.data.total_count
   
    })
    .catch(() => {
      // ElMessage.error("服务器异常！");
    });
};
//获取实名认证&防沉迷所对应的项目数据
const getSelectedRealNameList = (main_product_id) => {
  const data = {
    main_product_id,
    ...query
  };
  fetchRealNameTableData(data)
    .then((res) => {
      tableDataCCCC.value = res.data.lists
        .filter((column) => column.config_type != 0)
        .map((item) => {
          return {
            ...item,
            updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss"),
            open_real_name_authentication_status:
              item.open_real_name_authentication_status == 1
                ? "不开启"
                : item.open_real_name_authentication_status == 2
                  ? "开启(非强制)"
                  : "开启(强制)",
            real_name_authentication_node:
              item.real_name_authentication_node == 1
                ? "登录前"
                : item.anti_addiction_open_condition == 2
                  ? "登录成功XX后"
                  : item.anti_addiction_open_condition == 3
                    ? "提现X次后"
                    : "绑定微信后第二次登录",
            anti_addiction_status:
              item.anti_addiction_status == 1
                ? "关闭"
                : item.anti_addiction_status == 2
                  ? "部分开启"
                  : "全部开启",
            anti_addiction_open_condition:
              item.anti_addiction_open_condition == 1
                ? "所有用户"
                : item.anti_addiction_open_condition == 2
                  ? "新用户"
                  : "老用户",
            real_name_authentication_api:
              item.real_name_authentication_api == 1 ? "阿里云" : "中宣部"
          };
        });
        pageTotal.value = res.data.total_count
     
    })
    .catch(() => {
      // ElMessage.error("服务器异常！");
    });
};
//手机绑定
const getPhoneBindDataList = (data) => {
  fetchPhoneBindTableData(data)
    .then((res) => {
      tableDataDDDD.value = res.data.lists.filter(
        (column) => column.config_type != 0
      ).map((item) => {

          return {
            ...item,
            mobile_phone_bind_status:item.mobile_phone_bind_status == 2 ? '开启' : '不开启',
            mobile_phone_bind_condition:item.mobile_phone_bind_condition == 1 ? '全部用户' : item.mobile_phone_bind_condition == 2 ? '新用户' : '老用户',
            updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss")
          };
        });
        pageTotal.value = res.data.total_count
     

    })
    .catch(() => {
      // ElMessage.error("服务器异常！");
    });
};
//手机绑定
const getSelectedPhoneBindList = (main_product_id) => {
  const data = {
    main_product_id,
    ...query
  };
  fetchPhoneBindTableData(data)
    .then((res) => {
      tableDataDDDD.value = res.data.lists.filter(
        (column) => column.config_type != 0
      ).map((item) => {
        return {
          ...item,
          mobile_phone_bind_status: item.mobile_phone_bind_status == 1 ? '开启' : '不开启',
          mobile_phone_bind_condition: item.mobile_phone_bind_condition == 1 ? '全部用户' : item.mobile_phone_bind_condition == 2 ? '新用户' : '老用户',
          updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss")
        };
      });
      pageTotal.value = res.data.total_count
      form.value = res.data.lists.filter((column) => column.config_type != 1)[0];
      if (form.value.config_type == 0) {
        showPhoneBind.value = true;
        form.mobile_phone_bind_status = form.value.mobile_phone_bind_status;
        form.mobile_phone_bind_condition =
          form.value.mobile_phone_bind_condition;
        form.appoint_time = form.value.appoint_time;
      }
    })
    .catch(() => {
      // ElMessage.error("服务器异常！");
    });
};
//获取隐私协议所有数据
const getPrivacyDataList = (data) => {
  fetchPrivacyTableData(data)
    .then((res) => {
      tableDataEEEE.value = res.data.lists.filter(
        (column) => column.config_type != 0
      ).map((item) => {

          return {
            ...item,
            updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss")
          };
        });
        pageTotal.value = res.data.total_count
    

    })
    .catch(() => {
      // ElMessage.error("服务器异常！");
    });
};
//获取隐私协议所对应的项目数据
const getSelectedPrivacyDataList = (main_product_id) => {
  const data = {
    main_product_id,
    ...query
  };
  fetchPrivacyTableData(data)
    .then((res) => {
      tableDataEEEE.value = res.data.lists.filter(
        (column) => column.config_type != 0
      ).map((item) => {

          return {
            ...item,
            updated_at: moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss")
          };
        });
        pageTotal.value = res.data.total_count
     

    })
    .catch(() => {
      // ElMessage.error("服务器异常！");
    });
};
// 获取表格数据
const getData = () => {
  if (whichTab.value == 0) {
    getDefaultRules()
    if (main_product_name_selected.value > 0) {
      getSelectedDeviceLoginDataList(main_product_name_selected.value);
    } else {
      getDeviceLoginDataList(query);
    }
  } else if (whichTab.value == 1) {
    getDefaultRules()
    if (main_product_name_selected.value > 0) {
      getSelectedWechatBindDataList(main_product_name_selected.value);
    } else {
      getWechatBindDataList(query);
    }
  } else if (whichTab.value == 2) {
    getDefaultRules()
    if (main_product_name_selected.value > 0) {
      getSelectedRealNameList(main_product_name_selected.value);
    } else {
      getRealNameDataList(query);
    }
  } else if (whichTab.value == 3) {
    getDefaultRules()
    if (main_product_name_selected.value > 0) {
      getSelectedPhoneBindList(main_product_name_selected.value);
    } else {
      getPhoneBindDataList(query);
    }
  } else if (whichTab.value == 4) {
    getDefaultRules()
    if (main_product_name_selected.value > 0) {
      getSelectedPrivacyDataList(main_product_name_selected.value);
    } else {
      getPrivacyDataList(query);
    }
  } else if (whichTab.value == 5) {
    if (main_product_name_selected.value > 0) {
      getFakePageDataList(main_product_name_selected.value);
    } else {
      getFakePageDataList();
    }
  }
};

//删除微信账号绑定
const deleteWechatBindData = (id) => {
  deleteWechatBind(id).then((res) => {
    if (res.status == 200) {
      ElMessage.success("删除成功");
      getData();
    }
  });
};
//删除实名认证
const deleteRealNameData = (id) => {
  deleteRealName(id).then((res) => {
    if (res.status == 200) {
      ElMessage.success("删除成功");
      getData();
    }
  });
};
//删除手机绑定
const deletePhoneBindData = (id) => {
  deletePhoneBind(id).then((res) => {
    if (res.status == 200) {
      ElMessage.success("删除成功");
      getData();
    }
  });
};
//删除隐私协议
const deletePrivacyData = (id) => {
  deletePrivacy(id).then((res) => {
    if (res.status == 200) {
      ElMessage.success("删除成功");
      getData();
    }
  });
};

//假页面分页
const handlePageChange = (val) => {
  query.page_index = val
  getData()
}

//获取假页面数据
const getFakePageDataList = (main_product_id) => {
  let data = {
    ...query
  }
  delete data.config_type
  if(main_product_id){
    data={
      ...data,
      main_product_id: main_product_id
    }
  }
  console.log("假页面data", data);
  getFakePageData(data)
    .then((res) => {
      pageTotal.value = res.data.total_count
      tableDataFFFF.value = res.data.lists.map(item => {
        return {
          ...item,
          work_date: item.start_date + "-" + item.end_date,
          open_advertising: item.open_advertising == 1 ? "开启" : "关闭",
          open_fake_page: item.open_fake_page == 1 ? "开启" : "关闭"
        }
      })

    })
    .catch((err) => {
      console.log(err);
    })
}

//删除假页面数据
const handleFakePageDelete = (id) => {
  deleteFakePageData(id).then(res => {
    if (res.status == 200) {
      ElMessage({
        message: '删除成功',
        type: 'success',
      })
      getData();
    }
  })
}
//添加设备登录
const addDeviceLoginData = (data) => {
  addDeviceLogin(data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("添加设备登录默认规则成功");
    } else if (res.status == -1) {
      ElMessage.error("此游戏配置已存在！");
    }
  });
};
//添加微信账号绑定
const addWechatBindData = (data) => {
  addWechatBind(data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("添加微信账号绑定默认规则成功");
    } else if (res.status == -1) {
      ElMessage.error("此游戏配置已存在！");
    }
  });
};
//添加手机绑定
const addPhoneBindData = (data) => {
  addPhoneBind(data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("添加手机绑定默认规则成功");
    } else if (res.status == -1) {
      ElMessage.error("此游戏配置已存在！");
    }
  });
};
//添加防沉迷
const addRealNameData = (data) => {
  addRealName(data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("添加防沉迷默认规则成功");
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


getData();
getProductDataList();
const getProductAndDataList = () => {
  //获取对应的二级游戏列表
  getData();
};
// 设备登录分页导航
const handleDevicePageChange = (val) => {
  query.page_index = val;
  getProductAndDataList()
};
// 微信账号绑定分页导航
const handleWechatPageChange = (val) => {
  query.page_index = val;
  getProductAndDataList()
};
// 实名认证分页导航
const handleRealNamePageChange = (val) => {
  query.page_index = val;
  getProductAndDataList()
};
// 手机绑定分页导航
const handlePhoneBindPageChange = (val) => {
  query.page_index = val;
  getProductAndDataList()
};
// 隐私协议分页导航
const handlePrivacyPageChange = (val) => {
  query.page_index = val;
  getProductAndDataList()
};




const addRule = () => {
  router.push({
    name: "riskadd",
    params: { whichTab: whichTab.value },
  });
}
const editRule = () => {
  router.push({
    name: "riskedit",
    params: { whichTab: whichTab.value },
  });
}
const handleTabClick = (tab) => {
  // formRef.value.resetFields();
  // console.log(message.value)
  // console.log(tab.index)
  whichTab.value = tab.index;
  getData();
}
//设备登录修改
const handleDeviceLoginEdit = (id, item) => {
  const rowdata = {
    ...item,
    simulator_login_status: item.simulator_login_status == "允许" ? 1 : 0,
    more_open_login_status: item.more_open_login_status == "允许" ? 1 : 0,
    exception_login_status: item.exception_login_status == "允许" ? 1 : 0,
    simulator_watch_advertisement_status:
      item.simulator_watch_advertisement_status == "允许" ? 1 : 0,
    more_open_watch_advertisement_status:
      item.more_open_watch_advertisement_status == "允许" ? 1 : 0
  };
  router.push({
    name: "riskedit",
    params: {
      whichTab: whichTab.value,
      id: id,
      data: JSON.stringify(rowdata)
    },
  });
}
// 设备登录删除操作
const handleDeviceLoginDelete = (id) => {
  // 二次确认删除
  ElMessageBox.confirm("确定要删除吗？", "提示", {
    type: "warning",
  })
    .then(() => {
      deleteDeviceLoginData(id);
    })
    .catch(() => { });
}
//删除微信账号绑定
const deleteDeviceLoginData = (id) => {
  deleteDeviceLogin(id).then((res) => {
    if (res.status == 200) {
      ElMessage.success("删除成功");
      getData();
    }
  });
};
//微信绑定修改
const handleWechatBindEdit = (id, row) => {
  router.push({
    name: "riskedit",
    params: { whichTab: whichTab.value, id: id, data: JSON.stringify(row) },
  });
}
// 微信绑定删除操作
const handleWechatBindDelete = (id) => {
  // 二次确认删除
  ElMessageBox.confirm("确定要删除吗？", "提示", {
    type: "warning",
  })
    .then(() => {
      deleteWechatBindData(id);
    })
    .catch(() => { });
}
//实名认证修改
const handleRealNameEdit = (id, item) => {
  const rowdata = {
    ...item,
    open_real_name_authentication_status:
      item.open_real_name_authentication_status == "不开启"
        ? 1
        : item.open_real_name_authentication_status == "开启(非强制)"
          ? 2
          : 3,
    // real_name_authentication_node:
    //       item.real_name_authentication_node == "登录前"
    //         ? 1
    //         : item.anti_addiction_open_condition == "登录成功XX后"
    //         ? 2
    //         : item.anti_addiction_open_condition == "提现X次后"
    //         ? 3
    //         : 4,
    anti_addiction_status:
      item.anti_addiction_status == "关闭"
        ? 1
        : item.anti_addiction_status == "部分开启"
          ? 2
          : 3,
    anti_addiction_open_condition:
      item.anti_addiction_open_condition == "所有用户"
        ? 1
        : item.anti_addiction_open_condition == "新用户"
          ? 2
          : 3,
    real_name_authentication_api:
      item.real_name_authentication_api == "阿里云" ? 1 : 2
  };
  router.push({
    name: "riskedit",
    params: {
      whichTab: whichTab.value,
      id: id,
      data: JSON.stringify(rowdata),
    },
  });
}
// 实名认证删除操作
const handleRealNameDelete = (id) => {
  // 二次确认删除
  ElMessageBox.confirm("确定要删除吗？", "提示", {
    type: "warning",
  })
    .then(() => {
      deleteRealNameData(id);
    })
    .catch(() => { });
}
//手机绑定修改
const handlePhoneBindEdit = (id, item) => {
  const rowdata = {
    ...item,
    mobile_phone_bind_status: item.mobile_phone_bind_status == '开启' ? 1 : 2,
    mobile_phone_bind_condition: item.mobile_phone_bind_condition == '全部用户' ? 1 : item.mobile_phone_bind_condition == '新用户' ? 2 : 3
  };
  router.push({
    name: "riskedit",
    params: { whichTab: whichTab.value, id: id, data: JSON.stringify(rowdata) },
  });
}
// 手机绑定删除操作
const handlePhoneBindDelete = (id) => {
  // 二次确认删除
  ElMessageBox.confirm("确定要删除吗？", "提示", {
    type: "warning",
  })
    .then(() => {
      deletePhoneBindData(id);
    })
    .catch(() => { });
}
//隐私协议修改
const handlePrivacyEdit = (id, row) => {
  router.push({
    name: "riskedit",
    params: { whichTab: whichTab.value, id: id, data: JSON.stringify(row) },
  });
}
// 隐私协议删除操作
const handlePrivacyDelete = (id) => {
  // 二次确认删除
  ElMessageBox.confirm("确定要删除吗？", "提示", {
    type: "warning",
  })
    .then(() => {
      deletePrivacyData(id);
    })
    .catch(() => { });
}
//假页面修改
const handleFakePageEdit = (id, row) => {
  console.log("handleFakePageEdit", row);
  row = {
    ...row,
    open_advertising: row.open_advertising == "开启" ? 1 : 0,
    open_fake_page: row.open_fake_page == "开启" ? 1 : 0
  }
  router.push({
    name: "riskedit",
    params: { whichTab: whichTab.value, id: id, data: JSON.stringify(row) },
  })
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
