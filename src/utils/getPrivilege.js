import {useRouterStore} from '../store/router'
const useRouter=useRouterStore()
export const getPrivilege=(data)=>{
    useRouter.setButton(data.button)
            let arr=[]
            let child=[]
            // console.log(data);
            const getPath=(str)=>{
                const arr=str.split('/')
                console.log(arr);
                 str='/'+arr[2]
                return str
            }
 
            const routerAdd=[]
            data.menu.map(item=>{
                if(item.parent_id!=0){
                    routerAdd.push({
                        path:item.path,
                        name:item.name,
                        meta:{
                            title:item.title
                        },
                        component:item.component
                    })
                }
            })
            
            data.menu.map(item=>{
                if(item.parent_id==0){
                    arr.push({...item,children:[]})
                }else{
                    child.push(item)
                }
            })
            arr.map(item=>{
                child.map(items=>{
                    if(items.parent_id==item.id){
                        item.children.push(items)
                    }
                })
            })
            console.log(arr,routerAdd);
            useRouter.setRouter(routerAdd)
           
            const getSubs=(arr)=>{
                arr=arr.map(item=>{
                    return {
                        index:item.path,
                        title:item.title
                    }
                })
                return arr
            }
          const tabar=arr.map((item,index)=>{
                return{
                    icon:item.icon,
                    index:index,
                    title:item.title,
                    subs:getSubs(item.children)
                }
           })
           console.log(tabar);
           return tabar
}