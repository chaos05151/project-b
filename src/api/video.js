import request from '../utils/request';

export const fetchVideoFirstTableData = query => {
    const url = 'short_videos/short_video_red_envelopes_answers';
    return request({
        url,
        method: 'get',
        params: query
    });
};

export const fetchVideoSecondTableData = query => {
    const url = 'short_videos/short_video_red_envelopes_tasks';
    return request({
        url,
        method: 'get',
        params: query
    });
};

export const fetchVideoThirdTableData = query => {
    const url = 'short_videos/short_video_special_rules';
    return request({
        url,
        method: 'get',
        params: query
    });
};

export const addVideoFirstTableData = data => {
    const url = 'short_videos/short_video_red_envelopes_answers';
    return request({
        url,
        method: 'post',
        params: data
    });
};

export const addVideoSecondTableData = data => {
    const url = 'short_videos/short_video_red_envelopes_tasks';
    return request({
        url,
        method: 'post',
        params: data
    });
};

export const addVideoThirdTableData = data => {
    const url = 'short_videos/short_video_special_rules';
    return request({
        url,
        method: 'post',
        params: data
    });
};

export const editVideoFirstTableData = (id,data) => {
    const url = 'short_videos/short_video_red_envelopes_answers/' + id;
    return request({
        url,
        method: 'put',
        params: data
    });
};

export const editVideoSecondTableData = (id,data) => {
    const url = 'short_videos/short_video_red_envelopes_tasks/' + id;
    return request({
        url,
        method: 'put',
        params: data
    });
};

export const editVideoThirdTableData = (id,data) => {
    const url = 'short_videos/short_video_special_rules/' + id;
    return request({
        url,
        method: 'patch',
        params: data
    });
};

export const deleteVideoFirstTableData = (id) => {
    const url = 'short_videos/short_video_red_envelopes_answers/' + id;
    return request({
        url,
        method: 'delete'
    });
};

export const deleteVideoSecondTableData = (id) => {
    const url = 'short_videos/short_video_red_envelopes_tasks/' + id;
    return request({
        url,
        method: 'delete'
    });
};

export const deleteVideoThirdTableData = (id) => {
    const url = 'short_videos/short_video_special_rules/' + id;
    return request({
        url,
        method: 'delete'
    });
};
