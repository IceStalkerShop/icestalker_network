import {
    APIByParams,
    APIByResponse,
} from "../typings/typings";
import useRequest from "../config/useRequest";
import {RequestConfigOptions} from "icestalker_request/dist/request/requestType";
import {RequestOptions} from "icestalker_request/src/types/axios";
import {returnOnRequestConfig} from "./utils";
import defaultRequestOptions from "../config/defaultRequestOptions";

/**
 * 类目服务接口
 */
const networkServersByCategory = () => {

    /**
     * 新增类目
     * @param data
     * @param extendConfig
     * @param options
     */
    const categoryByAdd = (data: APIByParams.TypeByCategoryParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/category', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 编辑类目
     * @param data
     * @param extendConfig
     * @param options
     */
    const categoryByEdit = (data: APIByParams.TypeByCategoryParams & {
        id: string
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().put<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/category', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 类目列表
     * @param data
     * @param extendConfig
     * @param options
     */
    const categoryByPostByList = (data: APIByParams.TypeByCategoryListParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeByResponseByPage<APIByResponse.TypeResponseByCategory
                & {
                children: Array<APIByResponse.TypeResponseByCategory>
            }
            >>>(returnOnRequestConfig({
                url: '/prod/category/page', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 删除类目
     * @param data
     * @param extendConfig
     * @param options
     */
    const categoryByDelete = (data: Array<string>, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/category/batchRemove', token: true, data: {ids: data}
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 获取类目
     * @param id
     * @param extendConfig
     * @param options
     */
    const categoryById = (id: string, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeResponseByCategory>>(returnOnRequestConfig({
                url: `/prod/category/${id}`, token: true,
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }

    const categoryByTree = (extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<Array<APIByResponse.TypeResponseByCategory & {
                children: Array<APIByResponse.TypeResponseByCategory>
            }>>>(returnOnRequestConfig({
                url: `/prod/category/tree`, token: true,
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    return {
        categoryByAdd,
        categoryByEdit,
        categoryByPostByList,
        categoryByDelete,
        categoryById,
        categoryByTree
    }


}

export default networkServersByCategory