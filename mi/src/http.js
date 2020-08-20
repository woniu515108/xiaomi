import axios from 'axios';
import { Message } from 'element-ui';

// 根据前端的跨域方式做调整
axios.defaults = Object.assign(axios.defaults,{
    baseURL:'/api',
    timeout:8000

})

// axios响应拦截器
axios.interceptors.response.use((response)=>{
    let res = response.data;
    let path = location.hash;
    if(res.status == 0){
        return res.data;
    }else if(res.status == 10){
        window.location.href = '/#/login';
        return Promise.reject()
    }else{
        Message.warning(res.msg);
        return Promise.reject()
    }
},(error)=>{
    let res = error.response;
    Message.error(res.data.message);
    return Promise.reject(error)
})


export default axios;