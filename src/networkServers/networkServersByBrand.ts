import {APIByParams, APIByResponse} from "../typings/typings";
import useRequest from "../config/useRequest";
import {RequestConfigOptions} from "icestalker_request/dist/request/requestType";
import {RequestOptions} from "icestalker_request/src/types/axios";
import {returnOnRequestConfig} from "./utils";

/**
 * 品牌服务接口
 */
const useNetworkServersByBrand = () => {

    /**
     * 新增品牌
     * @param data
     * @param extendConfig
     * @param options
     */
    const brandByAdd = (data: APIByParams.TypeByBrandParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/brand', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 编辑品牌
     * @param data
     * @param extendConfig
     * @param options
     */
    const brandByEdit = (data: APIByParams.TypeByBrandParams & {
        id: string
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().put<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/brand', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 审核品牌
     * @param data
     * @param extendConfig
     * @param options
     */
    const brandByAudit = (data: {
        id: string,
        approve: boolean,
        reason?: string
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().put<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/brand/audit', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 品牌列表
     * @param data
     * @param extendConfig
     * @param options
     */
    const brandByPostByList = (data: APIByParams.TypeByBrandListParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeByResponseByPage<APIByResponse.TypeResponseByBrand>>>(returnOnRequestConfig({
                url: '/prod/brand/page', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 获取可用品牌列表
     * @param extendConfig
     * @param options
     */
    const brandByCanUse = (extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<Array<APIByResponse.TypeResponseByBrand>>>(returnOnRequestConfig({
                url: '/prod/brand/list', token: true,
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 删除品牌
     * @param data
     * @param extendConfig
     * @param options
     */
    const brandByDelete = (data: Array<string>, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/brand/batchRemove', token: true, data: {ids: data}
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 获取品牌
     * @param id
     * @param extendConfig
     * @param options
     */
    const brandById = (id: string, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeResponseByBrand>>(returnOnRequestConfig({
                url: `/prod/brand/${id}`, token: true,
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    return {
        brandByAdd,
        brandByEdit,
        brandByAudit,
        brandByPostByList,
        brandByCanUse,
        brandByDelete,
        brandById
    }


}

export default useNetworkServersByBrand