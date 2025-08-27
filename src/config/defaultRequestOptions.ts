import {CreateRequestOptions, RequestConfigOptions, RequestHooks} from "icestalker_request/dist/request/requestType";
import useRequest from "./useRequest";


export const requestHooks: RequestHooks = {
    // 请求前
    beforeRequestHook: (config) => {
        return config;
    }, // 请求 hook
    requestInterceptHook: (config) => {
        const {formData} = config;
        if (formData) {
            config.headers.Accept = 'application/x-www-form-urlencoded';
        }
        config = tokenSecurity(config);
        return config;
    }, // 网络请求失败
    requestErrorHook: (error) => {
        return new Promise((resolve, reject) => {
            reject(error);
        });
    },

    responseInterceptHook: (res) => {
        return res;
    },

    responseInterceptCatchHook: (error: any): any => {
        if (error.code === 'ECONNABORTED') {
            console.log('网络链接超时');
            return;
        }

        const {config} = error;
        const {method, retry} = config;
        if (!retry || !config || !config.requestOptions.retry) {
            const responseData = error.response.data;
            console.log(responseData);
            return;
        }

        // 重新链接的操作
        config.retryCount = config.retryCount || 0;

        if (config.retryCount >= config.requestOptions.retry.count) {
            const responseData = error.response.data;
            console.log(responseData);
            return;
        }

        config.retryCount += 1;

        const backoff = new Promise((resolve) => {
            setTimeout(() => {
                resolve(config);
            }, config.requestOptions.retry.delay || 1);
        });
        config.headers = {...config.headers};
        // eslint-disable-next-line consistent-return

        if (method.toLowerCase() === 'get') {
            // eslint-disable-next-line consistent-return
            return backoff.then((config) => useRequest().get(config));
        }
        if (method.toLowerCase() === 'post') {
            // eslint-disable-next-line consistent-return
            return backoff.then((config) => useRequest().post(config));
        }
        if (method.toLowerCase() === 'put') {
            // eslint-disable-next-line consistent-return
            return backoff.then((config) => useRequest().put(config));
        }
        if (method.toLowerCase() === 'delete') {
            // eslint-disable-next-line consistent-return
            return backoff.then((config) => useRequest().delete(config));
        }
    },

    // 请求成功后转换数据
    // eslint-disable-next-line consistent-return
    responseResultTransformHook: (res) => {
        const {status, data} = res;
        if (status === 200) {
            if (data.code === 200) {
                return data;
            }
            throw {
                code: data.code, msg: data.msg, extraCode: data.extraCode
            }

        }
        return {
            code: '', msg: '', data: null, extraCode: ''
        }
    },
};

// 配置token
const tokenSecurity = (config: RequestConfigOptions) => {
    // 设置接口auth权限配置
    const {token} = config;
    if (token) {
        config.headers.authorization = `Bearer ${getToken()}`;
    }

    return config;
};


export const getToken = () => {
    return window.localStorage.getItem('token') || '';
}


const defaultRequestOptions: CreateRequestOptions = {
    timeout: 10000,
    baseURL: '',
    headers: {'content-Type': 'application/json;charset=UTF-8', authorization: 'Bearer'},
    requestHooks,
    requestOptions: {
        retry: {
            count: 3, delay: 1000,
        },
    },
}


export default defaultRequestOptions
