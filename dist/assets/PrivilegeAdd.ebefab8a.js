import{_ as L,C as N,r as s,D as T,e as r,g as A,a as R,c as M,t as k,j as t,k as n,q as P,z as c,l as a}from"./index.3fee5d13.js";import{g as U,a as j}from"./privilelge.a8609542.js";import{d as w}from"./getMenus.0fda59c1.js";const q=200,S="ok",J=[{id:100,parent_id:0,path:"/product",name:"product",component:"Layout",menu_type:1,sort:0,title:"\u4EA7\u54C1\u7BA1\u7406",icon:"el-icon-lx-cascades",redirect:""},{id:110,parent_id:0,path:"/user",name:"user",component:"Layout",menu_type:1,sort:0,title:"\u7528\u6237\u7BA1\u7406",icon:"el-icon-lx-sort",redirect:""},{id:120,parent_id:0,path:"/service",name:"service",component:"Layout",menu_type:1,sort:0,title:"\u5BA2\u670D\u4E2D\u5FC3",icon:"el-icon-lx-service",redirect:""},{id:130,parent_id:0,path:"/risk",name:"risk",component:"Layout",menu_type:1,sort:0,title:"\u98CE\u63A7\u7BA1\u7406",icon:"el-icon-lx-link",redirect:""},{id:1372,parent_id:100,path:"/product",name:"product",component:"../views/ProductTable.vue",menu_type:1,sort:0,title:"\u5E94\u7528\u4E2D\u5FC3",icon:"",redirect:""},{id:1373,parent_id:1372,path:"",name:"product:product:view",component:"",menu_type:2,sort:0,title:"\u67E5\u770B",icon:"",redirect:""},{id:1374,parent_id:1372,path:"",name:"product:product:add",component:"",menu_type:2,sort:0,title:"\u6DFB\u52A0",icon:"",redirect:""},{id:1375,parent_id:1372,path:"",name:"product:product:edit",component:"",menu_type:2,sort:0,title:"\u4FEE\u6539",icon:"",redirect:""},{id:1376,parent_id:1372,path:"",name:"product:product:del",component:"",menu_type:2,sort:0,title:"\u5220\u9664",icon:"",redirect:""},{id:1377,parent_id:1372,path:"",name:"product:product:config",component:"",menu_type:2,sort:0,title:"\u98CE\u63A7\u914D\u7F6E",icon:"",redirect:""},{id:1472,parent_id:100,path:"/version",name:"version",component:"../views/VersionTable.vue",menu_type:1,sort:0,title:"\u7248\u672C\u7BA1\u7406",icon:"",redirect:""},{id:1473,parent_id:1472,path:"",name:"product:version:view",component:"",menu_type:2,sort:0,title:"\u67E5\u770B",icon:"",redirect:""},{id:1474,parent_id:1472,path:"",name:"product:version:add",component:"",menu_type:2,sort:0,title:"\u6DFB\u52A0",icon:"",redirect:""},{id:1475,parent_id:1472,path:"",name:"product:version:edit",component:"",menu_type:2,sort:0,title:"\u4FEE\u6539",icon:"",redirect:""},{id:1476,parent_id:1472,path:"",name:"product:version:del",component:"",menu_type:2,sort:0,title:"\u5220\u9664",icon:"",redirect:""},{id:1572,parent_id:110,path:"/user",name:"user",component:"../views/UserTable.vue",menu_type:1,sort:0,title:"\u7528\u6237\u4FE1\u606F",icon:"",redirect:""},{id:1573,parent_id:1572,path:"",name:"user:user:view",component:"",menu_type:2,sort:0,title:"\u67E5\u770B",icon:"",redirect:""},{id:1574,parent_id:1572,path:"",name:"user:user:add",component:"",menu_type:2,sort:0,title:"\u6DFB\u52A0",icon:"",redirect:""},{id:1575,parent_id:1572,path:"",name:"user:user:edit",component:"",menu_type:2,sort:0,title:"\u4FEE\u6539",icon:"",redirect:""},{id:1576,parent_id:1572,path:"",name:"user:user:del",component:"",menu_type:2,sort:0,title:"\u5220\u9664",icon:"",redirect:""},{id:1577,parent_id:1572,path:"",name:"user:user:export",component:"",menu_type:2,sort:0,title:"\u5BFC\u51FA",icon:"",redirect:""},{id:1578,parent_id:1572,path:"",name:"user:user:black",component:"",menu_type:2,sort:0,title:"\u52A0\u5165\u9ED1\u540D\u5355",icon:"",redirect:""},{id:1672,parent_id:110,path:"/blacklist",name:"blacklist",component:"../views/BlackList.vue",menu_type:1,sort:0,title:"\u9ED1\u540D\u5355",icon:"",redirect:""},{id:1673,parent_id:1672,path:"",name:"user:black:view",component:"",menu_type:2,sort:0,title:"\u67E5\u770B",icon:"",redirect:""},{id:1674,parent_id:1672,path:"",name:"user:black:add",component:"",menu_type:2,sort:0,title:"\u6DFB\u52A0",icon:"",redirect:""},{id:1675,parent_id:1672,path:"",name:"user:black:edit",component:"",menu_type:2,sort:0,title:"\u4FEE\u6539",icon:"",redirect:""},{id:1676,parent_id:1672,path:"",name:"user:black:del",component:"",menu_type:2,sort:0,title:"\u79FB\u9664\u9ED1\u540D\u5355",icon:"",redirect:""},{id:1772,parent_id:120,path:"/feedback",name:"feedback",component:"../views/BlackList.vue",menu_type:1,sort:0,title:"\u7528\u6237\u53CD\u9988",icon:"",redirect:""},{id:1773,parent_id:1772,path:"",name:"service:feedback:view",component:"",menu_type:2,sort:0,title:"\u67E5\u770B",icon:"",redirect:""},{id:1774,parent_id:1772,path:"",name:"service:feedback:edit",component:"",menu_type:2,sort:0,title:"\u4FEE\u6539",icon:"",redirect:""},{id:1872,parent_id:120,path:"/withdraw",name:"withdraw",component:"../views/FeedBack.vue",menu_type:1,sort:0,title:"\u63D0\u73B0\u5BA1\u6838",icon:"",redirect:""},{id:1873,parent_id:1872,path:"",name:"service:withdraw:view",component:"",menu_type:2,sort:0,title:"\u67E5\u770B",icon:"",redirect:""},{id:1875,parent_id:1872,path:"",name:"service:withdraw:review",component:"",menu_type:2,sort:0,title:"\u4EBA\u5DE5\u5BA1\u6838",icon:"",redirect:""},{id:1876,parent_id:1872,path:"",name:"service:withdraw:config",component:"",menu_type:2,sort:0,title:"\u63D0\u73B0\u8BBE\u7F6E",icon:"",redirect:""},{id:1877,parent_id:1872,path:"",name:"service:withdraw:default",component:"",menu_type:2,sort:0,title:"\u9ED8\u8BA4\u89C4\u5219",icon:"",redirect:""},{id:1972,parent_id:120,path:"/withdrawdetailall",name:"withdrawdetailall",component:"../views/WithdrawDetailAll.vue",menu_type:1,sort:0,title:"\u63D0\u73B0\u8BB0\u5F55",icon:"",redirect:""},{id:1973,parent_id:1972,path:"",name:"service:withdrawdetailall:view",component:"",menu_type:2,sort:0,title:"\u67E5\u770B",icon:"",redirect:""},{id:1974,parent_id:1972,path:"",name:"service:withdrawdetailall:export",component:"",menu_type:2,sort:0,title:"\u5BFC\u51FA",icon:"",redirect:""},{id:1975,parent_id:1972,path:"",name:"service:withdrawdetailall:detail",component:"",menu_type:2,sort:0,title:"\u8BE6\u60C5",icon:"",redirect:""},{id:2072,parent_id:130,path:"/risk",name:"riskmanage",component:"../views/RiskTable.vue",menu_type:1,sort:0,title:"\u98CE\u9669\u63A7\u5236",icon:"",redirect:""},{id:2073,parent_id:2072,path:"",name:"risk:device",component:"",menu_type:2,sort:0,title:"\u8BBE\u5907\u767B\u5F55\u9650\u5236",icon:"",redirect:""},{id:2081,parent_id:2073,path:"",name:"risk:device:view",component:"",menu_type:2,sort:0,title:"\u67E5\u770B",icon:"",redirect:""},{id:2082,parent_id:2073,path:"",name:"risk:device:add",component:"",menu_type:2,sort:0,title:"\u6DFB\u52A0",icon:"",redirect:""},{id:2083,parent_id:2073,path:"",name:"risk:device:edit",component:"",menu_type:2,sort:0,title:"\u4FEE\u6539",icon:"",redirect:""},{id:2084,parent_id:2073,path:"",name:"risk:device:del",component:"",menu_type:2,sort:0,title:"\u5220\u9664",icon:"",redirect:""},{id:2085,parent_id:2073,path:"",name:"risk:device:default",component:"",menu_type:2,sort:0,title:"\u9ED8\u8BA4\u89C4\u5219",icon:"",redirect:""},{id:2090,parent_id:2072,path:"",name:"risk:weixin",component:"",menu_type:2,sort:0,title:"\u5FAE\u4FE1\u8D26\u53F7\u7ED1\u5B9A",icon:"",redirect:""},{id:2091,parent_id:2090,path:"",name:"risk:weixin:view",component:"",menu_type:2,sort:0,title:"\u67E5\u770B",icon:"",redirect:""},{id:2092,parent_id:2090,path:"",name:"risk:weixin:add",component:"",menu_type:2,sort:0,title:"\u6DFB\u52A0",icon:"",redirect:""},{id:2093,parent_id:2090,path:"",name:"risk:weixin:edit",component:"",menu_type:2,sort:0,title:"\u4FEE\u6539",icon:"",redirect:""},{id:2094,parent_id:2090,path:"",name:"risk:weixin:del",component:"",menu_type:2,sort:0,title:"\u5220\u9664",icon:"",redirect:""},{id:2095,parent_id:2090,path:"",name:"risk:weixin:default",component:"",menu_type:2,sort:0,title:"\u9ED8\u8BA4\u89C4\u5219",icon:"",redirect:""},{id:2100,parent_id:2072,path:"",name:"risk:realname",component:"",menu_type:2,sort:0,title:"\u5B9E\u540D\u8BA4\u8BC1&\u9632\u6C89\u8FF7",icon:"",redirect:""},{id:2101,parent_id:2100,path:"",name:"risk:realname:view",component:"",menu_type:2,sort:0,title:"\u67E5\u770B",icon:"",redirect:""},{id:2102,parent_id:2100,path:"",name:"risk:realname:add",component:"",menu_type:2,sort:0,title:"\u6DFB\u52A0",icon:"",redirect:""},{id:2103,parent_id:2100,path:"",name:"risk:realname:edit",component:"",menu_type:2,sort:0,title:"\u4FEE\u6539",icon:"",redirect:""},{id:2104,parent_id:2100,path:"",name:"risk:realname:del",component:"",menu_type:2,sort:0,title:"\u5220\u9664",icon:"",redirect:""},{id:2105,parent_id:2100,path:"",name:"risk:realname:default",component:"",menu_type:2,sort:0,title:"\u9ED8\u8BA4\u89C4\u5219",icon:"",redirect:""},{id:2110,parent_id:2072,path:"",name:"risk:bind",component:"",menu_type:2,sort:0,title:"\u624B\u673A\u7ED1\u5B9A",icon:"",redirect:""},{id:2111,parent_id:2110,path:"",name:"risk:bind:view",component:"",menu_type:2,sort:0,title:"\u67E5\u770B",icon:"",redirect:""},{id:2112,parent_id:2110,path:"",name:"risk:bind:add",component:"",menu_type:2,sort:0,title:"\u6DFB\u52A0",icon:"",redirect:""},{id:2113,parent_id:2110,path:"",name:"risk:bind:edit",component:"",menu_type:2,sort:0,title:"\u4FEE\u6539",icon:"",redirect:""},{id:2114,parent_id:2110,path:"",name:"risk:bind:del",component:"",menu_type:2,sort:0,title:"\u5220\u9664",icon:"",redirect:""},{id:2115,parent_id:2110,path:"",name:"risk:bind:default",component:"",menu_type:2,sort:0,title:"\u9ED8\u8BA4\u89C4\u5219",icon:"",redirect:""},{id:2120,parent_id:2072,path:"",name:"risk:agreement",component:"",menu_type:2,sort:0,title:"\u9690\u79C1\u534F\u8BAE",icon:"",redirect:""},{id:2121,parent_id:2120,path:"",name:"risk:agreement:view",component:"",menu_type:2,sort:0,title:"\u67E5\u770B",icon:"",redirect:""},{id:2122,parent_id:2120,path:"",name:"risk:agreement:add",component:"",menu_type:2,sort:0,title:"\u6DFB\u52A0",icon:"",redirect:""},{id:2123,parent_id:2120,path:"",name:"risk:agreement:edit",component:"",menu_type:2,sort:0,title:"\u4FEE\u6539",icon:"",redirect:""},{id:2124,parent_id:2120,path:"",name:"risk:agreement:del",component:"",menu_type:2,sort:0,title:"\u5220\u9664",icon:"",redirect:""},{id:2125,parent_id:2120,path:"",name:"risk:agreement:default",component:"",menu_type:2,sort:0,title:"\u9ED8\u8BA4\u89C4\u5219",icon:"",redirect:""},{id:2172,parent_id:130,path:"/keybehavior",name:"keybehavior",component:"../views/KeyBehavior.vue",menu_type:1,sort:0,title:"\u5173\u952E\u884C\u4E3A\u914D\u7F6E",icon:"",redirect:""},{id:2173,parent_id:2172,path:"",name:"risk:keybehavior:view",component:"",menu_type:2,sort:0,title:"\u67E5\u770B",icon:"",redirect:""},{id:2174,parent_id:2172,path:"",name:"risk:keybehavior:add",component:"",menu_type:2,sort:0,title:"\u6DFB\u52A0",icon:"",redirect:""},{id:2175,parent_id:2172,path:"",name:"risk:keybehavior:edit",component:"",menu_type:2,sort:0,title:"\u4FEE\u6539",icon:"",redirect:""},{id:2176,parent_id:2172,path:"",name:"risk:keybehavior:del",component:"",menu_type:2,sort:0,title:"\u5220\u9664",icon:"",redirect:""}],O={status:q,message:S,data:J},z={class:"crumbs"},E=c("\u6743\u9650\u7BA1\u7406"),F=c("\u6DFB\u52A0\u89D2\u8272"),K={class:"container"},W=c("\u53D6\u6D88"),G=c("\u4FDD\u5B58"),H={__name:"PrivilegeAdd",setup(I){const l=N(),_=s(!0),i=T({name:"",remark:"",menus:[]}),u=s(),h=s([]);console.log(w(O));const b=()=>{U().then(e=>{e.status==200&&(console.log(e),_.value=!1,h.value=w(e))})},f=()=>{j(i).then(e=>{e.status==200?(a.success("\u6DFB\u52A0\u6210\u529F"),l.push({name:"privilegemanage"})):a.error("\u6DFB\u52A0\u5931\u8D25\uFF0C"+e.message)}).catch(e=>{a.error("\u6DFB\u52A0\u5931\u8D25\uFF0C"+e)})},g=()=>{let e=JSON.parse(JSON.stringify(u.value.getCheckedNodes(!1,!0)));e=e.map(d=>d.id);const o=e.join(",");if(i.menus=o,i.menus==0){a.error("\u8BF7\u9009\u62E9\u89D2\u8272\u6743\u9650");return}else if(i.name==""){a.error("\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0");return}else console.log(i),f()},x=()=>{l.go(-1)};return b(),(e,o)=>{const d=r("el-breadcrumb-item"),V=r("el-breadcrumb"),y=r("el-input"),p=r("el-form-item"),B=r("el-tree"),v=r("el-button"),C=r("el-form"),D=A("loading");return R(),M("div",null,[k("div",z,[t(V,{separator:"/"},{default:n(()=>[t(d,null,{default:n(()=>[E]),_:1}),t(d,null,{default:n(()=>[F]),_:1})]),_:1})]),k("div",K,[t(C,{model:i,"label-width":"100px",style:{width:"400px"}},{default:n(()=>[t(p,{prop:"name",label:"\u89D2\u8272\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",trigger:"blur"}]},{default:n(()=>[t(y,{modelValue:i.name,"onUpdate:modelValue":o[0]||(o[0]=m=>i.name=m),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),t(p,{prop:"remark",label:"\u5907\u6CE8/\u63CF\u8FF0"},{default:n(()=>[t(y,{modelValue:i.remark,"onUpdate:modelValue":o[1]||(o[1]=m=>i.remark=m),placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u6635\u79F0"},null,8,["modelValue"])]),_:1}),t(p,{prop:"menus",label:"\u89D2\u8272\u6743\u9650",rules:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"blur"}]},{default:n(()=>[P(t(B,{ref_key:"treeRef",ref:u,data:h.value,"show-checkbox":"","node-key":"id"},null,8,["data"]),[[D,_.value]])]),_:1}),t(p,null,{default:n(()=>[t(v,{onClick:x},{default:n(()=>[W]),_:1}),t(v,{type:"primary",onClick:g},{default:n(()=>[G]),_:1})]),_:1})]),_:1},8,["model"])])])}}},Z=L(H,[["__file","/Users/apple/Desktop/project-b/relationship.b/src/views/privilegeManagement/PrivilegeAdd.vue"]]);export{Z as default};