import{s as e}from"./index.3fee5d13.js";const l=t=>e({url:"/admin/v1/wechat_user/wechat_users/blacklist",method:"get",params:t}),a=t=>e({url:"/admin/v1/wechat_user/wechat_users/remove_blacklist",method:"delete",params:t}),r=t=>e({url:"/admin/v1/device_black_list/device_black_lists/synchronizing_black_list",method:"post",data:t}),i=()=>e({url:"/admin/v1/device_black_list/device_black_lists",method:"get"}),n=t=>{const s="/admin/v1/device_black_list/device_black_lists/"+t;return e({url:s,method:"delete"})},o=t=>e({url:"/admin/v1/device_black_list/device_black_lists/exporting_device_black_list",method:"post",data:t}),_=t=>e({url:"/admin/v1/wechat_user/wechat_users/importing_black_users",method:"post",data:t});export{i as a,o as b,a as d,l as f,_ as i,n as r,r as s};
