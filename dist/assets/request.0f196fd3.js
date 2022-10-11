import{k as Ve}from"./index.95db1816.js";var je={exports:{}},Y={exports:{}},Pe=function(e,n){return function(){for(var t=new Array(arguments.length),s=0;s<t.length;s++)t[s]=arguments[s];return e.apply(n,t)}},Ke=Pe,w=Object.prototype.toString;function Z(r){return w.call(r)==="[object Array]"}function W(r){return typeof r>"u"}function Xe(r){return r!==null&&!W(r)&&r.constructor!==null&&!W(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function We(r){return w.call(r)==="[object ArrayBuffer]"}function Ge(r){return typeof FormData<"u"&&r instanceof FormData}function Ye(r){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&r.buffer instanceof ArrayBuffer,e}function Ze(r){return typeof r=="string"}function Qe(r){return typeof r=="number"}function ke(r){return r!==null&&typeof r=="object"}function q(r){if(w.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function er(r){return w.call(r)==="[object Date]"}function rr(r){return w.call(r)==="[object File]"}function tr(r){return w.call(r)==="[object Blob]"}function Ne(r){return w.call(r)==="[object Function]"}function nr(r){return ke(r)&&Ne(r.pipe)}function ar(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}function sr(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function ir(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function Q(r,e){if(!(r===null||typeof r>"u"))if(typeof r!="object"&&(r=[r]),Z(r))for(var n=0,a=r.length;n<a;n++)e.call(null,r[n],n,r);else for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.call(null,r[t],t,r)}function G(){var r={};function e(t,s){q(r[s])&&q(t)?r[s]=G(r[s],t):q(t)?r[s]=G({},t):Z(t)?r[s]=t.slice():r[s]=t}for(var n=0,a=arguments.length;n<a;n++)Q(arguments[n],e);return r}function or(r,e,n){return Q(e,function(t,s){n&&typeof t=="function"?r[s]=Ke(t,n):r[s]=t}),r}function ur(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var v={isArray:Z,isArrayBuffer:We,isBuffer:Xe,isFormData:Ge,isArrayBufferView:Ye,isString:Ze,isNumber:Qe,isObject:ke,isPlainObject:q,isUndefined:W,isDate:er,isFile:rr,isBlob:tr,isFunction:Ne,isStream:nr,isURLSearchParams:ar,isStandardBrowserEnv:ir,forEach:Q,merge:G,extend:or,trim:sr,stripBOM:ur},g=v;function ie(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Ue=function(e,n,a){if(!n)return e;var t;if(a)t=a(n);else if(g.isURLSearchParams(n))t=n.toString();else{var s=[];g.forEach(n,function(l,i){l===null||typeof l>"u"||(g.isArray(l)?i=i+"[]":l=[l],g.forEach(l,function(h){g.isDate(h)?h=h.toISOString():g.isObject(h)&&(h=JSON.stringify(h)),s.push(ie(i)+"="+ie(h))}))}),t=s.join("&")}if(t){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+t}return e},fr=v;function P(){this.handlers=[]}P.prototype.use=function(e,n,a){return this.handlers.push({fulfilled:e,rejected:n,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};P.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};P.prototype.forEach=function(e){fr.forEach(this.handlers,function(a){a!==null&&e(a)})};var cr=P,lr=v,dr=function(e,n){lr.forEach(e,function(t,s){s!==n&&s.toUpperCase()===n.toUpperCase()&&(e[n]=t,delete e[s])})},Te=function(e,n,a,t,s){return e.config=n,a&&(e.code=a),e.request=t,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},U,oe;function Le(){if(oe)return U;oe=1;var r=Te;return U=function(n,a,t,s,o){var u=new Error(n);return r(u,a,t,s,o)},U}var T,ue;function hr(){if(ue)return T;ue=1;var r=Le();return T=function(n,a,t){var s=t.config.validateStatus;!t.status||!s||s(t.status)?n(t):a(r("Request failed with status code "+t.status,t.config,null,t.request,t))},T}var L,fe;function pr(){if(fe)return L;fe=1;var r=v;return L=r.isStandardBrowserEnv()?function(){return{write:function(a,t,s,o,u,l){var i=[];i.push(a+"="+encodeURIComponent(t)),r.isNumber(s)&&i.push("expires="+new Date(s).toGMTString()),r.isString(o)&&i.push("path="+o),r.isString(u)&&i.push("domain="+u),l===!0&&i.push("secure"),document.cookie=i.join("; ")},read:function(a){var t=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),L}var B,ce;function mr(){return ce||(ce=1,B=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}),B}var D,le;function vr(){return le||(le=1,D=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e}),D}var $,de;function yr(){if(de)return $;de=1;var r=mr(),e=vr();return $=function(a,t){return a&&!r(t)?e(a,t):t},$}var I,he;function br(){if(he)return I;he=1;var r=v,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return I=function(a){var t={},s,o,u;return a&&r.forEach(a.split(`
`),function(i){if(u=i.indexOf(":"),s=r.trim(i.substr(0,u)).toLowerCase(),o=r.trim(i.substr(u+1)),s){if(t[s]&&e.indexOf(s)>=0)return;s==="set-cookie"?t[s]=(t[s]?t[s]:[]).concat([o]):t[s]=t[s]?t[s]+", "+o:o}}),t},I}var F,pe;function Er(){if(pe)return F;pe=1;var r=v;return F=r.isStandardBrowserEnv()?function(){var n=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a"),t;function s(o){var u=o;return n&&(a.setAttribute("href",u),u=a.href),a.setAttribute("href",u),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname}}return t=s(window.location.href),function(u){var l=r.isString(u)?s(u):u;return l.protocol===t.protocol&&l.host===t.host}}():function(){return function(){return!0}}(),F}var H,me;function ve(){if(me)return H;me=1;var r=v,e=hr(),n=pr(),a=Ue,t=yr(),s=br(),o=Er(),u=Le();return H=function(i){return new Promise(function(h,d){var c=i.data,C=i.headers,S=i.responseType;r.isFormData(c)&&delete C["Content-Type"];var f=new XMLHttpRequest;if(i.auth){var Je=i.auth.username||"",ze=i.auth.password?unescape(encodeURIComponent(i.auth.password)):"";C.Authorization="Basic "+btoa(Je+":"+ze)}var ne=t(i.baseURL,i.url);f.open(i.method.toUpperCase(),a(ne,i.params,i.paramsSerializer),!0),f.timeout=i.timeout;function ae(){if(!!f){var E="getAllResponseHeaders"in f?s(f.getAllResponseHeaders()):null,b=!S||S==="text"||S==="json"?f.responseText:f.response,O={data:b,status:f.status,statusText:f.statusText,headers:E,config:i,request:f};e(h,d,O),f=null}}if("onloadend"in f?f.onloadend=ae:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(ae)},f.onabort=function(){!f||(d(u("Request aborted",i,"ECONNABORTED",f)),f=null)},f.onerror=function(){d(u("Network Error",i,null,f)),f=null},f.ontimeout=function(){var b="timeout of "+i.timeout+"ms exceeded";i.timeoutErrorMessage&&(b=i.timeoutErrorMessage),d(u(b,i,i.transitional&&i.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",f)),f=null},r.isStandardBrowserEnv()){var se=(i.withCredentials||o(ne))&&i.xsrfCookieName?n.read(i.xsrfCookieName):void 0;se&&(C[i.xsrfHeaderName]=se)}"setRequestHeader"in f&&r.forEach(C,function(b,O){typeof c>"u"&&O.toLowerCase()==="content-type"?delete C[O]:f.setRequestHeader(O,b)}),r.isUndefined(i.withCredentials)||(f.withCredentials=!!i.withCredentials),S&&S!=="json"&&(f.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&f.addEventListener("progress",i.onDownloadProgress),typeof i.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",i.onUploadProgress),i.cancelToken&&i.cancelToken.promise.then(function(b){!f||(f.abort(),d(b),f=null)}),c||(c=null),f.send(c)})},H}var p=v,ye=dr,wr=Te,gr={"Content-Type":"application/x-www-form-urlencoded"};function be(r,e){!p.isUndefined(r)&&p.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function xr(){var r;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(r=ve()),r}function Rr(r,e,n){if(p.isString(r))try{return(e||JSON.parse)(r),p.trim(r)}catch(a){if(a.name!=="SyntaxError")throw a}return(n||JSON.stringify)(r)}var k={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:xr(),transformRequest:[function(e,n){return ye(n,"Accept"),ye(n,"Content-Type"),p.isFormData(e)||p.isArrayBuffer(e)||p.isBuffer(e)||p.isStream(e)||p.isFile(e)||p.isBlob(e)?e:p.isArrayBufferView(e)?e.buffer:p.isURLSearchParams(e)?(be(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):p.isObject(e)||n&&n["Content-Type"]==="application/json"?(be(n,"application/json"),Rr(e)):e}],transformResponse:[function(e){var n=this.transitional,a=n&&n.silentJSONParsing,t=n&&n.forcedJSONParsing,s=!a&&this.responseType==="json";if(s||t&&p.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(s)throw o.name==="SyntaxError"?wr(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};k.headers={common:{Accept:"application/json, text/plain, */*"}};p.forEach(["delete","get","head"],function(e){k.headers[e]={}});p.forEach(["post","put","patch"],function(e){k.headers[e]=p.merge(gr)});var ee=k,Cr=v,Sr=ee,Or=function(e,n,a){var t=this||Sr;return Cr.forEach(a,function(o){e=o.call(t,e,n)}),e},M,Ee;function Be(){return Ee||(Ee=1,M=function(e){return!!(e&&e.__CANCEL__)}),M}var we=v,_=Or,Ar=Be(),qr=ee;function J(r){r.cancelToken&&r.cancelToken.throwIfRequested()}var jr=function(e){J(e),e.headers=e.headers||{},e.data=_.call(e,e.data,e.headers,e.transformRequest),e.headers=we.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),we.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var n=e.adapter||qr.adapter;return n(e).then(function(t){return J(e),t.data=_.call(e,t.data,t.headers,e.transformResponse),t},function(t){return Ar(t)||(J(e),t&&t.response&&(t.response.data=_.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})},m=v,De=function(e,n){n=n||{};var a={},t=["url","method","data"],s=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],u=["validateStatus"];function l(d,c){return m.isPlainObject(d)&&m.isPlainObject(c)?m.merge(d,c):m.isPlainObject(c)?m.merge({},c):m.isArray(c)?c.slice():c}function i(d){m.isUndefined(n[d])?m.isUndefined(e[d])||(a[d]=l(void 0,e[d])):a[d]=l(e[d],n[d])}m.forEach(t,function(c){m.isUndefined(n[c])||(a[c]=l(void 0,n[c]))}),m.forEach(s,i),m.forEach(o,function(c){m.isUndefined(n[c])?m.isUndefined(e[c])||(a[c]=l(void 0,e[c])):a[c]=l(void 0,n[c])}),m.forEach(u,function(c){c in n?a[c]=l(e[c],n[c]):c in e&&(a[c]=l(void 0,e[c]))});var R=t.concat(s).concat(o).concat(u),h=Object.keys(e).concat(Object.keys(n)).filter(function(c){return R.indexOf(c)===-1});return m.forEach(h,i),a};const Pr="axios",kr="0.21.4",Nr="Promise based HTTP client for the browser and node.js",Ur="index.js",Tr={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},Lr={type:"git",url:"https://github.com/axios/axios.git"},Br=["xhr","http","ajax","promise","node"],Dr="Matt Zabriskie",$r="MIT",Ir={url:"https://github.com/axios/axios/issues"},Fr="https://axios-http.com",Hr={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},Mr={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},_r="dist/axios.min.js",Jr="dist/axios.min.js",zr="./index.d.ts",Vr={"follow-redirects":"^1.14.0"},Kr=[{path:"./dist/axios.min.js",threshold:"5kB"}],Xr={name:Pr,version:kr,description:Nr,main:Ur,scripts:Tr,repository:Lr,keywords:Br,author:Dr,license:$r,bugs:Ir,homepage:Fr,devDependencies:Hr,browser:Mr,jsdelivr:_r,unpkg:Jr,typings:zr,dependencies:Vr,bundlesize:Kr};var $e=Xr,re={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){re[r]=function(a){return typeof a===r||"a"+(e<1?"n ":" ")+r}});var ge={},Wr=$e.version.split(".");function Ie(r,e){for(var n=e?e.split("."):Wr,a=r.split("."),t=0;t<3;t++){if(n[t]>a[t])return!0;if(n[t]<a[t])return!1}return!1}re.transitional=function(e,n,a){var t=n&&Ie(n);function s(o,u){return"[Axios v"+$e.version+"] Transitional option '"+o+"'"+u+(a?". "+a:"")}return function(o,u,l){if(e===!1)throw new Error(s(u," has been removed in "+n));return t&&!ge[u]&&(ge[u]=!0,console.warn(s(u," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(o,u,l):!0}};function Gr(r,e,n){if(typeof r!="object")throw new TypeError("options must be an object");for(var a=Object.keys(r),t=a.length;t-- >0;){var s=a[t],o=e[s];if(o){var u=r[s],l=u===void 0||o(u,s,r);if(l!==!0)throw new TypeError("option "+s+" must be "+l);continue}if(n!==!0)throw Error("Unknown option "+s)}}var Yr={isOlderVersion:Ie,assertOptions:Gr,validators:re},Fe=v,Zr=Ue,xe=cr,Re=jr,N=De,He=Yr,x=He.validators;function A(r){this.defaults=r,this.interceptors={request:new xe,response:new xe}}A.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=N(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=e.transitional;n!==void 0&&He.assertOptions(n,{silentJSONParsing:x.transitional(x.boolean,"1.0.0"),forcedJSONParsing:x.transitional(x.boolean,"1.0.0"),clarifyTimeoutError:x.transitional(x.boolean,"1.0.0")},!1);var a=[],t=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(e)===!1||(t=t&&d.synchronous,a.unshift(d.fulfilled,d.rejected))});var s=[];this.interceptors.response.forEach(function(d){s.push(d.fulfilled,d.rejected)});var o;if(!t){var u=[Re,void 0];for(Array.prototype.unshift.apply(u,a),u=u.concat(s),o=Promise.resolve(e);u.length;)o=o.then(u.shift(),u.shift());return o}for(var l=e;a.length;){var i=a.shift(),R=a.shift();try{l=i(l)}catch(h){R(h);break}}try{o=Re(l)}catch(h){return Promise.reject(h)}for(;s.length;)o=o.then(s.shift(),s.shift());return o};A.prototype.getUri=function(e){return e=N(this.defaults,e),Zr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Fe.forEach(["delete","get","head","options"],function(e){A.prototype[e]=function(n,a){return this.request(N(a||{},{method:e,url:n,data:(a||{}).data}))}});Fe.forEach(["post","put","patch"],function(e){A.prototype[e]=function(n,a,t){return this.request(N(t||{},{method:e,url:n,data:a}))}});var Qr=A,z,Ce;function Me(){if(Ce)return z;Ce=1;function r(e){this.message=e}return r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,z=r,z}var V,Se;function et(){if(Se)return V;Se=1;var r=Me();function e(n){if(typeof n!="function")throw new TypeError("executor must be a function.");var a;this.promise=new Promise(function(o){a=o});var t=this;n(function(o){t.reason||(t.reason=new r(o),a(t.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.source=function(){var a,t=new e(function(o){a=o});return{token:t,cancel:a}},V=e,V}var K,Oe;function rt(){return Oe||(Oe=1,K=function(e){return function(a){return e.apply(null,a)}}),K}var X,Ae;function tt(){return Ae||(Ae=1,X=function(e){return typeof e=="object"&&e.isAxiosError===!0}),X}var qe=v,nt=Pe,j=Qr,at=De,st=ee;function _e(r){var e=new j(r),n=nt(j.prototype.request,e);return qe.extend(n,j.prototype,e),qe.extend(n,e),n}var y=_e(st);y.Axios=j;y.create=function(e){return _e(at(y.defaults,e))};y.Cancel=Me();y.CancelToken=et();y.isCancel=Be();y.all=function(e){return Promise.all(e)};y.spread=rt();y.isAxiosError=tt();Y.exports=y;Y.exports.default=y;(function(r){r.exports=Y.exports})(je);const it=Ve(je.exports),te=it.create({baseURL:"https://flora-staging.relationshipapp.com/",timeout:5e13});te.interceptors.request.use(r=>(r.headers["x-access-token"]=localStorage.getItem("token"),r.params&&Object.keys(r.params).forEach(n=>{typeof r.params[n]>"u"&&delete r.params[n]}),console.log("config",r.params),r),r=>(console.log(r),Promise.reject()));te.interceptors.response.use(r=>{if(r.status===200)return r.data;Promise.reject()},r=>(console.log(r),Promise.reject()));const ut=te;export{ut as r};
