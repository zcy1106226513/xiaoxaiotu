import axios from 'axios';
import store from '@/store';

const instance = axios.create({
  baseURL: 'https://apipc-xiaotuxian-front.itheima.net',
});
// 请求拦截添加请求头
instance.interceptors.request.use(
  (config) => {
    const { token } = store.state.userInfo;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(error),

);
// 返回数据脱壳
instance.interceptors.response.use(
  (res) => {
    const { data } = res;
    if (data.code === 0) {
      return data;
    }
    return data;
  },
  (error) => Promise.reject('error'),
);

export default instance;
