import {APIByParams, APIByResponse} from "../typings/typings";
import {RequestConfigOptions} from "icestalker_request/dist/request/requestType";
import {RequestOptions} from "icestalker_request/src/types/axios";
import useRequest from "../config/useRequest";
import {returnOnRequestConfig} from "./utils";

const useNetworkServersByLogistics = () => {


    /**
     * 智能解析地址
     * @param params
     * @param extendConfig
     * @param options
     */
    const logisticsByResolveAddress = (params: APIByParams.TypeLogisticsByResolve, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeByResponseByLogisticsByResolve>>(returnOnRequestConfig({
                url: '/third/logistics/resolveAddress', params, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 获取物流详细
     * @param params
     * @param extendConfig
     * @param options
     */

    const logisticsByGetByTrack = (params: {
        logisticsCode: string, phone?: string
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<Array<APIByResponse.TypeResponseByLogisticsByTrackItem>>>(returnOnRequestConfig({
                url: `/third/logistics/queryTrack/${params.logisticsCode}`, params, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    return {
        logisticsByGetByTrack,
        logisticsByResolveAddress
    }

}

export default useNetworkServersByLogistics