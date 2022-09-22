<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item> 积分系统 </el-breadcrumb-item>
        <el-breadcrumb-item>成语项目</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="form-box">
        <div>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-show="this.$route.params.whichTab == 0"
              >闯关红包</el-breadcrumb-item
            >
            <el-breadcrumb-item v-show="this.$route.params.whichTab == 1"
              >激励红包</el-breadcrumb-item
            >
            <el-breadcrumb-item v-show="this.$route.params.whichTab == 2"
              >免费领钱</el-breadcrumb-item
            >
            <el-breadcrumb-item>新增规则</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-divider />
        <el-form ref="formRef" :rules="rules" :model="form" label-width="80px">
          <el-form-item label-width="100px" label="账户余额">
            <el-input
              style="width: 160px"
              class="w-50 m-2"
              size="small"
              v-model="form.balancefrom"
            >
            </el-input
            >&emsp;至&emsp;
            <el-input
              style="width: 160px"
              class="w-50 m-2"
              size="small"
              v-model="form.balanceto"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="下发金额">
            <el-radio-group size="small" v-model="checked">
              <el-radio-button
                v-for="(item, index) in hylbOptions"
                :key="index"
                :label="item"
              >
              </el-radio-button>
            </el-radio-group>
            &emsp;
            <span v-show="checked == '区间值'"
              ><el-input
                style="width: 80px"
                class="w-50 m-2"
                size="small"
                v-model="form.distribute_moneyfrom"
              >
              </el-input
              >&emsp;至&emsp;
              <el-input
                style="width: 80px"
                class="w-50 m-2"
                size="small"
                v-model="form.distribute_moneyto"
              >
              </el-input
            ></span>
            &emsp;
            <span v-show="checked == '固定值'"
              ><el-input
                style="width: 80px"
                class="w-50 m-2"
                size="small"
                v-model="form.distribute_moneyconstant"
              >
              </el-input
            ></span>
          </el-form-item>
          <el-form-item
            v-show="this.$route.params.whichTab == 0"
            label-width="100px"
            label="激励视频翻倍"
          >
            <el-input
              style="width: 160px"
              class="w-50 m-2"
              size="small"
              v-model="form.double_multiple"
            >
            </el-input
            >&emsp;倍
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
import { reactive, ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import {
  addIdiomFirstTableData,
  addIdiomSecondTableData,
  addIdiomThirdTableData,
} from "../api/idiom";
const formRef = ref(null);
const form = reactive({});
const hylbOptions = reactive(["固定值", "区间值"]);
const checked = ref("区间值");
const addFirstTabData = (data) => {
  addIdiomFirstTableData(data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("闯关红包新增规则成功");
    }
  });
};
const addSecondTabData = (data) => {
  addIdiomSecondTableData(data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("激励红包新增规则成功");
    }
  });
};
const addThirdTabData = (data) => {
  addIdiomThirdTableData(data).then((res) => {
    if (res.status == 200) {
      ElMessage.success("免费领钱新增规则成功");
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
const checkBetween = (valueFirst,valueSecond) => {
    if (parseFloat(valueFirst) > parseFloat(valueSecond)) {
        ElMessage.error("后区间值必须大于前区间值！");
        return false
    }else{
      return true
    }
};
export default {
  name: "baseform",
  setup() {
    const rules = {
      name: [{ required: true, message: "请输入账户余额", trigger: "blur" }],
    };
    return {
      rules,
      formRef,
      form,
      hylbOptions,
      checked,
    };
  },
  methods: {
    // 提交
    onSubmit() {
      // 表单校验
      formRef.value.validate((valid) => {
        if (valid) {
          console.log(form);
          // firstTab
          if(form.balancefrom){
            if (!checkNonnegate(form.balancefrom)) return
          }
          if(form.balanceto){
            if (!checkNonnegate(form.balanceto)) return
          }
          if(form.distribute_moneyfrom){
            if (!checkNonnegate(form.distribute_moneyfrom)) return
          }
          if(form.distribute_moneyto){
            if (!checkNonnegate(form.distribute_moneyto)) return
          }
          if(form.distribute_moneyconstant){
            if (!checkNonnegate(form.distribute_moneyconstant)) return
          }
          if(form.double_multiple){
            if (!checkNonnegate(form.double_multiple)) return
          }
          if(!checkBetween(form.balancefrom,form.balanceto)) return
          if(!checkBetween(form.distribute_moneyfrom,form.distribute_moneyto)) return
          if(form.double_multiple){
            console.log('parseInt(form.double_multiple)', parseInt(form.double_multiple))
            if(parseInt(form.double_multiple) <= 0){
              ElMessage.error("必须输入大于0的数！");
              return
            }
          }
          const data = {
            balance: form.balancefrom + "," + form.balanceto,
            distribute_money:
              checked.value == "区间值"
                ? form.distribute_moneyfrom + "," + form.distribute_moneyto
                : form.distribute_moneyconstant,
            double_multiple: form.double_multiple,
          };
          //second third tab
          const datatwo = {
            balance: form.balancefrom + "," + form.balanceto,
            distribute_money:
              checked.value == "区间值"
                ? form.distribute_moneyfrom + "," + form.distribute_moneyto
                : form.distribute_moneyconstant,
          };
          if (this.$route.params.whichTab == 0) {
            addFirstTabData(data);
          } else if (this.$route.params.whichTab == 1) {
            addSecondTabData(datatwo);
          } else {
            addThirdTabData(datatwo);
          }
          this.$router.push("/idiom");
        } else {
          return false;
        }
      });
    },
    // 重置
    onReset() {
      formRef.value.resetFields();
      this.$router.push("/idiom");
    },
  },
};
</script>
