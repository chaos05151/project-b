import{_ as Re,u as Pe,r as f,w as Se,a7 as Ee,C as Ne,D as Be,e as H,a as r,c as Y,t as Z,j as t,k as o,q as s,U as p,y as g,f as Te,T as Ie,h as S,F as k,m as D,p as w,z as i,l as m,b as Fe}from"./index.3fee5d13.js";import{q as je,r as Ae,a as qe,b as $e,c as We,d as Xe,e as Ge}from"./risk.3de4722c.js";import{h as v}from"./moment.9709ab41.js";import{r as Je}from"./risk.4dfb295f.js";const Ke={class:"crumbs"},Oe=i(" \u98CE\u63A7\u7CFB\u7EDF "),Qe=i("\u98CE\u63A7\u89C4\u5219\u7BA1\u7406"),Ze={class:"container"},ea={class:"form-box"},aa=i("\u62C9\u9ED1\u89C4\u5219"),la=i("\u7981\u6B62\u63D0\u73B0\u89C4\u5219"),ta=i("\u9650\u5236\u4E0B\u53D1\u5E7F\u544A"),oa=i("\u65B0\u589E\u914D\u7F6E"),na=i("\xA0\u5C0F\u65F6\u89C2\u770B\xA0"),ua=i("\xA0\u6B21\u5E7F\u544A "),_a=i("\xA0\u5C0F\u65F6\u83B7\u53D6\xA0"),ia=i("\xA0\u91D1\u989D/\u5143\u5B9D "),da=i("\u786E\u5B9A"),ra=i("\u53D6\u6D88"),sa=i("\u786E\u5B9A"),pa=i("\u53D6\u6D88"),ma=i("\u4E0D\u5F00\u542F"),ca=i("\u5F00\u542F(\u975E\u5F3A\u5236)"),fa=i("\u5F00\u542F(\u5F3A\u5236)"),va=i("\u963F\u91CC\u4E91"),ba=i("\u4E2D\u5BA3\u90E8"),ga=i("\u5173\u95ED"),Va=i("\u5F00\u542F"),ha=i("\u5173\u95ED"),ya=i("\u90E8\u5206\u5F00\u542F"),Ya=i("\u5168\u90E8\u5F00\u542F"),ka=i("\u5168\u90E8\u7528\u6237"),Da=i("\u65B0\u7528\u6237"),wa=i("\u8001\u7528\u6237"),xa=i("\u786E\u5B9A"),Ma=i("\u53D6\u6D88"),Ha=i("\u5168\u90E8\u7528\u6237"),Ua=i("\u65B0\u7528\u6237"),Ca=i("\u8001\u7528\u6237"),La=i("\u786E\u5B9A"),za=i("\u53D6\u6D88"),Ra=i("\u786E\u5B9A"),Pa=i("\u53D6\u6D88"),Sa=i("\u786E\u5B9A"),Ea=i("\u53D6\u6D88"),Na={__name:"RiskRuleAdd",setup(Ba){const ce=Pe(),b=f(""),G=f(""),J=f(""),ee=f([]),ae=f([]),ue=f([]),fe=f("");f(!0),console.log("this.$refs.table ",fe);const ve=()=>{Te().then(n=>{console.log("fetchVersionProductChannelData",n.data),ee.value=n.data}).catch(()=>{})},be=()=>{G.value="",J.value="",ae.value=ee.value.filter(n=>n.value==b.value)[0].children},ge=()=>{J.value="",ue.value=ae.value.filter(n=>n.value==G.value)[0].children};Se(()=>ce.mainProductId,(n,a)=>{V.value=n,ve()});const Ve=Je();Ee();const E=Ne(),R=Ve.getstatewhichTab,V=f("");let T=f(),C=f();const e=Be({config_type:1}),L=f(null),le=f(1),te=f(0),$=f(""),oe=f(""),I=f(""),_e=f(""),N=f(""),P=f(""),ne=f(""),W=f(""),K=f(""),ie=f(""),he=()=>{Ie().then(n=>{console.log("getProductDataList",n.data),T.value=n.data,console.log("options.value.main_product_name",T.value)}).catch(()=>{})},ye=n=>{Fe({main_product_id:n}).then(_=>{console.log("getSubProductDataList",_.data),C.value=_.data,console.log("suboptions.value",C.value)}).catch(()=>{})},Ye=()=>{je().then(n=>{console.log("main_gameChanneVersionList",n),ne.value=n.data}).catch(()=>{})},ke=n=>{console.log("erjiyx",n),I.value="",P.value="",N.value="",$.value=n,ne.value.forEach(a=>{a.value==n&&(console.log("item.label_name",a.label_name),oe.value=a.label_name,W.value=a.children)}),console.log(" main_game_selected_name.value",oe.value),console.log("760",W.value)},De=n=>{console.log(n),P.value="",N.value="",I.value=n,console.log(W.value),W.value.forEach(a=>{a.value==n&&(_e.value=a.label_name,K.value=a.children)}),console.log("780",K.value)},we=n=>{P.value="",N.value=n,K.value.forEach(a=>{a.value==n&&a.children&&(ie.value=a.children)})},xe=n=>{console.log(n),P.value=n},z=n=>n?/^\d+(\.{0,1}\d+){0,1}$/.test(n)?!0:(m.error("\u8BF7\u5148\u9009\u62E9\u6E38\u620F\uFF01"),!1):(m.error("\u8BF7\u9009\u62E9\u6E38\u620F\uFF01"),!1),O=n=>{if(n)return/^\d+(\.{0,1}\d+){0,1}$/.test(n)?!0:(m.error("\u8BF7\u8F93\u5165\u6570\u5B57\uFF01"),!1)},de=n=>{qe(n).then(a=>{a.status==200?m.success("\u6DFB\u52A0\u8BBE\u5907\u767B\u5F55\u6210\u529F"):a.status==-1&&m.error("\u6B64\u6E38\u620F\u914D\u7F6E\u5DF2\u5B58\u5728\uFF01")})},re=n=>{$e(n).then(a=>{a.status==200?m.success("\u6DFB\u52A0\u5FAE\u4FE1\u8D26\u53F7\u7ED1\u5B9A\u6210\u529F"):a.status==-1&&m.error("\u6B64\u6E38\u620F\u914D\u7F6E\u5DF2\u5B58\u5728\uFF01")})},se=n=>{We(n).then(a=>{a.status==200?m.success("\u6DFB\u52A0\u624B\u673A\u7ED1\u5B9A\u6210\u529F"):a.status==-1&&m.error("\u6B64\u6E38\u620F\u914D\u7F6E\u5DF2\u5B58\u5728\uFF01")})},pe=n=>{Xe(n).then(a=>{a.status==200?(console.log("\u6DFB\u52A0\u6210\u529F11"),m.success("\u6DFB\u52A0\u9632\u6C89\u8FF7\u6210\u529F")):a.status==-1&&m.error("\u6B64\u6E38\u620F\u914D\u7F6E\u5DF2\u5B58\u5728\uFF01")})},me=n=>{Ge(n).then(a=>{a.status==200?m.success("\u6DFB\u52A0\u9690\u79C1\u534F\u8BAE\u6210\u529F"):a.status==-1&&m.error("\u6B64\u6E38\u620F\u914D\u7F6E\u5DF2\u5B58\u5728\uFF01")})},F={};Ye(),he();const Q=()=>{b.value="",ye(V.value)},Me=()=>{L.value.validate(n=>{if(n){if(e.one_device_login_num&&!O(e.one_device_login_num)||e.exception_device_watch_advertisement_num&&!O(e.exception_device_watch_advertisement_num))return;let a;if(!e.appoint_time)a=v().format("YYYY-MM-DD HH:mm:ss");else if(e.appoint_time[0]>v().format("YYYY-MM-DD HH:mm:ss")&&e.appoint_time[1]>v().format("YYYY-MM-DD HH:mm:ss"))a=e.appoint_time[0]+"~"+e.appoint_time[1];else{m.error("\u751F\u6548\u65F6\u95F4\u6BB5\u4E0D\u80FD\u5728\u5F53\u524D\u65F6\u95F4\u4E4B\u524D\uFF01");return}if(e.config_type)if(e.config_type==1){if(!z(V.value))return;b.value.forEach(function(_){if(!z(_))return;const d=C.value.filter(c=>c.product_id==_),x={config_type:1,main_product_id:d[0].main_product_id,main_product_name:d[0].main_product_name,product_id:d[0].product_id,product_name:d[0].product_name,package_name:d[0].package_name,simulator_login_status:e.simulator_login_status?1:0,more_open_login_status:e.more_open_login_status?1:0,risk_device_disabled_status:e.risk_device_disabled_status?1:0,exception_login_status:e.exception_login_status?1:0,one_device_login_num:e.one_device_login_num,exception_device_watch_advertisement_num:e.exception_device_watch_advertisement_num,exception_device_watch_advertisement_status:e.exception_device_watch_advertisement_status?1:0,simulator_watch_advertisement_status:e.simulator_watch_advertisement_status?1:0,more_open_watch_advertisement_status:e.more_open_watch_advertisement_status?1:0,appoint_time:a};console.log(x),de(x)})}else{const _={config_type:0,simulator_login_status:e.simulator_login_status?1:0,more_open_login_status:e.more_open_login_status?1:0,risk_device_disabled_status:e.risk_device_disabled_status?1:0,exception_login_status:e.exception_login_status?1:0,one_device_login_num:e.one_device_login_num,exception_device_watch_advertisement_num:e.exception_device_watch_advertisement_num,simulator_watch_advertisement_status:e.simulator_watch_advertisement_status?1:0,more_open_watch_advertisement_status:e.more_open_watch_advertisement_status?1:0,appoint_time:a};console.log(_),de(_)}else{m.error("\u5FC5\u987B\u9009\u62E9\u914D\u7F6E\u7C7B\u578B\uFF01");return}E.push("/risk")}else return!1})},He=()=>{L.value.validate(n=>{if(n){if(e.account_bind_num&&!O(e.account_bind_num)||e.one_day_withdrawal_count&&!O(e.one_day_withdrawal_count))return;let a;if(!e.appoint_time)a=v().format("YYYY-MM-DD HH:mm:ss");else if(e.appoint_time[0]>v().format("YYYY-MM-DD HH:mm:ss")&&e.appoint_time[1]>v().format("YYYY-MM-DD HH:mm:ss"))a=e.appoint_time[0]+"~"+e.appoint_time[1];else{m.error("\u751F\u6548\u65F6\u95F4\u6BB5\u4E0D\u80FD\u5728\u5F53\u524D\u65F6\u95F4\u4E4B\u524D\uFF01");return}if(e.config_type)if(e.config_type==1){if(!z(V.value))return;b.value.forEach(function(_){if(!z(_))return;const d=C.value.filter(c=>c.product_id==_),x={config_type:1,main_product_id:d[0].main_product_id,main_product_name:d[0].main_product_name,product_id:d[0].product_id,product_name:d[0].product_name,package_name:d[0].package_name,account_bind_num:e.account_bind_num,one_day_withdrawal_count:e.one_day_withdrawal_count,appoint_time:a};console.log("data",x),re(x)})}else{const _={config_type:0,account_bind_num:e.account_bind_num,one_day_withdrawal_count:e.one_day_withdrawal_count,appoint_time:a};console.log("globaldata",_),re(_)}else{m.error("\u5FC5\u987B\u9009\u62E9\u914D\u7F6E\u7C7B\u578B\uFF01");return}E.push("/risk")}else return!1})},Ue=()=>{L.value.validate(n=>{if(n){let a;if(!e.appoint_time)a=v().format("YYYY-MM-DD HH:mm:ss");else if(e.appoint_time[0]>v().format("YYYY-MM-DD HH:mm:ss")&&e.appoint_time[1]>v().format("YYYY-MM-DD HH:mm:ss"))a=e.appoint_time[0]+"~"+e.appoint_time[1];else{m.error("\u751F\u6548\u65F6\u95F4\u6BB5\u4E0D\u80FD\u5728\u5F53\u524D\u65F6\u95F4\u4E4B\u524D\uFF01");return}if(e.config_type)if(e.config_type==1){if(!z(V.value))return;b.value.forEach(function(_){if(!z(_))return;const d=C.value.filter(c=>c.product_id==_),x={config_type:1,main_product_id:d[0].main_product_id,main_product_name:d[0].main_product_name,product_id:d[0].product_id,product_name:d[0].product_name,package_name:d[0].package_name,open_real_name_authentication_status:e.open_real_name_authentication_status,real_name_authentication_node:e.real_name_authentication_node,real_name_authentication_api:e.real_name_authentication_api,aliyun_app_code:e.aliyun_app_code,anti_addiction_status:parseInt(e.anti_addiction_status),anti_addiction_open_condition:e.anti_addiction_status==2?parseInt(e.anti_addiction_open_condition):"",appoint_time:a};console.log(x),pe(x)})}else{const _={config_type:0,open_real_name_authentication_status:e.open_real_name_authentication_status,real_name_authentication_node:e.real_name_authentication_node,real_name_authentication_api:e.real_name_authentication_api,aliyun_app_code:e.aliyun_app_code,anti_addiction_status:parseInt(e.anti_addiction_status),anti_addiction_open_condition:e.anti_addiction_status==2?parseInt(e.anti_addiction_open_condition):"",appoint_time:a};pe(_)}else{m.error("\u5FC5\u987B\u9009\u62E9\u914D\u7F6E\u7C7B\u578B\uFF01");return}E.push("/risk")}else return!1})},Ce=()=>{L.value.validate(n=>{if(n){let a;if(!e.appoint_time)a=v().format("YYYY-MM-DD HH:mm:ss");else if(e.appoint_time[0]>v().format("YYYY-MM-DD HH:mm:ss")&&e.appoint_time[1]>v().format("YYYY-MM-DD HH:mm:ss"))a=e.appoint_time[0]+"~"+e.appoint_time[1];else{m.error("\u751F\u6548\u65F6\u95F4\u6BB5\u4E0D\u80FD\u5728\u5F53\u524D\u65F6\u95F4\u4E4B\u524D\uFF01");return}if(e.config_type)if(e.config_type==1){if(!z(V.value))return;b.value.forEach(function(_){if(!z(_))return;const d=C.value.filter(c=>c.product_id==_),x={config_type:1,main_product_id:d[0].main_product_id,main_product_name:d[0].main_product_name,product_id:d[0].product_id,product_name:d[0].product_name,package_name:d[0].package_name,mobile_phone_bind_status:e.mobile_phone_bind_status?2:1,mobile_phone_bind_condition:parseInt(e.mobile_phone_bind_condition),appoint_time:a};se(x)})}else{const _={config_type:0,mobile_phone_bind_status:e.mobile_phone_bind_status?2:1,mobile_phone_bind_condition:parseInt(e.mobile_phone_bind_condition),appoint_time:a};se(_)}else{m.error("\u5FC5\u987B\u9009\u62E9\u914D\u7F6E\u7C7B\u578B\uFF01");return}E.push("/risk")}else return!1})},Le=()=>{L.value.validate(n=>{if(n){let a;if(!e.appoint_time)a=v().format("YYYY-MM-DD HH:mm:ss");else if(e.appoint_time[0]>v().format("YYYY-MM-DD HH:mm:ss")&&e.appoint_time[1]>v().format("YYYY-MM-DD HH:mm:ss"))a=e.appoint_time[0]+"~"+e.appoint_time[1];else{m.error("\u751F\u6548\u65F6\u95F4\u6BB5\u4E0D\u80FD\u5728\u5F53\u524D\u65F6\u95F4\u4E4B\u524D\uFF01");return}if(e.config_type)if(e.config_type==1){if(!z(V.value))return;b.value.forEach(function(_){if(!z(_))return;const d=C.value.filter(c=>c.product_id==_),x={config_type:1,main_product_id:d[0].main_product_id,main_product_name:d[0].main_product_name,product_id:d[0].product_id,product_name:d[0].product_name,package_name:d[0].package_name,user_agreement_url:e.user_agreement_url,privacy_agreement_url:e.privacy_agreement_url,privacy_agreement_status:e.privacy_agreement_status,appoint_time:a};me(x)})}else{const _={config_type:0,user_agreement_url:e.user_agreement_url,privacy_agreement_url:e.privacy_agreement_url,privacy_agreement_status:e.privacy_agreement_status,appoint_time:a};me(_)}else{m.error("\u5FC5\u987B\u9009\u62E9\u914D\u7F6E\u7C7B\u578B\uFF01");return}E.push("/risk")}else return!1})},ze=()=>{if($.value!=""&&I.value!=""&&N.value!=""&&P.value!=""){let n=[];if(!e.appoint_time)n=[v().format("YYYY-MM-DD HH:mm:ss"),""];else if(v(e.appoint_time[0]).format("YYYY-MM-DD HH:mm:ss")>v().format("YYYY-MM-DD HH:mm:ss")&&v(e.appoint_time[1]).format("YYYY-MM-DD HH:mm:ss")>v().format("YYYY-MM-DD HH:mm:ss"))n=e.appoint_time.map(_=>v(_).format("YYYY-MM-DD HH:mm:ss"));else{m.error("\u751F\u6548\u65F6\u95F4\u6BB5\u4E0D\u80FD\u5728\u5F53\u524D\u65F6\u95F4\u4E4B\u524D\uFF01");return}console.log("arr",n);let a={main_product_id:$.value,main_product_name:oe.value,product_id:I.value,product_name:_e.value,channel:N.value,game_version:P.value,open_advertising:Number(le.value),open_fake_page:Number(te.value),start_date:n[0],end_date:n[1]};console.log(a),Ae(a).then(_=>{_.status==200?(m.success("\u6DFB\u52A0\u6210\u529F"),E.push("/risk")):m.error(_.message)})}else{m.error("\u4E0B\u62C9\u6846\u7684\u503C\u4E0D\u80FD\u4E3A\u7A7A");return}},j=()=>{V.value="",b.value="",E.go(-1)};return(n,a)=>{const _=H("el-breadcrumb-item"),d=H("el-breadcrumb"),x=H("el-divider"),c=H("el-option"),h=H("el-select"),u=H("el-form-item"),B=H("el-switch"),M=H("el-input"),U=H("el-button"),A=H("el-form"),X=H("el-date-picker"),y=H("el-radio"),q=H("el-radio-group");return r(),Y("div",null,[Z("div",Ke,[t(d,{separator:"/"},{default:o(()=>[t(_,null,{default:o(()=>[Oe]),_:1}),t(_,null,{default:o(()=>[Qe]),_:1})]),_:1})]),Z("div",Ze,[Z("div",ea,[Z("div",null,[t(d,{separator:"/"},{default:o(()=>[s(t(_,null,{default:o(()=>[aa]),_:1},512),[[p,g(R)==0]]),s(t(_,null,{default:o(()=>[la]),_:1},512),[[p,g(R)==1]]),s(t(_,null,{default:o(()=>[ta]),_:1},512),[[p,g(R)==2]]),t(_,null,{default:o(()=>[oa]),_:1})]),_:1})]),t(x),s(t(A,{ref_key:"formRef",ref:L,rules:F,model:e,"label-width":"280px"},{default:o(()=>[S(` <el-form-item label="\u914D\u7F6E\u7C7B\u578B" prop="config_type">
              <el-radio-group v-model="form.config_type">
                <el-radio label="0">\u6240\u6709\u9879\u76EE</el-radio>
                <el-radio label="1">\u6307\u5B9A\u9879\u76EE</el-radio>
              </el-radio-group>
            </el-form-item> `),s(t(u,{label:"\u5E94\u7528\u9009\u62E9",prop:"product_name_selected"},{default:o(()=>[t(h,{onChange:be,modelValue:b.value,"onUpdate:modelValue":a[0]||(a[0]=l=>b.value=l),placeholder:"\u5E94\u7528\u9009\u62E9",class:"m-2"},{default:o(()=>[(r(!0),Y(k,null,D(ee.value,l=>(r(),w(c,{key:l.value,label:l.label_name,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},512),[[p,e.config_type==1]]),s(t(u,{label:"\u6E20\u9053\u9009\u62E9",prop:"channel_name_selected"},{default:o(()=>[t(h,{onChange:ge,modelValue:G.value,"onUpdate:modelValue":a[1]||(a[1]=l=>G.value=l),placeholder:"\u6E20\u9053\u9009\u62E9",class:"m-2"},{default:o(()=>[(r(!0),Y(k,null,D(ae.value,l=>(r(),w(c,{key:l.value,label:l.label_name,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},512),[[p,e.config_type==1]]),s(t(u,{label:"\u7248\u672C\u9009\u62E9",prop:"channel_name_selected"},{default:o(()=>[t(h,{modelValue:J.value,"onUpdate:modelValue":a[2]||(a[2]=l=>J.value=l),placeholder:"\u7248\u672C\u9009\u62E9",class:"m-2"},{default:o(()=>[(r(!0),Y(k,null,D(ue.value,l=>(r(),w(c,{key:l.value,label:l.label_name,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},512),[[p,e.config_type==1]]),t(u,{label:"\u5F02\u5E38\u8BBE\u5907",prop:"exception_login_status"},{default:o(()=>[t(B,{modelValue:e.exception_login_status,"onUpdate:modelValue":a[3]||(a[3]=l=>e.exception_login_status=l)},null,8,["modelValue"])]),_:1}),t(u,{label:"\u98CE\u9669\u8BBE\u5907",prop:"risk_device_disabled_status"},{default:o(()=>[t(B,{modelValue:e.risk_device_disabled_status,"onUpdate:modelValue":a[4]||(a[4]=l=>e.risk_device_disabled_status=l)},null,8,["modelValue"])]),_:1}),t(u,{label:"win11\u81EA\u5E26\u6A21\u62DF\u5668",prop:"win11_simulator_status"},{default:o(()=>[t(B,{modelValue:e.win11_simulator_status,"onUpdate:modelValue":a[5]||(a[5]=l=>e.win11_simulator_status=l)},null,8,["modelValue"])]),_:1}),t(u,{label:"\u7528\u6237\u91CD\u590D\u5B89\u88C5\u76F8\u540C\u7248\u672C\u6B21\u6570",prop:"same_version_num"},{default:o(()=>[t(M,{style:{width:"150px"},modelValue:e.same_version_num,"onUpdate:modelValue":a[6]||(a[6]=l=>e.same_version_num=l)},null,8,["modelValue"])]),_:1}),t(u,{label:"\u7528\u6237"},{default:o(()=>[t(M,{style:{width:"60px"},modelValue:e.advertisement_time,"onUpdate:modelValue":a[7]||(a[7]=l=>e.advertisement_time=l)},null,8,["modelValue"]),na,t(M,{style:{width:"60px"},modelValue:e.advertisement_num,"onUpdate:modelValue":a[8]||(a[8]=l=>e.advertisement_num=l)},null,8,["modelValue"]),ua]),_:1}),t(u,{label:"\u7528\u6237"},{default:o(()=>[t(M,{style:{width:"60px"},modelValue:e.yuanbao_time,"onUpdate:modelValue":a[9]||(a[9]=l=>e.yuanbao_time=l)},null,8,["modelValue"]),_a,t(M,{style:{width:"60px"},modelValue:e.yuanbao_num,"onUpdate:modelValue":a[10]||(a[10]=l=>e.yuanbao_num=l)},null,8,["modelValue"]),ia]),_:1}),t(u,null,{default:o(()=>[t(U,{type:"primary",onClick:Me},{default:o(()=>[da]),_:1}),t(U,{onClick:j},{default:o(()=>[ra]),_:1})]),_:1})]),_:1},8,["model"]),[[p,g(R)==0]]),s(t(A,{ref_key:"formRef",ref:L,rules:F,model:e,"label-width":"280px"},{default:o(()=>[S(` <el-form-item label="\u914D\u7F6E\u7C7B\u578B" prop="config_type">
              <el-radio-group v-model="form.config_type">
                <el-radio label="0">\u6240\u6709\u9879\u76EE</el-radio>
                <el-radio label="1">\u6307\u5B9A\u9879\u76EE</el-radio>
              </el-radio-group>
            </el-form-item> `),s(t(u,{label:"\u9879\u76EE",prop:"main_product_name_selected"},{default:o(()=>[t(h,{modelValue:V.value,"onUpdate:modelValue":a[11]||(a[11]=l=>V.value=l),placeholder:"\u9879\u76EE",class:"m-2",onChange:Q},{default:o(()=>[(r(!0),Y(k,null,D(g(T),l=>(r(),w(c,{key:l.id,label:l.main_product_name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},512),[[p,e.config_type==1]]),s(t(u,{label:"\u5E94\u7528",prop:"product_name_selected"},{default:o(()=>[t(h,{multiple:"",modelValue:b.value,"onUpdate:modelValue":a[12]||(a[12]=l=>b.value=l),placeholder:"\u5E94\u7528",class:"m-2"},{default:o(()=>[(r(!0),Y(k,null,D(g(C),l=>(r(),w(c,{key:l.product_id,label:l.product_name,value:l.product_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},512),[[p,e.config_type==1]]),t(u,{label:"\u5FAE\u4FE1\u6700\u591A\u7ED1\u5B9A\u8D26\u53F7\u6570",prop:"account_bind_num"},{default:o(()=>[t(M,{style:{width:"150px"},modelValue:e.account_bind_num,"onUpdate:modelValue":a[13]||(a[13]=l=>e.account_bind_num=l)},null,8,["modelValue"])]),_:1}),t(u,{label:"\u5FAE\u4FE1\u5355\u65E5\u53EF\u63D0\u73B0\u6570",prop:"one_day_withdrawal_count"},{default:o(()=>[t(M,{style:{width:"150px"},modelValue:e.one_day_withdrawal_count,"onUpdate:modelValue":a[14]||(a[14]=l=>e.one_day_withdrawal_count=l)},null,8,["modelValue"])]),_:1}),t(u,{label:"\u751F\u6548\u65F6\u95F4",prop:"appoint_time"},{default:o(()=>[t(X,{modelValue:e.appoint_time,"onUpdate:modelValue":a[15]||(a[15]=l=>e.appoint_time=l),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1}),t(u,null,{default:o(()=>[t(U,{type:"primary",onClick:He},{default:o(()=>[sa]),_:1}),t(U,{onClick:j},{default:o(()=>[pa]),_:1})]),_:1})]),_:1},8,["model"]),[[p,g(R)==1]]),s(t(A,{ref_key:"formRef",ref:L,rules:F,model:e,"label-width":"280px"},{default:o(()=>[S(` <el-form-item label="\u914D\u7F6E\u7C7B\u578B" prop="config_type">
              <el-radio-group v-model="form.config_type">
                <el-radio label="0">\u6240\u6709\u9879\u76EE</el-radio>
                <el-radio label="1">\u6307\u5B9A\u9879\u76EE</el-radio>
              </el-radio-group>
            </el-form-item> `),s(t(u,{label:"\u9879\u76EE",prop:"main_product_name_selected"},{default:o(()=>[t(h,{modelValue:V.value,"onUpdate:modelValue":a[16]||(a[16]=l=>V.value=l),placeholder:"\u9879\u76EE",class:"m-2",onChange:Q},{default:o(()=>[(r(!0),Y(k,null,D(g(T),l=>(r(),w(c,{key:l.id,label:l.main_product_name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},512),[[p,e.config_type==1]]),s(t(u,{label:"\u5E94\u7528",prop:"product_name_selected"},{default:o(()=>[t(h,{multiple:"",modelValue:b.value,"onUpdate:modelValue":a[17]||(a[17]=l=>b.value=l),placeholder:"\u5E94\u7528",class:"m-2"},{default:o(()=>[(r(!0),Y(k,null,D(g(C),l=>(r(),w(c,{key:l.product_id,label:l.product_name,value:l.product_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},512),[[p,e.config_type==1]]),t(u,{label:"\u662F\u5426\u5F00\u542F\u5B9E\u540D\u8BA4\u8BC1",prop:"open_real_name_authentication_status"},{default:o(()=>[t(q,{modelValue:e.open_real_name_authentication_status,"onUpdate:modelValue":a[18]||(a[18]=l=>e.open_real_name_authentication_status=l)},{default:o(()=>[t(y,{label:"1"},{default:o(()=>[ma]),_:1}),t(y,{label:"2"},{default:o(()=>[ca]),_:1}),t(y,{label:"3"},{default:o(()=>[fa]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"\u5B9E\u540D\u8BA4\u8BC1\u8282\u70B9",prop:"real_name_authentication_node"},{default:o(()=>[t(h,{modelValue:e.real_name_authentication_node,"onUpdate:modelValue":a[19]||(a[19]=l=>e.real_name_authentication_node=l),placeholder:"\u8BF7\u9009\u62E9"},{default:o(()=>[t(c,{key:"bbk",label:"\u767B\u5F55\u524D",value:"1"}),S(` <el-option key="xtc" label="\u767B\u5F55\u6210\u529FX\u6B21\u540E" value="2"></el-option>
                <el-option key="imoo" label="\u63D0\u73B0\u6210\u529FX\u6B21\u540E" value="3"></el-option>
                <el-option key="imoo" label="\u7ED1\u5B9A\u5FAE\u4FE1\u540E\u7B2C\u4E8C\u6B21\u767B\u5F55" value="4"></el-option> `)]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"\u5B9E\u540D\u8BA4\u8BC1\u63A5\u53E3",prop:"real_name_authentication_api"},{default:o(()=>[t(q,{modelValue:e.real_name_authentication_api,"onUpdate:modelValue":a[20]||(a[20]=l=>e.real_name_authentication_api=l)},{default:o(()=>[t(y,{label:"1"},{default:o(()=>[va]),_:1}),t(y,{label:"2"},{default:o(()=>[ba]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(t(u,{label:"\u963F\u91CC\u4E91\u63A5\u53E3",prop:"aliyun_app_code"},{default:o(()=>[t(M,{style:{width:"150px"},modelValue:e.aliyun_app_code,"onUpdate:modelValue":a[21]||(a[21]=l=>e.aliyun_app_code=l)},null,8,["modelValue"])]),_:1},512),[[p,e.real_name_authentication_api==1]]),s(t(u,{label:"zxb_app_id",prop:"zxb_app_id"},{default:o(()=>[t(M,{style:{width:"150px"},modelValue:e.zxb_app_id,"onUpdate:modelValue":a[22]||(a[22]=l=>e.zxb_app_id=l)},null,8,["modelValue"])]),_:1},512),[[p,e.real_name_authentication_api==2]]),s(t(u,{label:"zxb_biz_id",prop:"zxb_biz_id"},{default:o(()=>[t(M,{style:{width:"150px"},modelValue:e.zxb_biz_id,"onUpdate:modelValue":a[23]||(a[23]=l=>e.zxb_biz_id=l)},null,8,["modelValue"])]),_:1},512),[[p,e.real_name_authentication_api==2]]),s(t(u,{label:"zxb_secret_key",prop:"zxb_secret_key"},{default:o(()=>[t(M,{style:{width:"150px"},modelValue:e.zxb_secret_key,"onUpdate:modelValue":a[24]||(a[24]=l=>e.zxb_secret_key=l)},null,8,["modelValue"])]),_:1},512),[[p,e.real_name_authentication_api==2]]),s(t(u,{label:"\u662F\u5426\u5F00\u542F\u6570\u636E\u4E0A\u62A5",prop:"open_escalation_status"},{default:o(()=>[t(q,{modelValue:e.open_escalation_status,"onUpdate:modelValue":a[25]||(a[25]=l=>e.open_escalation_status=l)},{default:o(()=>[t(y,{label:"1"},{default:o(()=>[ga]),_:1}),t(y,{label:"2"},{default:o(()=>[Va]),_:1})]),_:1},8,["modelValue"])]),_:1},512),[[p,e.real_name_authentication_api==2]]),s(t(u,{label:"\u4E2D\u5BA3\u90E8\u4E0A\u62A5\u63A5\u53E3",prop:"data_escalation_api"},{default:o(()=>[t(M,{style:{width:"150px"},modelValue:e.data_escalation_api,"onUpdate:modelValue":a[26]||(a[26]=l=>e.data_escalation_api=l)},null,8,["modelValue"])]),_:1},512),[[p,e.open_escalation_status==2]]),t(u,{label:"\u9632\u6C89\u8FF7\u5F00\u542F",prop:"anti_addiction_status"},{default:o(()=>[t(q,{modelValue:e.anti_addiction_status,"onUpdate:modelValue":a[27]||(a[27]=l=>e.anti_addiction_status=l)},{default:o(()=>[t(y,{label:"1"},{default:o(()=>[ha]),_:1}),t(y,{label:"2"},{default:o(()=>[ya]),_:1}),t(y,{label:"3"},{default:o(()=>[Ya]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(t(u,{label:"\u90E8\u5206\u5F00\u542F\u6761\u4EF6",prop:"anti_addiction_open_condition"},{default:o(()=>[t(q,{modelValue:e.anti_addiction_open_condition,"onUpdate:modelValue":a[28]||(a[28]=l=>e.anti_addiction_open_condition=l)},{default:o(()=>[t(y,{label:"1"},{default:o(()=>[ka]),_:1}),t(y,{label:"2"},{default:o(()=>[Da]),_:1}),t(y,{label:"3"},{default:o(()=>[wa]),_:1})]),_:1},8,["modelValue"])]),_:1},512),[[p,e.anti_addiction_status==2]]),t(u,{label:"\u751F\u6548\u65F6\u95F4",prop:"appoint_time"},{default:o(()=>[t(X,{modelValue:e.appoint_time,"onUpdate:modelValue":a[29]||(a[29]=l=>e.appoint_time=l),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1}),t(u,null,{default:o(()=>[t(U,{type:"primary",onClick:Ue},{default:o(()=>[xa]),_:1}),t(U,{onClick:j},{default:o(()=>[Ma]),_:1})]),_:1})]),_:1},8,["model"]),[[p,g(R)==2]]),s(t(A,{ref_key:"formRef",ref:L,rules:F,model:e,"label-width":"280px"},{default:o(()=>[S(` <el-form-item label="\u914D\u7F6E\u7C7B\u578B" prop="config_type">
              <el-radio-group v-model="form.config_type">
                <el-radio label="0">\u6240\u6709\u9879\u76EE</el-radio>
                <el-radio label="1">\u6307\u5B9A\u9879\u76EE</el-radio>
              </el-radio-group>
            </el-form-item> `),s(t(u,{label:"\u9879\u76EE",prop:"main_product_name_selected"},{default:o(()=>[t(h,{modelValue:V.value,"onUpdate:modelValue":a[30]||(a[30]=l=>V.value=l),placeholder:"\u9879\u76EE",class:"m-2",onChange:Q},{default:o(()=>[(r(!0),Y(k,null,D(g(T),l=>(r(),w(c,{key:l.id,label:l.main_product_name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},512),[[p,e.config_type==1]]),s(t(u,{label:"\u5E94\u7528",prop:"product_name_selected"},{default:o(()=>[t(h,{multiple:"",modelValue:b.value,"onUpdate:modelValue":a[31]||(a[31]=l=>b.value=l),placeholder:"\u5E94\u7528",class:"m-2"},{default:o(()=>[(r(!0),Y(k,null,D(g(C),l=>(r(),w(c,{key:l.product_id,label:l.product_name,value:l.product_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},512),[[p,e.config_type==1]]),t(u,{label:"\u5F00\u542F\u624B\u673A\u7ED1\u5B9A",prop:"mobile_phone_bind_status"},{default:o(()=>[t(B,{modelValue:e.mobile_phone_bind_status,"onUpdate:modelValue":a[32]||(a[32]=l=>e.mobile_phone_bind_status=l)},null,8,["modelValue"])]),_:1}),t(u,{label:"\u624B\u673A\u7ED1\u5B9A\u6761\u4EF6",prop:"mobile_phone_bind_condition"},{default:o(()=>[t(q,{modelValue:e.mobile_phone_bind_condition,"onUpdate:modelValue":a[33]||(a[33]=l=>e.mobile_phone_bind_condition=l)},{default:o(()=>[t(y,{label:"1"},{default:o(()=>[Ha]),_:1}),t(y,{label:"2"},{default:o(()=>[Ua]),_:1}),t(y,{label:"3"},{default:o(()=>[Ca]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"\u751F\u6548\u65F6\u95F4",prop:"appoint_time"},{default:o(()=>[t(X,{modelValue:e.appoint_time,"onUpdate:modelValue":a[34]||(a[34]=l=>e.appoint_time=l),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1}),t(u,null,{default:o(()=>[t(U,{type:"primary",onClick:Ce},{default:o(()=>[La]),_:1}),t(U,{onClick:j},{default:o(()=>[za]),_:1})]),_:1})]),_:1},8,["model"]),[[p,g(R)==3]]),s(t(A,{ref_key:"formRef",ref:L,rules:F,model:e,"label-width":"280px"},{default:o(()=>[S(` <el-form-item label="\u914D\u7F6E\u7C7B\u578B" prop="config_type">
              <el-radio-group v-model="form.config_type">
                <el-radio label="0">\u6240\u6709\u9879\u76EE</el-radio>
                <el-radio label="1">\u6307\u5B9A\u9879\u76EE</el-radio>
              </el-radio-group>
            </el-form-item> `),s(t(u,{label:"\u9879\u76EE",prop:"main_product_name_selected"},{default:o(()=>[t(h,{modelValue:V.value,"onUpdate:modelValue":a[35]||(a[35]=l=>V.value=l),placeholder:"\u9879\u76EE",class:"m-2",onChange:Q},{default:o(()=>[(r(!0),Y(k,null,D(g(T),l=>(r(),w(c,{key:l.id,label:l.main_product_name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},512),[[p,e.config_type==1]]),s(t(u,{label:"\u5E94\u7528",prop:"product_name_selected"},{default:o(()=>[t(h,{multiple:"",modelValue:b.value,"onUpdate:modelValue":a[36]||(a[36]=l=>b.value=l),placeholder:"\u5E94\u7528",class:"m-2"},{default:o(()=>[(r(!0),Y(k,null,D(g(C),l=>(r(),w(c,{key:l.product_id,label:l.product_name,value:l.product_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},512),[[p,e.config_type==1]]),t(u,{label:"\u7528\u6237\u534F\u8BAE\u5730\u5740",prop:"user_agreement_url"},{default:o(()=>[t(M,{style:{width:"150px"},modelValue:e.user_agreement_url,"onUpdate:modelValue":a[37]||(a[37]=l=>e.user_agreement_url=l)},null,8,["modelValue"])]),_:1}),t(u,{label:"\u9690\u79C1\u534F\u8BAE\u5730\u5740",prop:"privacy_agreement_url"},{default:o(()=>[t(M,{style:{width:"150px"},modelValue:e.privacy_agreement_url,"onUpdate:modelValue":a[38]||(a[38]=l=>e.privacy_agreement_url=l)},null,8,["modelValue"])]),_:1}),t(u,{label:"\u9690\u79C1\u534F\u8BAE\u5F00\u542F",prop:"privacy_agreement_status"},{default:o(()=>[t(B,{modelValue:e.privacy_agreement_status,"onUpdate:modelValue":a[39]||(a[39]=l=>e.privacy_agreement_status=l),"active-value":2,"inactive-value":1},null,8,["modelValue"]),S(` <el-input style="width: 150px" v-model="form.privacy_agreement_status">
              </el-input> `)]),_:1}),t(u,{label:"\u751F\u6548\u65F6\u95F4",prop:"appoint_time"},{default:o(()=>[t(X,{modelValue:e.appoint_time,"onUpdate:modelValue":a[40]||(a[40]=l=>e.appoint_time=l),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])]),_:1}),t(u,null,{default:o(()=>[t(U,{type:"primary",onClick:Le},{default:o(()=>[Ra]),_:1}),t(U,{onClick:j},{default:o(()=>[Pa]),_:1})]),_:1})]),_:1},8,["model"]),[[p,g(R)==4]]),s(t(A,{ref_key:"formRef",ref:L,rules:F,model:e,"label-width":"280px"},{default:o(()=>[t(u,{label:"\u9879\u76EE"},{default:o(()=>[t(h,{placeholder:"\u9879\u76EE",modelValue:$.value,"onUpdate:modelValue":a[41]||(a[41]=l=>$.value=l),onChange:ke,class:"m-2"},{default:o(()=>[(r(!0),Y(k,null,D(ne.value,l=>(r(),w(c,{key:l.value,label:l.label_name,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"\u5E94\u7528",prop:"game_selected"},{default:o(()=>[t(h,{modelValue:I.value,"onUpdate:modelValue":a[42]||(a[42]=l=>I.value=l),placeholder:"\u5E94\u7528",class:"m-2",onChange:De},{default:o(()=>[S(` <el-option
                      :key="gameChannelVersionList.value"
                      :label="gameChannelVersionList.label_name"
                      :value="gameChannelVersionList.value"
                    /> `),(r(!0),Y(k,null,D(W.value,l=>(r(),w(c,{key:l.value,label:l.label_name,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"\u6E20\u9053\u9009\u62E9"},{default:o(()=>[t(h,{modelValue:N.value,"onUpdate:modelValue":a[43]||(a[43]=l=>N.value=l),placeholder:"\u6E20\u9053\u9009\u62E9",onChange:we},{default:o(()=>[(r(!0),Y(k,null,D(K.value,l=>(r(),w(c,{key:l.value,label:l.label_name,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"\u9009\u62E9\u7248\u672C"},{default:o(()=>[t(h,{modelValue:P.value,"onUpdate:modelValue":a[44]||(a[44]=l=>P.value=l),placeholder:"\u9009\u62E9\u7248\u672C",onChange:xe},{default:o(()=>[(r(!0),Y(k,null,D(ie.value,l=>(r(),w(c,{key:l.value,label:l.label_name,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"\u5173\u95ED\u5E7F\u544A"},{default:o(()=>[t(B,{modelValue:le.value,"onUpdate:modelValue":a[45]||(a[45]=l=>le.value=l),"active-value":"0","inactive-value":"1"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u5F00\u542F\u5047\u9875\u9762"},{default:o(()=>[t(B,{modelValue:te.value,"onUpdate:modelValue":a[46]||(a[46]=l=>te.value=l),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u6307\u5B9A\u751F\u6548\u65E5\u671F"},{default:o(()=>[t(X,{modelValue:e.appoint_time,"onUpdate:modelValue":a[47]||(a[47]=l=>e.appoint_time=l),type:"datetimerange","range-separator":"\u2192","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue"])]),_:1}),t(u,null,{default:o(()=>[t(U,{type:"primary",onClick:ze},{default:o(()=>[Sa]),_:1}),t(U,{onClick:j},{default:o(()=>[Ea]),_:1})]),_:1})]),_:1},8,["model"]),[[p,g(R)==5]])])])])}}},Aa=Re(Na,[["__file","/Users/apple/Desktop/project-b/relationship.b/src/views/RiskRulesConfig/RiskRuleAdd.vue"]]);export{Aa as default};
