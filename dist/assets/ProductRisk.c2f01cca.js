import{_ as W,f as U,g as C,by as E,u as T,o as I,c as X,a as D,b as e,w as t,bz as q,bw as u,r as c,b6 as R,bq as M,e as _}from"./index.d75263b6.js";import{h as s}from"./moment.9709ab41.js";import{a as F,b as J,c as O,d as j,e as A}from"./risk.d0c7d92c.js";import"./request.4064096f.js";const d=U({}),b=U({}),f=U({}),y=U({}),w=U({}),P=C(null),G=()=>{q.go(-1)},L=m=>{if(m)return/^\d+(\.{0,1}\d+){0,1}$/.test(m)?!0:(u.error("\u8BF7\u8F93\u5165\u6570\u5B57\uFF01"),!1)},K=m=>{F(m).then(a=>{a.status==200?u.success("\u6DFB\u52A0\u8BBE\u5907\u767B\u5F55\u6210\u529F"):a.status==-1&&u.error("\u6B64\u6E38\u620F\u914D\u7F6E\u5DF2\u5B58\u5728\uFF01")})},Q=m=>{J(m).then(a=>{a.status==200?u.success("\u6DFB\u52A0\u5FAE\u4FE1\u8D26\u53F7\u7ED1\u5B9A\u6210\u529F"):a.status==-1&&u.error("\u6B64\u6E38\u620F\u914D\u7F6E\u5DF2\u5B58\u5728\uFF01")})},Z=m=>{O(m).then(a=>{a.status==200?u.success("\u6DFB\u52A0\u624B\u673A\u7ED1\u5B9A\u6210\u529F"):a.status==-1&&u.error("\u6B64\u6E38\u620F\u914D\u7F6E\u5DF2\u5B58\u5728\uFF01")})},$=m=>{j(m).then(a=>{a.status==200?u.success("\u6DFB\u52A0\u9632\u6C89\u8FF7\u6210\u529F"):a.status==-1&&u.error("\u6B64\u6E38\u620F\u914D\u7F6E\u5DF2\u5B58\u5728\uFF01")})},ee=m=>{A(m).then(a=>{a.status==200?u.success("\u6DFB\u52A0\u9690\u79C1\u534F\u8BAE\u6210\u529F"):a.status==-1&&u.error("\u6B64\u6E38\u620F\u914D\u7F6E\u5DF2\u5B58\u5728\uFF01")})},ae={name:"riskadd",setup(){const m=E(),a=T(),i=JSON.parse(m.params.data);return console.log("route.params",m.params),console.log("route.params.data",m.params.data),{formRef:P,formDeviceLogin:d,formWechatBind:b,formRealName:f,formPhoneBind:y,formPrivacy:w,onSubmit:()=>{P.value.validate(z=>{if(z){if(d.one_device_login_num&&!L(d.one_device_login_num)||d.exception_device_watch_advertisement_num&&!L(d.exception_device_watch_advertisement_num))return;let H;if(!d.appoint_time)H=s().format("YYYY-MM-DD HH:mm:ss");else if(d.appoint_time[0]>s().format("YYYY-MM-DD HH:mm:ss")&&d.appoint_time[1]>s().format("YYYY-MM-DD HH:mm:ss"))H=d.appoint_time[0]+"~"+d.appoint_time[1];else{u.error("\u751F\u6548\u65F6\u95F4\u6BB5\u4E0D\u80FD\u5728\u5F53\u524D\u65F6\u95F4\u4E4B\u524D\uFF01");return}const v={config_type:1,main_product_id:i.main_product_id,main_product_name:i.main_product_name,product_id:i.product_id,product_name:i.product_name,package_name:i.package_name,simulator_login_status:d.simulator_login_status?1:0,more_open_login_status:d.more_open_login_status?1:0,exception_login_status:d.exception_login_status?1:0,one_device_login_num:d.one_device_login_num,exception_device_watch_advertisement_num:d.exception_device_watch_advertisement_num,exception_device_watch_advertisement_status:d.exception_device_watch_advertisement_status?1:0,simulator_watch_advertisement_status:d.simulator_watch_advertisement_status?1:0,more_open_watch_advertisement_status:d.more_open_watch_advertisement_status?1:0,appoint_time:H};if(K(v),b.account_bind_num&&!L(b.account_bind_num)||b.one_day_withdrawal_count&&!L(b.one_day_withdrawal_count))return;let h;if(!b.appoint_time)h=s().format("YYYY-MM-DD HH:mm:ss");else if(b.appoint_time[0]>s().format("YYYY-MM-DD HH:mm:ss")&&b.appoint_time[1]>s().format("YYYY-MM-DD HH:mm:ss"))h=b.appoint_time[0]+"~"+b.appoint_time[1];else{u.error("\u751F\u6548\u65F6\u95F4\u6BB5\u4E0D\u80FD\u5728\u5F53\u524D\u65F6\u95F4\u4E4B\u524D\uFF01");return}const k={config_type:1,main_product_id:i.main_product_id,main_product_name:i.main_product_name,product_id:i.product_id,product_name:i.product_name,package_name:i.package_name,account_bind_num:b.account_bind_num,one_day_withdrawal_count:b.one_day_withdrawal_count,appoint_time:h};Q(k);let g;if(!f.appoint_time)g=s().format("YYYY-MM-DD HH:mm:ss");else if(f.appoint_time[0]>s().format("YYYY-MM-DD HH:mm:ss")&&f.appoint_time[1]>s().format("YYYY-MM-DD HH:mm:ss"))g=f.appoint_time[0]+"~"+f.appoint_time[1];else{u.error("\u751F\u6548\u65F6\u95F4\u6BB5\u4E0D\u80FD\u5728\u5F53\u524D\u65F6\u95F4\u4E4B\u524D\uFF01");return}const V={config_type:1,main_product_id:i.main_product_id,main_product_name:i.main_product_name,product_id:i.product_id,product_name:i.product_name,package_name:i.package_name,open_real_name_authentication_status:f.open_real_name_authentication_status,real_name_authentication_node:f.real_name_authentication_node,real_name_authentication_api:f.real_name_authentication_api,aliyun_app_code:f.aliyun_app_code,anti_addiction_status:parseInt(f.anti_addiction_status),anti_addiction_open_condition:f.anti_addiction_status==2?parseInt(f.anti_addiction_open_condition):"",appoint_time:g};$(V);let n;if(!y.appoint_time)n=s().format("YYYY-MM-DD HH:mm:ss");else if(y.appoint_time[0]>s().format("YYYY-MM-DD HH:mm:ss")&&y.appoint_time[1]>s().format("YYYY-MM-DD HH:mm:ss"))n=y.appoint_time[0]+"~"+y.appoint_time[1];else{u.error("\u751F\u6548\u65F6\u95F4\u6BB5\u4E0D\u80FD\u5728\u5F53\u524D\u65F6\u95F4\u4E4B\u524D\uFF01");return}const p={config_type:1,main_product_id:i.main_product_id,main_product_name:i.main_product_name,product_id:i.product_id,product_name:i.product_name,package_name:i.package_name,mobile_phone_bind_status:y.mobile_phone_bind_status?2:1,mobile_phone_bind_condition:parseInt(y.mobile_phone_bind_condition),appoint_time:n};Z(p);let Y;if(!w.appoint_time)Y=s().format("YYYY-MM-DD HH:mm:ss");else if(w.appoint_time[0]>s().format("YYYY-MM-DD HH:mm:ss")&&w.appoint_time[1]>s().format("YYYY-MM-DD HH:mm:ss"))Y=w.appoint_time[0]+"~"+w.appoint_time[1];else{u.error("\u751F\u6548\u65F6\u95F4\u6BB5\u4E0D\u80FD\u5728\u5F53\u524D\u65F6\u95F4\u4E4B\u524D\uFF01");return}const x={config_type:1,main_product_id:i.main_product_id,main_product_name:i.main_product_name,product_id:i.product_id,product_name:i.product_name,package_name:i.package_name,user_agreement_url:w.user_agreement_url,privacy_agreement_url:w.privacy_agreement_url,appoint_time:Y};ee(x),a.push("product")}else return!1})},goback:G}},methods:{onReset(){P.value.resetFields(),this.$router.push("/product")}}},te={class:"crumbs"},oe=_(" \u98CE\u63A7\u7CFB\u7EDF "),le=_("\u4EA7\u54C1\u7BA1\u7406"),ne=_("\u98CE\u63A7\u914D\u7F6E"),_e={class:"container"},ie=_("\u8FD4\u56DE"),de={class:"form-box"},me=_("\u8BBE\u5907\u767B\u5F55\u9650\u5236"),re=_("\u5FAE\u4FE1\u8D26\u53F7\u7ED1\u5B9A"),ue=_("\u5B9E\u540D\u8BA4\u8BC1&\u9632\u6C89\u8FF7"),se=_("\u4E0D\u5F00\u542F"),pe=_("\u5F00\u542F(\u975E\u5F3A\u5236)"),ce=_("\u5F00\u542F(\u5F3A\u5236)"),fe=_("\u963F\u91CC\u4E91"),be=_("\u4E2D\u5BA3\u90E8"),ve=_("\u5173\u95ED"),he=_("\u5F00\u542F"),ge=_("\u5173\u95ED"),Ve=_("\u90E8\u5206\u5F00\u542F"),Ye=_("\u5168\u90E8\u5F00\u542F"),De=_("\u5168\u90E8\u7528\u6237"),ye=_("\u65B0\u7528\u6237"),we=_("\u8001\u7528\u6237"),xe=_("\u624B\u673A\u7ED1\u5B9A"),Re=_("\u5168\u90E8\u7528\u6237"),Me=_("\u65B0\u7528\u6237"),Ne=_("\u8001\u7528\u6237"),He=_("\u9690\u79C1\u534F\u8BAE\u4FEE\u6539"),ke=_("\u786E\u5B9A"),Ue=_("\u53D6\u6D88");function Be(m,a,i,o,z,H){const v=c("el-breadcrumb-item"),h=c("el-breadcrumb"),k=c("el-button"),g=c("el-divider"),V=c("el-switch"),n=c("el-form-item"),p=c("el-input"),Y=c("el-date-picker"),x=c("el-form"),r=c("el-radio"),N=c("el-radio-group"),B=c("el-option"),S=c("el-select");return I(),X("div",null,[D("div",te,[e(h,{separator:"/"},{default:t(()=>[e(v,null,{default:t(()=>[oe]),_:1}),e(v,null,{default:t(()=>[le]),_:1}),e(v,null,{default:t(()=>[ne]),_:1})]),_:1})]),D("div",_e,[e(k,{style:{float:"right"},type:"primary",onClick:o.goback},{default:t(()=>[ie]),_:1},8,["onClick"]),D("div",de,[D("div",null,[e(h,{separator:"/"},{default:t(()=>[e(v,null,{default:t(()=>[me]),_:1})]),_:1})]),e(g),e(x,{ref:"formRef",model:o.formDeviceLogin,"label-width":"280px"},{default:t(()=>[e(n,{label:"\u5141\u8BB8\u6A21\u62DF\u5668\u767B\u5F55",prop:"simulator_login_status"},{default:t(()=>[e(V,{modelValue:o.formDeviceLogin.simulator_login_status,"onUpdate:modelValue":a[0]||(a[0]=l=>o.formDeviceLogin.simulator_login_status=l)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u5141\u8BB8\u591A\u5F00\u8BBE\u5907\u767B\u5F55",prop:"more_open_login_status"},{default:t(()=>[e(V,{modelValue:o.formDeviceLogin.more_open_login_status,"onUpdate:modelValue":a[1]||(a[1]=l=>o.formDeviceLogin.more_open_login_status=l)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u5141\u8BB8\u5F02\u5E38\u8BBE\u5907\u767B\u5F55",prop:"exception_login_status"},{default:t(()=>[e(V,{modelValue:o.formDeviceLogin.exception_login_status,"onUpdate:modelValue":a[2]||(a[2]=l=>o.formDeviceLogin.exception_login_status=l)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u5355\u8BBE\u5907\u5141\u8BB8\u767B\u5F55\u8D26\u53F7\u6570",prop:"one_device_login_num"},{default:t(()=>[e(p,{style:{width:"150px"},modelValue:o.formDeviceLogin.one_device_login_num,"onUpdate:modelValue":a[3]||(a[3]=l=>o.formDeviceLogin.one_device_login_num=l)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u5141\u8BB8\u6A21\u62DF\u5668\u8BBE\u5907\u770B\u5E7F\u544A",prop:"simulator_watch_advertisement_status"},{default:t(()=>[e(V,{modelValue:o.formDeviceLogin.simulator_watch_advertisement_status,"onUpdate:modelValue":a[4]||(a[4]=l=>o.formDeviceLogin.simulator_watch_advertisement_status=l)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u5141\u8BB8\u591A\u5F00\u8BBE\u5907\u770B\u5E7F\u544A",prop:"more_open_watch_advertisement_status"},{default:t(()=>[e(V,{modelValue:o.formDeviceLogin.more_open_watch_advertisement_status,"onUpdate:modelValue":a[5]||(a[5]=l=>o.formDeviceLogin.more_open_watch_advertisement_status=l)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u5141\u8BB8\u5F02\u5E38\u8BBE\u5907\u770B\u5E7F\u544A",prop:"exception_device_watch_advertisement_status"},{default:t(()=>[e(V,{modelValue:o.formDeviceLogin.exception_device_watch_advertisement_status,"onUpdate:modelValue":a[6]||(a[6]=l=>o.formDeviceLogin.exception_device_watch_advertisement_status=l)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u5F02\u5E38\u8BBE\u5907\u89C2\u770B\u5E7F\u544A\u6570\u91CF",prop:"exception_device_watch_advertisement_num"},{default:t(()=>[e(p,{style:{width:"150px"},modelValue:o.formDeviceLogin.exception_device_watch_advertisement_num,"onUpdate:modelValue":a[7]||(a[7]=l=>o.formDeviceLogin.exception_device_watch_advertisement_num=l)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u751F\u6548\u65F6\u95F4",prop:"appoint_time"},{default:t(()=>[e(Y,{modelValue:o.formDeviceLogin.appoint_time,"onUpdate:modelValue":a[8]||(a[8]=l=>o.formDeviceLogin.appoint_time=l),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),D("div",null,[e(h,{separator:"/"},{default:t(()=>[e(v,null,{default:t(()=>[re]),_:1})]),_:1})]),e(g),e(x,{ref:"formRef",model:o.formWechatBind,"label-width":"280px"},{default:t(()=>[e(n,{label:"\u5FAE\u4FE1\u6700\u591A\u7ED1\u5B9A\u8D26\u53F7\u6570",prop:"account_bind_num"},{default:t(()=>[e(p,{style:{width:"150px"},modelValue:o.formWechatBind.account_bind_num,"onUpdate:modelValue":a[9]||(a[9]=l=>o.formWechatBind.account_bind_num=l)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u5FAE\u4FE1\u5355\u65E5\u53EF\u63D0\u73B0\u6570",prop:"one_day_withdrawal_count"},{default:t(()=>[e(p,{style:{width:"150px"},modelValue:o.formWechatBind.one_day_withdrawal_count,"onUpdate:modelValue":a[10]||(a[10]=l=>o.formWechatBind.one_day_withdrawal_count=l)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u751F\u6548\u65F6\u95F4",prop:"appoint_time"},{default:t(()=>[e(Y,{modelValue:o.formWechatBind.appoint_time,"onUpdate:modelValue":a[11]||(a[11]=l=>o.formWechatBind.appoint_time=l),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),D("div",null,[e(h,{separator:"/"},{default:t(()=>[e(v,null,{default:t(()=>[ue]),_:1})]),_:1})]),e(g),e(x,{ref:"formRef",model:o.formRealName,"label-width":"280px"},{default:t(()=>[e(n,{label:"\u662F\u5426\u5F00\u542F\u5B9E\u540D\u8BA4\u8BC1",prop:"open_real_name_authentication_status"},{default:t(()=>[e(N,{modelValue:o.formRealName.real_name_authentication_node,"onUpdate:modelValue":a[12]||(a[12]=l=>o.formRealName.real_name_authentication_node=l)},{default:t(()=>[e(r,{label:"1"},{default:t(()=>[se]),_:1}),e(r,{label:"2"},{default:t(()=>[pe]),_:1}),e(r,{label:"3"},{default:t(()=>[ce]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u5B9E\u540D\u8BA4\u8BC1\u8282\u70B9",prop:"real_name_authentication_node"},{default:t(()=>[e(S,{modelValue:o.formRealName.real_name_authentication_node,"onUpdate:modelValue":a[13]||(a[13]=l=>o.formRealName.real_name_authentication_node=l),placeholder:"\u8BF7\u9009\u62E9"},{default:t(()=>[e(B,{key:"bbk",label:"\u767B\u5F55\u524D",value:"1"}),e(B,{key:"xtc",label:"\u767B\u5F55\u6210\u529FX\u6B21\u540E",value:"2"}),e(B,{key:"imoo",label:"\u63D0\u73B0\u6210\u529FX\u6B21\u540E",value:"3"}),e(B,{key:"imoo",label:"\u7ED1\u5B9A\u5FAE\u4FE1\u540E\u7B2C\u4E8C\u6B21\u767B\u5F55",value:"4"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u5B9E\u540D\u8BA4\u8BC1\u63A5\u53E3",prop:"real_name_authentication_api"},{default:t(()=>[e(N,{modelValue:o.formRealName.real_name_authentication_api,"onUpdate:modelValue":a[14]||(a[14]=l=>o.formRealName.real_name_authentication_api=l)},{default:t(()=>[e(r,{label:"1"},{default:t(()=>[fe]),_:1}),e(r,{label:"2"},{default:t(()=>[be]),_:1})]),_:1},8,["modelValue"])]),_:1}),R(e(n,{label:"\u963F\u91CC\u4E91\u63A5\u53E3",prop:"aliyun_app_code"},{default:t(()=>[e(p,{style:{width:"150px"},modelValue:o.formRealName.aliyun_app_code,"onUpdate:modelValue":a[15]||(a[15]=l=>o.formRealName.aliyun_app_code=l)},null,8,["modelValue"])]),_:1},512),[[M,o.formRealName.real_name_authentication_api==1]]),R(e(n,{label:"zxb_app_id",prop:"zxb_app_id"},{default:t(()=>[e(p,{style:{width:"150px"},modelValue:o.formRealName.zxb_app_id,"onUpdate:modelValue":a[16]||(a[16]=l=>o.formRealName.zxb_app_id=l)},null,8,["modelValue"])]),_:1},512),[[M,o.formRealName.real_name_authentication_api==2]]),R(e(n,{label:"zxb_biz_id",prop:"zxb_biz_id"},{default:t(()=>[e(p,{style:{width:"150px"},modelValue:o.formRealName.zxb_biz_id,"onUpdate:modelValue":a[17]||(a[17]=l=>o.formRealName.zxb_biz_id=l)},null,8,["modelValue"])]),_:1},512),[[M,o.formRealName.real_name_authentication_api==2]]),R(e(n,{label:"zxb_secret_key",prop:"zxb_secret_key"},{default:t(()=>[e(p,{style:{width:"150px"},modelValue:o.formRealName.zxb_secret_key,"onUpdate:modelValue":a[18]||(a[18]=l=>o.formRealName.zxb_secret_key=l)},null,8,["modelValue"])]),_:1},512),[[M,o.formRealName.real_name_authentication_api==2]]),R(e(n,{label:"\u662F\u5426\u5F00\u542F\u6570\u636E\u4E0A\u62A5",prop:"open_escalation_status"},{default:t(()=>[e(N,{modelValue:o.formRealName.open_escalation_status,"onUpdate:modelValue":a[19]||(a[19]=l=>o.formRealName.open_escalation_status=l)},{default:t(()=>[e(r,{label:"1"},{default:t(()=>[ve]),_:1}),e(r,{label:"2"},{default:t(()=>[he]),_:1})]),_:1},8,["modelValue"])]),_:1},512),[[M,o.formRealName.real_name_authentication_api==2]]),R(e(n,{label:"\u4E2D\u5BA3\u90E8\u4E0A\u62A5\u63A5\u53E3",prop:"data_escalation_api"},{default:t(()=>[e(p,{style:{width:"150px"},modelValue:o.formRealName.data_escalation_api,"onUpdate:modelValue":a[20]||(a[20]=l=>o.formRealName.data_escalation_api=l)},null,8,["modelValue"])]),_:1},512),[[M,o.formRealName.open_escalation_status==2]]),e(n,{label:"\u9632\u6C89\u8FF7\u5F00\u542F",prop:"anti_addiction_status"},{default:t(()=>[e(N,{modelValue:o.formRealName.anti_addiction_status,"onUpdate:modelValue":a[21]||(a[21]=l=>o.formRealName.anti_addiction_status=l)},{default:t(()=>[e(r,{label:"1"},{default:t(()=>[ge]),_:1}),e(r,{label:"2"},{default:t(()=>[Ve]),_:1}),e(r,{label:"3"},{default:t(()=>[Ye]),_:1})]),_:1},8,["modelValue"])]),_:1}),R(e(n,{label:"\u90E8\u5206\u5F00\u542F\u6761\u4EF6",prop:"anti_addiction_open_condition"},{default:t(()=>[e(N,{modelValue:o.formRealName.anti_addiction_open_condition,"onUpdate:modelValue":a[22]||(a[22]=l=>o.formRealName.anti_addiction_open_condition=l)},{default:t(()=>[e(r,{label:"1"},{default:t(()=>[De]),_:1}),e(r,{label:"2"},{default:t(()=>[ye]),_:1}),e(r,{label:"3"},{default:t(()=>[we]),_:1})]),_:1},8,["modelValue"])]),_:1},512),[[M,o.formRealName.anti_addiction_status==2]]),e(n,{label:"\u751F\u6548\u65F6\u95F4",prop:"appoint_time"},{default:t(()=>[e(Y,{modelValue:o.formRealName.appoint_time,"onUpdate:modelValue":a[23]||(a[23]=l=>o.formRealName.appoint_time=l),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),D("div",null,[e(h,{separator:"/"},{default:t(()=>[e(v,null,{default:t(()=>[xe]),_:1})]),_:1})]),e(g),e(x,{ref:"formRef",model:o.formPhoneBind,"label-width":"280px"},{default:t(()=>[e(n,{label:"\u5F00\u542F\u624B\u673A\u7ED1\u5B9A",prop:"mobile_phone_bind_status"},{default:t(()=>[e(V,{modelValue:o.formPhoneBind.mobile_phone_bind_status,"onUpdate:modelValue":a[24]||(a[24]=l=>o.formPhoneBind.mobile_phone_bind_status=l)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u624B\u673A\u7ED1\u5B9A\u6761\u4EF6",prop:"mobile_phone_bind_condition"},{default:t(()=>[e(N,{modelValue:o.formPhoneBind.mobile_phone_bind_condition,"onUpdate:modelValue":a[25]||(a[25]=l=>o.formPhoneBind.mobile_phone_bind_condition=l)},{default:t(()=>[e(r,{label:"1"},{default:t(()=>[Re]),_:1}),e(r,{label:"2"},{default:t(()=>[Me]),_:1}),e(r,{label:"3"},{default:t(()=>[Ne]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u751F\u6548\u65F6\u95F4",prop:"appoint_time"},{default:t(()=>[e(Y,{modelValue:o.formPhoneBind.appoint_time,"onUpdate:modelValue":a[26]||(a[26]=l=>o.formPhoneBind.appoint_time=l),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),D("div",null,[e(h,{separator:"/"},{default:t(()=>[e(v,null,{default:t(()=>[He]),_:1})]),_:1})]),e(g),e(x,{ref:"formRef",model:o.formPrivacy,"label-width":"280px"},{default:t(()=>[e(n,{label:"\u7528\u6237\u534F\u8BAE\u5730\u5740",prop:"user_agreement_url"},{default:t(()=>[e(p,{style:{width:"150px"},modelValue:o.formPrivacy.user_agreement_url,"onUpdate:modelValue":a[27]||(a[27]=l=>o.formPrivacy.user_agreement_url=l)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u9690\u79C1\u534F\u8BAE\u5730\u5740",prop:"privacy_agreement_url"},{default:t(()=>[e(p,{style:{width:"150px"},modelValue:o.formPrivacy.privacy_agreement_url,"onUpdate:modelValue":a[28]||(a[28]=l=>o.formPrivacy.privacy_agreement_url=l)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u751F\u6548\u65F6\u95F4",prop:"appoint_time"},{default:t(()=>[e(Y,{modelValue:o.formPrivacy.appoint_time,"onUpdate:modelValue":a[29]||(a[29]=l=>o.formPrivacy.appoint_time=l),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1}),e(n,null,{default:t(()=>[e(k,{type:"primary",onClick:o.onSubmit},{default:t(()=>[ke]),_:1},8,["onClick"]),e(k,{onClick:H.onReset},{default:t(()=>[Ue]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])])])])}const We=W(ae,[["render",Be]]);export{We as default};
