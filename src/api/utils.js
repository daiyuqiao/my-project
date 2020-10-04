import axios from 'axios'

import { Message, Loading } from 'element-ui'

var axiosIns = axios.create({
    timeout: 6000,
    baseURL: 'http://uk8s-treasure-gray.prj-uk8s-gray.svc.a1.gw.ucloudadmin.com'
})

let activeAxios = 0;
let loadingInstance;
let timer;

let showLoading = () => {
    activeAxios++;
    if (timer) {
        clearTimeout(timer);
    }
    timer = () => {
        setTimeout(() => {
            loadingInstance = Loading.service({ fullscreen: true })
        }, 400)
    }
}

let closeLoading = () => {
    activeAxios--;
    if (activeAxios <= 0) {
        clearTimeout(timer)
        loadingInstance && loadingInstance.close()
    }
}

// 添加一个请求拦截器
axios.interceptors.request.use(
    config => {
        showLoading();
        if (config.headers === undefined) {
            config.headers = {
                'Content-Type': 'application/json'
            }
        } else {
            config.headers['Content-Type'] = 'application/json'
        }
        if (process.env.NODE_ENV === 'development') {
            config.headers['remote_user'] = 'admin'
        }
        return config
    },
    error => {
        closeLoading();
        Message({
            showClose: true,
            message: error,
            type: 'error'
        })
        return Promise.reject(error)
    }
)

// response拦截器 处理error
axiosIns.interceptors.response.use(
    response => {
        return response
    },
    err => {
        return Promise.reject(err);
    }
)

export function Request(method, url, params, headers) {
    switch (method) {
        case 'GET':
            return GET(url, params, headers)
        case 'POST':
            return POST(url, params, headers)
        case 'DELETE':
            return DELETE(url, params, headers)
        case 'PUT':
            return PUT(url, params, headers)
        case 'PATCH':
            return PATCH(url, params, headers)
        case 'ALL':
            return All(params)
        default:
            console.log('Not Found method:', method)
    }
}

// 通用方法
const POST = (url, params, headers) => {
    if (params === undefined) {
        params = {}
    }
    return axiosIns
        .post(`${url}`, params, { headers: headers })
        .then(res => res.data)
}

const GET = (url, params, headers) => {
    return axiosIns
        .get(`${url}`, { params: params, headers: headers })
        .then(res => res.data)
}

const PUT = (url, params, headers) => {
    if (params === undefined) {
        params = {}
    }
    return axiosIns
        .put(`${url}`, params, { headers: headers })
        .then(res => res.data)
}

const DELETE = (url, params, headers) => {
    return axiosIns
        .delete(`${url}`, { params: params, headers: headers })
        .then(res => res.data)
}

const PATCH = (url, params, headers) => {
    if (params === undefined) {
        params = {}
    }
    return axiosIns
        .patch(`${url}`, params, { headers: headers })
        .then(res => res.data)
}

const All = func => {
    return Promise.all(func)
}