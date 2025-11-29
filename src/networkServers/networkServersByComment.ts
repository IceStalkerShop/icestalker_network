import {
    APIByParams,
    APIByResponse,
} from "../typings/typings";
import useRequest from "../config/useRequest";
import {RequestConfigOptions} from "icestalker_request/dist/request/requestType";
import {RequestOptions} from "icestalker_request/src/types/axios";
import {returnOnRequestConfig} from "./utils";

/**
 * 商品评论接口
 */
const useNetworkServersByComment = () => {

    /**
     * 新增评论
     * @param data
     * @param extendConfig
     * @param options
     */
    const commentByAdd = (data: APIByParams.TypeByCommentParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/comment', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 批量新增评论
     * @param data
     * @param extendConfig
     * @param options
     */

    const commentByAddByBatch = (data: {
        prodComments: Array<APIByParams.TypeByCommentParams>
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/comment', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 编辑评论
     * @param data
     * @param extendConfig
     * @param options
     */
    const commentByEdit = (data: APIByParams.TypeByCommentParams & {
        id: string
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().put<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/comment', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 评论列表
     * @param data
     * @param extendConfig
     * @param options
     */
    const commentByPostByList = (data: APIByParams.TypeByCommentListParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeByResponseByPage<APIByResponse.TypeResponseByComment
            >>>(returnOnRequestConfig({
                url: '/prod/comment/page', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 删除评论
     * @param data
     * @param extendConfig
     * @param options
     */
    const commentByDelete = (data: Array<string>, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/comment/batchRemove', token: true, data: {ids: data}
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 新增管理员评论
     * @param data
     * @param extendConfig
     * @param options
     */
    const commentByReply = (data: {
        spuId?: number
        memberId: number
        memberName: string
        parentId: number
        content: string
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/prod/comment/add/adminReply', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 获取评论详情
     * @param id
     * @param extendConfig
     * @param options
     */
    const commentById = (id: string, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeResponseByComment>>(returnOnRequestConfig({
                url: `/prod/comment/${id}`, token: true,
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    return {
        commentByAdd,
        commentByEdit,
        commentByPostByList,
        commentByDelete,
        commentById,
        commentByAddByBatch,
        commentByReply
    }


}

export default useNetworkServersByComment