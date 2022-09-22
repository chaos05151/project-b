import request from '../utils/request';

//查询所有数据
export const fetchProductTableData = query => {
    const url = 'product_management/game_products';
    return request({
        url,
        method: 'get',
        params: query
    });
};

//获取对应的一条二级游戏
export const fetchProductTableDataById = query => {
    const url = 'product_management/game_products/' + query;
    return request({
        url,
        method: 'get'
    });
};

//根据一级游戏获取二级游戏列表
export const fetchProductList = query => {
    const url = 'product_management/game_products/get_product_list';
    return request({
        url,
        method: 'get',
        params: query
    });
};
//获取一级游戏
export const fetchMainProductList = query => {
    const url = 'product_management/game_main_products';
    return request({
        url,
        method: 'get',
        params: query
    });
};

export const fetchProductTableDetailData = query => {
    const url = 'product_managements/get_list_by_main_product';
    return request({
        url,
        method: 'get',
        params: query
    });
};

//添加一级游戏
export const addProductTableData = data => {
    const url = 'product_management/game_main_products';
    return request({
        url,
        method: 'post',
        data: data
    });
};

//添加二级游戏
export const addSubProductTableData = (id,data) => {
    const url = 'product_management/game_products?id=' + id;
    return request({
        url,
        method: 'post',
        data: data
    });
};

//添加版本
export const addVersionTableData = data => {
    const url = 'api/v1/system_b/game_versions';
    return request({
        url,
        method: 'post',
        data
    });
};

//删除版本
export const deleteVersionTableData = id => {
    const url = 'api/v1/system_b/game_versions/' + id;
    return request({
        url,
        method: 'delete'
    });
};

//查看添加的版本
export const fetchVersionTableData = data => {
    const url = 'api/v1/system_b/game_versions';
    return request({
        url,
        method: 'get',
        params: data
    });
};

//获取关联版本的二级产品和渠道
export const fetchVersionProductChannelData = data => {
    const url = 'api/v1/system_b/game_versions/get_tree';
    return request({
        url,
        method: 'get',
        params: data
    });
};

//获取关联版本的二级产品和渠道
export const fetchProductChannelData = data => {
    const url = 'api/v1/system_b/game_versions/get_game_channel';
    return request({
        url,
        method: 'get',
        params: data
    });
};

//编译一级游戏
export const editProductTableData = (id,data) => {
    const url = 'product_management/game_main_products/' + id;
    return request({
        url,
        method: 'put',
        params: data
    });
};

//编译二级游戏
export const editSubProductTableData = (id,data) => {
    const url = 'product_management/game_products/' + id;
    return request({
        url,
        method: 'put',
        params: data
    });
};

export const deleteProductTableData = (id) => {
    const url = 'product_management/game_main_products/' + id;
    return request({
        url,
        method: 'delete'
    });
};

export const deleteSubProductTableData = (id) => {
    const url = 'product_management/game_products/' + id;
    return request({
        url,
        method: 'delete'
    });
};