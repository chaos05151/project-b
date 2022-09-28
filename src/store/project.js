import { defineStore } from 'pinia'
export const useProject=defineStore('project',{
    state: ()=>{
        return{
          userproduct:{
          }
        }
     },
     persist: {
        enabled: true, // 开启数据缓存
        strategies: [
          {
            key: 'project',
            storage: localStorage // 默认是sessionStorage
          }
        ],
      }   
  ,
     getters:{
        achieveuseruserproduct: (state) => state.userproduct
     },
     actions: {
        setproduct(row) {
            this.userproduct=row
        },
        claerproduct(){
            this.userproduct={
                
            }
        }
        
    }
}

)