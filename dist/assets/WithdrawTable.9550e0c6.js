import{_ as la,g as u,f as W,u as da,o as V,c as I,a as L,b as e,w as d,b6 as M,bq as F,bw as A,e as m,r as s,U as B,aJ as S,a4 as T,t as H}from"./index.06cbec42.js";import{a as oa,b as ra}from"./product.2a668420.js";import{w as na,j as ia,k as _a}from"./user.9ae7a840.js";import"./request.ab0faebb.js";const p=u(""),D=u(""),g=W({page_index:1,page_size:10}),Y=u(0);u("");u("");const h=W({}),f=W({}),sa=u(null),Z=u(!1),ua=u(!1),N=u([]),ma=u(""),wa=u("\u9879\u76EE");let J=u([]),P=u([]),$=u([]);const K=u(),x=(i,l)=>{na(i).then(w=>{w.status==200?(N.value=w.data.lists.filter(a=>a.config_type!=0).map(a=>({...a,biomass_login_status:a.biomass_login_status==1?"\u5141\u8BB8":"\u7981\u6B62",user_withdrawal_status:a.user_withdrawal_status==1?"\u5141\u8BB8":"\u7981\u6B62"})),Y.value=l==1?w.data.total_count:w.data.total_count-1,h.value=w.data.lists.filter(a=>a.config_type==0)[0],h.value.config_type==0&&(Z.value=!0,h.user_withdrawal_status=h.value.user_withdrawal_status==1,h.biomass_login_status=h.value.biomass_login_status==1,h.withdrawal_audit_standard=h.value.withdrawal_audit_standard,h.withdrawal_count=h.value.withdrawal_count)):A.error(w==null?void 0:w.message)}).catch(()=>{})},ca=()=>{oa().then(i=>{J.value=i.data,$.value=i.data}).catch(()=>{})},fa=i=>{ra({main_product_id:i}).then(w=>{P.value=w.data}).catch(()=>{})},Q=i=>{ia(i).then(l=>{l.status==200?(A.success("\u6DFB\u52A0\u63D0\u73B0\u914D\u7F6E\u6210\u529F"),x(g)):l.status==-1&&A.error("\u6B64\u6E38\u620F\u914D\u7F6E\u5DF2\u5B58\u5728\uFF01")})},pa=(i,l)=>{_a(i,l).then(w=>{w.status==200&&(A.success("\u4FEE\u6539\u63D0\u73B0\u914D\u7F6E\u6210\u529F"),x(g))})},X=i=>i?/^\d+(\.{0,1}\d+){0,1}$/.test(i)?!0:(A.error("\u8BF7\u5148\u9009\u62E9\u4EA7\u54C1\uFF01"),!1):(A.error("\u8BF7\u9009\u62E9\u6E38\u620F\uFF01"),!1),q=i=>{if(i)return/^\d+(\.{0,1}\d+){0,1}$/.test(i)?!0:(A.error("\u8BF7\u8F93\u5165\u6570\u5B57\uFF01"),!1)},ha={name:"basetable",setup(){p.value="",D.value="";const i={};x(g),ca();const l=da(),w=(o,n,r,v)=>{l.push({name:"withdrawdetail",params:{main_product_name:o,main_product_id:n,product_id:v,product_name:r}})},a=(o,n)=>{let r=o,v=n;typeof n=="number"?P.value.map(k=>{if(k.product_id==n){o=k.main_product_name,n=k.product_name;return}}):typeof o=="number"&&n==""&&J.value.map(k=>{k.id==o&&(o=k.main_product_name)}),K.value=null,console.log(o,n,r,v),l.push({name:"withdrawdetailall",params:{main_product_name:o,product_name:n,product_id:v,main_product_id:r}})};let c=W({id:"",main_product_id:"",product_id:"",main_product_name:"",product_name:"",user_withdrawal_status:"",biomass_login_status:"",withdrawal_audit_standard:"",withdrawal_count:""});const R=u(!1),E=u(!1),j=(o,n)=>{Object.keys(c).forEach(r=>{r=="user_withdrawal_status"||r=="biomass_login_status"?c[r]=n[r]=="\u5141\u8BB8":c[r]=n[r]}),R.value=!0},y=()=>{E.value=!0},z=o=>{g.page_index=o,_()},b=()=>{if(R.value=!1,c.withdrawal_audit_standard&&!q(c.withdrawal_audit_standard)||c.withdrawal_count&&!q(c.withdrawal_count))return;const o={user_withdrawal_status:c.user_withdrawal_status?1:0,biomass_login_status:c.biomass_login_status?1:0,withdrawal_audit_standard:c.withdrawal_audit_standard,withdrawal_count:c.withdrawal_count};pa(c.id,o)},C=()=>{if(E.value=!1,!(f.withdrawal_audit_standard&&!q(f.withdrawal_audit_standard))&&!(f.withdrawal_count&&!q(f.withdrawal_count)))if(f.config_type)if(f.config_type==1){if(!X(p.value))return;D.value.forEach(function(o){if(!X(o))return;const n=P.value.filter(v=>v.product_id==o),r={config_type:1,main_product_id:n[0].main_product_id,main_product_name:n[0].main_product_name,product_id:n[0].product_id,product_name:n[0].product_name,user_withdrawal_status:f.user_withdrawal_status?1:0,biomass_login_status:f.biomass_login_status?1:0,withdrawal_audit_standard:f.withdrawal_audit_standard,withdrawal_count:f.withdrawal_count};Q(r)}),p.value="",D.value="",P.value=""}else{const o={config_type:0,user_withdrawal_status:f.user_withdrawal_status?1:0,biomass_login_status:f.biomass_login_status?1:0,withdrawal_audit_standard:f.withdrawal_audit_standard,withdrawal_count:f.withdrawal_count};Q(o)}else{A.error("\u5FC5\u987B\u9009\u62E9\u914D\u7F6E\u7C7B\u578B\uFF01");return}},_=()=>{if(console.log(p.value),D.value="",P.value="",p.value==-1||!p.value)console.log("1"),x(g);else{const o={main_product_id:p.value,...g};x(o,1),fa(p.value)}};return{tableData:N,pageTotal:Y,editVisible:R,addVisible:E,form:h,formEdit:c,formAdd:f,showWithdraw:Z,withdrawShow:ua,handleEdit:j,handleAdd:y,saveEdit:b,saveAdd:C,product_type:wa,options:J,suboptions:P,addoptions:$,main_product_name_selected:p,product_name_selected:D,main_product_value_select:ma,getProductAndDataList:_,getDataById:()=>{if(p.value==-1||!p.value)x(g);else if(D.value==-1){const o={main_product_id:p.value,...g};x(o,1)}else{const o={product_id:D.value,...g};x(o,1)}},handlePageChange:z,query:g,rules:i,form:h,formRef:sa,router:l,dateRange:K,withdrawDetail:w,withDrawRecord:a}}},ba={class:"crumbs"},ga=m("\u98CE\u63A7\u7CFB\u7EDF"),va=m("\u63D0\u73B0\u914D\u7F6E"),Va={class:"container"},ya={class:"handle-box"},Ca=m("\xA0\xA0 "),ka=m(" \u9ED8\u8BA4\u89C4\u5219"),xa=m("\u63D0\u73B0\u8BBE\u7F6E"),Aa=m("\u7528\u6237\u63D0\u73B0\u8BB0\u5F55"),Ua=m("\u63D0\u73B0\u7533\u8BF7 "),Da=m("\u63D0\u73B0\u8BBE\u7F6E "),Ea={class:"pagination"},za={class:"dialog-footer"},La=m("\u53D6 \u6D88"),Pa=m("\u786E \u5B9A"),Ia=m("\u6240\u6709\u9879\u76EE"),Ra=m("\u6307\u5B9A\u9879\u76EE"),Ba={class:"dialog-footer"},Sa=m("\u53D6 \u6D88"),Ta=m("\u786E \u5B9A");function qa(i,l,w,a,c,R){const E=s("el-breadcrumb-item"),j=s("el-breadcrumb"),y=s("el-option"),z=s("el-select"),b=s("el-button"),C=s("el-switch"),_=s("el-form-item"),U=s("el-input"),o=s("el-form"),n=s("el-drawer"),r=s("el-table-column"),v=s("el-tag"),k=s("el-table"),aa=s("el-pagination"),O=s("el-dialog"),G=s("el-radio"),ta=s("el-radio-group");return V(),I("div",null,[L("div",ba,[e(j,{separator:"/"},{default:d(()=>[e(E,null,{default:d(()=>[ga]),_:1}),e(E,null,{default:d(()=>[va]),_:1})]),_:1})]),L("div",Va,[L("div",ya,[e(z,{modelValue:a.main_product_name_selected,"onUpdate:modelValue":l[0]||(l[0]=t=>a.main_product_name_selected=t),placeholder:"\u9879\u76EE\u540D\u79F0",class:"m-2",onChange:a.getProductAndDataList},{default:d(()=>[e(y,{label:"\u5168\u90E8",value:"-1"}),(V(!0),I(B,null,S(a.options,t=>(V(),T(y,{key:t.id,label:t.main_product_name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"]),e(z,{modelValue:a.product_name_selected,"onUpdate:modelValue":l[1]||(l[1]=t=>a.product_name_selected=t),placeholder:"\u5E94\u7528\u540D\u79F0",class:"m-2",onChange:a.getDataById},{default:d(()=>[e(y,{label:"\u5168\u90E8",value:"-1"}),(V(!0),I(B,null,S(a.suboptions,t=>(V(),T(y,{key:t.product_id,label:t.product_name,value:t.product_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"]),Ca,M(e(b,{type:"primary",onClick:l[2]||(l[2]=t=>a.withdrawShow=!0)},{default:d(()=>[ka]),_:1},512),[[F,a.showWithdraw]]),e(b,{type:"primary",onClick:a.handleAdd},{default:d(()=>[xa]),_:1},8,["onClick"]),e(b,{type:"primary",onClick:l[3]||(l[3]=t=>a.withDrawRecord(a.main_product_name_selected,a.product_name_selected))},{default:d(()=>[Aa]),_:1}),e(n,{modelValue:a.withdrawShow,"onUpdate:modelValue":l[8]||(l[8]=t=>a.withdrawShow=t),title:"\u63D0\u73B0\u9ED8\u8BA4\u89C4\u5219\u4FE1\u606F\uFF1A",direction:"rtl",size:"50%"},{default:d(()=>[e(o,{ref:"formRef",model:a.form,"label-width":"280px"},{default:d(()=>[e(_,{label:"\u662F\u5426\u5141\u8BB8\u6240\u6709\u7528\u6237\u63D0\u73B0",prop:"user_withdrawal_status"},{default:d(()=>[e(C,{disabled:"",modelValue:a.form.user_withdrawal_status,"onUpdate:modelValue":l[4]||(l[4]=t=>a.form.user_withdrawal_status=t)},null,8,["modelValue"])]),_:1}),e(_,{label:"\u662F\u5426\u5141\u8BB8\u81EA\u7136\u91CF\u767B\u5F55",prop:"biomass_login_status"},{default:d(()=>[e(C,{disabled:"",modelValue:a.form.biomass_login_status,"onUpdate:modelValue":l[5]||(l[5]=t=>a.form.biomass_login_status=t)},null,8,["modelValue"])]),_:1}),e(_,{label:"\u63D0\u73B0\u5BA1\u6838\u6807\u51C6",prop:"withdrawal_audit_standard"},{default:d(()=>[e(U,{disabled:"",style:{width:"150px"},modelValue:a.form.withdrawal_audit_standard,"onUpdate:modelValue":l[6]||(l[6]=t=>a.form.withdrawal_audit_standard=t)},null,8,["modelValue"])]),_:1}),e(_,{label:"\u5355\u65E5\u63D0\u73B0\u6B21\u6570",prop:"withdrawal_count"},{default:d(()=>[e(U,{disabled:"",style:{width:"150px"},modelValue:a.form.withdrawal_count,"onUpdate:modelValue":l[7]||(l[7]=t=>a.form.withdrawal_count=t)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])]),e(k,{data:a.tableData,border:"",class:"table",ref:"multipleTable","header-cell-class-name":"table-header"},{default:d(()=>[e(r,{prop:"main_product_id",label:"\u9879\u76EEID"}),e(r,{prop:"main_product_name",label:"\u9879\u76EE\u540D\u79F0"}),e(r,{prop:"product_id",label:"\u5E94\u7528ID"}),e(r,{prop:"product_name",label:"\u5E94\u7528\u540D\u79F0"}),e(r,{prop:"unaudit_orders_count",label:"\u672A\u5BA1\u6838\u8BA2\u5355\u6570"}),e(r,{prop:"unaudit_reward_sum",label:"\u672A\u5BA1\u6838\u603B\u91D1\u989D"}),e(r,{prop:"apply_users_count",label:"\u7533\u8BF7\u4EBA\u6570"}),e(r,{prop:"user_withdrawal_status",label:"\u7528\u6237\u63D0\u73B0"},{default:d(t=>[e(v,{type:t.row.user_withdrawal_status==="\u5141\u8BB8"?"":t.row.user_withdrawal_status==="\u7981\u6B62"?"danger":""},{default:d(()=>[m(H(t.row.user_withdrawal_status),1)]),_:2},1032,["type"])]),_:1}),e(r,{prop:"biomass_login_status",label:"\u81EA\u7136\u91CF\u767B\u5F55"},{default:d(t=>[e(v,{type:t.row.biomass_login_status==="\u5141\u8BB8"?"":t.row.biomass_login_status==="\u7981\u6B62"?"danger":""},{default:d(()=>[m(H(t.row.biomass_login_status),1)]),_:2},1032,["type"])]),_:1}),e(r,{prop:"withdrawal_audit_standard",label:"\u63D0\u73B0\u5BA1\u6838\u6807\u51C6"}),e(r,{prop:"withdrawal_count",label:"\u5355\u7528\u6237\u5F53\u5929\u63D0\u73B0\u6B21\u6570"}),e(r,{label:"\u64CD\u4F5C",width:"220",align:"center"},{default:d(t=>[e(b,{type:"text",icon:"el-icon-link",onClick:ea=>a.withdrawDetail(t.row.main_product_name,t.row.main_product_id,t.row.product_name,t.row.product_id)},{default:d(()=>[Ua]),_:2},1032,["onClick"]),e(b,{type:"text",icon:"el-icon-edit",onClick:ea=>a.handleEdit(t.row.id,t.row)},{default:d(()=>[Da]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),L("div",Ea,[e(aa,{background:"",layout:"total, prev, pager, next","current-page":a.query.page_index,"page-size":a.query.page_size,total:a.pageTotal,onCurrentChange:a.handlePageChange},null,8,["current-page","page-size","total","onCurrentChange"])])]),e(O,{title:"\u7F16\u8F91\u63D0\u73B0\u914D\u7F6E",modelValue:a.editVisible,"onUpdate:modelValue":l[14]||(l[14]=t=>a.editVisible=t),width:"60%"},{footer:d(()=>[L("span",za,[e(b,{onClick:l[13]||(l[13]=t=>a.editVisible=!1)},{default:d(()=>[La]),_:1}),e(b,{type:"primary",onClick:a.saveEdit},{default:d(()=>[Pa]),_:1},8,["onClick"])])]),default:d(()=>[e(o,{ref:"formRef",rules:a.rules,model:a.formEdit,"label-width":"280px"},{default:d(()=>[e(_,{label:"\u662F\u5426\u5141\u8BB8\u6240\u6709\u7528\u6237\u63D0\u73B0",prop:"user_withdrawal_status"},{default:d(()=>[e(C,{modelValue:a.formEdit.user_withdrawal_status,"onUpdate:modelValue":l[9]||(l[9]=t=>a.formEdit.user_withdrawal_status=t)},null,8,["modelValue"])]),_:1}),e(_,{label:"\u662F\u5426\u5141\u8BB8\u81EA\u7136\u91CF\u767B\u5F55",prop:"biomass_login_status"},{default:d(()=>[e(C,{modelValue:a.formEdit.biomass_login_status,"onUpdate:modelValue":l[10]||(l[10]=t=>a.formEdit.biomass_login_status=t)},null,8,["modelValue"])]),_:1}),e(_,{label:"\u63D0\u73B0\u5BA1\u6838\u6807\u51C6",prop:"withdrawal_audit_standard"},{default:d(()=>[e(U,{style:{width:"150px"},modelValue:a.formEdit.withdrawal_audit_standard,"onUpdate:modelValue":l[11]||(l[11]=t=>a.formEdit.withdrawal_audit_standard=t)},null,8,["modelValue"])]),_:1}),e(_,{label:"\u5355\u65E5\u63D0\u73B0\u6B21\u6570",prop:"withdrawal_count"},{default:d(()=>[e(U,{style:{width:"150px"},modelValue:a.formEdit.withdrawal_count,"onUpdate:modelValue":l[12]||(l[12]=t=>a.formEdit.withdrawal_count=t)},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1},8,["modelValue"]),e(O,{title:"\u65B0\u589E\u63D0\u73B0\u914D\u7F6E",modelValue:a.addVisible,"onUpdate:modelValue":l[23]||(l[23]=t=>a.addVisible=t),width:"60%"},{footer:d(()=>[L("span",Ba,[e(b,{onClick:l[22]||(l[22]=t=>a.addVisible=!1)},{default:d(()=>[Sa]),_:1}),e(b,{type:"primary",onClick:a.saveAdd},{default:d(()=>[Ta]),_:1},8,["onClick"])])]),default:d(()=>[e(o,{ref:"formRef",rules:a.rules,model:a.formAdd,"label-width":"280px"},{default:d(()=>[e(_,{label:"\u914D\u7F6E\u7C7B\u578B",prop:"config_type"},{default:d(()=>[e(ta,{modelValue:a.formAdd.config_type,"onUpdate:modelValue":l[15]||(l[15]=t=>a.formAdd.config_type=t)},{default:d(()=>[e(G,{label:"0"},{default:d(()=>[Ia]),_:1}),e(G,{label:"1"},{default:d(()=>[Ra]),_:1})]),_:1},8,["modelValue"])]),_:1}),M(e(_,{label:"\u9879\u76EE",prop:"main_product_name_selected"},{default:d(()=>[e(z,{modelValue:a.main_product_name_selected,"onUpdate:modelValue":l[16]||(l[16]=t=>a.main_product_name_selected=t),placeholder:"\u9879\u76EE",class:"m-2",onChange:a.getProductAndDataList},{default:d(()=>[(V(!0),I(B,null,S(a.options,t=>(V(),T(y,{key:t.id,label:t.main_product_name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1},512),[[F,a.formAdd.config_type==1]]),M(e(_,{label:"\u5E94\u7528",prop:"product_name_selected"},{default:d(()=>[e(z,{multiple:"",modelValue:a.product_name_selected,"onUpdate:modelValue":l[17]||(l[17]=t=>a.product_name_selected=t),placeholder:"\u5E94\u7528",class:"m-2"},{default:d(()=>[(V(!0),I(B,null,S(a.suboptions,t=>(V(),T(y,{key:t.product_id,label:t.product_name,value:t.product_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},512),[[F,a.formAdd.config_type==1]]),e(_,{label:"\u662F\u5426\u5141\u8BB8\u6240\u6709\u7528\u6237\u63D0\u73B0",prop:"user_withdrawal_status"},{default:d(()=>[e(C,{modelValue:a.formAdd.user_withdrawal_status,"onUpdate:modelValue":l[18]||(l[18]=t=>a.formAdd.user_withdrawal_status=t)},null,8,["modelValue"])]),_:1}),e(_,{label:"\u662F\u5426\u5141\u8BB8\u81EA\u7136\u91CF\u767B\u5F55",prop:"biomass_login_status"},{default:d(()=>[e(C,{modelValue:a.formAdd.biomass_login_status,"onUpdate:modelValue":l[19]||(l[19]=t=>a.formAdd.biomass_login_status=t)},null,8,["modelValue"])]),_:1}),e(_,{label:"\u63D0\u73B0\u5BA1\u6838\u6807\u51C6",prop:"withdrawal_audit_standard"},{default:d(()=>[e(U,{style:{width:"150px"},modelValue:a.formAdd.withdrawal_audit_standard,"onUpdate:modelValue":l[20]||(l[20]=t=>a.formAdd.withdrawal_audit_standard=t)},null,8,["modelValue"])]),_:1}),e(_,{label:"\u5355\u65E5\u63D0\u73B0\u6B21\u6570",prop:"withdrawal_count"},{default:d(()=>[e(U,{style:{width:"150px"},modelValue:a.formAdd.withdrawal_count,"onUpdate:modelValue":l[21]||(l[21]=t=>a.formAdd.withdrawal_count=t)},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1},8,["modelValue"])])}const Ja=la(ha,[["render",qa],["__scopeId","data-v-f0dca38a"]]);export{Ja as default};