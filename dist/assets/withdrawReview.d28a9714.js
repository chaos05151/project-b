import{_ as O,r as p,D as I,a7 as G,C as K,e as m,a as v,c as V,t as w,j as o,k as h,T as Q,b as W,l as M,F as R,m as B,p as z,z as f}from"./index.3fee5d13.js";import{h as P}from"./moment.9709ab41.js";import{k as N}from"./user.18d2d274.js";import{e as X}from"./export2excel.a0c92898.js";const u=p(""),i=p(""),T=p([]),H=p([]);let k=p("");const Z=p("\u9879\u76EE"),C=I({}),L=p({}),b=p(0),n=I({page_index:1,page_size:10});let A=p([]),S=p([]),U=p([]);const $=p(),Y=p(!1),_=e=>{N(e).then(s=>{var g;T.value=(g=s.data)==null?void 0:g.lists.map(a=>({...a,updated_at:P(a.updated_at).format("YYYY-MM-DD HH:mm:ss"),status:a.status==1?"\u5F85\u5BA1\u6838":a.status==2?"\u63D0\u73B0\u4E2D":a.status==3?"\u5DF2\u63D0\u73B0":a.status==4?"\u62D2\u7EDD\u63D0\u73B0":a.status==5?"\u63D0\u73B0\u5931\u8D25":""})),b.value=s.data.total_count,C.apply_users_count=s.data.apply_users_count,C.unaudit_orders_count=s.data.unaudit_orders_count,C.unaudit_reward_sum=s.data.unaudit_reward_sum,L.value=JSON.parse(JSON.stringify(e))}).catch(s=>{}).then(()=>{})},aa=()=>{Q().then(e=>{A.value=e.data,U.value=e.data}).catch(()=>{})},y=e=>{W({main_product_id:e}).then(g=>{S.value=g.data}).catch(()=>{})},ea={name:"basetable",setup(){u.value="",i.value="";const e=G(),s=K();e.params.product_name!==""?(u.value=e.params.main_product_name,i.value=e.params.product_name,n.product_id=e.params.product_id,k.value=e.params.main_product_id,y(e.params.main_product_id)):e.params.main_product_name!==""?(u.value=e.params.main_product_name,n.main_product_id=e.params.main_product_id,k.value=e.params.main_product_id,y(e.params.main_product_id)):y(),console.log(u.value,i.value);const g=()=>{s.go(-1)};return _(n),aa(),{tableData:T,widthdrawDetail:C,product_type:Z,options:A,suboptions:S,addoptions:U,main_product_name_selected:u,product_name_selected:i,getProductAndDataList:()=>{if(i.value="",u.value==-1)_(n);else{const t={...n,main_product_id:u.value};n.product_id="",k.value=u.value,_(t),y(u.value)}},getDataById:()=>{if(i.value==-1){const t={...n,product_id:u.value};t.product_id==-1&&delete t.product_id,_(t)}else{const t={...n,product_id:i.value};n.product_id=i.value,t.product_id==-1&&delete t.product_id,_(t)}},query:n,handlePageChange:t=>{if(n.page_index=t,u.value==-1)_(n);else if(u.value>0)if(i.value==-1){const d={main_product_id:u.value,...n};_(d)}else if(i.value>0){const d={...n,product_id:i.value};_(d)}else{const d={...n,main_product_id:u.value};_(d)}else{const d={...n};_(d)}},pageTotal:b,handleDate:t=>{if(t!==null){let d=[];t.forEach(r=>{r!=null&&d.push(P(r).format("YYYY-MM-DD HH:mm:ss"))});let l={...n,start_date:d[0],end_date:d[1]};n.start_date=d[0],n.end_date=d[1],_(l)}else _(n)},dateRange:$,getExcel:()=>{L.value.page_size=b.value?b.value<=1e4?b.value:1e4:10,N(L.value).then(t=>{if(t.status==200){H.value=t.data.lists.map(l=>({wechat_user_id:l.wechat_user_id,main_product_name:l.main_product_name,product_name:l.product_name,nickname:l.nickname,bind_account_count:l.bind_account_count,amount:l.amount,oaid:l.oaid,ip:l.ip,ip_address:l.ip_address,updated_at:P(l.updated_at).format("YYYY-MM-DD HH:mm:ss"),status:l.status==1?"\u5F85\u5BA1\u6838":l.status==2?"\u63D0\u73B0\u4E2D":l.status==3?"\u5DF2\u63D0\u73B0":l.status==4?"\u62D2\u7EDD\u63D0\u73B0":l.status==5?"\u63D0\u73B0\u5931\u8D25":""}));const d=["\u7528\u6237ID","\u9879\u76EE","\u5E94\u7528","\u7528\u6237\u540D","\u8BBE\u5907\u5173\u8054\u8D26\u53F7","\u7533\u8BF7\u63D0\u73B0\u91D1\u989D","\u6570\u76DFid","ip","ip\u5730\u5740","\u63D0\u73B0\u65F6\u95F4","\u63D0\u73B0\u72B6\u6001"];X(H.value,"\u4EBA\u5DE5\u5BA1\u6838\u8BB0\u5F55",d,"\u63D0\u73B0\u8BB0\u5F55")}else t.message?M.error(t.message):M.error("\u540E\u7AEFapi\u63A5\u53E3\u5F02\u5E38\uFF01")})},isShow:Y,get:()=>{Y.value=!Y.value,n.status=3,_(n)},goback:g,main_product_id:k}},methods:{withdrawDetail(e){this.$router.push({name:"userdetail",params:{wechat_user_id:e}})}}},ta={class:"crumbs"},oa=f("\u98CE\u63A7\u7CFB\u7EDF"),na=f("\u7528\u6237\u7BA1\u7406"),la=f("\u4EBA\u5DE5\u5BA1\u6838\u8BB0\u5F55"),da={class:"container"},sa={class:"handle-box"},ra=f("\u5BFC\u51FA"),ua=f("\u8FD4\u56DE"),ca={class:"pagination"};function _a(e,s,g,a,q,j){const D=m("el-breadcrumb-item"),E=m("el-breadcrumb"),x=m("el-option"),t=m("el-select"),d=m("el-date-picker"),l=m("el-button"),r=m("el-table-column"),F=m("el-table"),J=m("el-pagination");return v(),V("div",null,[w("div",ta,[o(E,{separator:"/"},{default:h(()=>[o(D,null,{default:h(()=>[oa]),_:1}),o(D,null,{default:h(()=>[na]),_:1}),o(D,null,{default:h(()=>[la]),_:1})]),_:1})]),w("div",da,[w("div",sa,[o(t,{style:{width:"200px"},modelValue:a.main_product_name_selected,"onUpdate:modelValue":s[0]||(s[0]=c=>a.main_product_name_selected=c),placeholder:"\u9879\u76EE",class:"m-2",onChange:a.getProductAndDataList},{default:h(()=>[(v(!0),V(R,null,B(a.options,c=>(v(),z(x,{key:c.id,label:c.main_product_name,value:c.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"]),o(t,{style:{width:"200px"},modelValue:a.product_name_selected,"onUpdate:modelValue":s[1]||(s[1]=c=>a.product_name_selected=c),placeholder:"\u5E94\u7528",class:"m-2",onChange:a.getDataById},{default:h(()=>[(v(!0),V(R,null,B(a.suboptions,c=>(v(),z(x,{key:c.product_id,label:c.product_name,value:c.product_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"]),o(d,{modelValue:a.dateRange,"onUpdate:modelValue":s[2]||(s[2]=c=>a.dateRange=c),type:"daterange","range-separator":"\u2192",onChange:a.handleDate,"start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F"},null,8,["modelValue","onChange"]),o(l,{type:"primary",onClick:a.getExcel},{default:h(()=>[ra]),_:1},8,["onClick"]),o(l,{type:"primary",onClick:a.goback},{default:h(()=>[ua]),_:1},8,["onClick"])]),o(F,{data:a.tableData,border:"",class:"table",ref:"multipleTable","header-cell-class-name":"table-header"},{default:h(()=>[o(r,{prop:"wechat_user_id",label:"\u7528\u6237ID"}),o(r,{prop:"main_product_name",label:"\u9879\u76EE"}),o(r,{prop:"product_name",label:"\u5E94\u7528"}),o(r,{prop:"nickname",label:"\u7528\u6237\u540D"}),o(r,{prop:"bind_account_count",label:"\u8BBE\u5907\u5173\u8054\u8D26\u53F7"}),o(r,{prop:"amount",label:"\u7533\u8BF7\u63D0\u73B0\u91D1\u989D"}),o(r,{prop:"oaid",label:"\u6570\u76DFid"}),o(r,{prop:"ip",label:"ip"}),o(r,{prop:"ip_address",label:"ip\u5730\u5740"}),o(r,{prop:"updated_at",sortable:"",label:"\u63D0\u73B0\u65F6\u95F4"}),o(r,{prop:"status",label:"\u72B6\u6001"})]),_:1},8,["data"]),w("div",ca,[o(J,{background:"",layout:"total, prev, pager, next","current-page":a.query.page_index,"page-size":a.query.page_size,total:a.pageTotal,onCurrentChange:a.handlePageChange},null,8,["current-page","page-size","total","onCurrentChange"])])])])}const ga=O(ea,[["render",_a],["__scopeId","data-v-435cc29c"],["__file","/Users/apple/Desktop/project-b/relationship.b/src/views/withdrawReview.vue"]]);export{ga as default};
