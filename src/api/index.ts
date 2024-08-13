import axios from 'axios';

const http = axios.create({
  baseURL: 'yourBaseUrl', // 设置基础 URL
  timeout: 5000, // 设置超时时间
});

// 添加请求拦截器
http.interceptors.request.use(
  config => {
    // 可以在这里添加一些请求前的处理，如添加请求头
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  response => {
    // 可以在这里对响应数据进行一些处理
    return response.data;
  },
  error => {
    // 可以在这里处理响应错误
    return Promise.reject(error);
  }
);

// 导出 get 和 post 方法
export const get = (url: string, params: any) => {
  return http.get(url, { params });
};

export const post = (url: string, data: any) => {
  return http.post(url, data);
};

export default http;