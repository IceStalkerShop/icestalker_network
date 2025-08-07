import {APIByParams, APIByResponse,} from "../typings/typings";
import {RequestConfigOptions} from "icestalker_request/dist/request/requestType";
import {RequestOptions} from "icestalker_request/src/types/axios";
import useRequest from "../config/useRequest";
import {returnOnRequestConfig} from "./utils";


const useNetworkServersByNotify = () => {

    /**
     * 获取站内信（预留）
     * @param data
     * @param extendConfig
     * @param options
     */
    const notifyByGetReadInboxNotify = <T>(data: any, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<T>>(returnOnRequestConfig({
                url: '/system/notice/readInboxNotify', data: data, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 获取消息（分页）
     * @param params
     * @param extendConfig
     * @param options
     */
    const notifyByGetPage = (params: APIByParams.TypeByNotifyPageParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeByResponseByNotifyPage>>(returnOnRequestConfig({
                url: '/system/notice/page', params: params, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 获取站内信（预留）
     * @param params
     * @param extendConfig
     * @param options
     */
    const notifyByGetInbox = <T>(params: any, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<T>>(returnOnRequestConfig({
                url: '/system/notice/getInboxNotify', params: params, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 修改通知模板
     * @param data
     * @param extendConfig
     * @param options
     */
    const notifyByUpdateByTemplate = (data: APIByParams.TypeByUpdateByTemplateParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<Record<any, any>>>(returnOnRequestConfig({
                url: '/system/notice/editNoticeTemplate', data, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 修改通知状态
     * @param data
     * @param extendConfig
     * @param options
     */
    const notifyByUpdateStatus = (data: {
        type: string, id: number
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<Record<any, any>>>(returnOnRequestConfig({
                url: `/system/notice/editNoticeEvent/${data.type}/switch/${data.id}`, data, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 获取消息事件的通知模版
     * @param eventCode
     * @param extendConfig
     * @param options
     */

    const notifyByGetTemplateInfoByEventCode = (eventCode: string, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeByResponseByTemplateInfo>>(returnOnRequestConfig({
                url: `/system/notice/getNoticeTemplateByEvent/${eventCode}`, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    return {
        notifyByGetReadInboxNotify,
        notifyByGetPage,
        notifyByGetInbox,
        notifyByUpdateByTemplate,
        notifyByUpdateStatus,
        notifyByGetTemplateInfoByEventCode
    }
}


export default useNetworkServersByNotify