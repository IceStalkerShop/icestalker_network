import {
    APIByParams,
    APIByResponse,
} from "../typings/typings";
import useRequest from "../config/useRequest";
import {RequestConfigOptions} from "icestalker_request/dist/request/requestType";
import {RequestOptions} from "icestalker_request/src/types/axios";
import {returnOnRequestConfig} from "./utils";

/**
 * 标签服务接口
 */
const useNetworkServersByTag = () => {

    /**
     * 新增标签
     * @param data
     * @param extendConfig
     * @param options
     */
    const tagByAdd = (data: APIByParams.TypeByTagParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/tag', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 编辑标签
     * @param data
     * @param extendConfig
     * @param options
     */
    const tagByEdit = (data: APIByParams.TypeByTagParams & {
        id: string
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().put<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/tag', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 标签列表
     * @param data
     * @param extendConfig
     * @param options
     */
    const tagByPostByList = (data: APIByParams.TypeByCategoryListParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeByResponseByPage<APIByResponse.TypeResponseByTag
            >>>(returnOnRequestConfig({
                url: '/prod/tag/page', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 删除标签
     * @param data
     * @param extendConfig
     * @param options
     */
    const tagByDelete = (data: Array<string>, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/tag/batchRemove', token: true, data: {ids: data}
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 获取标签详情
     * @param id
     * @param extendConfig
     * @param options
     */
    const tagById = (id: string, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeResponseByTag>>(returnOnRequestConfig({
                url: `/prod/tag/${id}`, token: true,
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }



    return {
        tagByAdd,
        tagByEdit,
        tagByPostByList,
        tagByDelete,
        tagById,
    }


}

export default useNetworkServersByTag