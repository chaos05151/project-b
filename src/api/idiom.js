import request from '../utils/request';

export const fetchIdiomFirstTableData = query => {
    const url = 'phrase/phrase_stage_rewards';
    return request({
        url,
        method: 'get',
        params: query
    });
};

export const fetchIdiomSecondTableData = query => {
    const url = 'phrase/phrase_video_rewards';
    return request({
        url,
        method: 'get',
        params: query
    });
};

export const fetchIdiomThirdTableData = query => {
    const url = 'phrase/phrase_free_rewards';
    return request({
        url,
        method: 'get',
        params: query
    });
};

export const forceRuleIdiom = data => {
    const url = 'phrase/phrase_special_rules/set';
    return request({
        url,
        method: 'post',
        params: data
    });
};

export const getForceRuleIdiom = data => {
    const url = 'phrase/phrase_special_rules/get';
    return request({
        url,
        method: 'get',
        params: data
    });
};

export const addIdiomFirstTableData = data => {
    const url = 'phrase/phrase_stage_rewards';
    return request({
        url,
        method: 'post',
        params: data
    });
};

export const addIdiomSecondTableData = data => {
    const url = 'phrase/phrase_video_rewards';
    return request({
        url,
        method: 'post',
        params: data
    });
};

export const addIdiomThirdTableData = data => {
    const url = 'phrase/phrase_free_rewards';
    return request({
        url,
        method: 'post',
        params: data
    });
};

export const editIdiomFirstTableData = (id,data) => {
    const url = 'phrase/phrase_stage_rewards/' + id;
    return request({
        url,
        method: 'patch',
        params: data
    });
};

export const editIdiomSecondTableData = (id,data) => {
    const url = 'phrase/phrase_video_rewards/' + id;
    return request({
        url,
        method: 'patch',
        params: data
    });
};

export const editIdiomThirdTableData = (id,data) => {
    const url = 'phrase/phrase_free_rewards/' + id;
    return request({
        url,
        method: 'patch',
        params: data
    });
};

export const deleteIdiomFirstTableData = (id) => {
    const url = 'phrase/phrase_stage_rewards/' + id;
    return request({
        url,
        method: 'delete'
    });
};

export const deleteIdiomSecondTableData = (id) => {
    const url = 'phrase/phrase_video_rewards/' + id;
    return request({
        url,
        method: 'delete'
    });
};

export const deleteIdiomThirdTableData = (id) => {
    const url = 'phrase/phrase_free_rewards/' + id;
    return request({
        url,
        method: 'delete'
    });
};
