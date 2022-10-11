// import { useRouterStore} from '../store/router'
// const routerStore=useRouterStore()

export const getRouterPrivileg=(to)=>{
    let bool=''
    //菜单一级页面路由
    let routerList=['/product','/version','/user','/blacklist','/feedback','/withdraw','/withdrawdetailall','/risk','/keybehavior','/privilegemanage','/privilegelist']
    
    console.log(JSON.parse(localStorage.getItem('router')));
    let data=JSON.parse(localStorage.getItem('router')).data
    if(data==""){
        if(routerList.includes(to)){
            bool='no_pass'
        }else{
            bool='pass'
        }
        return bool
    }

    data=data.map(item=>{
        return item.path
    })
    // console.log(data);
    if(routerList.includes(to)){
        if(data.includes(to)){
            bool='pass'
        }else{
            bool='no_pass'
        }
    }else{
        bool='pass'
    }
 

    
    return bool
}
