import{_ as Va,g as r,f as P,u as ya,r as _,Q as ka,o as v,c as L,a as D,b as t,w as l,J as R,K as q,H as T,G as ta,e as i,E as y,F as W,I as B,D as c,t as ea}from"./index.2c638c17.js";import{a as xa,b as Ua}from"./product.fa6bd801.js";import{w as Ca,j as Da,k as za}from"./user.885d0239.js";import"./request.644f0e68.js";const Ea={class:"crumbs"},La=i("\u98CE\u63A7\u7CFB\u7EDF"),Ta=i("\u63D0\u73B0\u914D\u7F6E"),$a={class:"container"},Aa={class:"handle-box"},Na=i("\xA0\xA0 "),Pa=i(" \u9ED8\u8BA4\u89C4\u5219"),Ra=i("\u63D0\u73B0\u8BBE\u7F6E"),Wa=i("\u4EBA\u5DE5\u5BA1\u6838\u8BB0\u5F55"),Ba=i("\u4EBA\u5DE5\u5BA1\u6838 "),Ia=i("\u63D0\u73B0\u8BBE\u7F6E "),ja={class:"pagination"},Sa={class:"dialog-footer"},Fa=i("\u53D6 \u6D88"),Ma=i("\u786E \u5B9A"),qa=i("\u6240\u6709\u9879\u76EE"),Ga=i("\u6307\u5B9A\u9879\u76EE"),Ha={class:"dialog-footer"},Ja=i("\u53D6 \u6D88"),Ka=i("\u786E \u5B9A"),Oa={__name:"WithdrawTable",setup(Qa){const p=r(""),b=r(""),h=P({page_index:1,page_size:10}),G=r(0);r(""),r("");const n=P({}),u=P({}),I=r(null),H=r(!1),j=r(!1),J=r([]);r(""),r("\u9879\u76EE");let S=r([]),k=r([]),la=r([]);r();const $=r(!1),V=(o,e)=>{$.value=!0,Ca(o).then(d=>{d.status==200?(J.value=d.data.lists.filter(m=>m.config_type!=0).map(m=>({...m,biomass_login_status:m.biomass_login_status==1?"\u5141\u8BB8":"\u7981\u6B62",user_withdrawal_status:m.user_withdrawal_status==1?"\u5141\u8BB8":"\u7981\u6B62"})),G.value=e==1?d.data.total_count:d.data.total_count-1,n.value=d.data.lists.filter(m=>m.config_type==0)[0],n.value.config_type==0&&(H.value=!0,n.user_withdrawal_status=n.value.user_withdrawal_status==1,n.biomass_login_status=n.value.biomass_login_status==1,n.withdrawal_audit_standard=n.value.withdrawal_audit_standard,n.withdrawal_count=n.value.withdrawal_count),$.value=!1):($.value=!1,y.error(d==null?void 0:d.message))}).catch(()=>{})},oa=()=>{X.push({name:"withdrawreview"})},da=()=>{xa().then(o=>{S.value=o.data,la.value=o.data}).catch(()=>{})},ua=o=>{Ua({main_product_id:o}).then(d=>{k.value=d.data}).catch(()=>{})},K=o=>{Da(o).then(e=>{e.status==200?(y.success("\u6DFB\u52A0\u63D0\u73B0\u914D\u7F6E\u6210\u529F"),V(h)):e.status==-1&&y.error("\u6B64\u6E38\u620F\u914D\u7F6E\u5DF2\u5B58\u5728\uFF01")})},sa=(o,e)=>{za(o,e).then(d=>{d.status==200&&(y.success("\u4FEE\u6539\u63D0\u73B0\u914D\u7F6E\u6210\u529F"),V(h))})},O=o=>o?/^\d+(\.{0,1}\d+){0,1}$/.test(o)?!0:(y.error("\u8BF7\u5148\u9009\u62E9\u4EA7\u54C1\uFF01"),!1):(y.error("\u8BF7\u9009\u62E9\u6E38\u620F\uFF01"),!1),A=o=>{if(o)return/^\d+(\.{0,1}\d+){0,1}$/.test(o)?!0:(y.error("\u8BF7\u8F93\u5165\u6570\u5B57\uFF01"),!1)};p.value="",b.value="";const Q={};V(h),da();const X=ya(),na=(o,e,d,m)=>{X.push({name:"withdrawdetail",params:{main_product_name:o,main_product_id:e,product_id:m,product_name:d}})};let s=P({id:"",main_product_id:"",product_id:"",main_product_name:"",product_name:"",user_withdrawal_status:"",biomass_login_status:"",withdrawal_audit_standard:"",withdrawal_count:""});const z=r(!1),E=r(!1),ra=(o,e)=>{Object.keys(s).forEach(d=>{d=="user_withdrawal_status"||d=="biomass_login_status"?s[d]=e[d]=="\u5141\u8BB8":s[d]=e[d]}),z.value=!0},_a=()=>{E.value=!0},ia=o=>{h.page_index=o,F()},pa=()=>{if(z.value=!1,s.withdrawal_audit_standard&&!A(s.withdrawal_audit_standard)||s.withdrawal_count&&!A(s.withdrawal_count))return;const o={user_withdrawal_status:s.user_withdrawal_status?1:0,biomass_login_status:s.biomass_login_status?1:0,withdrawal_audit_standard:s.withdrawal_audit_standard,withdrawal_count:s.withdrawal_count};sa(s.id,o)},wa=()=>{if(E.value=!1,!(u.withdrawal_audit_standard&&!A(u.withdrawal_audit_standard))&&!(u.withdrawal_count&&!A(u.withdrawal_count)))if(u.config_type)if(u.config_type==1){if(!O(p.value))return;b.value.forEach(function(o){if(!O(o))return;const e=k.value.filter(m=>m.product_id==o),d={config_type:1,main_product_id:e[0].main_product_id,main_product_name:e[0].main_product_name,product_id:e[0].product_id,product_name:e[0].product_name,user_withdrawal_status:u.user_withdrawal_status?1:0,biomass_login_status:u.biomass_login_status?1:0,withdrawal_audit_standard:u.withdrawal_audit_standard,withdrawal_count:u.withdrawal_count};K(d)}),p.value="",b.value="",k.value=""}else{const o={config_type:0,user_withdrawal_status:u.user_withdrawal_status?1:0,biomass_login_status:u.biomass_login_status?1:0,withdrawal_audit_standard:u.withdrawal_audit_standard,withdrawal_count:u.withdrawal_count};K(o)}else{y.error("\u5FC5\u987B\u9009\u62E9\u914D\u7F6E\u7C7B\u578B\uFF01");return}},F=()=>{if(console.log(p.value),b.value="",k.value="",p.value==-1||!p.value)console.log("1"),V(h);else{const o={main_product_id:p.value,...h};V(o,1),ua(p.value)}},ma=()=>{if(p.value==-1||!p.value)V(h);else if(b.value==-1){const o={main_product_id:p.value,...h};V(o,1)}else{const o={product_id:b.value,...h};V(o,1)}};return(o,e)=>{const d=_("el-breadcrumb-item"),m=_("el-breadcrumb"),x=_("el-option"),N=_("el-select"),g=_("el-button"),U=_("el-switch"),w=_("el-form-item"),C=_("el-input"),M=_("el-form"),ca=_("el-drawer"),f=_("el-table-column"),Y=_("el-tag"),fa=_("el-table"),ha=_("el-pagination"),Z=_("el-dialog"),aa=_("el-radio"),ba=_("el-radio-group"),va=ka("loading");return v(),L("div",null,[D("div",Ea,[t(m,{separator:"/"},{default:l(()=>[t(d,null,{default:l(()=>[La]),_:1}),t(d,null,{default:l(()=>[Ta]),_:1})]),_:1})]),D("div",$a,[D("div",Aa,[t(N,{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=a=>p.value=a),placeholder:"\u9879\u76EE\u540D\u79F0",class:"m-2",onChange:F},{default:l(()=>[t(x,{label:"\u5168\u90E8",value:"-1"}),(v(!0),L(W,null,B(c(S),a=>(v(),T(x,{key:a.id,label:a.main_product_name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),t(N,{modelValue:b.value,"onUpdate:modelValue":e[1]||(e[1]=a=>b.value=a),placeholder:"\u5E94\u7528\u540D\u79F0",class:"m-2",onChange:ma},{default:l(()=>[t(x,{label:"\u5168\u90E8",value:"-1"}),(v(!0),L(W,null,B(c(k),a=>(v(),T(x,{key:a.product_id,label:a.product_name,value:a.product_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),Na,R(t(g,{type:"primary",onClick:e[2]||(e[2]=a=>j.value=!0)},{default:l(()=>[Pa]),_:1},512),[[q,H.value]]),t(g,{type:"primary",onClick:_a},{default:l(()=>[Ra]),_:1}),t(g,{type:"primary",onClick:oa},{default:l(()=>[Wa]),_:1}),t(ca,{modelValue:j.value,"onUpdate:modelValue":e[7]||(e[7]=a=>j.value=a),title:"\u63D0\u73B0\u9ED8\u8BA4\u89C4\u5219\u4FE1\u606F\uFF1A",direction:"rtl",size:"50%"},{default:l(()=>[t(M,{ref_key:"formRef",ref:I,model:n,"label-width":"280px"},{default:l(()=>[t(w,{label:"\u662F\u5426\u5141\u8BB8\u6240\u6709\u7528\u6237\u63D0\u73B0",prop:"user_withdrawal_status"},{default:l(()=>[t(U,{disabled:"",modelValue:n.user_withdrawal_status,"onUpdate:modelValue":e[3]||(e[3]=a=>n.user_withdrawal_status=a)},null,8,["modelValue"])]),_:1}),t(w,{label:"\u662F\u5426\u5141\u8BB8\u81EA\u7136\u91CF\u767B\u5F55",prop:"biomass_login_status"},{default:l(()=>[t(U,{disabled:"",modelValue:n.biomass_login_status,"onUpdate:modelValue":e[4]||(e[4]=a=>n.biomass_login_status=a)},null,8,["modelValue"])]),_:1}),t(w,{label:"\u63D0\u73B0\u5BA1\u6838\u6807\u51C6",prop:"withdrawal_audit_standard"},{default:l(()=>[t(C,{disabled:"",style:{width:"150px"},modelValue:n.withdrawal_audit_standard,"onUpdate:modelValue":e[5]||(e[5]=a=>n.withdrawal_audit_standard=a)},null,8,["modelValue"])]),_:1}),t(w,{label:"\u5355\u65E5\u63D0\u73B0\u6B21\u6570",prop:"withdrawal_count"},{default:l(()=>[t(C,{disabled:"",style:{width:"150px"},modelValue:n.withdrawal_count,"onUpdate:modelValue":e[6]||(e[6]=a=>n.withdrawal_count=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),R((v(),T(fa,{data:J.value,border:"",class:"table",ref:"multipleTable","header-cell-class-name":"table-header"},{default:l(()=>[t(f,{prop:"main_product_id",label:"\u9879\u76EEID"}),t(f,{prop:"main_product_name",label:"\u9879\u76EE\u540D\u79F0"}),t(f,{prop:"product_id",label:"\u5E94\u7528ID"}),t(f,{prop:"product_name",label:"\u5E94\u7528\u540D\u79F0"}),t(f,{prop:"unaudit_orders_count",label:"\u672A\u5BA1\u6838\u8BA2\u5355\u6570"}),t(f,{prop:"unaudit_reward_sum",label:"\u672A\u5BA1\u6838\u603B\u91D1\u989D"}),t(f,{prop:"apply_users_count",label:"\u7533\u8BF7\u4EBA\u6570"}),t(f,{prop:"user_withdrawal_status",label:"\u7528\u6237\u63D0\u73B0"},{default:l(a=>[t(Y,{type:a.row.user_withdrawal_status==="\u5141\u8BB8"?"":a.row.user_withdrawal_status==="\u7981\u6B62"?"danger":""},{default:l(()=>[i(ea(a.row.user_withdrawal_status),1)]),_:2},1032,["type"])]),_:1}),t(f,{prop:"biomass_login_status",label:"\u81EA\u7136\u91CF\u767B\u5F55"},{default:l(a=>[t(Y,{type:a.row.biomass_login_status==="\u5141\u8BB8"?"":a.row.biomass_login_status==="\u7981\u6B62"?"danger":""},{default:l(()=>[i(ea(a.row.biomass_login_status),1)]),_:2},1032,["type"])]),_:1}),t(f,{prop:"withdrawal_audit_standard",label:"\u63D0\u73B0\u5BA1\u6838\u6807\u51C6"}),t(f,{prop:"withdrawal_count",label:"\u5355\u7528\u6237\u5F53\u5929\u63D0\u73B0\u6B21\u6570"}),t(f,{label:"\u64CD\u4F5C",width:"220",align:"center"},{default:l(a=>[t(g,{type:"text",icon:"el-icon-link",onClick:ga=>na(a.row.main_product_name,a.row.main_product_id,a.row.product_name,a.row.product_id)},{default:l(()=>[Ba]),_:2},1032,["onClick"]),t(g,{type:"text",icon:"el-icon-edit",onClick:ga=>ra(a.row.id,a.row)},{default:l(()=>[Ia]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[va,$.value]]),D("div",ja,[t(ha,{background:"",layout:"total, prev, pager, next","current-page":h.page_index,"page-size":h.page_size,total:G.value,onCurrentChange:ia},null,8,["current-page","page-size","total"])])]),ta(" \u7F16\u8F91\u5F39\u51FA\u6846 "),t(Z,{title:"\u7F16\u8F91\u63D0\u73B0\u914D\u7F6E",modelValue:z.value,"onUpdate:modelValue":e[13]||(e[13]=a=>z.value=a),width:"60%"},{footer:l(()=>[D("span",Sa,[t(g,{onClick:e[12]||(e[12]=a=>z.value=!1)},{default:l(()=>[Fa]),_:1}),t(g,{type:"primary",onClick:pa},{default:l(()=>[Ma]),_:1})])]),default:l(()=>[t(M,{ref_key:"formRef",ref:I,rules:Q,model:c(s),"label-width":"280px"},{default:l(()=>[t(w,{label:"\u662F\u5426\u5141\u8BB8\u6240\u6709\u7528\u6237\u63D0\u73B0",prop:"user_withdrawal_status"},{default:l(()=>[t(U,{modelValue:c(s).user_withdrawal_status,"onUpdate:modelValue":e[8]||(e[8]=a=>c(s).user_withdrawal_status=a)},null,8,["modelValue"])]),_:1}),t(w,{label:"\u662F\u5426\u5141\u8BB8\u81EA\u7136\u91CF\u767B\u5F55",prop:"biomass_login_status"},{default:l(()=>[t(U,{modelValue:c(s).biomass_login_status,"onUpdate:modelValue":e[9]||(e[9]=a=>c(s).biomass_login_status=a)},null,8,["modelValue"])]),_:1}),t(w,{label:"\u63D0\u73B0\u5BA1\u6838\u6807\u51C6",prop:"withdrawal_audit_standard"},{default:l(()=>[t(C,{style:{width:"150px"},modelValue:c(s).withdrawal_audit_standard,"onUpdate:modelValue":e[10]||(e[10]=a=>c(s).withdrawal_audit_standard=a)},null,8,["modelValue"])]),_:1}),t(w,{label:"\u5355\u65E5\u63D0\u73B0\u6B21\u6570",prop:"withdrawal_count"},{default:l(()=>[t(C,{style:{width:"150px"},modelValue:c(s).withdrawal_count,"onUpdate:modelValue":e[11]||(e[11]=a=>c(s).withdrawal_count=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),ta(" \u65B0\u589E\u5F39\u51FA\u6846 "),t(Z,{title:"\u65B0\u589E\u63D0\u73B0\u914D\u7F6E",modelValue:E.value,"onUpdate:modelValue":e[22]||(e[22]=a=>E.value=a),width:"60%"},{footer:l(()=>[D("span",Ha,[t(g,{onClick:e[21]||(e[21]=a=>E.value=!1)},{default:l(()=>[Ja]),_:1}),t(g,{type:"primary",onClick:wa},{default:l(()=>[Ka]),_:1})])]),default:l(()=>[t(M,{ref_key:"formRef",ref:I,rules:Q,model:u,"label-width":"280px"},{default:l(()=>[t(w,{label:"\u914D\u7F6E\u7C7B\u578B",prop:"config_type"},{default:l(()=>[t(ba,{modelValue:u.config_type,"onUpdate:modelValue":e[14]||(e[14]=a=>u.config_type=a)},{default:l(()=>[t(aa,{label:"0"},{default:l(()=>[qa]),_:1}),t(aa,{label:"1"},{default:l(()=>[Ga]),_:1})]),_:1},8,["modelValue"])]),_:1}),R(t(w,{label:"\u9879\u76EE",prop:"main_product_name_selected"},{default:l(()=>[t(N,{modelValue:p.value,"onUpdate:modelValue":e[15]||(e[15]=a=>p.value=a),placeholder:"\u9879\u76EE",class:"m-2",onChange:F},{default:l(()=>[(v(!0),L(W,null,B(c(S),a=>(v(),T(x,{key:a.id,label:a.main_product_name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},512),[[q,u.config_type==1]]),R(t(w,{label:"\u5E94\u7528",prop:"product_name_selected"},{default:l(()=>[t(N,{multiple:"",modelValue:b.value,"onUpdate:modelValue":e[16]||(e[16]=a=>b.value=a),placeholder:"\u5E94\u7528",class:"m-2"},{default:l(()=>[(v(!0),L(W,null,B(c(k),a=>(v(),T(x,{key:a.product_id,label:a.product_name,value:a.product_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},512),[[q,u.config_type==1]]),t(w,{label:"\u662F\u5426\u5141\u8BB8\u6240\u6709\u7528\u6237\u63D0\u73B0",prop:"user_withdrawal_status"},{default:l(()=>[t(U,{modelValue:u.user_withdrawal_status,"onUpdate:modelValue":e[17]||(e[17]=a=>u.user_withdrawal_status=a)},null,8,["modelValue"])]),_:1}),t(w,{label:"\u662F\u5426\u5141\u8BB8\u81EA\u7136\u91CF\u767B\u5F55",prop:"biomass_login_status"},{default:l(()=>[t(U,{modelValue:u.biomass_login_status,"onUpdate:modelValue":e[18]||(e[18]=a=>u.biomass_login_status=a)},null,8,["modelValue"])]),_:1}),t(w,{label:"\u63D0\u73B0\u5BA1\u6838\u6807\u51C6",prop:"withdrawal_audit_standard"},{default:l(()=>[t(C,{style:{width:"150px"},modelValue:u.withdrawal_audit_standard,"onUpdate:modelValue":e[19]||(e[19]=a=>u.withdrawal_audit_standard=a)},null,8,["modelValue"])]),_:1}),t(w,{label:"\u5355\u65E5\u63D0\u73B0\u6B21\u6570",prop:"withdrawal_count"},{default:l(()=>[t(C,{style:{width:"150px"},modelValue:u.withdrawal_count,"onUpdate:modelValue":e[20]||(e[20]=a=>u.withdrawal_count=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}},tt=Va(Oa,[["__scopeId","data-v-fb7e65cc"],["__file","/Users/apple/Desktop/project-b github/project-b/src/views/WithdrawTable.vue"]]);export{tt as default};
