import{_ as A,f as I,g,by as L,bw as b,o as W,c as X,a as k,b as t,w as o,b6 as s,bq as u,r as c,e as m}from"./index.3430d699.js";import{u as j,t as q,v as J,w as O,x as G,y as K}from"./risk.08483459.js";import{h as d}from"./moment.9709ab41.js";import"./request.79f6b612.js";const a=I({}),D=g(null),R=g(""),z=g(""),U=g(1),C=g(0),F=g(""),N=g(""),P=g(""),w=g([]),Q=(i,e)=>{q(i,e).then(r=>{r.status==200&&b.success("\u4FEE\u6539\u8BBE\u5907\u767B\u5F55\u6210\u529F")})},Z=(i,e)=>{J(i,e).then(r=>{r.status==200&&b.success("\u4FEE\u6539\u5FAE\u4FE1\u8D26\u53F7\u7ED1\u5B9A\u6210\u529F")})},$=(i,e)=>{O(i,e).then(r=>{r.status==200&&b.success("\u4FEE\u6539\u624B\u673A\u7ED1\u5B9A\u6210\u529F")})},ee=(i,e)=>{G(i,e).then(r=>{r.status==200&&b.success("\u4FEE\u6539\u9632\u6C89\u8FF7\u6210\u529F")})},te=(i,e)=>{K(i,e).then(r=>{r.status==200&&b.success("\u4FEE\u6539\u9690\u79C1\u534F\u8BAE\u6210\u529F")})},S=i=>{if(i)return/^\d+(\.{0,1}\d+){0,1}$/.test(i)?!0:(b.error("\u8BF7\u8F93\u5165\u6570\u5B57\uFF01"),!1)},ae={name:"riskadd",setup(){const i=L(),e=JSON.parse(i.params.data);return console.log("route.params",i.params),console.log("route.params.data",i.params.data),i.params.whichTab==0&&(a.simulator_login_status=e.simulator_login_status==1,a.more_open_login_status=e.more_open_login_status==1,a.simulator_login_status=e.simulator_login_status==1,a.one_device_login_num=e.one_device_login_num,a.exception_device_watch_advertisement_num=e.exception_device_watch_advertisement_num,a.simulator_watch_advertisement_status=e.simulator_watch_advertisement_status==1,a.more_open_watch_advertisement_status=e.more_open_watch_advertisement_status==1,a.exception_device_watch_advertisement_status=e.exception_device_watch_advertisement_status==1),i.params.whichTab==1&&(a.account_bind_num=e.account_bind_num,a.one_day_withdrawal_count=e.one_day_withdrawal_count),i.params.whichTab==2&&(a.open_real_name_authentication_status=e.open_real_name_authentication_status,a.real_name_authentication_node=e.real_name_authentication_node,a.real_name_authentication_api=e.real_name_authentication_api,a.aliyun_app_code=e.aliyun_app_code,a.anti_addiction_status=e.anti_addiction_status,a.anti_addiction_open_condition=e.anti_addiction_status==2?e.anti_addiction_open_condition:""),i.params.whichTab==3&&(a.mobile_phone_bind_status=e.mobile_phone_bind_status==1,a.mobile_phone_bind_condition=e.mobile_phone_bind_condition),i.params.whichTab==4&&(a.privacy_agreement_url=e.privacy_agreement_url,a.user_agreement_url=e.user_agreement_url),i.params.whichTab==5&&(console.log(e),R.value=e.product_name,z.value=e.channel,F.value=e.game_version,U.value=e.open_advertising,C.value=e.open_fake_page,N.value=e.start_date,P.value=e.end_date,w.value=[e.start_date,e.end_date]),console.log(U.value,C.value),a.id=e.id,a.appoint_time&&(a.appoint_time=e.appoint_time.split("~")),console.log("form.appoint_time",a.appoint_time),{rules:{},formRef:D,form:a,product_name:R,channel_name:z,version_name:F,start_date:N,end_date:P,dateSelect:w,openAD:U,openFakePage:C}},methods:{onSubmit(){let i;if(!a.appoint_time)i=d().format("YYYY-MM-DD HH:mm:ss");else if(a.appoint_time[0]>d().format("YYYY-MM-DD HH:mm:ss")&&a.appoint_time[1]>d().format("YYYY-MM-DD HH:mm:ss"))i=a.appoint_time[0]+"~"+a.appoint_time[1];else if(a.appoint_time[0]>d().format("YYYY-MM-DD HH:mm:ss")&&!a.appoint_time[1])i=a.appoint_time[0];else if(!a.appoint_time[0])i=d().format("YYYY-MM-DD HH:mm:ss");else{b.error("\u751F\u6548\u65F6\u95F4\u6BB5\u4E0D\u80FD\u5728\u5F53\u524D\u65F6\u95F4\u4E4B\u524D\uFF01");return}D.value.validate(e=>{if(e){if(a.one_device_login_num&&!S(a.one_device_login_num)||a.exception_device_watch_advertisement_num&&!S(a.exception_device_watch_advertisement_num))return;const r={simulator_login_status:a.simulator_login_status?1:0,more_open_login_status:a.more_open_login_status?1:0,exception_login_status:a.exception_login_status?1:0,one_device_login_num:a.one_device_login_num,exception_device_watch_advertisement_num:a.exception_device_watch_advertisement_num,simulator_watch_advertisement_status:a.simulator_watch_advertisement_status?1:0,more_open_watch_advertisement_status:a.more_open_watch_advertisement_status?1:0,appoint_time:i};Q(a.id,r),this.$router.push("/risk")}else return!1})},onSecondSubmit(){let i;if(!a.appoint_time)i=d().format("YYYY-MM-DD HH:mm:ss");else if(a.appoint_time[0]>d().format("YYYY-MM-DD HH:mm:ss")&&a.appoint_time[1]>d().format("YYYY-MM-DD HH:mm:ss"))i=a.appoint_time[0]+"~"+a.appoint_time[1];else if(a.appoint_time[0]>d().format("YYYY-MM-DD HH:mm:ss")&&!a.appoint_time[1])i=a.appoint_time[0];else if(!a.appoint_time[0])i=d().format("YYYY-MM-DD HH:mm:ss");else{b.error("\u751F\u6548\u65F6\u95F4\u6BB5\u4E0D\u80FD\u5728\u5F53\u524D\u65F6\u95F4\u4E4B\u524D\uFF01");return}D.value.validate(e=>{if(e){if(a.account_bind_num&&!S(a.account_bind_num)||a.one_day_withdrawal_count&&!S(a.one_day_withdrawal_count))return;console.log("form",a);const r={account_bind_num:a.account_bind_num,one_day_withdrawal_count:a.one_day_withdrawal_count,appoint_time:i};Z(a.id,r),this.$router.push("/risk")}else return!1})},onThirdSubmit(){let i;if(!a.appoint_time)i=d().format("YYYY-MM-DD HH:mm:ss");else if(a.appoint_time[0]>d().format("YYYY-MM-DD HH:mm:ss")&&a.appoint_time[1]>d().format("YYYY-MM-DD HH:mm:ss"))i=a.appoint_time[0]+"~"+a.appoint_time[1];else if(a.appoint_time[0]>d().format("YYYY-MM-DD HH:mm:ss")&&!a.appoint_time[1])i=a.appoint_time[0];else if(!a.appoint_time[0])i=d().format("YYYY-MM-DD HH:mm:ss");else{b.error("\u751F\u6548\u65F6\u95F4\u6BB5\u4E0D\u80FD\u5728\u5F53\u524D\u65F6\u95F4\u4E4B\u524D\uFF01");return}D.value.validate(e=>{if(e){console.log("form",a);const r={open_real_name_authentication_status:a.open_real_name_authentication_status,real_name_authentication_node:a.real_name_authentication_node,real_name_authentication_api:a.real_name_authentication_api,aliyun_app_code:a.aliyun_app_code,anti_addiction_status:parseInt(a.anti_addiction_status),anti_addiction_open_condition:a.anti_addiction_status==2?parseInt(a.anti_addiction_open_condition):"",appoint_time:i};ee(a.id,r),this.$router.push("/risk")}else return!1})},onFourSubmit(){let i;if(!a.appoint_time)i=d().format("YYYY-MM-DD HH:mm:ss");else if(a.appoint_time[0]>d().format("YYYY-MM-DD HH:mm:ss")&&a.appoint_time[1]>d().format("YYYY-MM-DD HH:mm:ss"))i=a.appoint_time[0]+"~"+a.appoint_time[1];else if(a.appoint_time[0]>d().format("YYYY-MM-DD HH:mm:ss")&&!a.appoint_time[1])i=a.appoint_time[0];else if(!a.appoint_time[0])i=d().format("YYYY-MM-DD HH:mm:ss");else{b.error("\u751F\u6548\u65F6\u95F4\u6BB5\u4E0D\u80FD\u5728\u5F53\u524D\u65F6\u95F4\u4E4B\u524D\uFF01");return}D.value.validate(e=>{if(e){const r={mobile_phone_bind_status:a.mobile_phone_bind_status?1:2,mobile_phone_bind_condition:parseInt(a.mobile_phone_bind_condition),appoint_time:i};$(a.id,r),this.$router.push("/risk")}else return!1})},onFiveSubmit(){let i;if(!a.appoint_time)i=d().format("YYYY-MM-DD HH:mm:ss");else if(a.appoint_time[0]>d().format("YYYY-MM-DD HH:mm:ss")&&a.appoint_time[1]>d().format("YYYY-MM-DD HH:mm:ss"))i=a.appoint_time[0]+"~"+a.appoint_time[1];else if(a.appoint_time[0]>d().format("YYYY-MM-DD HH:mm:ss")&&!a.appoint_time[1])i=a.appoint_time[0];else if(!a.appoint_time[0])i=d().format("YYYY-MM-DD HH:mm:ss");else{b.error("\u751F\u6548\u65F6\u95F4\u6BB5\u4E0D\u80FD\u5728\u5F53\u524D\u65F6\u95F4\u4E4B\u524D\uFF01");return}D.value.validate(e=>{if(e){const r={user_agreement_url:a.user_agreement_url,privacy_agreement_url:a.privacy_agreement_url,appoint_time:i};te(a.id,r),this.$router.push("/risk")}else return!1})},onSixSubmit(){if(w.value,w.value){let i=w.value[0],e=w.value[1];typeof w.value[0]=="object"&&(i=d(w.value[0]).format("YYYY-MM-DD HH:mm:ss"),e=d(w.value[1]).format("YYYY-MM-DD HH:mm:ss"));let r={open_advertising:Number(U.value),open_fake_page:Number(C.value),start_date:i,end_date:e};console.log(a.id,r),j(a.id,r).then(l=>{l.status==200&&b({message:"\u4FEE\u6539\u6210\u529F",type:"success"})})}else b.error("\u4E0B\u62C9\u6846\u7684\u503C\u4E0D\u80FD\u4E3A\u7A7A")},onReset(){console.log("formRef.value",D.value),D.value.resetFields(),this.$router.push("/risk")}}},oe={class:"crumbs"},le=m(" \u98CE\u63A7\u7CFB\u7EDF "),ne=m("\u98CE\u63A7\u7BA1\u7406"),ie={class:"container"},_e={class:"form-box",style:{height:"2000px"}},me=m("\u8BBE\u5907\u767B\u5F55\u9650\u5236"),de=m("\u5FAE\u4FE1\u8D26\u53F7\u7ED1\u5B9A"),re=m("\u5B9E\u540D\u8BA4\u8BC1&\u9632\u6C89\u8FF7"),se=m("\u624B\u673A\u7ED1\u5B9A"),ue=m("\u9690\u79C1\u534F\u8BAE"),pe=m("\u5047\u9875\u9762"),fe=m("\u4FEE\u6539\u914D\u7F6E"),ce=m("\u786E\u5B9A"),be=m("\u53D6\u6D88"),he=m("\u786E\u5B9A"),ve=m("\u53D6\u6D88"),Ye=m("\u4E0D\u5F00\u542F"),Ve=m("\u5F00\u542F(\u975E\u5F3A\u5236)"),we=m("\u5F00\u542F(\u5F3A\u5236)"),ge=m("\u963F\u91CC\u4E91"),De=m("\u4E2D\u5BA3\u90E8"),ye=m("\u5173\u95ED"),Me=m("\u5F00\u542F"),He=m("\u5173\u95ED"),xe=m("\u90E8\u5206\u5F00\u542F"),ke=m("\u5168\u90E8\u5F00\u542F"),Ue=m("\u5168\u90E8\u7528\u6237"),Ce=m("\u65B0\u7528\u6237"),Se=m("\u8001\u7528\u6237"),Te=m("\u786E\u5B9A"),Re=m("\u53D6\u6D88"),ze=m("\u5168\u90E8\u7528\u6237"),Fe=m("\u65B0\u7528\u6237"),Ne=m("\u8001\u7528\u6237"),Pe=m("\u786E\u5B9A"),Be=m("\u53D6\u6D88"),Ee=m("\u786E\u5B9A"),Ae=m("\u53D6\u6D88"),Ie=m("\u786E\u5B9A"),Le=m("\u53D6\u6D88");function We(i,e,r,l,Xe,h){const Y=c("el-breadcrumb-item"),T=c("el-breadcrumb"),B=c("el-divider"),V=c("el-switch"),_=c("el-form-item"),f=c("el-input"),y=c("el-date-picker"),v=c("el-button"),M=c("el-form"),p=c("el-radio"),H=c("el-radio-group"),x=c("el-option"),E=c("el-select");return W(),X("div",null,[k("div",oe,[t(T,{separator:"/"},{default:o(()=>[t(Y,null,{default:o(()=>[le]),_:1}),t(Y,null,{default:o(()=>[ne]),_:1})]),_:1})]),k("div",ie,[k("div",_e,[k("div",null,[t(T,{separator:"/"},{default:o(()=>[s(t(Y,null,{default:o(()=>[me]),_:1},512),[[u,this.$route.params.whichTab==0]]),s(t(Y,null,{default:o(()=>[de]),_:1},512),[[u,this.$route.params.whichTab==1]]),s(t(Y,null,{default:o(()=>[re]),_:1},512),[[u,this.$route.params.whichTab==2]]),s(t(Y,null,{default:o(()=>[se]),_:1},512),[[u,this.$route.params.whichTab==3]]),s(t(Y,null,{default:o(()=>[ue]),_:1},512),[[u,this.$route.params.whichTab==4]]),s(t(Y,null,{default:o(()=>[pe]),_:1},512),[[u,this.$route.params.whichTab==5]]),t(Y,null,{default:o(()=>[fe]),_:1})]),_:1})]),t(B),s(t(M,{ref:"formRef",rules:l.rules,model:l.form,"label-width":"280px"},{default:o(()=>[t(_,{label:"\u5141\u8BB8\u6A21\u62DF\u5668\u767B\u5F55",prop:"simulator_login_status"},{default:o(()=>[t(V,{modelValue:l.form.simulator_login_status,"onUpdate:modelValue":e[0]||(e[0]=n=>l.form.simulator_login_status=n)},null,8,["modelValue"])]),_:1}),t(_,{label:"\u5141\u8BB8\u591A\u5F00\u8BBE\u5907\u767B\u5F55",prop:"more_open_login_status"},{default:o(()=>[t(V,{modelValue:l.form.more_open_login_status,"onUpdate:modelValue":e[1]||(e[1]=n=>l.form.more_open_login_status=n)},null,8,["modelValue"])]),_:1}),t(_,{label:"\u5141\u8BB8\u5F02\u5E38\u8BBE\u5907\u767B\u5F55",prop:"exception_login_status"},{default:o(()=>[t(V,{modelValue:l.form.exception_login_status,"onUpdate:modelValue":e[2]||(e[2]=n=>l.form.exception_login_status=n)},null,8,["modelValue"])]),_:1}),t(_,{label:"\u5355\u8BBE\u5907\u5141\u8BB8\u767B\u5F55\u8D26\u53F7\u6570",prop:"one_device_login_num"},{default:o(()=>[t(f,{style:{width:"150px"},modelValue:l.form.one_device_login_num,"onUpdate:modelValue":e[3]||(e[3]=n=>l.form.one_device_login_num=n)},null,8,["modelValue"])]),_:1}),t(_,{label:"\u5141\u8BB8\u6A21\u62DF\u5668\u8BBE\u5907\u770B\u5E7F\u544A",prop:"simulator_watch_advertisement_status"},{default:o(()=>[t(V,{modelValue:l.form.simulator_watch_advertisement_status,"onUpdate:modelValue":e[4]||(e[4]=n=>l.form.simulator_watch_advertisement_status=n)},null,8,["modelValue"])]),_:1}),t(_,{label:"\u5141\u8BB8\u591A\u5F00\u8BBE\u5907\u770B\u5E7F\u544A",prop:"more_open_watch_advertisement_status"},{default:o(()=>[t(V,{modelValue:l.form.more_open_watch_advertisement_status,"onUpdate:modelValue":e[5]||(e[5]=n=>l.form.more_open_watch_advertisement_status=n)},null,8,["modelValue"])]),_:1}),t(_,{label:"\u5141\u8BB8\u5F02\u5E38\u8BBE\u5907\u770B\u5E7F\u544A",prop:"exception_device_watch_advertisement_status"},{default:o(()=>[t(V,{modelValue:l.form.exception_device_watch_advertisement_status,"onUpdate:modelValue":e[6]||(e[6]=n=>l.form.exception_device_watch_advertisement_status=n)},null,8,["modelValue"])]),_:1}),t(_,{label:"\u5F02\u5E38\u8BBE\u5907\u89C2\u770B\u5E7F\u544A\u6570\u91CF",prop:"exception_device_watch_advertisement_num"},{default:o(()=>[t(f,{style:{width:"150px"},modelValue:l.form.exception_device_watch_advertisement_num,"onUpdate:modelValue":e[7]||(e[7]=n=>l.form.exception_device_watch_advertisement_num=n)},null,8,["modelValue"])]),_:1}),t(_,{label:"\u751F\u6548\u65F6\u95F4",prop:"appoint_time"},{default:o(()=>[t(y,{modelValue:l.form.appoint_time,"onUpdate:modelValue":e[8]||(e[8]=n=>l.form.appoint_time=n),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1}),t(_,null,{default:o(()=>[t(v,{type:"primary",onClick:h.onSubmit},{default:o(()=>[ce]),_:1},8,["onClick"]),t(v,{onClick:h.onReset},{default:o(()=>[be]),_:1},8,["onClick"])]),_:1})]),_:1},8,["rules","model"]),[[u,this.$route.params.whichTab==0]]),s(t(M,{ref:"formRef",rules:l.rules,model:l.form,"label-width":"280px"},{default:o(()=>[t(_,{label:"\u5FAE\u4FE1\u6700\u591A\u7ED1\u5B9A\u8D26\u53F7\u6570",prop:"account_bind_num"},{default:o(()=>[t(f,{style:{width:"150px"},modelValue:l.form.account_bind_num,"onUpdate:modelValue":e[9]||(e[9]=n=>l.form.account_bind_num=n)},null,8,["modelValue"])]),_:1}),t(_,{label:"\u5FAE\u4FE1\u5355\u65E5\u53EF\u63D0\u73B0\u6570",prop:"one_day_withdrawal_count"},{default:o(()=>[t(f,{style:{width:"150px"},modelValue:l.form.one_day_withdrawal_count,"onUpdate:modelValue":e[10]||(e[10]=n=>l.form.one_day_withdrawal_count=n)},null,8,["modelValue"])]),_:1}),t(_,{label:"\u751F\u6548\u65F6\u95F4",prop:"appoint_time"},{default:o(()=>[t(y,{modelValue:l.form.appoint_time,"onUpdate:modelValue":e[11]||(e[11]=n=>l.form.appoint_time=n),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1}),t(_,null,{default:o(()=>[t(v,{type:"primary",onClick:h.onSecondSubmit},{default:o(()=>[he]),_:1},8,["onClick"]),t(v,{onClick:h.onReset},{default:o(()=>[ve]),_:1},8,["onClick"])]),_:1})]),_:1},8,["rules","model"]),[[u,this.$route.params.whichTab==1]]),s(t(M,{ref:"formRef",rules:l.rules,model:l.form,"label-width":"280px"},{default:o(()=>[t(_,{label:"\u662F\u5426\u5F00\u542F\u5B9E\u540D\u8BA4\u8BC1",prop:"open_real_name_authentication_status"},{default:o(()=>[t(H,{modelValue:l.form.open_real_name_authentication_status,"onUpdate:modelValue":e[12]||(e[12]=n=>l.form.open_real_name_authentication_status=n)},{default:o(()=>[t(p,{label:1},{default:o(()=>[Ye]),_:1}),t(p,{label:2},{default:o(()=>[Ve]),_:1}),t(p,{label:3},{default:o(()=>[we]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(_,{label:"\u5B9E\u540D\u8BA4\u8BC1\u8282\u70B9",prop:"real_name_authentication_node"},{default:o(()=>[t(E,{modelValue:l.form.real_name_authentication_node,"onUpdate:modelValue":e[13]||(e[13]=n=>l.form.real_name_authentication_node=n),placeholder:"\u8BF7\u9009\u62E9"},{default:o(()=>[t(x,{key:"bbk",label:"\u767B\u5F55\u524D",value:"1"}),t(x,{key:"xtc",label:"\u767B\u5F55\u6210\u529FX\u6B21\u540E",value:"2"}),t(x,{key:"imoo",label:"\u63D0\u73B0\u6210\u529FX\u6B21\u540E",value:"3"}),t(x,{key:"imoo",label:"\u7ED1\u5B9A\u5FAE\u4FE1\u540E\u7B2C\u4E8C\u6B21\u767B\u5F55",value:"4"})]),_:1},8,["modelValue"])]),_:1}),t(_,{label:"\u5B9E\u540D\u8BA4\u8BC1\u63A5\u53E3",prop:"real_name_authentication_api"},{default:o(()=>[t(H,{modelValue:l.form.real_name_authentication_api,"onUpdate:modelValue":e[14]||(e[14]=n=>l.form.real_name_authentication_api=n)},{default:o(()=>[t(p,{label:1},{default:o(()=>[ge]),_:1}),t(p,{label:2},{default:o(()=>[De]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(t(_,{label:"\u963F\u91CC\u4E91\u63A5\u53E3",prop:"aliyun_app_code"},{default:o(()=>[t(f,{style:{width:"150px"},modelValue:l.form.aliyun_app_code,"onUpdate:modelValue":e[15]||(e[15]=n=>l.form.aliyun_app_code=n)},null,8,["modelValue"])]),_:1},512),[[u,l.form.real_name_authentication_api==1]]),s(t(_,{label:"zxb_app_id",prop:"zxb_app_id"},{default:o(()=>[t(f,{style:{width:"150px"},modelValue:l.form.zxb_app_id,"onUpdate:modelValue":e[16]||(e[16]=n=>l.form.zxb_app_id=n)},null,8,["modelValue"])]),_:1},512),[[u,l.form.real_name_authentication_api==2]]),s(t(_,{label:"zxb_biz_id",prop:"zxb_biz_id"},{default:o(()=>[t(f,{style:{width:"150px"},modelValue:l.form.zxb_biz_id,"onUpdate:modelValue":e[17]||(e[17]=n=>l.form.zxb_biz_id=n)},null,8,["modelValue"])]),_:1},512),[[u,l.form.real_name_authentication_api==2]]),s(t(_,{label:"zxb_secret_key",prop:"zxb_secret_key"},{default:o(()=>[t(f,{style:{width:"150px"},modelValue:l.form.zxb_secret_key,"onUpdate:modelValue":e[18]||(e[18]=n=>l.form.zxb_secret_key=n)},null,8,["modelValue"])]),_:1},512),[[u,l.form.real_name_authentication_api==2]]),s(t(_,{label:"\u662F\u5426\u5F00\u542F\u6570\u636E\u4E0A\u62A5",prop:"open_escalation_status"},{default:o(()=>[t(H,{modelValue:l.form.open_escalation_status,"onUpdate:modelValue":e[19]||(e[19]=n=>l.form.open_escalation_status=n)},{default:o(()=>[t(p,{label:1},{default:o(()=>[ye]),_:1}),t(p,{label:2},{default:o(()=>[Me]),_:1})]),_:1},8,["modelValue"])]),_:1},512),[[u,l.form.real_name_authentication_api==2]]),s(t(_,{label:"\u4E2D\u5BA3\u90E8\u4E0A\u62A5\u63A5\u53E3",prop:"data_escalation_api"},{default:o(()=>[t(f,{style:{width:"150px"},modelValue:l.form.data_escalation_api,"onUpdate:modelValue":e[20]||(e[20]=n=>l.form.data_escalation_api=n)},null,8,["modelValue"])]),_:1},512),[[u,l.form.open_escalation_status==2]]),t(_,{label:"\u9632\u6C89\u8FF7\u5F00\u542F",prop:"anti_addiction_status"},{default:o(()=>[t(H,{modelValue:l.form.anti_addiction_status,"onUpdate:modelValue":e[21]||(e[21]=n=>l.form.anti_addiction_status=n)},{default:o(()=>[t(p,{label:1},{default:o(()=>[He]),_:1}),t(p,{label:2},{default:o(()=>[xe]),_:1}),t(p,{label:3},{default:o(()=>[ke]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(t(_,{label:"\u90E8\u5206\u5F00\u542F\u6761\u4EF6",prop:"anti_addiction_open_condition"},{default:o(()=>[t(H,{modelValue:l.form.anti_addiction_open_condition,"onUpdate:modelValue":e[22]||(e[22]=n=>l.form.anti_addiction_open_condition=n)},{default:o(()=>[t(p,{label:1},{default:o(()=>[Ue]),_:1}),t(p,{label:2},{default:o(()=>[Ce]),_:1}),t(p,{label:3},{default:o(()=>[Se]),_:1})]),_:1},8,["modelValue"])]),_:1},512),[[u,l.form.anti_addiction_status==2]]),t(_,{label:"\u751F\u6548\u65F6\u95F4",prop:"appoint_time"},{default:o(()=>[t(y,{modelValue:l.form.appoint_time,"onUpdate:modelValue":e[23]||(e[23]=n=>l.form.appoint_time=n),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1}),t(_,null,{default:o(()=>[t(v,{type:"primary",onClick:h.onThirdSubmit},{default:o(()=>[Te]),_:1},8,["onClick"]),t(v,{onClick:h.onReset},{default:o(()=>[Re]),_:1},8,["onClick"])]),_:1})]),_:1},8,["rules","model"]),[[u,this.$route.params.whichTab==2]]),s(t(M,{ref:"formRef",rules:l.rules,model:l.form,"label-width":"280px"},{default:o(()=>[t(_,{label:"\u5F00\u542F\u624B\u673A\u7ED1\u5B9A",prop:"mobile_phone_bind_status"},{default:o(()=>[t(V,{modelValue:l.form.mobile_phone_bind_status,"onUpdate:modelValue":e[24]||(e[24]=n=>l.form.mobile_phone_bind_status=n)},null,8,["modelValue"])]),_:1}),t(_,{label:"\u624B\u673A\u7ED1\u5B9A\u6761\u4EF6",prop:"mobile_phone_bind_condition"},{default:o(()=>[t(H,{modelValue:l.form.mobile_phone_bind_condition,"onUpdate:modelValue":e[25]||(e[25]=n=>l.form.mobile_phone_bind_condition=n)},{default:o(()=>[t(p,{label:1},{default:o(()=>[ze]),_:1}),t(p,{label:2},{default:o(()=>[Fe]),_:1}),t(p,{label:3},{default:o(()=>[Ne]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(_,{label:"\u751F\u6548\u65F6\u95F4",prop:"appoint_time"},{default:o(()=>[t(y,{modelValue:l.form.appoint_time,"onUpdate:modelValue":e[26]||(e[26]=n=>l.form.appoint_time=n),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1}),t(_,null,{default:o(()=>[t(v,{type:"primary",onClick:h.onFourSubmit},{default:o(()=>[Pe]),_:1},8,["onClick"]),t(v,{onClick:h.onReset},{default:o(()=>[Be]),_:1},8,["onClick"])]),_:1})]),_:1},8,["rules","model"]),[[u,this.$route.params.whichTab==3]]),s(t(M,{ref:"formRef",rules:l.rules,model:l.form,"label-width":"280px"},{default:o(()=>[t(_,{label:"\u7528\u6237\u534F\u8BAE\u5730\u5740",prop:"user_agreement_url"},{default:o(()=>[t(f,{style:{width:"150px"},modelValue:l.form.user_agreement_url,"onUpdate:modelValue":e[27]||(e[27]=n=>l.form.user_agreement_url=n)},null,8,["modelValue"])]),_:1}),t(_,{label:"\u9690\u79C1\u534F\u8BAE\u5730\u5740",prop:"privacy_agreement_url"},{default:o(()=>[t(f,{style:{width:"150px"},modelValue:l.form.privacy_agreement_url,"onUpdate:modelValue":e[28]||(e[28]=n=>l.form.privacy_agreement_url=n)},null,8,["modelValue"])]),_:1}),t(_,{label:"\u751F\u6548\u65F6\u95F4",prop:"appoint_time"},{default:o(()=>[t(y,{modelValue:l.form.appoint_time,"onUpdate:modelValue":e[29]||(e[29]=n=>l.form.appoint_time=n),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1}),t(_,null,{default:o(()=>[t(v,{type:"primary",onClick:h.onFiveSubmit},{default:o(()=>[Ee]),_:1},8,["onClick"]),t(v,{onClick:h.onReset},{default:o(()=>[Ae]),_:1},8,["onClick"])]),_:1})]),_:1},8,["rules","model"]),[[u,this.$route.params.whichTab==4]]),s(t(M,{ref:"formRef",rules:l.rules,model:l.form,"label-width":"280px"},{default:o(()=>[t(_,{label:"\u6307\u5B9A\u6E38\u620F"},{default:o(()=>[t(f,{style:{width:"150px"},modelValue:l.product_name,"onUpdate:modelValue":e[30]||(e[30]=n=>l.product_name=n),disabled:!0},null,8,["modelValue"])]),_:1}),t(_,{label:"\u6E20\u9053\u9009\u62E9"},{default:o(()=>[t(f,{style:{width:"150px"},modelValue:l.channel_name,"onUpdate:modelValue":e[31]||(e[31]=n=>l.channel_name=n),disabled:!0},null,8,["modelValue"])]),_:1}),t(_,{label:"\u9009\u62E9\u7248\u672C"},{default:o(()=>[t(f,{style:{width:"150px"},modelValue:l.version_name,"onUpdate:modelValue":e[32]||(e[32]=n=>l.version_name=n),disabled:!0},null,8,["modelValue"])]),_:1}),t(_,{label:"\u5173\u95ED\u5E7F\u544A"},{default:o(()=>[t(V,{modelValue:l.openAD,"onUpdate:modelValue":e[33]||(e[33]=n=>l.openAD=n),"active-value":0,"inactive-value":1},null,8,["modelValue"])]),_:1}),t(_,{label:"\u5F00\u542F\u5047\u9875\u9762"},{default:o(()=>[t(V,{modelValue:l.openFakePage,"onUpdate:modelValue":e[34]||(e[34]=n=>l.openFakePage=n),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1}),t(_,{label:"\u6307\u5B9A\u751F\u6548\u65E5\u671F"},{default:o(()=>[t(y,{modelValue:l.dateSelect,"onUpdate:modelValue":e[35]||(e[35]=n=>l.dateSelect=n),type:"datetimerange","range-separator":"\u2192","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue"])]),_:1}),t(_,null,{default:o(()=>[t(v,{type:"primary",onClick:h.onSixSubmit},{default:o(()=>[Ie]),_:1},8,["onClick"]),t(v,{onClick:h.onReset},{default:o(()=>[Le]),_:1},8,["onClick"])]),_:1})]),_:1},8,["rules","model"]),[[u,this.$route.params.whichTab==5]])])])])}var Ge=A(ae,[["render",We]]);export{Ge as default};