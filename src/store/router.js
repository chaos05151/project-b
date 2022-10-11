import { defineStore } from 'pinia';

export const useRouterStore=defineStore('router',{
    state:()=>{
        return{
            data:[],
            buttons:[]
        }
    },
    persist: {
        enabled: true, // 开启数据缓存
        strategies: [
          {
            key:'router',
            storage: localStorage // 默认是sessionStorage
          }
        ],
      },
    getters: {
        getRouter:(state)=>state.data,
        getButton:(state)=>state.buttons
    },
    actions:{
        setRouter(arr){
            this.data=arr
        },
        clearRouter(){
            this.data=""
        },
        setButton(arr){
            this.buttons=arr
        },
        clearButton(){
            this.buttons=[]
        }
    }
})