import{_ as q,g as s,f as w,r as u,o as v,c as y,a as k,b as e,w as n,e as b,G as V,F as B,I as P,H as L}from"./index.2c638c17.js";import{a as H,b as M}from"./product.fa6bd801.js";import{g as S}from"./user.885d0239.js";import{h as j}from"./moment.9709ab41.js";import"./request.644f0e68.js";const m=s(""),h=s(""),A=s(0),F=s(""),z=s(0),E=s(""),G=s("\u9879\u76EE"),r=s("");let I=s([]),N=s([]);const J=w({}),i=w({page_index:1,page_size:10}),p=d=>{S(d).then(l=>{F.value=l.data.lists.map(c=>({...c,dispose_status:c.dispose_status==1?"\u5DF2\u5904\u7406":"\u672A\u5904\u7406",updated_at:c.updated_at?j(c.updated_at).format("YYYY-MM-DD HH:mm:ss"):""})),z.value=l.data.total_count?l.data.total_count:0}).catch(()=>{})},K=()=>{H().then(d=>{I.value=d.data}).catch(()=>{})},O=d=>{M({main_product_id:d}).then(c=>{N.value=c.data}).catch(()=>{})},Q={name:"basetable",setup(){r.value="",p({page_index:1,page_size:10}),K();const l=t=>{i.page_index=t,g()},c=t=>{g()},a=()=>{h.value="",m.value&&(g(),O(m.value))},g=()=>{if(m.value)if(h.value)if(r.value){const t={product_id:h.value,dispose_status:r.value,...i};p(t)}else{const t={product_id:h.value,...i};p(t)}else if(r.value){const t={main_product_id:m.value,dispose_status:r.value,...i};p(t)}else{const t={main_product_id:m.value,...i};p(t)}else if(r.value){const t={dispose_status:r.value,...i};p(t)}else p(i)};return{form:J,tableData:F,product_type:G,options:I,suboptions:N,main_product_name_selected:m,product_name_selected:h,main_product_value_select:E,check_main_product_name:A,query:i,pageTotal:z,getData:p,getProductAndDataList:a,getDataById:g,handlePageChange:l,getStaus:c,value:r}},methods:{feedBackDetail(d){this.$router.push({name:"feedbackdetail",params:{wechat_user_id:d}})},goback(){this.$router.go(-1)}}},R={class:"crumbs"},W=b("\u98CE\u63A7\u7CFB\u7EDF"),X=b("\u7528\u6237\u7BA1\u7406"),Z=b("\u7528\u6237\u53CD\u9988"),$={class:"container"},ee={class:"handle-box"},ae=b("\xA0\xA0 "),te=b("\u8FD4\u56DE"),oe=b("\u8BE6\u60C5 "),le={class:"pagination"};function ne(d,l,c,a,g,t){const C=u("el-breadcrumb-item"),T=u("el-breadcrumb"),f=u("el-option"),D=u("el-select"),x=u("el-button"),_=u("el-table-column"),U=u("el-table"),Y=u("el-pagination");return v(),y("div",null,[k("div",R,[e(T,{separator:"/"},{default:n(()=>[e(C,null,{default:n(()=>[W]),_:1}),e(C,null,{default:n(()=>[X]),_:1}),e(C,null,{default:n(()=>[Z]),_:1})]),_:1})]),k("div",$,[k("div",ee,[e(D,{modelValue:a.main_product_name_selected,"onUpdate:modelValue":l[0]||(l[0]=o=>a.main_product_name_selected=o),placeholder:"\u9879\u76EE\u540D\u79F0",class:"m-2",onChange:a.getProductAndDataList},{default:n(()=>[V(' <el-option label="\u5168\u90E8" value="-1"></el-option> '),(v(!0),y(B,null,P(a.options,o=>(v(),L(f,{key:o.id,label:o.main_product_name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"]),e(D,{modelValue:a.product_name_selected,"onUpdate:modelValue":l[1]||(l[1]=o=>a.product_name_selected=o),placeholder:"\u5E94\u7528\u540D\u79F0",class:"m-2",onChange:a.getDataById},{default:n(()=>[(v(!0),y(B,null,P(a.suboptions,o=>(v(),L(f,{key:o.product_id,label:o.product_name,value:o.product_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"]),e(D,{modelValue:a.value,"onUpdate:modelValue":l[2]||(l[2]=o=>a.value=o),placeholder:"\u5904\u7406\u72B6\u6001",class:"m-2",onChange:a.getStaus},{default:n(()=>[V(' <el-option label="\u5168\u90E8" value=""></el-option> '),e(f,{label:"\u672A\u5904\u7406",value:"0"}),e(f,{label:"\u5DF2\u5904\u7406",value:"1"})]),_:1},8,["modelValue","onChange"]),ae,e(x,{type:"primary",onClick:t.goback},{default:n(()=>[te]),_:1},8,["onClick"])]),e(U,{data:a.tableData,border:"",class:"table",ref:"multipleTable","header-cell-class-name":"table-header"},{default:n(()=>[e(_,{prop:"main_product_name",label:"\u9879\u76EE\u540D\u79F0"}),e(_,{prop:"product_name",label:"\u5E94\u7528\u540D\u79F0"}),e(_,{prop:"id",label:"\u7528\u6237ID"}),e(_,{prop:"nickname",label:"\u7528\u6237\u540D"}),e(_,{prop:"tel",label:"\u7535\u8BDD"}),e(_,{prop:"oaid",label:"\u6570\u76DFid"}),e(_,{prop:"dispose_status",label:"\u662F\u5426\u5904\u7406"}),e(_,{prop:"updated_at",sortable:"",label:"\u53CD\u9988\u65F6\u95F4"}),e(_,{label:"\u53CD\u9988\u8BE6\u60C5",width:"220",align:"center"},{default:n(o=>[e(x,{type:"text",icon:"el-icon-link",onClick:se=>t.feedBackDetail(o.row.id)},{default:n(()=>[oe]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),k("div",le,[e(Y,{background:"",layout:"total, prev, pager, next","current-page":a.query.page_index,"page-size":a.query.page_size,total:a.pageTotal,onCurrentChange:a.handlePageChange},null,8,["current-page","page-size","total","onCurrentChange"])])])])}const ie=q(Q,[["render",ne],["__scopeId","data-v-5e20d142"],["__file","/Users/apple/Desktop/project-b github/project-b/src/views/FeedBack.vue"]]);export{ie as default};
