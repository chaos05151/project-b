import{n as X,o as g,J as V,b as t,_ as Z,g as u,f as $,r as v,c as B,a as L,w as i,G as F,E as C,H as q,F as I,I as N,K as A,L as J,e as b}from"./index.8b725170.js";import{a as ee,b as ae}from"./product.8200d93e.js";import{f as R,a as te,r as le}from"./user.61aed8c8.js";import{e as oe}from"./export2excel.a0c92898.js";import{h as E}from"./moment.9709ab41.js";import"./request.75bcd234.js";var P=X({name:"Search"});const ne={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},re=t("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"},null,-1);function se(s,a,_,o,T,f){return g(),V("svg",ne,[re])}P.render=se;P.__file="packages/components/Search.vue";const de=P;const h=u(""),m=u(""),r=u(""),ce=u(0),W=u([]),z=u([]),y=u(0),x=u(),U=u(""),ie=u(""),ue=u("\u9879\u76EE"),D=u({}),n=$({keywords:"",page_index:1,page_size:10});let j=u([]),G=u([]),_e=u([{value:"-1",label:"\u5168\u90E8"},{value:"1",label:"\u5DF2\u63D0\u73B0\u7528\u6237"},{value:"0",label:"\u672A\u63D0\u73B0\u7528\u6237"}]);const c=s=>{R(s).then(a=>{a.status==200?(W.value=a.data.lists.map(_=>({..._,is_buy:_.is_buy==1?"\u662F":"\u5426",created_at:E(_.created_at).format("YYYY-MM-DD HH:mm:ss")})),y.value=a.data.total_count,D.value=JSON.parse(JSON.stringify(s)),console.log(D.value).catch(()=>{})):C.error(a==null?void 0:a.message)}).catch(()=>{})},O=()=>{h.value="",m.value="",r.value="",U.value="",n.keywords=""},pe=()=>{ee().then(s=>{j.value=s.data}).catch(()=>{})},me=s=>{ae({main_product_id:s}).then(_=>{G.value=_.data}).catch(()=>{})},ve=s=>{te(s).then(a=>{a.status==200&&(C.success("\u52A0\u5165\u9ED1\u540D\u5355\u6210\u529F\uFF01"),c(n))}).catch(()=>{})},he=s=>{le(s).then(a=>{a.status==200&&(C.success("\u79FB\u51FA\u9ED1\u540D\u5355\u6210\u529F\uFF01"),c(n))}).catch(()=>{})},be=s=>{if(s)return!!/^\d+(\.{0,1}\d+){0,1}$/.test(s)},ge=()=>{console.log(x.value),x.value!=null?(n.start_date=x.value[0],n.end_date=x.value[1]):(delete n.start_date,delete n.end_date),console.log(n),c(n)},we={name:"basetable",setup(){O(),pe(),c(n);const s=e=>{q.confirm("\u786E\u5B9A\u52A0\u5165\u9ED1\u540D\u5355\uFF1F","\u63D0\u793A",{type:"warning"}).then(()=>{ve(e)}).catch(()=>{})},a=e=>{q.confirm("\u786E\u5B9A\u79FB\u51FA\u9ED1\u540D\u5355\uFF1F","\u63D0\u793A",{type:"warning"}).then(()=>{he(e)}).catch(()=>{})},_=()=>{if(h.value==-1)if(m.value==-1)if(r.value&&r.value>=0){const e={withdraw_user:r.value,...n};c(e)}else c(n);else if(m.value&&m.value>0)if(r.value&&r.value>=0){const e={product_id:m.value,withdraw_user:r.value,...n};c(e)}else{const e={product_id:m.value,...n};c(e)}else if(r.value&&r.value>=0){const e={withdraw_user:r.value,...n};c(e)}else c(n);else if(h.value&&h.value>0){if(m.value==-1)if(r.value&&r.value>=0){const e={main_product_id:h.value,withdraw_user:r.value,...n};c(e)}else{const e={main_product_id:h.value,...n};c(e)}else if(m.value&&m.value>0)if(r.value&&r.value>=0){const e={product_id:m.value,withdraw_user:r.value,...n};c(e)}else{const e={product_id:m.value,...n};c(e)}else if(r.value&&r.value>=0){const e={main_product_id:h.value,withdraw_user:r.value,...n};c(e)}else{const e={main_product_id:h.value,...n};c(e)}me(h.value)}else if(r.value&&r.value>=0){const e={withdraw_user:r.value,...n};c(e)}else c(n)};return{tableData:W,tableExportData:z,removeBlackList:a,addBlackList:s,product_type:ue,Search:de,checkNonnegative:be,searchByIdNickNameIpMobile:()=>{U.value?(n.keywords=U.value,_()):(n.keywords="",_())},idnicknamephonemobile:U,options:j,suboptions:G,useroptions:_e,main_product_name_selected:h,product_name_selected:m,main_product_value_select:ie,check_main_product_name:ce,getProductAndDataList:_,getDataById:()=>{_()},getWithdrawUser:()=>{_()},withdraw_user_selected:r,handlePageChange:e=>{n.page_index=e,_()},query:n,pageTotal:y,clearOptions:O,dataExport:D,dateRange:x,exportExcel:()=>{D.value.page_size=y.value?y.value<=1e4?y.value:1e4:10,R(D.value).then(e=>{if(e.status==200){z.value=e.data.lists.map(d=>({...d,is_buy:d.is_buy==1?"\u662F":"\u5426",created_at:E(d.created_at).format("YYYY-MM-DD HH:mm:ss")}));const k=["\u9879\u76EE","\u5E94\u7528","\u7528\u6237id","\u6570\u76DFid","\u662F\u5426\u4E70\u91CF\u7528\u6237","\u7528\u6237\u540D","\u624B\u673A\u53F7","\u7D2F\u79EF\u4F63\u91D1","\u5DF2\u63D0\u73B0\u4F63\u91D1","\u5DF2\u63D0\u73B0\u6B21\u6570","\u6CE8\u518Cip","ip\u5730\u5740","\u6CE8\u518C\u65F6\u95F4"],M=z.value.map(d=>({main_product_name:d.main_product_name,product_name:d.product_name,id:d.id,oaid:d.oaid,is_buy:d.is_buy==1?"\u662F":"\u5426",nickname:d.nickname,tel:d.tel,reward:d.reward,withdraw_reward:d.withdraw_reward,withdraw_times:d.withdraw_times,ip:d.ip,ip_address:d.ip_address,created_at:E(d.created_at).format("YYYY-MM-DD HH:mm:ss")}));oe(M,"UserTable",k,"UserTable")}else e.message?C.error(e.message):C.error("\u540E\u7AEFapi\u63A5\u53E3\u5F02\u5E38\uFF01")})},handleDate:ge}},methods:{withDraw(){this.$router.push("/withdraw")},userDetail(s){this.$router.push({name:"userdetail",params:{wechat_user_id:s}})},blackList(){this.$router.push("/blacklist")},userFeedback(){this.$router.push("/feedback")}}},fe={class:"crumbs"},ke=b("\u98CE\u63A7\u7CFB\u7EDF"),ye=b("\u7528\u6237\u7BA1\u7406"),xe={class:"container"},De={class:"handle-box"},Ce=b("\u63D0\u73B0\u8BBE\u7F6E"),Be=b("\u67E5\u770B\u9ED1\u540D\u5355"),Le=b("\u7528\u6237\u53CD\u9988"),Ve=b("\u5BFC\u51FAExcel"),Ue=b("\u8BE6\u60C5 "),Ye=b(" \u52A0\u5165\u9ED1\u540D\u5355 "),Me=b(" \u79FB\u51FA\u9ED1\u540D\u5355 "),Ie={class:"pagination"};function Ne(s,a,_,o,T,f){const Y=v("el-breadcrumb-item"),S=v("el-breadcrumb"),e=v("el-option"),k=v("el-select"),M=v("el-input"),d=v("el-date-picker"),w=v("el-button"),p=v("el-table-column"),K=v("el-table"),Q=v("el-pagination");return g(),B("div",null,[L("div",fe,[t(S,{separator:"/"},{default:i(()=>[t(Y,null,{default:i(()=>[ke]),_:1}),t(Y,null,{default:i(()=>[ye]),_:1})]),_:1})]),L("div",xe,[L("div",De,[t(k,{style:{width:"12%"},modelValue:o.main_product_name_selected,"onUpdate:modelValue":a[0]||(a[0]=l=>o.main_product_name_selected=l),placeholder:"\u9879\u76EE\u540D\u79F0",class:"m-2",onChange:o.getProductAndDataList},{default:i(()=>[t(e,{label:"\u5168\u90E8",value:"-1"}),(g(!0),B(I,null,N(o.options,l=>(g(),V(e,{key:l.id,label:l.main_product_name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"]),t(k,{style:{width:"12%"},modelValue:o.product_name_selected,"onUpdate:modelValue":a[1]||(a[1]=l=>o.product_name_selected=l),placeholder:"\u5E94\u7528\u540D\u79F0",class:"m-2",onChange:o.getDataById},{default:i(()=>[t(e,{label:"\u5168\u90E8",value:"-1"}),(g(!0),B(I,null,N(o.suboptions,l=>(g(),V(e,{key:l.product_id,label:l.product_name,value:l.product_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"]),t(k,{style:{width:"20%",margin:"0 5px"},modelValue:o.withdraw_user_selected,"onUpdate:modelValue":a[2]||(a[2]=l=>o.withdraw_user_selected=l),placeholder:"\u63D0\u73B0\u7528\u6237",class:"m-2",onChange:o.getWithdrawUser},{default:i(()=>[(g(!0),B(I,null,N(o.useroptions,l=>(g(),V(e,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"]),t(M,{modelValue:o.idnicknamephonemobile,"onUpdate:modelValue":a[3]||(a[3]=l=>o.idnicknamephonemobile=l),onInput:o.searchByIdNickNameIpMobile,style:{width:"200px",padding:"0 5px"},class:"w-50 m-2",placeholder:"\u8BF7\u8F93\u5165id/\u7528\u6237\u540D/\u624B\u673A\u53F7/ip"},null,8,["modelValue","onInput"]),t(d,{style:{margin:"0 6px"},modelValue:o.dateRange,"onUpdate:modelValue":a[4]||(a[4]=l=>o.dateRange=l),type:"daterange","range-separator":"\u2192","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4","value-format":"YYYY-MM-DD",onChange:o.handleDate},null,8,["modelValue","onChange"]),F(' <el-button type="primary" icon="el-icon-search" @click="handleSearch">\u641C\u7D22</el-button> '),t(w,{type:"primary",onClick:a[5]||(a[5]=l=>f.withDraw())},{default:i(()=>[Ce]),_:1}),t(w,{type:"primary",onClick:a[6]||(a[6]=l=>f.blackList())},{default:i(()=>[Be]),_:1}),t(w,{type:"primary",onClick:a[7]||(a[7]=l=>f.userFeedback())},{default:i(()=>[Le]),_:1}),t(w,{type:"primary",onClick:a[8]||(a[8]=l=>o.exportExcel())},{default:i(()=>[Ve]),_:1})]),t(K,{data:o.tableData,border:"",class:"table",ref:"multipleTable","header-cell-class-name":"table-header"},{default:i(()=>[t(p,{prop:"main_product_name",label:"\u9879\u76EE\u540D\u79F0"}),t(p,{prop:"product_name",label:"\u5E94\u7528\u540D\u79F0"}),t(p,{prop:"id",label:"\u7528\u6237id"}),t(p,{prop:"oaid",label:"\u6570\u76DFid"}),t(p,{prop:"is_buy",label:"\u662F\u5426\u4E70\u91CF\u7528\u6237"}),t(p,{prop:"nickname",label:"\u7528\u6237\u540D"}),t(p,{prop:"tel",label:"\u624B\u673A\u53F7"}),t(p,{sortable:"",prop:"reward",label:"\u7D2F\u79EF\u4F63\u91D1"}),t(p,{sortable:"",prop:"withdraw_reward",label:"\u5DF2\u63D0\u73B0\u4F63\u91D1"}),t(p,{sortable:"",prop:"withdraw_times",label:"\u5DF2\u63D0\u73B0\u6B21\u6570"}),t(p,{prop:"ip",label:"\u6CE8\u518Cip"}),t(p,{prop:"ip_address",label:"ip\u5730\u5740"}),t(p,{prop:"created_at",label:"\u6CE8\u518C\u65F6\u95F4"}),F(` <el-table-column
          prop="bind_account_count"
          label="\u5173\u8054\u8D26\u53F7\u6570"
        ></el-table-column>
        <el-table-column prop="illegal_time" label="\u62C9\u9ED1\u65F6\u95F4"></el-table-column> `),t(p,{label:"\u64CD\u4F5C",width:"220",align:"center"},{default:i(l=>[t(w,{type:"text",icon:"el-icon-link",onClick:H=>f.userDetail(l.row.id)},{default:i(()=>[Ue]),_:2},1032,["onClick"]),A(t(w,{type:"text",icon:"el-icon-delete",class:"red",onClick:H=>o.addBlackList(l.row.id)},{default:i(()=>[Ye]),_:2},1032,["onClick"]),[[J,l.row.blacklisted!=1]]),A(t(w,{type:"text",icon:"el-icon-edit",onClick:H=>o.removeBlackList(l.row.id)},{default:i(()=>[Me]),_:2},1032,["onClick"]),[[J,l.row.blacklisted==1]])]),_:1})]),_:1},8,["data"]),L("div",Ie,[t(Q,{background:"",layout:"total, prev, pager, next","current-page":o.query.page_index,"page-size":o.query.page_size,total:o.pageTotal,onCurrentChange:o.handlePageChange},null,8,["current-page","page-size","total","onCurrentChange"])])])])}const Fe=Z(we,[["render",Ne],["__scopeId","data-v-4af0b479"],["__file","/Users/apple/Desktop/project-b github/project-b/src/views/UserTable.vue"]]);export{Fe as default};
