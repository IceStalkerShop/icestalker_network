import {
    APIByParams,
    APIByResponse,
} from "../typings/typings";
import useRequest from "../config/useRequest";
import {RequestConfigOptions} from "icestalker_request/dist/request/requestType";
import {RequestOptions} from "icestalker_request/src/types/axios";
import {returnOnRequestConfig} from "./utils";

/**
 * 商品属性接口
 */
const useNetworkServersBySpu = () => {

    /**
     * 新增标签
     * @param data
     * @param extendConfig
     * @param options
     */
    const spuByAdd = (data: APIByParams.TypeBySpuParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/spu/template', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 编辑属性
     * @param data
     * @param extendConfig
     * @param options
     */
    const spuByEdit = (data: APIByParams.TypeBySpuParamsByEdit, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().put<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/spu/template', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 属性列表
     * @param data
     * @param extendConfig
     * @param options
     */
    const spuByPostByList = (data: APIByParams.TypeBySpuListParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeByResponseByPage<Array<APIByResponse.TypeResponseBySpu
            >>>>(returnOnRequestConfig({
                url: '/prod/spu/template/page', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 删除属性
     * @param data
     * @param extendConfig
     * @param options
     */
    const spuByDelete = (data: Array<string>, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/spu/template/batchRemove', token: true, data: {ids: data}
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
    const spuById = (id: string, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeResponseBySpu>>(returnOnRequestConfig({
                url: `/prod/spu/template/${id}`, token: true,
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    return {
        spuByAdd,
        spuByEdit,
        spuByPostByList,
        spuByDelete,
        spuById
    }


}

export default useNetworkServersBySpu