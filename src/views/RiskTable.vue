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
        <el-select
          v-model="main_product_name_selected"
          placeholder="项目名称"
          class="m-2"
          @change="getProductAndDataList"
        >
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
              <el-input
                disabled
                style="width: 150px"
                v-model="form.simulator_login_status"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="允许多开设备登录"
              prop="more_open_login_status"
            >
              <el-input
                disabled
                style="width: 150px"
                v-model="form.more_open_login_status"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="允许异常设备登录"
              prop="device_type"
            >
              <el-input
                disabled
                style="width: 150px"
                v-model="form.device_type"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="允许异常设备登录"
              prop="exception_login_status"
            >
              <el-input
                disabled
                style="width: 150px"
                v-model="form.exception_login_status"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="单设备允许登录账号数"
              prop="one_device_login_num"
            >
              <el-input
                disabled
                style="width: 150px"
                v-model="form.one_device_login_num"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="允许模拟器设备看广告"
              prop="simulator_watch_advertisement_status"
            >
              <el-input
                disabled
                style="width: 150px"
                v-model="form.simulator_watch_advertisement_status"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="允许多开设备看广告"
              prop="more_open_watch_advertisement_status"
            >
              <el-input
                disabled
                style="width: 150px"
                v-model="form.more_open_watch_advertisement_status"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="允许异常设备看广告"
              prop="exception_device_watch_advertisement_status"
            >
              <el-input
                disabled
                style="width: 150px"
                v-model="form.exception_device_watch_advertisement_status"
              >
              </el-input>
            </el-form-item>
            <el-form-item
              label="异常设备观看广告数量"
              prop="exception_device_watch_advertisement_num"
            >
              <el-input
                disabled
                style="width: 150px"
                v-model="form.exception_device_watch_advertisement_num"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="生效时间" prop="appoint_time">
              <el-input
                disabled
                style="width: 300px"
                v-model="form.appoint_time"
              />
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
                disabled
                style="width: 150px"
                v-model="form.account_bind_num"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="每日提现次数" prop="one_day_withdrawal_count">
              <el-input
                disabled
                style="width: 150px"
                v-model="form.one_day_withdrawal_count"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="生效时间" prop="appoint_time">
              <el-input
                disabled
                style="width: 300px"
                v-model="form.appoint_time"
              />
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
              <el-input
                disabled
                style="width: 150px"
                v-model="form.open_real_name_authentication_status"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="实名认证节点"
              prop="real_name_authentication_node"
            >
              <el-input
                disabled
                style="width: 150px"
                v-model="form.real_name_authentication_node"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="实名认证接口"
              prop="real_name_authentication_api"
            >
              <el-input
                disabled
                style="width: 150px"
                v-model="form.real_name_authentication_api"
              ></el-input>
            </el-form-item>
            <el-form-item label="阿里云接口" prop="aliyun_app_code">
              <el-input
                disabled
                style="width: 150px"
                v-model="form.aliyun_app_code"
              ></el-input>
            </el-form-item>
            <el-form-item label="防沉迷开启" prop="anti_addiction_status">
              <el-input
                disabled
                style="width: 150px"
                v-model="form.anti_addiction_status"
              ></el-input>
            </el-form-item>
            <el-form-item label="开启条件" prop="anti_addiction_open_condition">
              <el-input
                disabled
                style="width: 150px"
                v-model="form.anti_addiction_open_condition"
              ></el-input>
            </el-form-item>
            <el-form-item label="生效时间" prop="appoint_time">
              <el-input
                disabled
                style="width: 300px"
                v-model="form.appoint_time"
              />
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
              <el-input
                disabled
                style="width: 150px"
                v-model="form.mobile_phone_bind_status"
              >
              </el-input>
            </el-form-item>
            <el-form-item
              label="手机绑定条件"
              prop="mobile_phone_bind_condition"
            >
              <el-input
                disabled
                style="width: 150px"
                v-model="form.mobile_phone_bind_condition"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="生效时间" prop="appoint_time">
              <el-input
                disabled
                style="width: 300px"
                v-model="form.appoint_time"
              />
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
                disabled
                style="width: 150px"
                v-model="form.user_agreement_url"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="隐私协议" prop="privacy_agreement_url">
              <el-input
                disabled
                style="width: 150px"
                v-model="form.privacy_agreement_url"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="生效时间" prop="appoint_time">
              <el-input
                disabled
                style="width: 300px"
                v-model="form.appoint_time"
              />
            </el-form-item>
          </el-form>
        </el-drawer>
      </div>
      <!-- <el-button type="primary" style='position: absolute;right:10px;top:1px;'>添加规则</el-button> -->
      <div>
        <el-tabs
          v-model="message"
          type="border-card"
          @tab-click="handleTabClick"
        >
          <el-tab-pane label="设备登录限制" name="first">
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
                        :disabled="item.isedited"
                        v-show="item.show"
                        size="small"
                        v-model="scope.row[item.prop]"
                        :placeholder="`请输入${item.label}`"
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
              <el-table-column label="操作">
                <template #default="scope">
                  <el-button
                    type="text"
                    icon="el-icon-edit"
                    @click="handleDeviceLoginEdit(scope.row.id, scope.row)"
                    >编辑
                  </el-button>
                  <el-button
                    type="text"
                    icon="el-icon-delete"
                    @click="handleDeviceLoginDelete(scope.row.id)"
                    >删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="pagination">
              <el-pagination background layout="total, prev, pager, next" :current-page="query.page_index"
                :page-size="query.page_size" :total="pageTotal" @current-change="handleDevicePageChange"></el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="微信账号绑定" name="second">
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
                        :disabled="item.isedited"
                        size="small"
                        v-model="scope.row[item.prop]"
                        :placeholder="`请输入${item.label}`"
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
              <el-table-column label="操作">
                <template #default="scope">
                  <el-button
                    type="text"
                    icon="el-icon-edit"
                    @click="handleWechatBindEdit(scope.row.id, scope.row)"
                    >编辑</el-button
                  >
                  <el-button
                    type="text"
                    icon="el-icon-delete"
                    @click="handleWechatBindDelete(scope.row.id)"
                    >删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="pagination">
              <el-pagination background layout="total, prev, pager, next" :current-page="query.page_index"
                :page-size="query.page_size" :total="pageTotal" @current-change="handleWechatPageChange"></el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="实名认证&防沉迷" name="third">
            <el-table :data="tableDataCCCC" style="width: 100%">
              <el-table-column
                :prop="item.prop"
                :label="item.label"
                v-for="(item, index) in tableHeaderThirdTab"
                :key="item.prop"
              >
                <template #default="scope">
                  <div
                    v-show="item.editable || scope.row.editable"
                    class="editable-row"
                  >
                    <template v-if="item.type === 'input'">
                      <el-input
                        :disabled="item.isedited"
                        size="small"
                        v-model="scope.row[item.prop]"
                        :placeholder="`请输入${item.label}`"
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
              <el-table-column label="操作">
                <template #default="scope">
                  <el-button
                    type="text"
                    icon="el-icon-edit"
                    @click="handleRealNameEdit(scope.row.id, scope.row)"
                    >编辑</el-button
                  >
                  <el-button
                    type="text"
                    icon="el-icon-delete"
                    @click="handleRealNameDelete(scope.row.id)"
                    >删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="pagination">
              <el-pagination background layout="total, prev, pager, next" :current-page="query.page_index"
                :page-size="query.page_size" :total="pageTotal" @current-change="handleRealNamePageChange"></el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="手机绑定" name="four">
            <el-table :data="tableDataDDDD" style="width: 100%">
              <el-table-column
                :prop="item.prop"
                :label="item.label"
                v-for="(item, index) in tableHeaderFourTab"
                :key="item.prop"
              >
                <template #default="scope">
                  <div
                    v-show="item.editable || scope.row.editable"
                    class="editable-row"
                  >
                    <template v-if="item.type === 'input'">
                      <el-input
                        :disabled="item.isedited"
                        size="small"
                        v-model="scope.row[item.prop]"
                        :placeholder="`请输入${item.label}`"
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
              <el-table-column label="操作">
                <template #default="scope">
                  <el-button
                    type="text"
                    icon="el-icon-edit"
                    @click="handlePhoneBindEdit(scope.row.id, scope.row)"
                    >编辑</el-button
                  >
                  <el-button
                    type="text"
                    icon="el-icon-delete"
                    @click="handlePhoneBindDelete(scope.row.id)"
                    >删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="pagination">
              <el-pagination background layout="total, prev, pager, next" :current-page="query.page_index"
                :page-size="query.page_size" :total="pageTotal" @current-change="handlePhoneBindPageChange"></el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="隐私协议" name="five">
            <el-table :data="tableDataEEEE" style="width: 100%">
              <el-table-column
                :prop="item.prop"
                :label="item.label"
                v-for="(item, index) in tableHeaderFiveTab"
                :key="item.prop"
              >
                <template #default="scope">
                  <div
                    v-show="item.editable || scope.row.editable"
                    class="editable-row"
                  >
                    <template v-if="item.type === 'input'">
                      <el-input
                        :disabled="item.isedited"
                        size="small"
                        v-model="scope.row[item.prop]"
                        :placeholder="`请输入${item.label}`"
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
              <el-table-column label="操作">
                <template #default="scope">
                  <el-button
                    type="text"
                    icon="el-icon-edit"
                    @click="handlePrivacyEdit(scope.row.id, scope.row)"
                    >编辑</el-button
                  >
                  <el-button
                    type="text"
                    icon="el-icon-delete"
                    @click="handlePrivacyDelete(scope.row.id)"
                    >删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="pagination">
              <el-pagination background layout="total, prev, pager, next" :current-page="query.page_index"
                :page-size="query.page_size" :total="pageTotal" @current-change="handlePrivacyPageChange"></el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="假页面" name="six">
            <el-table :data="tableDataFFFF" style="width: 100%">
              <el-table-column
                :prop="item.prop"
                :label="item.label"
                v-for="(item, index) in tableHeaderSixTab"
                :key="item.prop"
              >
              </el-table-column>
              <el-table-column label="操作">
                <template #default="scope">
                  <el-button
                    type="text"
                    icon="el-icon-edit"
                    @click="handleFakePageEdit(scope.row.id, scope.row)"
                    >编辑</el-button
                  >
                  <el-button
                    type="text"
                    icon="el-icon-delete"
                    @click="handleFakePageDelete(scope.row.id)"
                    >删除
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

<script>
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
  deleteFakePageData
} from "../api/risk";
import moment from "moment";
import { main } from "@popperjs/core";
const main_product_name_selected = ref("");
const formRef = ref(null);
const whichTab = ref(0);
const message = ref("first");
let options = ref([]);
const query = reactive({
  page_index: 1,
  page_size: 10,
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
const tableHeaderSixTab=riskjson.RiskHeaderSixTab.filter(
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
//获取设备登录信息所有数据
const getDeviceLoginDataList = (data) => {
  fetchDeviceLoginTableData(data)
    .then((res) => {
      if(res.status ==200){
//config_type:0,默认规则;1,单个产品配置
      //表格数据展示单个产品的配置
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
        pageTotal.value = res.data.total_count - 1
      //默认规则信息不展现在表格中
      form.value = res.data.lists.filter((column) => column.config_type != 1)[0];
      if (form.value.config_type == 0) {
        showDeviceLogin.value = true;
        form.appoint_time = form.value.appoint_time;
        form.one_device_login_num = form.value.one_device_login_num;
        form.exception_device_watch_advertisement_num =
          form.value.exception_device_watch_advertisement_num;
        form.simulator_login_status = convertNumToString(
          form.value.simulator_login_status
        );
        form.more_open_login_status = convertNumToString(
          form.value.more_open_login_status
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
      }
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
      form.value = res.data.lists.filter((column) => column.config_type != 1)[0];
      if (form.value.config_type == 0) {
        showDeviceLogin.value = true;
        form.appoint_time = form.value.appoint_time;
        form.one_device_login_num = form.value.one_device_login_num;
        form.exception_device_watch_advertisement_num =
          form.value.exception_device_watch_advertisement_num;
        form.simulator_login_status = convertNumToString(
          form.value.simulator_login_status
        );
        form.more_open_login_status = convertNumToString(
          form.value.more_open_login_status
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
      }
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
        pageTotal.value = res.data.total_count - 1
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
        pageTotal.value = res.data.total_count - 1
      form.value = res.data.lists.filter((column) => column.config_type != 1)[0];
      if (form.value.config_type == 0) {
        showRealName.value = true;
        form.open_real_name_authentication_status=
            form.value.open_real_name_authentication_status == 1
                ? "不开启"
                : form.value.open_real_name_authentication_status == 2
                ? "开启(非强制)"
                : "开启(强制)";
            form.real_name_authentication_node=
              form.value.real_name_authentication_node == 1
                ? "登录前"
                : form.value.anti_addiction_open_condition == 2
                ? "登录成功XX后"
                : form.value.anti_addiction_open_condition == 3
                ? "提现X次后"
                : "绑定微信后第二次登录";
            form.anti_addiction_status=
              form.value.anti_addiction_status == 1
                ? "关闭"
                : form.value.anti_addiction_status == 2
                ? "部分开启"
                : "全部开启";
            form.anti_addiction_open_condition=
              form.value.anti_addiction_open_condition == 1
                ? "所有用户"
                : form.value.anti_addiction_open_condition == 2
                ? "新用户"
                : "老用户";
            form.real_name_authentication_api=
              form.value.real_name_authentication_api == 1 ? "阿里云" : "中宣部";
      }
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
      form.value = res.data.lists.filter((column) => column.config_type != 1)[0];
      if (form.value.config_type == 0) {
        showRealName.value = true;
        form.open_real_name_authentication_status=
            form.value.open_real_name_authentication_status == 1
                ? "不开启"
                : form.value.open_real_name_authentication_status == 2
                ? "开启(非强制)"
                : "开启(强制)";
            form.real_name_authentication_node=
              form.value.real_name_authentication_node == 1
                ? "登录前"
                : form.value.anti_addiction_open_condition == 2
                ? "登录成功XX后"
                : form.value.anti_addiction_open_condition == 3
                ? "提现X次后"
                : "绑定微信后第二次登录";
            form.anti_addiction_status=
              form.value.anti_addiction_status == 1
                ? "关闭"
                : form.value.anti_addiction_status == 2
                ? "部分开启"
                : "全部开启";
            form.anti_addiction_open_condition=
              form.value.anti_addiction_open_condition == 1
                ? "所有用户"
                : form.value.anti_addiction_open_condition == 2
                ? "新用户"
                : "老用户";
            form.real_name_authentication_api=
              form.value.real_name_authentication_api == 1 ? "阿里云" : "中宣部";
      }
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
        pageTotal.value = res.data.total_count - 1
      form.value = res.data.lists.filter((column) => column.config_type != 1)[0];
      if (form.value.config_type == 0) {
        showPhoneBind.value = true;
        form.mobile_phone_bind_status = form.value.mobile_phone_bind_status == 2 ? '开启' : '不开启';
        form.mobile_phone_bind_condition =
          form.value.mobile_phone_bind_condition == 1 ? '全部用户' : form.value.mobile_phone_bind_condition == 2 ? '新用户' : '老用户';
        form.appoint_time = form.value.appoint_time;
      }
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
            mobile_phone_bind_status:item.mobile_phone_bind_status == 1 ? '开启' : '不开启',
            mobile_phone_bind_condition:item.mobile_phone_bind_condition == 1 ? '全部用户' : item.mobile_phone_bind_condition == 2 ? '新用户' : '老用户',
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
        pageTotal.value = res.data.total_count - 1
      form.value = res.data.lists.filter((column) => column.config_type != 1)[0];
      if (form.value.config_type == 0) {
        showPrivacy.value = true;
        form.user_agreement_url = form.value.user_agreement_url;
        form.privacy_agreement_url = form.value.privacy_agreement_url;
        form.appoint_time = form.value.appoint_time;
      }
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
      form.value = res.data.lists.filter((column) => column.config_type != 1)[0];
      if (form.value.config_type == 0) {
        showPrivacy.value = true;
        form.user_agreement_url = form.value.user_agreement_url;
        form.privacy_agreement_url = form.value.privacy_agreement_url;
        form.appoint_time = form.value.appoint_time;
      }
    })
    .catch(() => {
      // ElMessage.error("服务器异常！");
    });
};
// 获取表格数据
const getData = () => {
  if (whichTab.value == 0) {
    if (main_product_name_selected.value > 0) {
      getSelectedDeviceLoginDataList(main_product_name_selected.value);
    } else {
      getDeviceLoginDataList(query);
    }
  } else if (whichTab.value == 1) {
    if (main_product_name_selected.value > 0) {
      getSelectedWechatBindDataList(main_product_name_selected.value);
    } else {
      getWechatBindDataList(query);
    }
  } else if (whichTab.value == 2) {
    if (main_product_name_selected.value > 0) {
      getSelectedRealNameList(main_product_name_selected.value);
    } else {
      getRealNameDataList(query);
    }
  } else if (whichTab.value == 3) {
    if (main_product_name_selected.value > 0) {
      getSelectedPhoneBindList(main_product_name_selected.value);
    } else {
      getPhoneBindDataList(query);
    }
  } else if (whichTab.value == 4) {
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
const deleteDeviceLoginData = (id) => {
  deleteDeviceLogin(id).then((res) => {
    if (res.status == 200) {
      ElMessage.success("删除成功");
      getData();
    }
  });
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
const handlePageChange=(val)=>{
  query.page_index=val
  getData()
}

//获取假页面数据
const getFakePageDataList=(main_product_id)=>{
  let data={
    ...query
  }
  if(main_product_id){
    data={
      ...data,
      main_product_id:main_product_id
    }
  }
  console.log("假页面data",data);
  getFakePageData(data)
  .then((res)=>{
    pageTotal.value=res.data.total_count
    tableDataFFFF.value=res.data.lists.map(item=>{
      return{
        ...item,
        work_date:item.start_date+"-"+item.end_date,
        open_advertising:item.open_advertising==1?"开启":"关闭",
        open_fake_page:item.open_fake_page==1?"开启":"关闭"
      }
    })
    
  })
  .catch((err)=>{
    console.log(err);
  })
}

//删除假页面数据
const handleFakePageDelete=(id)=>{
  deleteFakePageData(id).then(res=>{
    if(res.status==200){
      ElMessage({
        message: '删除成功',
        type: 'success',
      })
      getData();
    }
  })
}

export default {
  name: "DynamicModifyTable",
  setup() {
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
    return {
      message,
      options,
      whichTab,
      tableDataAAAA,
      tableDataBBBB,
      tableDataCCCC,
      tableDataDDDD,
      tableDataEEEE,
      tableDataFFFF,
      tableHeaderFirstTab,
      tableHeaderSecondTab,
      tableHeaderThirdTab,
      tableHeaderFourTab,
      tableHeaderFiveTab,
      tableHeaderSixTab,
      main_product_name_selected,
      query,
      pageTotal,
      getProductAndDataList,
      handlePageChange,
      getFakePageDataList,
      handleFakePageDelete,
      handleDevicePageChange,
      handleWechatPageChange,
      handleRealNamePageChange,
      handlePhoneBindPageChange,
      handlePrivacyPageChange,
      deviceLoginShow,
      wechatBindShow,
      realNameShow,
      phoneBindShow,
      privacyShow,
      form,
      formRef,
      showDeviceLogin,
      showPhoneBind,
      showWechatBind,
      showRealName,
      showPrivacy,
      pageTotal,
      query
    };
  },
  data() {
    return {};
  },
  methods: {
    addRule() {
      this.$router.push({
        name: "riskadd",
        params: { whichTab: whichTab.value },
      });
    },
    editRule() {
      this.$router.push({
        name: "riskedit",
        params: { whichTab: whichTab.value },
      });
    },
    handleTabClick(tab) {
      // formRef.value.resetFields();
      whichTab.value = tab.index;
      getData();
    },
    //设备登录修改
    handleDeviceLoginEdit(id, item) {
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
      this.$router.push({
        name: "riskedit",
        params: {
          whichTab: whichTab.value,
          id: id,
          data: JSON.stringify(rowdata),
        },
      });
    },
    // 设备登录删除操作
    handleDeviceLoginDelete(id) {
      // 二次确认删除
      ElMessageBox.confirm("确定要删除吗？", "提示", {
        type: "warning",
      })
        .then(() => {
          deleteDeviceLoginData(id);
        })
        .catch(() => {});
    },
    //微信绑定修改
    handleWechatBindEdit(id, row) {
      this.$router.push({
        name: "riskedit",
        params: { whichTab: whichTab.value, id: id, data: JSON.stringify(row) },
      });
    },
    // 微信绑定删除操作
    handleWechatBindDelete(id) {
      // 二次确认删除
      ElMessageBox.confirm("确定要删除吗？", "提示", {
        type: "warning",
      })
        .then(() => {
          deleteWechatBindData(id);
        })
        .catch(() => {});
    },
    //实名认证修改
    handleRealNameEdit(id, item) {
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
      this.$router.push({
        name: "riskedit",
        params: {
          whichTab: whichTab.value,
          id: id,
          data: JSON.stringify(rowdata),
        },
      });
    },
    // 实名认证删除操作
    handleRealNameDelete(id) {
      // 二次确认删除
      ElMessageBox.confirm("确定要删除吗？", "提示", {
        type: "warning",
      })
        .then(() => {
          deleteRealNameData(id);
        })
        .catch(() => {});
    },
    //手机绑定修改
    handlePhoneBindEdit(id, item) {
      const rowdata = {
        ...item,
        mobile_phone_bind_status:item.mobile_phone_bind_status == '开启' ? 1 : 2,
            mobile_phone_bind_condition:item.mobile_phone_bind_condition == '全部用户' ? 1 : item.mobile_phone_bind_condition == '新用户' ? 2 : 3
      };
      this.$router.push({
        name: "riskedit",
        params: { whichTab: whichTab.value, id: id, data: JSON.stringify(rowdata) },
      });
    },
    // 手机绑定删除操作
    handlePhoneBindDelete(id) {
      // 二次确认删除
      ElMessageBox.confirm("确定要删除吗？", "提示", {
        type: "warning",
      })
        .then(() => {
          deletePhoneBindData(id);
        })
        .catch(() => {});
    },
    //隐私协议修改
    handlePrivacyEdit(id, row) {
      this.$router.push({
        name: "riskedit",
        params: { whichTab: whichTab.value, id: id, data: JSON.stringify(row) },
      });
    },
    // 隐私协议删除操作
    handlePrivacyDelete(id) {
      // 二次确认删除
      ElMessageBox.confirm("确定要删除吗？", "提示", {
        type: "warning",
      })
        .then(() => {
          deletePrivacyData(id);
        })
        .catch(() => {});
    },
    //假页面修改
    handleFakePageEdit(id,row){
      console.log("handleFakePageEdit",row);
      row={
        ...row,
        open_advertising:row.open_advertising=="开启"? 1:0,
        open_fake_page:row.open_fake_page=="开启"? 1:0
      }
      this.$router.push({
        name:"riskedit",
        params:{whichTab:whichTab.value,id:id,data:JSON.stringify(row)},
      })
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
