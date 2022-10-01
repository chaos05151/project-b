
import { defineStore } from 'pinia'

export const riskmodular=defineStore('riskrmodular',{
    // persist: true,
    state: ()=>{
        return{
            id:'',
            whichTab:'',
            rowdata:{}
        }
     },persist: {
        enabled: true, // 开启数据缓存
        strategies: [
          {
            key: 'riskrmodular',
            storage: localStorage // 默认是sessionStorage
          }
        ],
      }   
  ,
     getters:{
        getstateid: (state) => state.id,
        getstatewhichTab:(state)=>state.whichTab,
        getstaterowdata:(state)=>state.rowdata
     },
     actions: {
        setriskid(row) {
            this.id=row
        },
       setriskwhichTab(row){
            this.whichTab=row
        },
        setriskrowdata(row){
            this.rowdata=row
        }
        
    }
}

)