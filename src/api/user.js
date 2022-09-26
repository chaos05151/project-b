import request from '../utils/request';

//用户列表
export const fetchUserListData = data => {
    const url = 'user_management/wechat_users';
    return request({
        url,
        method: 'get',
        params: data
    });
};

//用户详情
export const fetchUserDetailData = id => {
    const url = 'user_management/wechat_users/' + id;
    return request({
        url,
        method: 'get'
    });
};

//登录记录
export const fetchUserLoginData = data => {
    const url = 'user_management/wechat_user_logins' ;
    return request({
        url,
        method: 'get',
        params: data
    });
};

//提现记录
export const fetchUserWithdrawData = data => {
    const url = 'user_management/wechat_user_withdraws';
    return request({
        url,
        method: 'get',
        params: data
    });
};

//用户反馈
export const fetchFeedBackData = data => {
    const url = 'product_management/user_feedbacks';
    return request({
        url,
        method: 'get',
        params: data
    });
};

//反馈详情
export const fetchFeedBackDetail = (id) => {
    const url = 'product_management/user_feedbacks/' + id;
    return request({
        url,
        method: 'get'
    });
};

//处理用户反馈
export const fetchFeedBackDetailChange =(id,data)=>{
    const url = 'product_management/user_feedbacks/' + id;
    return request({
        url,
        method: 'put',
        params:data
    });
}


//黑名单列表
export const fetchBlackListData = (data) => {
    const url = 'user_management/wechat_users/blacklist';
    return request({
        url,
        method: 'get',
        params: data
    });
};

//用户更新
export const updateUserDetail = (id,query) => {
    const url = 'user_management/wechat_users/' + id;
    return request({
        url,
        method: 'patch',
        params: query
    });
};

//加入黑名单
export const addBlacklist = (id) => {
    const url = 'user_management/wechat_users/' + id + '/add_blacklist';
    return request({
        url,
        method: 'post'
    });
};

//移除黑名单
export const removeBlacklist = (id) => {
    const url = 'user_management/wechat_users/' + id + '/remove_blacklist';
    return request({
        url,
        method: 'post'
    });
};

//封禁用户
export const lockUser = (id,data) => {
    const url = 'user_management/wechat_users/' + id + '/set_blacklist';
    return request({
        url,
        method: 'post',
        data
    });
};

//提现配置
export const withdrawAdd = (data) => {
    const url = 'product_management/withdrawal_configs';
    return request({
        url,
        method: 'post',
        data
    });
};

//提现修改
export const withdrawUpdate = (id,data) => {
    const url = 'product_management/withdrawal_configs/' + id;
    return request({
        url,
        method:'patch',
        params: data
    });
};

//提现配置列表
export const withdrawList = (data) => {
    const url = 'product_management/withdrawal_configs';
    return request({
        url,
        method: 'get',
        params: data
    });
};

//提现审批 2，同意;4，拒绝
export const withdrawCheck = (data) => {
    const url = 'user_management/withdrawal/review';
    return request({
        url,
        method: 'post',
        data
    });
};

//提现审批列表  （staus状态 1:待审核，2:提现中，3:已提现，4:拒绝提现，5:提现失败）
export const withdrawCheckList = (data) => {
    const url = 'user_management/withdrawal/find';
    return request({
        url,
        method: 'post',
        data
    });
};