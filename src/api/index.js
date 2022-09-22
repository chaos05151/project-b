import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './mock/table.json',
        method: 'get',
        params: query
    });
};

export const fetchVideoData = query => {
    return request({
        url: './mock/videotable.json',
        method: 'get',
        params: query
    });
};

export const fetchIdiomData = query => {
    return request({
        url: './mock/idiomtable.json',
        method: 'get',
        params: query
    });
};

export const fetchDianxiaoData = query => {
    return request({
        url: './mock/dianxiaotable.json',
        method: 'get',
        params: query
    });
};
