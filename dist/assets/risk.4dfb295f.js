import{a6 as a}from"./index.3fee5d13.js";const r=a("riskrmodular",{state:()=>({id:"",whichTab:"",rowdata:{},shopdata:{}}),persist:{enabled:!0,strategies:[{key:"riskrmodular",storage:localStorage}]},getters:{getstateid:t=>t.id,getstatewhichTab:t=>t.whichTab,getstaterowdata:t=>t.rowdata,getshopdata:t=>t.shopdata},actions:{setriskid(t){this.id=t},setriskwhichTab(t){this.whichTab=t},setriskrowdata(t){this.rowdata=t},setshopdata(t){this.shopdata=t}}});export{r};