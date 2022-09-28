
import { defineStore } from 'pinia'

export const usermodular=defineStore('usermodular',{
    // persist: true,
    state: ()=>{
        return{
            userDetail:''
        }
     },persist: {
        enabled: true, // 开启数据缓存
        strategies: [
          {
            key: 'user',
            storage: localStorage // 默认是sessionStorage
          }
        ],
      }   
  ,
     getters:{
        achieveuseruserDetail: (state) => state.userDetail
     },
     actions: {
        setuserDetail(row) {
            this.userDetail=row
        },
       clearuserDetail(){
            this.userDetail={
                
            }
        }
        
    }
}

)