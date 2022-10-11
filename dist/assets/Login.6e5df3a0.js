import{j as commonjsGlobal,M as useRouterStore,T as useSidebarStore,_ as _export_sfc,u as useRouter$1,f as reactive,g as ref,U as useTagsStore,r as resolveComponent,o as openBlock,c as createElementBlock,a as createBaseVNode,b as createVNode,w as withCtx,E as _Message,V as withKeys,p as pushScopeId,d as popScopeId,e as createTextVNode}from"./index.2c638c17.js";import{l as loginAccount}from"./privilelge.cc9ece5b.js";import"./request.644f0e68.js";var md5$1={exports:{}};/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */(function(module){(function(){var ERROR="input is invalid type",WINDOW=typeof window=="object",root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&typeof self=="object",NODE_JS=!root.JS_MD5_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;NODE_JS?root=commonjsGlobal:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&!0&&module.exports,ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}(root.JS_MD5_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"}),ARRAY_BUFFER&&(root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});var createOutputMethod=function(e){return function(r){return new Md5(!0).update(r)[e]()}},createMethod=function(){var e=createOutputMethod("hex");NODE_JS&&(e=nodeWrap(e)),e.create=function(){return new Md5},e.update=function(t){return e.create().update(t)};for(var r=0;r<OUTPUT_TYPES.length;++r){var i=OUTPUT_TYPES[r];e[i]=createOutputMethod(i)}return e},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(e){if(typeof e=="string")return crypto.createHash("md5").update(e,"utf8").digest("hex");if(e==null)throw ERROR;return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||ArrayBuffer.isView(e)||e.constructor===Buffer?crypto.createHash("md5").update(new Buffer(e)).digest("hex"):method(e)};return nodeMethod};function Md5(e){if(e)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var r=new ArrayBuffer(68);this.buffer8=new Uint8Array(r),this.blocks=new Uint32Array(r)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(e){if(!this.finalized){var r,i=typeof e;if(i!=="string"){if(i==="object"){if(e===null)throw ERROR;if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(e)))throw ERROR}else throw ERROR;r=!0}for(var t,n=0,s,o=e.length,a=this.blocks,d=this.buffer8;n<o;){if(this.hashed&&(this.hashed=!1,a[0]=a[16],a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),r)if(ARRAY_BUFFER)for(s=this.start;n<o&&s<64;++n)d[s++]=e[n];else for(s=this.start;n<o&&s<64;++n)a[s>>2]|=e[n]<<SHIFT[s++&3];else if(ARRAY_BUFFER)for(s=this.start;n<o&&s<64;++n)t=e.charCodeAt(n),t<128?d[s++]=t:t<2048?(d[s++]=192|t>>6,d[s++]=128|t&63):t<55296||t>=57344?(d[s++]=224|t>>12,d[s++]=128|t>>6&63,d[s++]=128|t&63):(t=65536+((t&1023)<<10|e.charCodeAt(++n)&1023),d[s++]=240|t>>18,d[s++]=128|t>>12&63,d[s++]=128|t>>6&63,d[s++]=128|t&63);else for(s=this.start;n<o&&s<64;++n)t=e.charCodeAt(n),t<128?a[s>>2]|=t<<SHIFT[s++&3]:t<2048?(a[s>>2]|=(192|t>>6)<<SHIFT[s++&3],a[s>>2]|=(128|t&63)<<SHIFT[s++&3]):t<55296||t>=57344?(a[s>>2]|=(224|t>>12)<<SHIFT[s++&3],a[s>>2]|=(128|t>>6&63)<<SHIFT[s++&3],a[s>>2]|=(128|t&63)<<SHIFT[s++&3]):(t=65536+((t&1023)<<10|e.charCodeAt(++n)&1023),a[s>>2]|=(240|t>>18)<<SHIFT[s++&3],a[s>>2]|=(128|t>>12&63)<<SHIFT[s++&3],a[s>>2]|=(128|t>>6&63)<<SHIFT[s++&3],a[s>>2]|=(128|t&63)<<SHIFT[s++&3]);this.lastByteIndex=s,this.bytes+=s-this.start,s>=64?(this.start=s-64,this.hash(),this.hashed=!0):this.start=s}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,r=this.lastByteIndex;e[r>>2]|=EXTRA[r&3],r>=56&&(this.hashed||this.hash(),e[0]=e[16],e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.bytes<<3,e[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var e,r,i,t,n,s,o=this.blocks;this.first?(e=o[0]-680876937,e=(e<<7|e>>>25)-271733879<<0,t=(-1732584194^e&2004318071)+o[1]-117830708,t=(t<<12|t>>>20)+e<<0,i=(-271733879^t&(e^-271733879))+o[2]-1126478375,i=(i<<17|i>>>15)+t<<0,r=(e^i&(t^e))+o[3]-1316259209,r=(r<<22|r>>>10)+i<<0):(e=this.h0,r=this.h1,i=this.h2,t=this.h3,e+=(t^r&(i^t))+o[0]-680876936,e=(e<<7|e>>>25)+r<<0,t+=(i^e&(r^i))+o[1]-389564586,t=(t<<12|t>>>20)+e<<0,i+=(r^t&(e^r))+o[2]+606105819,i=(i<<17|i>>>15)+t<<0,r+=(e^i&(t^e))+o[3]-1044525330,r=(r<<22|r>>>10)+i<<0),e+=(t^r&(i^t))+o[4]-176418897,e=(e<<7|e>>>25)+r<<0,t+=(i^e&(r^i))+o[5]+1200080426,t=(t<<12|t>>>20)+e<<0,i+=(r^t&(e^r))+o[6]-1473231341,i=(i<<17|i>>>15)+t<<0,r+=(e^i&(t^e))+o[7]-45705983,r=(r<<22|r>>>10)+i<<0,e+=(t^r&(i^t))+o[8]+1770035416,e=(e<<7|e>>>25)+r<<0,t+=(i^e&(r^i))+o[9]-1958414417,t=(t<<12|t>>>20)+e<<0,i+=(r^t&(e^r))+o[10]-42063,i=(i<<17|i>>>15)+t<<0,r+=(e^i&(t^e))+o[11]-1990404162,r=(r<<22|r>>>10)+i<<0,e+=(t^r&(i^t))+o[12]+1804603682,e=(e<<7|e>>>25)+r<<0,t+=(i^e&(r^i))+o[13]-40341101,t=(t<<12|t>>>20)+e<<0,i+=(r^t&(e^r))+o[14]-1502002290,i=(i<<17|i>>>15)+t<<0,r+=(e^i&(t^e))+o[15]+1236535329,r=(r<<22|r>>>10)+i<<0,e+=(i^t&(r^i))+o[1]-165796510,e=(e<<5|e>>>27)+r<<0,t+=(r^i&(e^r))+o[6]-1069501632,t=(t<<9|t>>>23)+e<<0,i+=(e^r&(t^e))+o[11]+643717713,i=(i<<14|i>>>18)+t<<0,r+=(t^e&(i^t))+o[0]-373897302,r=(r<<20|r>>>12)+i<<0,e+=(i^t&(r^i))+o[5]-701558691,e=(e<<5|e>>>27)+r<<0,t+=(r^i&(e^r))+o[10]+38016083,t=(t<<9|t>>>23)+e<<0,i+=(e^r&(t^e))+o[15]-660478335,i=(i<<14|i>>>18)+t<<0,r+=(t^e&(i^t))+o[4]-405537848,r=(r<<20|r>>>12)+i<<0,e+=(i^t&(r^i))+o[9]+568446438,e=(e<<5|e>>>27)+r<<0,t+=(r^i&(e^r))+o[14]-1019803690,t=(t<<9|t>>>23)+e<<0,i+=(e^r&(t^e))+o[3]-187363961,i=(i<<14|i>>>18)+t<<0,r+=(t^e&(i^t))+o[8]+1163531501,r=(r<<20|r>>>12)+i<<0,e+=(i^t&(r^i))+o[13]-1444681467,e=(e<<5|e>>>27)+r<<0,t+=(r^i&(e^r))+o[2]-51403784,t=(t<<9|t>>>23)+e<<0,i+=(e^r&(t^e))+o[7]+1735328473,i=(i<<14|i>>>18)+t<<0,r+=(t^e&(i^t))+o[12]-1926607734,r=(r<<20|r>>>12)+i<<0,n=r^i,e+=(n^t)+o[5]-378558,e=(e<<4|e>>>28)+r<<0,t+=(n^e)+o[8]-2022574463,t=(t<<11|t>>>21)+e<<0,s=t^e,i+=(s^r)+o[11]+1839030562,i=(i<<16|i>>>16)+t<<0,r+=(s^i)+o[14]-35309556,r=(r<<23|r>>>9)+i<<0,n=r^i,e+=(n^t)+o[1]-1530992060,e=(e<<4|e>>>28)+r<<0,t+=(n^e)+o[4]+1272893353,t=(t<<11|t>>>21)+e<<0,s=t^e,i+=(s^r)+o[7]-155497632,i=(i<<16|i>>>16)+t<<0,r+=(s^i)+o[10]-1094730640,r=(r<<23|r>>>9)+i<<0,n=r^i,e+=(n^t)+o[13]+681279174,e=(e<<4|e>>>28)+r<<0,t+=(n^e)+o[0]-358537222,t=(t<<11|t>>>21)+e<<0,s=t^e,i+=(s^r)+o[3]-722521979,i=(i<<16|i>>>16)+t<<0,r+=(s^i)+o[6]+76029189,r=(r<<23|r>>>9)+i<<0,n=r^i,e+=(n^t)+o[9]-640364487,e=(e<<4|e>>>28)+r<<0,t+=(n^e)+o[12]-421815835,t=(t<<11|t>>>21)+e<<0,s=t^e,i+=(s^r)+o[15]+530742520,i=(i<<16|i>>>16)+t<<0,r+=(s^i)+o[2]-995338651,r=(r<<23|r>>>9)+i<<0,e+=(i^(r|~t))+o[0]-198630844,e=(e<<6|e>>>26)+r<<0,t+=(r^(e|~i))+o[7]+1126891415,t=(t<<10|t>>>22)+e<<0,i+=(e^(t|~r))+o[14]-1416354905,i=(i<<15|i>>>17)+t<<0,r+=(t^(i|~e))+o[5]-57434055,r=(r<<21|r>>>11)+i<<0,e+=(i^(r|~t))+o[12]+1700485571,e=(e<<6|e>>>26)+r<<0,t+=(r^(e|~i))+o[3]-1894986606,t=(t<<10|t>>>22)+e<<0,i+=(e^(t|~r))+o[10]-1051523,i=(i<<15|i>>>17)+t<<0,r+=(t^(i|~e))+o[1]-2054922799,r=(r<<21|r>>>11)+i<<0,e+=(i^(r|~t))+o[8]+1873313359,e=(e<<6|e>>>26)+r<<0,t+=(r^(e|~i))+o[15]-30611744,t=(t<<10|t>>>22)+e<<0,i+=(e^(t|~r))+o[6]-1560198380,i=(i<<15|i>>>17)+t<<0,r+=(t^(i|~e))+o[13]+1309151649,r=(r<<21|r>>>11)+i<<0,e+=(i^(r|~t))+o[4]-145523070,e=(e<<6|e>>>26)+r<<0,t+=(r^(e|~i))+o[11]-1120210379,t=(t<<10|t>>>22)+e<<0,i+=(e^(t|~r))+o[2]+718787259,i=(i<<15|i>>>17)+t<<0,r+=(t^(i|~e))+o[9]-343485551,r=(r<<21|r>>>11)+i<<0,this.first?(this.h0=e+1732584193<<0,this.h1=r-271733879<<0,this.h2=i-1732584194<<0,this.h3=t+271733878<<0,this.first=!1):(this.h0=this.h0+e<<0,this.h1=this.h1+r<<0,this.h2=this.h2+i<<0,this.h3=this.h3+t<<0)},Md5.prototype.hex=function(){this.finalize();var e=this.h0,r=this.h1,i=this.h2,t=this.h3;return HEX_CHARS[e>>4&15]+HEX_CHARS[e&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[r&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[i&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[t&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var e=this.h0,r=this.h1,i=this.h2,t=this.h3;return[e&255,e>>8&255,e>>16&255,e>>24&255,r&255,r>>8&255,r>>16&255,r>>24&255,i&255,i>>8&255,i>>16&255,i>>24&255,t&255,t>>8&255,t>>16&255,t>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(16),r=new Uint32Array(e);return r[0]=this.h0,r[1]=this.h1,r[2]=this.h2,r[3]=this.h3,e},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var e,r,i,t="",n=this.array(),s=0;s<15;)e=n[s++],r=n[s++],i=n[s++],t+=BASE64_ENCODE_CHAR[e>>>2]+BASE64_ENCODE_CHAR[(e<<4|r>>>4)&63]+BASE64_ENCODE_CHAR[(r<<2|i>>>6)&63]+BASE64_ENCODE_CHAR[i&63];return e=n[s],t+=BASE64_ENCODE_CHAR[e>>>2]+BASE64_ENCODE_CHAR[e<<4&63]+"==",t};var exports=createMethod();COMMON_JS?module.exports=exports:root.md5=exports})()})(md5$1);const md5=md5$1.exports,useRouter=useRouterStore(),getPrivilege=e=>{useRouter.setButton(e.button);let r=[],i=[];const t=[];e.menu.map(o=>{o.parent_id!=0&&t.push({path:o.path,name:o.name,meta:{title:o.title},component:o.component})}),e.menu.map(o=>{o.parent_id==0?r.push({...o,children:[]}):i.push(o)}),r.map(o=>{i.map(a=>{a.parent_id==o.id&&o.children.push(a)})}),console.log(r,t),useRouter.setRouter(t);const n=o=>(o=o.map(a=>({index:a.path,title:a.title})),o),s=r.map((o,a)=>({icon:o.icon,index:a,title:o.title,subs:n(o.children)}));return console.log(s),s},data={menu:[{id:100,parent_id:0,path:"/product",name:"product",component:"Layout",menu_type:1,sort:0,title:"\u4EA7\u54C1\u7BA1\u7406",icon:"el-icon-lx-cascades",redirect:""},{id:110,parent_id:0,path:"/user",name:"user",component:"Layout",menu_type:1,sort:0,title:"\u7528\u6237\u7BA1\u7406",icon:"el-icon-lx-sort",redirect:""},{id:120,parent_id:0,path:"/service",name:"service",component:"Layout",menu_type:1,sort:0,title:"\u5BA2\u670D\u4E2D\u5FC3",icon:"el-icon-lx-service",redirect:""},{id:130,parent_id:0,path:"/risk",name:"risk",component:"Layout",menu_type:1,sort:0,title:"\u98CE\u63A7\u7BA1\u7406",icon:"el-icon-lx-link",redirect:""},{id:1372,parent_id:100,path:"/product",name:"product",component:"../views/ProductTable.vue",menu_type:1,sort:0,title:"\u5E94\u7528\u4E2D\u5FC3",icon:"",redirect:""},{id:1472,parent_id:100,path:"/version",name:"version",component:"../views/VersionTable.vue",menu_type:1,sort:0,title:"\u7248\u672C\u7BA1\u7406",icon:"",redirect:""},{id:1572,parent_id:110,path:"/user",name:"user",component:"../views/UserTable.vue",menu_type:1,sort:0,title:"\u7528\u6237\u4FE1\u606F",icon:"",redirect:""},{id:1672,parent_id:110,path:"/blacklist",name:"blacklist",component:"../views/BlackList.vue",menu_type:1,sort:0,title:"\u9ED1\u540D\u5355",icon:"",redirect:""},{id:1772,parent_id:120,path:"/feedback",name:"feedback",component:"../views/BlackList.vue",menu_type:1,sort:0,title:"\u7528\u6237\u53CD\u9988",icon:"",redirect:""},{id:1872,parent_id:120,path:"/withdraw",name:"withdraw",component:"../views/FeedBack.vue",menu_type:1,sort:0,title:"\u63D0\u73B0\u5BA1\u6838",icon:"",redirect:""},{id:1972,parent_id:120,path:"/withdrawdetailall",name:"withdrawdetailall",component:"../views/WithdrawDetailAll.vue",menu_type:1,sort:0,title:"\u63D0\u73B0\u8BB0\u5F55",icon:"",redirect:""},{id:2072,parent_id:130,path:"/risk",name:"riskmanage",component:"../views/RiskTable.vue",menu_type:1,sort:0,title:"\u98CE\u9669\u63A7\u5236",icon:"",redirect:""},{id:2172,parent_id:130,path:"/keybehavior",name:"keybehavior",component:"../views/KeyBehavior.vue",menu_type:1,sort:0,title:"\u5173\u952E\u884C\u4E3A\u914D\u7F6E",icon:"",redirect:""}],button:["product:product:view","product:product:add","product:product:edit","product:product:del","product:version:view","product:version:add","product:version:edit","product:version:del","user:user:view","user:user:add","user:user:edit","user:user:del","user:black:view","user:black:add","user:black:edit","user:black:del","service:feedback:view","service:feedback:add","service:feedback:edit","service:feedback:del","service:withdraw:view","service:withdraw:add","service:withdraw:edit","service:withdraw:del","service:withdrawdetailall:view","service:withdrawdetailall:add","service:withdrawdetailall:edit","risk:risk:view","risk:risk:add","risk:risk:edit","risk:keybehavior:view","risk:keybehavior:add","risk:keybehavior:edit","risk:keybehavior:del"]},dataTest={data};let dataJSON=dataTest.data;const useSidebar=useSidebarStore(),testAllPrivilege=()=>{getPrivilege(dataJSON),console.log(dataJSON.button),useSidebar.changeTarbar([{icon:"el-icon-lx-cascades",index:"1",title:"\u4EA7\u54C1\u7BA1\u7406",subs:[{index:"/product",title:"\u5E94\u7528\u4E2D\u5FC3"},{index:"/version",title:"\u7248\u672C\u7BA1\u7406"}]},{icon:"el-icon-lx-sort",index:"2",title:"\u7528\u6237\u7BA1\u7406",subs:[{index:"/user",title:"\u7528\u6237\u4FE1\u606F"},{index:"/blacklist",title:"\u9ED1\u540D\u5355"}]},{icon:"el-icon-lx-service",index:"3",title:"\u5BA2\u670D\u4E2D\u5FC3",subs:[{index:"/feedback",title:"\u7528\u6237\u53CD\u9988"},{index:"/withdraw",title:"\u63D0\u73B0\u5BA1\u6838"},{index:"/withdrawdetailall",title:"\u63D0\u73B0\u8BB0\u5F55"}]},{icon:"el-icon-lx-link",index:"4",title:"\u98CE\u63A7\u7BA1\u7406",subs:[{index:"/risk",title:"\u98CE\u9669\u63A7\u5236"},{index:"/keybehavior",title:"\u5173\u952E\u884C\u4E3A\u914D\u7F6E"}]},{icon:"el-icon-menu",index:"5",title:"\u6743\u9650\u7BA1\u7406",subs:[{index:"/privilegemanage",title:"\u89D2\u8272\u521B\u5EFA"},{index:"/privilegelist",title:"\u8D26\u53F7\u5217\u8868"}]}])},Login_vue_vue_type_style_index_0_scoped_true_lang="",_sfc_main={setup(){const e=useRouter$1(),r=reactive({username:"admin",password:"123123"}),i={username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}]},t=ref(null),n=()=>{console.log(r),console.log(e.getRoutes()),t.value.validate(o=>{if(o)_Message.success("\u767B\u5F55\u6210\u529F"),localStorage.setItem("ms_username",r.username),localStorage.setItem("token",md5(r.username+r.password)),e.push("/");else return _Message.error("\u767B\u5F55\u6210\u529F"),!1})};return useTagsStore().clearTags(),{param:r,rules:i,login:t,submitForm:n,testAllPrivilege,getPrivilege,loginAccount}}},_withScopeId=e=>(pushScopeId("data-v-26084dc2"),e=e(),popScopeId(),e),_hoisted_1={class:"login-wrap"},_hoisted_2={class:"ms-login"},_hoisted_3=_withScopeId(()=>createBaseVNode("div",{class:"ms-title"},"\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",-1)),_hoisted_4={class:"login-btn"},_hoisted_5=createTextVNode("\u767B\u5F55"),_hoisted_6=createTextVNode("test"),_hoisted_7=_withScopeId(()=>createBaseVNode("p",{class:"login-tips"},"Tips : \u7528\u6237\u540D\u548C\u5BC6\u7801\u968F\u4FBF\u586B\u3002",-1));function _sfc_render(e,r,i,t,n,s){const o=resolveComponent("el-button"),a=resolveComponent("el-input"),d=resolveComponent("el-form-item"),l=resolveComponent("el-form");return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("div",_hoisted_2,[_hoisted_3,createVNode(l,{model:t.param,rules:t.rules,ref:"login","label-width":"0px",class:"ms-content"},{default:withCtx(()=>[createVNode(d,{prop:"username"},{default:withCtx(()=>[createVNode(a,{modelValue:t.param.username,"onUpdate:modelValue":r[0]||(r[0]=c=>t.param.username=c),placeholder:"username"},{prepend:withCtx(()=>[createVNode(o,{icon:"el-icon-user"})]),_:1},8,["modelValue"])]),_:1}),createVNode(d,{prop:"password"},{default:withCtx(()=>[createVNode(a,{type:"password",placeholder:"password",modelValue:t.param.password,"onUpdate:modelValue":r[1]||(r[1]=c=>t.param.password=c),onKeyup:r[2]||(r[2]=withKeys(c=>t.submitForm(),["enter"]))},{prepend:withCtx(()=>[createVNode(o,{icon:"el-icon-lock"})]),_:1},8,["modelValue"])]),_:1}),createBaseVNode("div",_hoisted_4,[createVNode(o,{type:"primary",onClick:r[3]||(r[3]=c=>t.submitForm())},{default:withCtx(()=>[_hoisted_5]),_:1}),createVNode(o,{onClick:t.testAllPrivilege},{default:withCtx(()=>[_hoisted_6]),_:1},8,["onClick"])]),_hoisted_7]),_:1},8,["model","rules"])])])}const Login=_export_sfc(_sfc_main,[["render",_sfc_render],["__scopeId","data-v-26084dc2"],["__file","/Users/apple/Desktop/project-b github/project-b/src/views/Login.vue"]]);export{Login as default};
