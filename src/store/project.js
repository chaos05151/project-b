import { defineStore } from 'pinia'
export const useProject=defineStore('project',{
    state: ()=>{
        return{
          userproduct:{
          },
          privilegemanage:{
          },
          privilegeaccount:{

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
        achieveuseruserproduct: (state) => state.userproduct,
        getPrivilegemanage:(state)=>state.privilegemanage,
        getPrivilegeAccount:(state)=>state.privilegeaccount
     },
     actions: {
        setproduct(row) {
            this.userproduct=row
        },
        claerproduct(){
            this.userproduct={  
            }
        },
        setprivilegemanage(row){
          this.privilegemanage=row
        },
        clearprivilegemanage(){
          this.privilegemanage={}
        },
        setprivilegeaccount(row){
          this.privilegeaccount=row
        },
        clearprivilegaccount(){
          this.privilegeaccount={}
        }
        
    }
}

)