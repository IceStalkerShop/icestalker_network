import {
    APIByParams,
    APIByResponse,
} from "../typings/typings";
import useRequest from "../config/useRequest";
import {RequestConfigOptions} from "icestalker_request/dist/request/requestType";
import {RequestOptions} from "icestalker_request/src/types/axios";
import {returnOnRequestConfig} from "./utils";

/**
 * 商品服务接口
 */
const useNetworkServersByServices = () => {

    /**
     * 新增服务
     * @param data
     * @param extendConfig
     * @param options
     */
    const servicesByAdd = (data: APIByParams.TypeByServicesParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/service', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 编辑服务
     * @param data
     * @param extendConfig
     * @param options
     */
    const servicesByEdit = (data: APIByParams.TypeByServicesParams & {
        id: string
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().put<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/service', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 服务列表
     * @param data
     * @param extendConfig
     * @param options
     */
    const servicesByPostByList = (data: APIByParams.TypeByServicesListParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeByResponseByPage<Array<APIByResponse.TypeResponseByServices
            >>>>(returnOnRequestConfig({
                url: '/prod/service/page', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 删除服务
     * @param data
     * @param extendConfig
     * @param options
     */
    const servicesByDelete = (data: Array<string>, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/service/batchRemove', token: true, data: {ids: data}
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 获取属性
     * @param id
     * @param extendConfig
     * @param options
     */
    const servicesById = (id: string, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeResponseByServices>>(returnOnRequestConfig({
                url: `/prod/service/${id}`, token: true,
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    return {
        servicesByAdd,
        servicesByEdit,
        servicesByPostByList,
        servicesByDelete,
        servicesById
    }


}

export default useNetworkServersByServices