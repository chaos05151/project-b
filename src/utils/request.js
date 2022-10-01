import axios from 'axios';

const service = axios.create({
    baseURL: process.env.NODE_ENV == 'production' ? "https://flora-api.relationshipapp.com/" : process.env.NODE_ENV == 'development' ? "https://flora-staging.relationshipapp.com/" : "https://flora-test.relationshipapp.com/",
    // baseURL: "http://a93341.cpolar.top",
    timeout: 50000000000000
});

service.interceptors.request.use(
    config => {
        config.headers['x-access-token'] = localStorage.getItem('token')
        if(config.params){
            let args=Object.keys(config.params)
            args.forEach(item=>{
                if(config.params[item]==undefined){
                    delete config.params[item]
                }
            })
        }
        
        console.log("config",config.params);
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
