import axios from 'axios';

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
        if(path != '#/index'){
            window.location.href = '/#/login';
        }
    }else{
        alert(res.msg);
        return Promise.reject()
    }
})

export default axios;