import request from '../utils/request';


export const loginAccount=(data)=>{
    const url='/admin/v1/admin/admins/login';
    return request({
        url,
        method:'post',
        params:data
    })
}
//获取权限菜单
export const fetchPrivilege = () => {
    const url = '/admin/v1/admin/admins/init';
    return request({
        url,
        method: 'get',
    });
};

//查询管理员账号(分页)
export const fetchAdminAccount=(data)=>{
    const url='/admin/v1/admin/admins';
    return request({
        url,
        method:'get',
        params:data
    })
}

//添加管理员账号
export const addAdminAccount=(data)=>{
    const url='/admin/v1/admin/admins';
    return request({
        url,
        method:'post',
        data
    })
}


//修改管理员账号
export const upDateAdminAccount=(data)=>{
    const url='/admin/v1/admin/admins/1';
    return request({
        url,
        method:'put',
        params:data
    })
}

//删除管理员账号
export const deleteAdminAccount=(id)=>{
    const url='/admin/v1/admin/admins/1'+id;
    return request({
        url,
        method:'delete'
    })
}

//权限角色列表
export const fetchRoles=()=>{
    const url='/admin/v1/admin/admin_roles';
    return request({
        url,
        method:'get'
    })
}

//添加权限角色
export const addRoles=(data)=>{
    const url='/admin/v1/admin/admin_roles';
    return request({
        url,
        method:'post',
        params:data
    })
}

//修改权限角色
export const updateRoles=(id,data)=>{
    const url='/admin/v1/admin/admin_roles/'+id;
    return request({
        url,
        method:'put',
        params:data
    })
}

//删除权限角色
export const deleteRoles=(id)=>{
    const url='/admin/v1/admin/admin_roles/'+id;
    return request({
        url,
        method:'delete'
    })
}
