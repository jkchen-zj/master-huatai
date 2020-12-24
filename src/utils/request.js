import axios from 'axios';
import store from '../store/index'

const service = axios.create({
    baseURL: process.env.NODE_ENV=="development"?'/api':process.env.VUE_APP_API, // api的base_url
    timeout: 5000 // 请求超时时间
})

service.interceptors.request.use(    
    config => {
        const token = store.state.token;        
        token && (config.headers.Authorization = token);        
        return config;    
    },    
    error => {        
        return Promise.error(error);    
    })

service.interceptors.response.use(    
    response => {        
        if (response.status === 200) {            
            return Promise.resolve(response);        
        } else {            
            return Promise.reject(response);        
        }    
    },
    error=>{
        if(error.response.status){
            switch(error.response.status){
                case 401:
                    console.log("未登录")                    
                    // router.replace({                        
                    //     path: '/login',                        
                    //     query: { 
                    //         redirect: router.currentRoute.fullPath 
                    //     }
                    // });
                    break;
                case 403:
                    console.log("身份已经过期")
                    // localStorage.removeItem('token');
                    // // store.commit('loginSuccess', null);
                    // setTimeout(() => {
                    //     toLogin();
                    // }, 1000);
                    break;
                default:
                    console.log(error);   
                
            }
        }
        return Promise.reject(error.response);     
    }
)
export default service