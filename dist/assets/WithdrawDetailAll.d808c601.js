import{_ as F,g as r,f as S,P as J,u as O,r as h,o as g,c as k,a as C,b as e,w as p,E as I,F as Y,I as L,H as P,e as f}from"./index.95db1816.js";import{a as G,b as K}from"./product.44e7e689.js";import{h as M}from"./moment.9709ab41.js";import{l as z}from"./user.d7ea680f.js";import{e as Q}from"./export2excel.a0c92898.js";import"./request.0f196fd3.js";const c=r(""),m=r(""),N=r([]),E=r([]);let y=r("");const X=r("\u9879\u76EE"),V=S({}),A=r({}),D=r(0),o=S({page_index:1,page_size:10,status:3});let R=r([]),U=r([]),T=r([]);const Z=r(),$=r(!1),aa=r(3),ea=r([{value:1,label:"\u5F85\u5BA1\u6838"},{value:2,label:"\u63D0\u73B0\u4E2D"},{value:3,label:"\u5DF2\u63D0\u73B0"},{value:4,label:"\u62D2\u7EDD\u63D0\u73B0"},{value:5,label:"\u63D0\u73B0\u5931\u8D25"}]),_=t=>{z(t).then(u=>{var v;N.value=(v=u.data)==null?void 0:v.lists.map(a=>({...a,updated_at:M(a.updated_at).format("YYYY-MM-DD HH:mm:ss"),status:a.status==1?"\u5F85\u5BA1\u6838":a.status==2?"\u63D0\u73B0\u4E2D":a.status==3?"\u5DF2\u63D0\u73B0":a.status==4?"\u62D2\u7EDD\u63D0\u73B0":a.status==5?"\u63D0\u73B0\u5931\u8D25":""})),D.value=u.data.total_count,V.apply_users_count=u.data.apply_users_count,V.unaudit_orders_count=u.data.unaudit_orders_count,V.unaudit_reward_sum=u.data.unaudit_reward_sum,A.value=JSON.parse(JSON.stringify(t))}).catch(u=>{}).then(()=>{})},ta=()=>{G().then(t=>{R.value=t.data,T.value=t.data}).catch(()=>{})},x=t=>{K({main_product_id:t}).then(v=>{U.value=v.data}).catch(()=>{})},la=t=>{o.status=t,console.log(o),_(o)},oa={name:"basetable",setup(){c.value="",m.value="";const t=J(),u=O();t.params.product_name!==""?(c.value=t.params.main_product_name,m.value=t.params.product_name,o.product_id=t.params.product_id,y.value=t.params.main_product_id,x(t.params.main_product_id)):t.params.main_product_name!==""?(c.value=t.params.main_product_name,o.main_product_id=t.params.main_product_id,y.value=t.params.main_product_id,x(t.params.main_product_id)):x(),console.log(c.value,m.value);const v=()=>{u.go(-1)};return _(o),ta(),{tableData:N,widthdrawDetail:V,product_type:X,options:R,suboptions:U,addoptions:T,main_product_name_selected:c,product_name_selected:m,getProductAndDataList:()=>{if(m.value="",c.value==-1)_(o);else{const l={...o,main_product_id:c.value};o.product_id="",y.value=c.value,_(l),x(c.value)}},getDataById:()=>{if(m.value==-1){const l={...o,product_id:c.value};l.product_id==-1&&delete l.product_id,_(l)}else{const l={...o,product_id:m.value};o.product_id=m.value,l.product_id==-1&&delete l.product_id,_(l)}},query:o,handlePageChange:l=>{if(o.page_index=l,c.value==-1)_(o);else if(c.value>0)if(m.value==-1){const d={main_product_id:c.value,...o};_(d)}else if(m.value>0){const d={...o,product_id:m.value};_(d)}else{const d={...o,main_product_id:c.value};_(d)}else{const d={...o};_(d)}},pageTotal:D,handleDate:l=>{if(l!==null){let d=[];l.forEach(b=>{b!=null&&d.push(M(b).format("YYYY-MM-DD HH:mm:ss"))});let s={...o,start_date:d[0],end_date:d[1]};o.start_date=d[0],o.end_date=d[1],_(s)}else _(o)},dateRange:Z,getExcel:()=>{A.value.page_size=D.value?D.value<=1e4?D.value:1e4:10,z(A.value).then(l=>{if(l.status==200){E.value=l.data.lists.map(s=>({wechat_user_id:s.wechat_user_id,main_product_name:s.main_product_name,product_name:s.product_name,nickname:s.nickname,bind_account_count:s.bind_account_count,amount:s.amount,oaid:s.oaid,ip:s.ip,ip_address:s.ip_address,updated_at:M(s.updated_at).format("YYYY-MM-DD HH:mm:ss"),status:s.status==1?"\u5F85\u5BA1\u6838":s.status==2?"\u63D0\u73B0\u4E2D":s.status==3?"\u5DF2\u63D0\u73B0":s.status==4?"\u62D2\u7EDD\u63D0\u73B0":s.status==5?"\u63D0\u73B0\u5931\u8D25":""}));const d=["\u7528\u6237ID","\u9879\u76EE\u540D\u79F0","\u5E94\u7528\u540D\u79F0","\u7528\u6237\u540D","\u8BBE\u5907\u5173\u8054\u8D26\u53F7","\u7533\u8BF7\u63D0\u73B0\u91D1\u989D","\u6570\u76DFid","ip","ip\u5730\u5740","\u63D0\u73B0\u65F6\u95F4","\u63D0\u73B0\u72B6\u6001"];console.log(E.value),Q(E.value,"\u63D0\u73B0\u8BB0\u5F55",d,"\u63D0\u73B0\u8BB0\u5F55")}else l.message?I.error(l.message):I.error("\u540E\u7AEFapi\u63A5\u53E3\u5F02\u5E38\uFF01")})},isShow:$,goback:v,main_product_id:y,status_selectd:aa,statusList:ea,handleStatus:la}},methods:{withdrawDetail(t){this.$router.push({name:"userdetail",params:{wechat_user_id:t}})}}},na={class:"crumbs"},da=f("\u98CE\u63A7\u7CFB\u7EDF"),sa=f("\u7528\u6237\u7BA1\u7406"),ua=f("\u63D0\u73B0\u8BB0\u5F55"),ra={class:"container"},ca={class:"handle-box"},_a=f("\u5BFC\u51FA"),ia=f("\u8FD4\u56DE"),pa=f("\u8BE6\u60C5 "),ma={class:"pagination"};function ha(t,u,v,a,q,B){const w=h("el-breadcrumb-item"),H=h("el-breadcrumb"),l=h("el-option"),d=h("el-select"),s=h("el-date-picker"),b=h("el-button"),i=h("el-table-column"),W=h("el-table"),j=h("el-pagination");return g(),k("div",null,[C("div",na,[e(H,{separator:"/"},{default:p(()=>[e(w,null,{default:p(()=>[da]),_:1}),e(w,null,{default:p(()=>[sa]),_:1}),e(w,null,{default:p(()=>[ua]),_:1})]),_:1})]),C("div",ra,[C("div",ca,[e(d,{modelValue:a.main_product_name_selected,"onUpdate:modelValue":u[0]||(u[0]=n=>a.main_product_name_selected=n),placeholder:"\u9879\u76EE",class:"m-2",onChange:a.getProductAndDataList},{default:p(()=>[(g(!0),k(Y,null,L(a.options,n=>(g(),P(l,{key:n.id,label:n.main_product_name,value:n.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"]),e(d,{modelValue:a.product_name_selected,"onUpdate:modelValue":u[1]||(u[1]=n=>a.product_name_selected=n),placeholder:"\u5E94\u7528",class:"m-2",onChange:a.getDataById},{default:p(()=>[(g(!0),k(Y,null,L(a.suboptions,n=>(g(),P(l,{key:n.product_id,label:n.product_name,value:n.product_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"]),e(s,{modelValue:a.dateRange,"onUpdate:modelValue":u[2]||(u[2]=n=>a.dateRange=n),type:"daterange","range-separator":"\u2192",onChange:a.handleDate,"start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue","onChange"]),e(d,{modelValue:a.status_selectd,"onUpdate:modelValue":u[3]||(u[3]=n=>a.status_selectd=n),placeholder:"\u72B6\u6001",class:"m-2",style:{width:"105px"},onChange:a.handleStatus},{default:p(()=>[(g(!0),k(Y,null,L(a.statusList,n=>(g(),P(l,{key:n.value,value:n.value,label:n.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue","onChange"]),e(b,{type:"primary",onClick:a.getExcel},{default:p(()=>[_a]),_:1},8,["onClick"]),e(b,{type:"primary",onClick:a.goback},{default:p(()=>[ia]),_:1},8,["onClick"])]),e(W,{data:a.tableData,border:"",class:"table",ref:"multipleTable","header-cell-class-name":"table-header"},{default:p(()=>[e(i,{prop:"wechat_user_id",label:"\u7528\u6237ID"}),e(i,{prop:"main_product_name",label:"\u9879\u76EE\u540D\u79F0"}),e(i,{prop:"product_name",label:"\u5E94\u7528\u540D\u79F0"}),e(i,{prop:"nickname",label:"\u7528\u6237\u540D"}),e(i,{prop:"bind_account_count",label:"\u8BBE\u5907\u5173\u8054\u8D26\u53F7"}),e(i,{prop:"amount",label:"\u7533\u8BF7\u63D0\u73B0\u91D1\u989D"}),e(i,{prop:"oaid",label:"\u6570\u76DFid"}),e(i,{prop:"ip",label:"ip"}),e(i,{prop:"ip_address",label:"ip\u5730\u5740"}),e(i,{prop:"updated_at",sortable:"",label:"\u63D0\u73B0\u65F6\u95F4"}),e(i,{prop:"status",label:"\u72B6\u6001"}),e(i,{label:"\u64CD\u4F5C",width:"220",align:"center"},{default:p(n=>[e(b,{type:"text",icon:"el-icon-link",onClick:va=>B.withdrawDetail(n.row.wechat_user_id)},{default:p(()=>[pa]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),C("div",ma,[e(j,{background:"",layout:"total, prev, pager, next","current-page":a.query.page_index,"page-size":a.query.page_size,total:a.pageTotal,onCurrentChange:a.handlePageChange},null,8,["current-page","page-size","total","onCurrentChange"])])])])}const Ca=F(oa,[["render",ha],["__scopeId","data-v-5311a1dc"],["__file","/Users/apple/Desktop/project-b github/project-b/src/views/WithdrawDetailAll.vue"]]);export{Ca as default};
