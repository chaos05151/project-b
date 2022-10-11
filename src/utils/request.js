import axios from 'axios';

const service = axios.create({
    baseURL: process.env.NODE_ENV == 'production' ? "https://flora-api.relationshipapp.com/" : process.env.NODE_ENV == 'development' ? "https://flora-staging.relationshipapp.com/" : "https://flora-test.relationshipapp.com/",
    // baseURL: "http://58a8-219-138-49-240.ngrok.io",
    timeout: 50000000000000
});

service.interceptors.request.use(
    config => {
        // config.headers['Authorization'] = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluMTIiLCJleHAiOjE2NjY0MDQyNTB9._iDjTzvpgj3yOBMfKS1pfYrbb8-HQw9tyxLC9v_LRCg'
        config.headers['x-access-token'] = localStorage.getItem('token')
        if(config.params){
            let args=Object.keys(config.params)
            args.forEach(item=>{
                if(typeof config.params[item]=='undefined'){
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
