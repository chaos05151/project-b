import{_ as we,u as xe,r as u,C as Ve,D as A,w as De,b as Ce,e as d,g as ze,a as _,c as L,t as p,j as t,k as n,h as D,y as k,q as Le,p as y,T as Se,f as Be,l as f,F as J,m as O,A as Ne,B as Ue,z as c,V as Ye}from"./index.3fee5d13.js";import{h as R}from"./moment.9709ab41.js";import{e as Me}from"./export2excel.a0c92898.js";import{f as $,s as Je,d as Oe,i as Pe}from"./blacklist.cb8a124f.js";import{s as S}from"./showButton.83421764.js";const B=C=>(Ne("data-v-09397df3"),C=C(),Ue(),C),Ee={class:"crumbs"},Ie=c("\u7528\u6237\u7BA1\u7406"),Te=c("\u9ED1\u540D\u5355"),je={class:"container"},He=c("\xA0\xA0 "),qe=c("\xA0\xA0 "),Fe=c("\xA0\xA0 "),Ae=c("\u67E5\u8BE2"),Re=c("\u91CD\u7F6E"),$e=B(()=>p("hr",null,null,-1)),Ge=c("\u540C\u6B65\u6570\u76DFid"),Ke=c("\u6240\u6709\u9879\u76EE\u8BBE\u5907\u9ED1\u540D\u5355"),Qe=c("\u5BFC\u5165\u9ED1\u540D\u5355 "),We=c("\u5BFC\u51FA\u9ED1\u540D\u5355 "),Xe=c("\u5220\u9664\u9ED1\u540D\u5355 "),Ze={class:"pagination"},ea=B(()=>p("i",{class:"el-icon-upload"},null,-1)),aa=B(()=>p("div",{class:"el-upload__text"},[c(" \u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216 "),p("em",null,"\u70B9\u51FB\u4E0A\u4F20")],-1)),ta=B(()=>p("div",{class:"el-upload__tip"},"\u53EA\u80FD\u4E0A\u4F20 xlsx/xls \u6587\u4EF6",-1)),la={__name:"BlackList",setup(C){const G=S("user:black:view"),K=S("user:black:add");S("user:black:edit");const Q=S("user:black:del"),W=xe(),w=u(!1),P=u(!0),X=Ve(),E=u([]),x=u(1),r=A({page_index:1,page_size:10}),N=u([]),I=u({}),T=u([]),o=A({main_product_id:"",product_id:"",channel:"",version:"",start_date:"",end_date:"",keywords:""}),b=u();let U=u([]),z=u([]),j=u([]),H=u([]);const Z=async()=>{Se().then(a=>{if(a.status==200){z.value=a.data,o.main_product_id=a.data[0].id;let e={...r,main_product_id:a.data[0].id};q(a.data[0].id),h(e)}}).catch(a=>{console.log(a)}),Be().then(a=>{a.status==200&&(N.value=a.data)})},ee=()=>{b.value?(o.start_date=b.value[0],o.end_date=b.value[1]):(o.start_date="",o.end_date="")};De(()=>W.mainProductId,(a,e)=>{o.main_product_id=a,le()});const ae=a=>{r.channel="",console.log(a.toString(),N.value),JSON.parse(JSON.stringify(N.value)).forEach(l=>{l.value==a.toString()&&(U.value=l.children)})},te=a=>{r.versions_b="",JSON.parse(JSON.stringify(U.value)).map(l=>{l.value==a&&(H.value=l.children)})},le=()=>{q(o.main_product_id)},q=a=>{Ce({main_product_id:a}).then(l=>{j.value=l.data}).catch(()=>{})},oe=async()=>{try{for(const a in o)(o[a]==""||o[a]==-1)&&(o[a]=void 0);o.main_product_id||(o.main_product_id=z.value[0]),console.log(o),await Je(o),f.success("\u540C\u6B65\u6210\u529F")}catch{f.error("\u7F51\u7EDC\u4E0D\u597D\u8BF7\u91CD\u8BD5")}},ne=a=>{r.page_index=a;const e={...o,...r};e.channel=o.channel;for(const l in e)(e[l]==""||e[l]==-1)&&(e[l]=void 0);h(e)},h=a=>{$(a).then(e=>{e.status==200?(P.value=!1,E.value=e.data.lists.map(l=>({...l,blacked_time:l.blacked_time?R(l.blacked_time).format("YYYY-MM-DD HH:mm:ss"):""})),I.value=JSON.parse(JSON.stringify(a)),x.value=e.data.total_count?e.data.total_count:0):f.error(e==null?void 0:e.message)}).catch(()=>{})},se=async a=>{try{await Ye.confirm("\u786E\u5B9A\u5220\u9664\u9ED1\u540D\u5355\uFF1F","\u63D0\u793A",{type:"warning"});const e={id:a};await Oe(e),f.success("\u5220\u9664\u6210\u529F");const l={...o,...r};e.channel=o.channel;for(const i in l)(l[i]==""||l[i]==-1)&&delete l[i];h(l)}catch{}},de=()=>{X.push({name:"blacklistall"})},ie=()=>{let a=JSON.parse(JSON.stringify(o));const e={...a,...r};e.channel=a.channel;for(const l in e)(e[l]==""||o[l]==-1)&&delete e[l];console.log(a,e),h(e)},ce=()=>{I.value.page_size=x.value?x.value<=1e4?x.value:1e4:10,$().then(a=>{if(a.status==200){T.value=a.data.lists.map(i=>(console.log(a.data.lists),{...i,is_buy:i.is_buy==1?"\u662F":"\u5426",blacked_time:R(i.blacked_time).format("YYYY-MM-DD HH:mm:ss")}));const e=["\u7528\u6237id","\u7528\u6237\u540D","\u6570\u76DFid","\u7528\u6237ip","\u7528\u6237ip\u5730\u5740","\u8BBE\u5907\u5173\u8054\u8D26\u53F7\u6570","\u62C9\u9ED1\u65F6\u95F4"],l=T.value.map(i=>({id:i.id,nickname:i.nickname,oaid:i.oaid,ip:i.ip,ip_address:i.ip_address,bind_account_count:i.bind_account_count,blacked_time:i.blacked_time}));Me(l,"UserTable",e,"UserTable")}else a.message?f.error(a.message):f.error("\u540E\u7AEFapi\u63A5\u53E3\u5F02\u5E38\uFF01")})},re=async a=>{let e=new FormData;e.append("file",a.file);try{const l=await Pe(e);console.log(l),l.status==200&&(f.success("\u5BFC\u5165\u6210\u529F"),w.value=!1,h(r))}catch{f.success("\u8BF7\u91CD\u8BD5"),w.value=!1}},ue=()=>{b.value=[];for(const e in o)o[e]="";o.main_product_id=z.value[0].id;let a={page_index:r.page_index,page_size:r.page_size,main_product_id:z.value[0].id};h(a)};return Z(),(a,e)=>{const l=d("el-breadcrumb-item"),i=d("el-breadcrumb"),g=d("el-option"),Y=d("el-select"),V=d("el-form-item"),M=d("el-row"),_e=d("el-date-picker"),pe=d("el-input"),v=d("el-button"),me=d("el-form"),fe=d("Download"),F=d("el-icon"),ve=d("Upload"),m=d("el-table-column"),be=d("el-table"),he=d("el-pagination"),ge=d("el-upload"),ke=d("el-dialog"),ye=ze("loading");return _(),L("div",null,[p("div",Ee,[t(i,{separator:"/"},{default:n(()=>[t(l,null,{default:n(()=>[Ie]),_:1}),t(l,null,{default:n(()=>[Te]),_:1})]),_:1})]),p("div",je,[t(me,null,{default:n(()=>[t(M,null,{default:n(()=>[D("v-if",!0),He,t(V,{label:"\u5E94\u7528"},{default:n(()=>[t(Y,{modelValue:o.product_id,"onUpdate:modelValue":e[1]||(e[1]=s=>o.product_id=s),placeholder:"\u9009\u62E9\u5E94\u7528",onChange:ae},{default:n(()=>[t(g,{label:"\u5168\u90E8",value:""}),(_(!0),L(J,null,O(k(j),s=>(_(),y(g,{key:s.product_id,label:s.product_name,value:s.product_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),qe,t(V,{label:"\u6E20\u9053\u9009\u62E9"},{default:n(()=>[t(Y,{modelValue:o.channel,"onUpdate:modelValue":e[2]||(e[2]=s=>o.channel=s),placeholder:"\u9009\u62E9\u6E20\u9053",onChange:te},{default:n(()=>[t(g,{label:"\u5168\u90E8",value:""}),(_(!0),L(J,null,O(k(U),s=>(_(),y(g,{key:s.id,label:s.label_name,value:s.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),Fe,t(V,{label:"\u7248\u672C\u9009\u62E9"},{default:n(()=>[t(Y,{modelValue:o.version,"onUpdate:modelValue":e[3]||(e[3]=s=>o.version=s),placeholder:"\u9009\u62E9\u7248\u672C"},{default:n(()=>[t(g,{label:"\u5168\u90E8",value:""}),(_(!0),L(J,null,O(k(H),s=>(_(),y(g,{key:s.id,label:s.label_name,value:s.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(M,null,{default:n(()=>[t(V,{label:"\u62C9\u9ED1\u65E5\u671F"},{default:n(()=>[t(_e,{style:{margin:"0 6px"},modelValue:b.value,"onUpdate:modelValue":e[4]||(e[4]=s=>b.value=s),type:"daterange","range-separator":"\u2192","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4","value-format":"YYYY-MM-DD hh:mm:ss",onChange:ee},null,8,["modelValue"])]),_:1}),t(V,{label:"\u7528\u6237\u67E5\u627E"},{default:n(()=>[t(pe,{modelValue:o.keywords,"onUpdate:modelValue":e[5]||(e[5]=s=>o.keywords=s),style:{width:"200px",padding:"0 5px"},class:"w-50 m-2",placeholder:"\u8BF7\u8F93\u5165id/\u7528\u6237\u540D/ip"},null,8,["modelValue"])]),_:1}),t(v,{type:"primary",size:"small",class:"heightbutten",onClick:ie},{default:n(()=>[Ae]),_:1}),t(v,{type:"primary",size:"small",class:"heightbutten",onClick:ue},{default:n(()=>[Re]),_:1})]),_:1})]),_:1}),D(" \u5206\u5272\u7EBF "),$e,t(M,{class:"syncbutton"},{default:n(()=>[p("div",null,[t(v,{type:"primary",onClick:oe},{default:n(()=>[Ge]),_:1}),t(v,{type:"primary",onClick:de},{default:n(()=>[Ke]),_:1})]),p("div",null,[k(K)?(_(),y(v,{key:0,size:"small",onClick:e[6]||(e[6]=s=>w.value=!0)},{default:n(()=>[t(F,null,{default:n(()=>[t(fe)]),_:1}),Qe]),_:1})):D("v-if",!0),t(v,{size:"small",onClick:ce},{default:n(()=>[t(F,null,{default:n(()=>[t(ve)]),_:1}),We]),_:1})])]),_:1}),k(G)?Le((_(),y(be,{key:0,data:E.value,border:"",style:{width:"100%"}},{default:n(()=>[t(m,{prop:"id",label:"\u7528\u6237id"}),t(m,{prop:"nickname",label:"\u7528\u6237\u540D"}),t(m,{prop:"oaid",label:"\u6570\u76DFid"}),t(m,{prop:"ip",label:"\u7528\u6237ip"}),t(m,{prop:"ip_address",label:"\u7528\u6237ip\u5730\u5740"}),t(m,{prop:"bind_account_count",label:"\u8BBE\u5907\u5173\u8054\u8D26\u53F7\u6570"}),t(m,{prop:"blacked_time",label:"\u62C9\u9ED1\u65F6\u95F4"}),t(m,{label:"\u64CD\u4F5C",width:"220",align:"center"},{default:n(s=>[k(Q)?(_(),y(v,{key:0,type:"danger",size:"small",text:"",onClick:oa=>se(s.row.id)},{default:n(()=>[Xe]),_:2},1032,["onClick"])):D("v-if",!0)]),_:1})]),_:1},8,["data"])),[[ye,P.value]]):D("v-if",!0),p("div",Ze,[t(he,{background:"",layout:"total, prev, pager, next","current-page":r.page_index,"page-size":r.page_size,total:x.value,onCurrentChange:ne},null,8,["current-page","page-size","total"])])]),t(ke,{modelValue:w.value,"onUpdate:modelValue":e[7]||(e[7]=s=>w.value=s),title:"\u9ED1\u540D\u5355\u5BFC\u5165"},{default:n(()=>[t(ge,{class:"upload-demo",drag:"",multiple:"","show-file-list":!1,action:"","http-request":re},{tip:n(()=>[ta]),default:n(()=>[ea,aa]),_:1})]),_:1},8,["modelValue"])])}}},ra=we(la,[["__scopeId","data-v-09397df3"],["__file","/Users/apple/Desktop/project-b/relationship.b/src/views/BlackList.vue"]]);export{ra as default};