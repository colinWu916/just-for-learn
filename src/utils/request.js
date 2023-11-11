import axios from 'axios'


const http = axios.create({
  // 通用请求的地址前缀
  baseURL: '/api',
  timeout: 10000, // 超时时间
})

// 添加请求拦截器
http.interceptors.request.use(function (req) {
  // 在发送请求之前做些什么
  const headers = req.headers;
  // const { token = "" } = storage.getItem('userInfo') || {};
  if (!headers.Authorization) headers.Authorization = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYxYTM3NWNkYzAxYTdmYmEwN2I2MWI3NyIsInVzZXJJZCI6MTAwMDEsInVzZXJOYW1lIjoiamFzb24iLCJ1c2VyRW1haWwiOiJqYXNvbkBqYXNvbi5jb20iLCJkZXB0SWQiOlsiNjAxNjcwNTljOTAyN2I3ZDJjNTIwYTYxIiwiNjAxNjczNDVjNmE0NDE3ZjJkMjc1MDZmIl0sInN0YXRlIjoiMSIsInJvbGUiOjAsInJvbGVMaXN0IjpbIjYwMTgwYjA3YjFlYWVkNmM0NWZiZWJkYiJdfSwiaWF0IjoxNjY5MTg5OTMzLCJleHAiOjE2NjkxOTM1MzN9.FYCAxKkXdWco1-RsZ87iTvsdMZGa3dpgcIGlMz9ScM0';
  return req;
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default http