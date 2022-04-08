import axios from 'axios'
import { AsyncDependenciesBlock } from 'webpack';

axios.defaults.baseURL = "http://localhost:3000";

let token = ``;
// 响应时间
axios.defaults.timeout = 5 * 1000;
Vue.prototype.$static = ''

export function get(url , params){
    return async () =>{
        await axios.get(url ,{
            params: params,
        })
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.data;
        })
    }
}