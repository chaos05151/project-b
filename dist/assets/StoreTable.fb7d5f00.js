import{_ as Te,C as je,u as Ee,r as v,D as y,w as Z,e as p,g as Ne,a as _,c as x,t as C,j as l,k as a,y as j,q as Ye,p as g,h,f as qe,b as F,F as B,m as P,z as i,v as $,l as m,V as Me,a8 as ee}from"./index.3fee5d13.js";import{f as te,e as Re,a as le,d as ze}from"./shop.899b24a0.js";import{s as q}from"./showButton.83421764.js";const Fe={class:"crumbs"},He=i("\u98CE\u63A7\u7CFB\u7EDF"),Ie=i("\u5546\u5E97\u5BA1\u6838\u8BBE\u7F6E"),Je={class:"container"},Oe=i("\u67E5\u8BE2"),Ge=i("\u91CD\u7F6E"),Ae={class:"buttons"},Ke=i("\u9ED8\u8BA4\u914D\u7F6E"),Qe=i("\u5B9E\u540D\u8BA4\u8BC1/\u9632\u6C89\u8FF7"),We=i("\u65B0\u589E\u9879\u76EE"),Xe=i("\u7F16\u8F91"),Ze=i("\u5220\u9664"),et={class:"dialog-footer"},tt=i("\u53D6\u6D88"),lt=i(" \u63D0\u4EA4 "),at={class:"dialog-footer"},ot=i("\u53D6\u6D88"),nt=i(" \u63D0\u4EA4 "),st={class:"dialog-footer"},ut=i("\u53D6\u6D88"),dt=i(" \u63D0\u4EA4 "),it={class:"pagination"},rt={__name:"StoreTable",setup(_t){const ae=q("risk:storetable:view"),oe=q("risk:storetable:add"),ne=q("risk:storetable:edit"),se=q("risk:storetable:del"),ue=je(),E=Ee(),H=v([]),M=v([]),I=v([]),J=v([]),V=y({productList:[],channelList:[],version_bList:[]}),de=y({productList:[],channelList:[],version_bList:[]}),c=y({main_product_id:E.mainProductId,product_id:"",channel:"",page_index:1,page_size:10,is_default_rules:0}),O=v(1),D=v(!1),T=v(!1),L=v(!1),G=v(!0),b=y({fake_page_status:1,natural_flow_status:1,effective_num:0,is_default_rules:1}),n=y({main_product_id:"",product_id:"",channel:"",version_b:"",main_product_name:"",product_name:"",fake_page_status:1,natural_flow_status:1,effective_num:0,is_default_rules:0}),ie=v([]);v([]);const s=y({id:"",main_product_id:"",product_id:"",channel:"",version_b:"",main_product_name:"",product_name:"",fake_page_status:1,natural_flow_status:1,effective_num:0,is_default_rules:0}),A=v(),re=y({main_product_id:[{required:!0,message:"\u8BF7\u9009\u62E9\u9879\u76EE",trigger:"change"}],product_id:[{required:!0,message:"\u8BF7\u9009\u62E9\u5E94\u7528",trigger:"change"}],channel:[{required:!0,message:"\u8BF7\u9009\u62E9\u6E20\u9053",trigger:"change"}],version_b:[{required:!0,message:"\u8BF7\u9009\u62E9\u7248\u672C",trigger:"change"}]}),k=()=>{te(c).then(o=>{o.status==200&&(G.value=!1,console.log(o.data.lists),O.value=o.data.total_count,H.value=o.data.lists)})},K=()=>{te({is_default_rules:1}).then(e=>{e.status==200&&(console.log(e.data.lists),b.fake_page_status=e.data.lists[0].fake_page_status,b.natural_flow_status=e.data.lists[0].natural_flow_status,b.effective_num=e.data.lists[0].effective_num)})},_e=o=>{le(o).then(e=>{e.status==200?(m.success("\u6DFB\u52A0\u6210\u529F"),k()):m.error("\u6DFB\u52A0\u5931\u8D25,"+e.message)}).catch(e=>{m.error(e+"\u6DFB\u52A0\u5931\u8D25")})},ce=()=>{let o={fake_page_status:s.fake_page_status,natural_flow_status:s.natural_flow_status,effective_num:s.effective_num},e=s.id;console.log(e,o),Re(e,o).then(u=>{u.status==200?(m.success("\u7F16\u8F91\u6210\u529F"),L.value=!1,k()):(m.error("\u7F16\u8F91\u5931\u8D25,"+u.message),L.value=!1)}).catch(u=>{m.error(u+"\u7F16\u8F91\u5931\u8D25")})},pe=o=>{le(o).then(e=>{e.status==200?(m.success("\u9ED8\u8BA4\u89C4\u5219\u6DFB\u52A0\u6210\u529F"),K()):m.error("\u9ED8\u8BA4\u89C4\u5219\u6DFB\u52A0\u5931\u8D25,"+e.message)}).catch(e=>{m.error(e+"\u6DFB\u52A0\u5931\u8D25")})},fe=o=>{ze(o).then(e=>{e.status==200?(m.success("\u5220\u9664\u6210\u529F"),k()):m.error("\u5220\u9664\u5931\u8D25,"+e.message)}).catch(e=>{m.error(e+"\u5220\u9664\u5931\u8D25")})},me=o=>{let e=ee(o);console.log(e),s.id=e.id,s.main_product_id=e.main_product_id,s.main_product_name=e.main_product_name,s.product_id=e.product_id,s.product_name=e.product_name,s.channel=e.channel,s.version_b=e.version_b,s.fake_page_status=e.fake_page_status,s.natural_flow_status=e.natural_flow_status,s.effective_num=e.effective_num},ve=(o,e)=>{switch(o){case"add":n.product_id="",n.channel="",n.version_b="",F({main_product_id:e}).then(r=>{r.status==200&&(console.log(r.data),n.main_product_name=r.data[0].main_product_name,V.productList=r.data)}).catch(r=>console.log(r));break;case"eidtor":s.product_id="",F({main_product_id:e}).then(r=>{r.status==200&&(de.productList=r.data)}).catch(r=>console.log(r));break}},be=o=>{n.channel="",n.version_b="";const e=JSON.parse(JSON.stringify(M.value));console.log(e),e.forEach(u=>{u.value==o&&(n.product_name=u.label_name,V.channelList=u.children,console.log(u.children))})},ge=o=>{n.version_b="";let e=JSON.parse(JSON.stringify(V.channelList));console.log(o,e),e.forEach(u=>{u.value==o&&(V.version_bList=u.children)})},he=()=>{console.log(b),pe(b),D.value=!1},Q=()=>{n.main_product_id="",n.product_id="",n.channel="",n.version_b="",n.fake_page_status=1,n.natural_flow_status=1,ie.value=null,n.effective_num=0},we=o=>{o.validate((e,u)=>{e?(console.log(n),T.value=!1,_e(n),Q(),D.value=!1):console.log("error submit!",u)})},Ve=o=>{console.log(o),L.value=!0,me(o)},ke=o=>{console.log(o),Me.confirm("\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F","\u26A0\uFE0F\u8B66\u544A",{confirmButtonText:"\u662F",cancelButtonText:"\u5426",type:"warning"}).then(()=>{fe(o)}).catch(()=>{m({type:"info",message:"\u53D6\u6D88\u64CD\u4F5C"})})},ye=()=>{qe().then(o=>{o.status==200&&(M.value=o.data)})},xe=o=>{c.page_index=o,k()},W=o=>{F({main_product_id:o}).then(u=>{u.status==200&&(J.value=u.data)})},Ce=o=>{c.channel="",ee(M.value).forEach(u=>{String(o)==u.value&&(console.log(u.children),I.value=u.children)})},De=o=>{ue.push({name:o})},Le=()=>{c.product_id="",c.channel="",k()};return Z(()=>E.mainProductId,(o,e)=>{console.log(o,e),c.main_product_id=o,c.product_id="",W(o)}),Z(()=>c.product_id,(o,e)=>{o==""&&(c.channel="")}),k(),K(),ye(),W(E.mainProductId),(o,e)=>{const u=p("el-breadcrumb-item"),X=p("el-breadcrumb"),r=p("el-option"),U=p("el-select"),d=p("el-form-item"),N=p("el-col"),f=p("el-button"),Ue=p("el-row"),Y=p("el-form"),w=p("el-table-column"),Se=p("el-table"),S=p("el-switch"),R=p("el-input-number"),z=p("el-dialog"),Be=p("el-pagination"),Pe=Ne("loading");return _(),x("div",null,[C("div",Fe,[l(X,{separator:"/"},{default:a(()=>[l(u,null,{default:a(()=>[He]),_:1}),l(u,null,{default:a(()=>[Ie]),_:1})]),_:1})]),C("div",Je,[l(Y,null,{default:a(()=>[l(Ue,{gutter:20},{default:a(()=>[l(N,{span:"4"},{default:a(()=>[l(d,{label:"\u5E94\u7528\u9009\u62E9"},{default:a(()=>[l(U,{style:{width:"150px"},modelValue:c.product_id,"onUpdate:modelValue":e[0]||(e[0]=t=>c.product_id=t),onChange:Ce},{default:a(()=>[l(r,{value:"",label:"\u5168\u90E8"}),(_(!0),x(B,null,P(J.value,t=>(_(),g(r,{key:t.product_id,value:t.product_id,label:t.product_name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(N,{span:"4"},{default:a(()=>[l(d,{label:"\u6E20\u9053\u9009\u62E9"},{default:a(()=>[l(U,{style:{width:"150px"},modelValue:c.channel,"onUpdate:modelValue":e[1]||(e[1]=t=>c.channel=t)},{default:a(()=>[l(r,{value:"",label:"\u5168\u90E8"}),(_(!0),x(B,null,P(I.value,t=>(_(),g(r,{value:t.value,label:t.label_name,key:t.value},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(N,{span:"4"},{default:a(()=>[l(d,null,{default:a(()=>[l(f,{type:"primary",onClick:k},{default:a(()=>[Oe]),_:1})]),_:1})]),_:1}),l(N,{span:"4"},{default:a(()=>[l(d,null,{default:a(()=>[l(f,{type:"info",onClick:Le},{default:a(()=>[Ge]),_:1})]),_:1})]),_:1})]),_:1}),C("div",Ae,[l(f,{onClick:e[2]||(e[2]=t=>D.value=!0)},{default:a(()=>[Ke]),_:1}),l(f,{type:"primary",onClick:e[3]||(e[3]=t=>De("auditsettings"))},{default:a(()=>[Qe]),_:1}),j(oe)?(_(),g(f,{key:0,type:"primary",onClick:e[4]||(e[4]=t=>T.value=!0)},{default:a(()=>[We]),_:1})):h("v-if",!0)])]),_:1}),j(ae)?Ye((_(),g(Se,{key:0,data:H.value,border:""},{default:a(()=>[l(w,{prop:"id",label:"\u5E8F\u53F7"}),l(w,{prop:"main_product_name",label:"\u9879\u76EE"}),l(w,{prop:"product_name",label:"\u5E94\u7528"}),l(w,{prop:"channel",label:"\u6E20\u9053"}),l(w,{prop:"version_b",label:"\u7248\u672C"}),l(w,{label:"\u5F00\u542F\u5047\u9875\u9762"},{default:a(t=>[i($(t.row.fake_page_status==1?"\u5173\u95ED":"\u5F00\u542F"),1)]),_:1}),l(w,{label:"\u81EA\u7136\u91CF"},{default:a(t=>[i($(t.row.natural_flow_status==1?"\u5173\u95ED":"\u5F00\u542F"),1)]),_:1}),l(w,{prop:"effective_num",label:"\u6307\u5B9A\u751F\u6548\u4EBA\u6570"}),h(` <el-table-column prop="effective_start" label="\u751F\u6548\u65E5\u671F">
                    <template #default="scope">{{scope.row.effective_start+" - "+scope.row.effective_end}}</template>
                </el-table-column> `),l(w,{label:"\u64CD\u4F5C"},{default:a(t=>[j(ne)?(_(),g(f,{key:0,type:"text",icon:"el-icon-edit",onClick:$e=>Ve(t.row)},{default:a(()=>[Xe]),_:2},1032,["onClick"])):h("v-if",!0),j(se)?(_(),g(f,{key:1,style:{color:"red"},type:"text",icon:"el-icon-delete",onClick:$e=>ke(t.row.id)},{default:a(()=>[Ze]),_:2},1032,["onClick"])):h("v-if",!0)]),_:1})]),_:1},8,["data"])),[[Pe,G.value]]):h("v-if",!0),h(" \u9ED8\u8BA4\u914D\u7F6E "),l(z,{modelValue:D.value,"onUpdate:modelValue":e[9]||(e[9]=t=>D.value=t),title:"\u9ED8\u8BA4\u914D\u7F6E",width:"30%"},{footer:a(()=>[C("span",et,[l(f,{onClick:e[8]||(e[8]=t=>D.value=!1)},{default:a(()=>[tt]),_:1}),l(f,{type:"primary",onClick:he},{default:a(()=>[lt]),_:1})])]),default:a(()=>[l(Y,null,{default:a(()=>[l(d,{"label-width":"100px",label:"\u5F00\u542F\u5047\u9875\u9762"},{default:a(()=>[l(S,{modelValue:b.fake_page_status,"onUpdate:modelValue":e[5]||(e[5]=t=>b.fake_page_status=t),"active-value":2,"inactive-value":1},null,8,["modelValue"])]),_:1}),l(d,{"label-width":"100px",label:"\u81EA\u7136\u91CF"},{default:a(()=>[l(S,{modelValue:b.natural_flow_status,"onUpdate:modelValue":e[6]||(e[6]=t=>b.natural_flow_status=t),"active-value":2,"inactive-value":1},null,8,["modelValue"])]),_:1}),l(d,{"label-width":"100px",label:"\u6307\u5B9A\u751F\u6548\u4EBA\u6570"},{default:a(()=>[l(R,{controls:!1,style:{width:"200px"},modelValue:b.effective_num,"onUpdate:modelValue":e[7]||(e[7]=t=>b.effective_num=t)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),h(" \u65B0\u589E\u89C4\u5219 "),l(z,{modelValue:T.value,"onUpdate:modelValue":e[20]||(e[20]=t=>T.value=t),title:"\u65B0\u589E\u9879\u76EE",onClose:Q,width:"40%"},{footer:a(()=>[C("span",at,[l(f,{onClick:e[18]||(e[18]=t=>T.value=!1)},{default:a(()=>[ot]),_:1}),l(f,{type:"primary",onClick:e[19]||(e[19]=t=>we(A.value))},{default:a(()=>[nt]),_:1})])]),default:a(()=>[l(Y,{rules:re,ref_key:"ruleFormRef",ref:A,model:n},{default:a(()=>[l(d,{"label-width":"100px",prop:"main_product_id",label:"\u9009\u62E9\u9879\u76EE"},{default:a(()=>[l(U,{modelValue:n.main_product_id,"onUpdate:modelValue":e[10]||(e[10]=t=>n.main_product_id=t),style:{width:"200px"},onChange:e[11]||(e[11]=t=>ve("add",n.main_product_id))},{default:a(()=>[(_(!0),x(B,null,P(j(E).mainProductList,t=>(_(),g(r,{value:t.id,key:t.id,label:t.main_product_name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(d,{"label-width":"100px",prop:"product_id",label:"\u9009\u62E9\u5E94\u7528"},{default:a(()=>[l(U,{modelValue:n.product_id,"onUpdate:modelValue":e[12]||(e[12]=t=>n.product_id=t),style:{width:"200px"},onChange:be},{default:a(()=>[(_(!0),x(B,null,P(V.productList,t=>(_(),g(r,{value:t.product_id,key:t.product_id,label:t.product_name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(d,{"label-width":"100px",prop:"channel",label:"\u6E20\u9053\u9009\u62E9"},{default:a(()=>[l(U,{modelValue:n.channel,"onUpdate:modelValue":e[13]||(e[13]=t=>n.channel=t),style:{width:"200px"},onChange:ge},{default:a(()=>[(_(!0),x(B,null,P(V.channelList,t=>(_(),g(r,{value:t.value,key:t.id,label:t.label_name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(d,{"label-width":"100px",prop:"version_b",label:"\u7248\u672C\u9009\u62E9"},{default:a(()=>[l(U,{modelValue:n.version_b,"onUpdate:modelValue":e[14]||(e[14]=t=>n.version_b=t),style:{width:"200px"}},{default:a(()=>[(_(!0),x(B,null,P(V.version_bList,t=>(_(),g(r,{value:t.value,key:t.id,label:t.label_name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(d,{"label-width":"100px",label:"\u5F00\u542F\u5047\u9875\u9762"},{default:a(()=>[l(S,{modelValue:n.fake_page_status,"onUpdate:modelValue":e[15]||(e[15]=t=>n.fake_page_status=t),"active-value":2,"inactive-value":1},null,8,["modelValue"])]),_:1}),l(d,{"label-width":"100px",label:"\u81EA\u7136\u91CF"},{default:a(()=>[l(S,{modelValue:n.natural_flow_status,"onUpdate:modelValue":e[16]||(e[16]=t=>n.natural_flow_status=t),"active-value":2,"inactive-value":1},null,8,["modelValue"])]),_:1}),h(` <el-form-item label-width="100px" label="\u6307\u5B9A\u751F\u6548\u65E5\u671F">
                        <el-date-picker
                        v-model="addDate"
                        type="datetimerange"
                        range-separator="to"
                        start-placeholder="Start date"
                        end-placeholder="End date"
                        value-format="YYYY-MM-DD HH:mm:ss"
                        @change="dealDate"
                        />
                    </el-form-item> `),l(d,{"label-width":"100px",label:"\u6307\u5B9A\u751F\u6548\u4EBA\u6570"},{default:a(()=>[l(R,{controls:!1,modelValue:n.effective_num,"onUpdate:modelValue":e[17]||(e[17]=t=>n.effective_num=t),style:{width:"200px"}},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1},8,["modelValue"]),h(" \u7F16\u8F91\u9879\u76EE "),l(z,{modelValue:L.value,"onUpdate:modelValue":e[25]||(e[25]=t=>L.value=t),title:"\u7F16\u8F91\u9879\u76EE",width:"40%"},{footer:a(()=>[C("span",st,[l(f,{onClick:e[24]||(e[24]=t=>L.value=!1)},{default:a(()=>[ut]),_:1}),l(f,{type:"primary",onClick:ce},{default:a(()=>[dt]),_:1})])]),default:a(()=>[l(Y,null,{default:a(()=>[l(d,{"label-width":"100px",label:"\u9879\u76EE"},{default:a(()=>[i($(s.main_product_name),1)]),_:1}),l(d,{"label-width":"100px",label:"\u5E94\u7528"},{default:a(()=>[i($(s.product_name),1)]),_:1}),l(d,{"label-width":"100px",label:"\u6E20\u9053"},{default:a(()=>[i($(s.channel),1)]),_:1}),l(d,{"label-width":"100px",label:"\u7248\u672C"},{default:a(()=>[i($(s.version_b),1)]),_:1}),l(d,{"label-width":"100px",label:"\u5F00\u542F\u5047\u9875\u9762"},{default:a(()=>[l(S,{modelValue:s.fake_page_status,"onUpdate:modelValue":e[21]||(e[21]=t=>s.fake_page_status=t),"active-value":2,"inactive-value":1},null,8,["modelValue"])]),_:1}),l(d,{"label-width":"100px",label:"\u81EA\u7136\u91CF"},{default:a(()=>[l(S,{modelValue:s.natural_flow_status,"onUpdate:modelValue":e[22]||(e[22]=t=>s.natural_flow_status=t),"active-value":2,"inactive-value":1},null,8,["modelValue"])]),_:1}),h(` <el-form-item label-width="100px" label="\u6307\u5B9A\u751F\u6548\u65E5\u671F">
                        <el-date-picker
                        v-model="editorDate"
                        type="datetimerange"
                        range-separator="to"
                        start-placeholder="Start date"
                        end-placeholder="End date"
                        value-format="YYYY-MM-DD HH:mm:ss"
                        @change="dealDateEidtor"
                        />
                    </el-form-item> `),l(d,{"label-width":"100px",label:"\u6307\u5B9A\u751F\u6548\u4EBA\u6570"},{default:a(()=>[l(R,{controls:!1,modelValue:s.effective_num,"onUpdate:modelValue":e[23]||(e[23]=t=>s.effective_num=t),style:{width:"200px"},placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),C("div",it,[l(Be,{background:"",layout:"total, prev, pager, next","current-page":c.page_index,"page-size":c.page_size,total:O.value,onCurrentChange:xe},null,8,["current-page","page-size","total"])])])])}}},mt=Te(rt,[["__scopeId","data-v-f95def86"],["__file","/Users/apple/Desktop/project-b/relationship.b/src/views/storeAudits/StoreTable.vue"]]);export{mt as default};