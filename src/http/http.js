import Vue from "vue";
import Axios from "axios";
// import store from "../store";
import router from "../router";
 
console.log("213", process.env.NODE_ENV);

var baseURL;
if (process.env.NODE_ENV === "development") {
    baseURL = "http://localhost:3001";
} else if (process.env.NODE_ENV === "production") {
    baseURL = "http://localhost:3002";
}
//根据环境的不同使用不同的baseurl
// baseURL是axios中路径的公共前缀

const instance = Axios.create({
    baseURL,
    timeout: 2000,
});
//创建axios实例

// 添加请求拦截器
// 只要发送请求的时候就会进行拦截，执行完拦截器里的代码，再放行
instance.interceptors.request.use(
    function(config) {
        // 在发送请求之前把本地存储中存储的token放在header中发送给服务端
        if (localStorage.getItem("token")) {
            config.headers.Authorization = localStorage.getItem("token");
        }
        return config;
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
instance.interceptors.response.use(
    function(response) {
        // 对响应数据做点什么：如果返回无效token的话就跳转至登录页面
        console.log(response);
        if (response.data.msg === "无效token") {
            router.push({
                name: "login",
            });
        }
        return response;
    },
    function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

// 封装http方法，如果请求成功就把请求到的数据return 如果响应失败就执行失败的catch函数
export default function http(url, method, data = {}, params = {}) {
    return instance({
            url,
            data,
            method,
            params,
        })
        .then((res) => {
            console.log(res);
            if (res.status >= 200 && res.status < 300) {
                return res.data;
            } else {
                return Promise.reject(res.data.meta.msg);
            }
        })
        .catch((err) => {
            return Promise.reject(err);
        });
}