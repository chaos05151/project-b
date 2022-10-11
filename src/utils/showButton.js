import { useRouterStore} from '../store/router'
const routerStore=useRouterStore()
export const showButton=(str)=>{
    
    const arr=routerStore.buttons
    const show=arr.includes(str)
    return show
}