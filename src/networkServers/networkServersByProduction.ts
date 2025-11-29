import {APIByParams, APIByResponse} from "../typings/typings";
import useRequest from "../config/useRequest";
import {RequestConfigOptions} from "icestalker_request/dist/request/requestType";
import {RequestOptions} from "icestalker_request/src/types/axios";
import {returnOnRequestConfig} from "./utils";

/**
 * 产品服务接口
 */
const useNetworkServersByProduction = () => {

    /**
     * 新增商品
     * @param data
     * @param extendConfig
     * @param options
     */
    const prodByAdd = (data: APIByParams.TypeByProdParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/spu', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 编辑商品
     * @param data
     * @param extendConfig
     * @param options
     */
    const prodByEdit = (data: APIByParams.TypeByProdParams & {
        id: string
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().put<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/spu', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 修改商品指定字段
     * @param data
     * @param extendConfig
     * @param options
     */
    const prodByEditByField = (data: {
        id: string,
        field: string,
        value: string
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().put<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/spu/field', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 上架商品
     * @param id
     * @param extendConfig
     * @param options
     */
    const prodByUp = (id: string, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().put<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: `/prod/spu/enable/${id}`, token: true,
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 下架商品
     * @param id
     * @param extendConfig
     * @param options
     */
    const prodByDown = (id: string, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeByResponseByPage<APIByResponse.TypeResponseByBrand>>>(returnOnRequestConfig({
                url: `/prod/spu/disable/${id}`, token: true,
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 商品列表
     * @param data
     * @param extendConfig
     * @param options
     */
    const prodByPostByList = (data: APIByParams.TypeByProdListParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeByResponseByPage<APIByResponse.TypeResponseByBrand>>>(returnOnRequestConfig({
                url: '/prod/spu/page', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 删除商品
     * @param data
     * @param extendConfig
     * @param options
     */
    const prodByDelete = (data: Array<string>, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/spu/batchRemove', token: true, data: {ids: data}
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 获取商品
     * @param id
     * @param extendConfig
     * @param options
     */
    const prodById = (id: string, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<APIByParams.TypeByProdParams>>(returnOnRequestConfig({
                url: `/prod/spu/${id}`, token: true,
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    return {
        prodById,
        prodByDelete,
        prodByAdd,
        prodByPostByList,
        prodByEdit,
        prodByDown,
        prodByUp,
        prodByEditByField
    }


}

export default useNetworkServersByProduction