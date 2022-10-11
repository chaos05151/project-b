import menus from '../mock/menus.json'
export const dealMenus=(menus)=>{
    let arr=[]
    menus.data.map(item=>{
        if(item.parent_id==0){
            arr.push({
                'id':item.id,
                'node-key':item.id,
                label:item.title,
                children:[]
            })
        }
    })

    arr.forEach(item=>{
        menus.data.forEach(items=>{
            if(item.id==items.parent_id){
                item.children.push({
                    id:items.id,
                    'node-key':items.id,
                    label:items.title,
                    children:[]
                })
            }
        })
    })


    arr.forEach(item1=>{
        item1.children.forEach(item2=>{
            menus.data.forEach(item3=>{
                if(item2.id==item3.parent_id){
                    item2.children.push({
                        id:item3.id,
                        'node-key':item3.id,
                        label:item3.title,
                        children:[]
                    })
                }
            })
        })
    })

    arr.forEach(item1=>{
        item1.children.forEach(item2=>{
            item2.children.forEach(item3=>{
                menus.data.forEach(item4=>{
                    if(item3.id==item4.parent_id){
                        item3.children.push({
                            id:item4.id,
                            'node-key':item4.id,
                            label:item4.title
                        })
                    }
                })
            })
        })
    })

    return arr
    
}