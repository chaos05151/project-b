export const getPrivilege=(res)=>{
            let arr=[]
            let child=[]
            const routerAdd=res.data.map(item=>{
                return{
                    path:item.path,
                    name:item.name,
                    meta:{
                        title:item.title
                    },
                    component:item.component
                }
            })
            
            res.data.map(item=>{
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
            // console.log(arr,routerAdd);
          const tabar=arr.map((item,index)=>{
                return{
                    icon:"",
                    index:index,
                    title:item.title,
                    subs:[]
                }
           })
        //    console.log(tabar);
           return routerAdd
}