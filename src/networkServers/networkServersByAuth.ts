import {APIByParams, APIByResponse} from "../typings/typings";
import {RequestConfigOptions} from "icestalker_request/dist/request/requestType";
import {RequestOptions} from "icestalker_request/src/types/axios";
import useRequest from "../config/useRequest";
import {returnOnRequestConfig} from "./utils";

const useNetworkServersByAuth = () => {


    /**
     * 账户登出
     * @param extendConfig
     * @param options
     */
    const authByLogout = (extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<Record<any, any>>>(returnOnRequestConfig({
                url: '/auth/logout', token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 账户登录
     * @param data
     * @param extendConfig
     * @param options
     */
    const authByLogin = (data: APIByParams.TypeByAuthLoginParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<Record<any, any>>>(returnOnRequestConfig({
                url: '/auth/login', data: data, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }





    return {
        authByLogin,
        authByLogout
    }

}


export default useNetworkServersByAuth