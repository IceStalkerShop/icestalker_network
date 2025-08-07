import {RequestConfigOptions} from "icestalker_request/dist/request/requestType";
import {RequestOptions} from "icestalker_request/src/types/axios";
import useRequest from "../config/useRequest";
import {APIByParams, APIByResponse,} from "../typings/typings";
import {returnOnRequestConfig} from "./utils";

const useNetworkServersByConfig = () => {


    /**
     * 获取系统配置
     * @param params
     * @param extendConfig
     * @param options
     */
    const systemConfigByGet = (params: APIByParams.TypeBySystemConfigParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<Array<APIByResponse.TypeByResponseBySystemConfigItem>>>(returnOnRequestConfig({
                url: `/system/config`, params, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 修改系统配置
     * @param data
     * @param extendConfig
     * @param options
     */

    const systemConfigByUpdate = (data: APIByParams.TypeBySystemConfigUpdateParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().put<APIByResponse.TypeByResponseBySuccess<Record<any, any>>>(returnOnRequestConfig({
                url: `/system/config`, data, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    return {
        systemConfigByGet, systemConfigByUpdate
    }
}


export default useNetworkServersByConfig