import {get, post,put,delect} from '../until/axiostools';

export default{

    // 登录
    groupAccountLogin(param){
        return get('/login' , param);
    }
}