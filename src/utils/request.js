import axios from 'axios';
import store from '../store/index'

const service = axios.create({
    baseURL: process.env.NODE_ENV=="development"?'/api':process.env.VUE_APP_API, // api的base_url
    timeout: 5000 // 请求超时时间
})

axios.interceptors.request.use(    
    config => {
        const token = store.state.token;        
        token && (config.headers.Authorization = token);        
        return config;    
    },    
    error => {        
        return Promise.error(error);    
    })

axios.interceptors.response.use(    
    response => {        
        if (response.status === 200) {            
            return Promise.resolve(response);        
        } else {            
            return Promise.reject(response);        
        }    
    },

)