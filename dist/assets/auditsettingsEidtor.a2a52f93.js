import{_ as ee,C as te,r as b,D as q,e as _,a as r,c,t as M,j as o,k as n,b as Y,T as ae,f as le,F as m,m as f,p as v,z as h,v as U,y as S,q as oe,U as ne,l as x}from"./index.3fee5d13.js";import{h as ie}from"./shop.899b24a0.js";import{s as N}from"./shop.eb8d0c28.js";import{r as se}from"./risk.4dfb295f.js";const re={class:"crumbs"},ue=h(" \u98CE\u63A7\u7CFB\u7EDF "),de=h("\u5B9E\u540D\u8BA4\u8BC1/\u9632\u6C89\u8FF7"),_e={class:"container",style:{height:"1000px"}},ce=h("\u53D6\u6D88"),pe=h("\u4FDD\u5B58"),me={__name:"auditsettingsEidtor",setup(fe){const s=se(),D=te(),w=b([]),V=b([]),g=b([]),k=b([]),J=b([]),C=b(),t=q({id:"",main_product_id:"",product_id:"",channel:"",version_b:"",real_name_authentication_status:1,certification_node_status:1,anti_addiction_status:1,anti_addiction_open_condition:1,privacy_agreement_status:1,config_type:1,appoint_time:[],specify_effective_num:0}),B=q({main_product_id:[{required:!0,message:"\u8BF7\u9009\u62E9\u9879\u76EE",trigger:"change"}],product_id:[{required:!0,message:"\u8BF7\u9009\u62E9\u5E94\u7528",trigger:"change"}],channel:[{required:!0,message:"\u8BF7\u9009\u62E9\u6E20\u9053",trigger:"change"}],version_b:[{required:!0,message:"\u8BF7\u9009\u62E9\u7248\u672C",trigger:"change"}],real_name_authentication_status:[{required:!0,message:"\u8BF7\u9009\u62E9\u662F\u5426\u5F00\u542F\u5B9E\u540D\u8BA4\u8BC1",trigger:"change"}],certification_node_status:[{required:!0,message:"\u8BF7\u9009\u62E9\u5B9E\u540D\u8BA4\u8BC1\u8282\u70B9",trigger:"change"}],anti_addiction_status:[{required:!0,message:"\u8BF7\u9009\u62E9\u9632\u6C89\u8FF7\u5F00\u542F",trigger:"change"}]}),P=()=>{if(console.log(s.shopdata),t.id=s.shopdata.id,t.main_product_id=s.shopdata.main_product_id,t.product_id=s.shopdata.product_id,t.channel=s.shopdata.channel,t.version_b=s.shopdata.version_b,t.real_name_authentication_status=s.shopdata.real_name_authentication_status=="\u4E0D\u5F00\u542F"?1:s.shopdata.real_name_authentication_status=="\u5F00\u542F(\u975E\u5F3A\u5236)"?2:3,t.certification_node_status=s.shopdata.certification_node_status,t.anti_addiction_status=s.shopdata.anti_addiction_status=="\u5173\u95ED"?1:s.shopdata.anti_addiction_status=="\u90E8\u5206\u5F00\u542F"?2:3,t.anti_addiction_open_condition=s.shopdata.anti_addiction_open_condition=="\u65B0\u7528\u6237"?1:2,t.privacy_agreement_status=s.shopdata.privacy_agreement_status=="\u5F00\u542F"?2:1,t.specify_effective_num=s.shopdata.specify_effective_num,s.shopdata.appoint_time!==null){let l=s.shopdata.appoint_time.split("~");t.appoint_time=l}T(s.shopdata.main_product_id,s.shopdata.product_id,s.shopdata.channel)},T=(l,a,i)=>{Y({main_product_id:l}).then(u=>{u.status==200&&(V.value=u.data)}).then(()=>{A(a,i)})},A=(l,a)=>{JSON.parse(JSON.stringify(J.value)).forEach(u=>{u.value==l&&(g.value=u.children)}),JSON.parse(JSON.stringify(g.value)).map(u=>{u.value==a&&(k.value=u.children)}),console.log(g.value,k.value)},F=()=>{ae().then(l=>{l.status==200&&(w.value=l.data)}).catch(l=>{console.log(l)}),le().then(l=>{l.status==200&&(J.value=l.data)}).catch(l=>{console.log(l)})},R=l=>{JSON.parse(JSON.stringify(w.value)).forEach(i=>{i.id==l&&(t.main_product_name=i.main_product_name)})},j=l=>{JSON.parse(JSON.stringify(V.value)).forEach(i=>{i.product_id==l&&(t.product_name=i.product_name)})},z=l=>{R(l),t.product_id="",t.channel="",t.version_b="";let a={main_product_id:t.main_product_id};Y(a).then(i=>{i.status==200&&(V.value=i.data)})},$=l=>{j(l),t.channel="",t.version_b="",JSON.parse(JSON.stringify(J.value)).forEach(i=>{i.value==l.toString()&&(g.value=i.children)})},G=l=>{t.version_b="";let a=JSON.parse(JSON.stringify(g.value));console.log(a,l),a.map(i=>{i.value==l&&(k.value=i.children)})},H=()=>{t.appoint_time;let l=t.appoint_time[0]+"~"+t.appoint_time[1];t.appoint_time=l},I=l=>{l.validate((a,i)=>{a?(console.log("submit!"),H(),ie(t.id,t).then(p=>{p.status==200?(x.success("\u7F16\u8F91\u6210\u529F"),D.push({name:"auditsettings"})):x.error("\u7F16\u8F91\u5931\u8D25,"+p.message)}).catch(p=>{x.error(p)})):console.log("error submit!",i)})},K=()=>{D.push({name:"auditsettings"})};return F(),P(),(l,a)=>{const i=_("el-breadcrumb-item"),p=_("el-breadcrumb"),u=_("el-option"),y=_("el-select"),d=_("el-form-item"),L=_("el-radio"),O=_("el-radio-group"),Q=_("el-switch"),W=_("el-date-picker"),X=_("el-input-number"),E=_("el-button"),Z=_("el-form");return r(),c("div",null,[M("div",re,[o(p,{separator:"/"},{default:n(()=>[o(i,null,{default:n(()=>[ue]),_:1}),o(i,null,{default:n(()=>[de]),_:1})]),_:1})]),M("div",_e,[o(Z,{ref_key:"ruleFormRef",ref:C,rules:B,model:t,"status-icon":""},{default:n(()=>[o(d,{label:"\u9009\u62E9\u9879\u76EE",prop:"main_product_id"},{default:n(()=>[o(y,{style:{width:"200px"},modelValue:t.main_product_id,"onUpdate:modelValue":a[0]||(a[0]=e=>t.main_product_id=e),onChange:z,clearable:""},{default:n(()=>[(r(!0),c(m,null,f(w.value,e=>(r(),v(u,{value:e.id,label:e.main_product_name,key:e.id},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(d,{label:"\u9009\u62E9\u5E94\u7528",prop:"product_id"},{default:n(()=>[o(y,{style:{width:"200px"},modelValue:t.product_id,"onUpdate:modelValue":a[1]||(a[1]=e=>t.product_id=e),onChange:$,clearable:""},{default:n(()=>[(r(!0),c(m,null,f(V.value,e=>(r(),v(u,{key:e.product_id,label:e.product_name,value:e.product_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(d,{label:"\u9009\u62E9\u6E20\u9053",prop:"channel"},{default:n(()=>[o(y,{style:{width:"200px"},modelValue:t.channel,"onUpdate:modelValue":a[2]||(a[2]=e=>t.channel=e),onChange:G,clearable:""},{default:n(()=>[(r(!0),c(m,null,f(g.value,e=>(r(),v(u,{key:e.value,label:e.label_name,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(d,{label:"\u9009\u62E9\u7248\u672C",prop:"version_b"},{default:n(()=>[o(y,{style:{width:"200px"},modelValue:t.version_b,"onUpdate:modelValue":a[3]||(a[3]=e=>t.version_b=e),clearable:""},{default:n(()=>[(r(!0),c(m,null,f(k.value,e=>(r(),v(u,{value:e.value,label:e.label,key:e.value},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(d,{label:"\u662F\u5426\u5F00\u542F\u5B9E\u540D\u8BA4\u8BC1",prop:"real_name_authentication_status"},{default:n(()=>[o(O,{modelValue:t.real_name_authentication_status,"onUpdate:modelValue":a[4]||(a[4]=e=>t.real_name_authentication_status=e)},{default:n(()=>[(r(!0),c(m,null,f(S(N).real_name_authentication_list,e=>(r(),v(L,{label:e.value,key:e.value},{default:n(()=>[h(U(e.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(d,{label:"\u5B9E\u540D\u8BA4\u8BC1\u8282\u70B9",prop:"certification_node_status"},{default:n(()=>[o(y,{style:{width:"200px"},modelValue:t.certification_node_status,"onUpdate:modelValue":a[5]||(a[5]=e=>t.certification_node_status=e)},{default:n(()=>[(r(!0),c(m,null,f(S(N).certification_node_list,e=>(r(),v(u,{value:e.value,label:e.label,key:e.value},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(d,{label:"\u9632\u6C89\u8FF7\u5F00\u542F",prop:"anti_addiction_status"},{default:n(()=>[o(O,{modelValue:t.anti_addiction_status,"onUpdate:modelValue":a[6]||(a[6]=e=>t.anti_addiction_status=e)},{default:n(()=>[(r(!0),c(m,null,f(S(N).anti_addiction_status_list,e=>(r(),v(L,{label:e.value,key:e.value},{default:n(()=>[h(U(e.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),oe(o(d,{label:"\u90E8\u5206\u5F00\u542F\u6761\u4EF6"},{default:n(()=>[o(O,{modelValue:t.anti_addiction_open_condition,"onUpdate:modelValue":a[7]||(a[7]=e=>t.anti_addiction_open_condition=e)},{default:n(()=>[(r(!0),c(m,null,f(S(N).anti_addiction_open_condition_list,e=>(r(),v(L,{label:e.value,key:e.value},{default:n(()=>[h(U(e.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1},512),[[ne,t.anti_addiction_status=="2"]]),o(d,{label:"\u9690\u79C1\u534F\u8BAE",prop:"privacy_agreement_status"},{default:n(()=>[o(Q,{modelValue:t.privacy_agreement_status,"onUpdate:modelValue":a[8]||(a[8]=e=>t.privacy_agreement_status=e),"active-value":2,"inactive-value":1},null,8,["modelValue"])]),_:1}),o(d,{label:"\u6307\u5B9A\u751F\u6548\u65E5\u671F"},{default:n(()=>[o(W,{modelValue:t.appoint_time,"onUpdate:modelValue":a[9]||(a[9]=e=>t.appoint_time=e),type:"datetimerange",format:"YYYY-MM-DD hh:mm:ss","value-format":"YYYY-MM-DD hh:mm:ss","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date"},null,8,["modelValue"])]),_:1}),o(d,{label:"\u751F\u6548\u4EBA\u6570"},{default:n(()=>[o(X,{modelValue:t.specify_effective_num,"onUpdate:modelValue":a[10]||(a[10]=e=>t.specify_effective_num=e),controls:!1,precision:0,min:0},null,8,["modelValue"])]),_:1}),o(d,null,{default:n(()=>[o(E,{onClick:K},{default:n(()=>[ce]),_:1}),o(E,{type:"primary",onClick:a[11]||(a[11]=e=>I(C.value))},{default:n(()=>[pe]),_:1})]),_:1})]),_:1},8,["rules","model"])])])}}},ye=ee(me,[["__file","/Users/apple/Desktop/project-b/relationship.b/src/views/AuditSettings/auditsettingsEidtor.vue"]]);export{ye as default};
