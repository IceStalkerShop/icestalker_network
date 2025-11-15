import {APIByParams, APIByResponse,} from "../typings/typings";
import useRequest from "../config/useRequest";
import {RequestConfigOptions} from "icestalker_request/dist/request/requestType";
import {RequestOptions} from "icestalker_request/src/types/axios";
import {returnOnRequestConfig} from "./utils";

/**
 * 会员服务接口
 */
const networkServersByMember = () => {

    /**
     * 新增会员
     * @param data
     * @param extendConfig
     * @param options
     */
    const systemByPostByMember = (data: APIByParams.TypeByMemBerParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/member', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 修改会员
     * @param data
     * @param extendConfig
     * @param options
     */

    const systemByPutByMember = (data: APIByParams.TypeByMemBerParams & {
        memberId: string
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().put<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/member', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    const systemByPostByMemberByList = (data: APIByParams.TypeByMemberListParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeByResponseByPage<APIByResponse.TypeResponseByMember>>>(returnOnRequestConfig({
                url: '/member/page', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    const systemByPutByMemberChange = (memberId: string, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().put<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: `/member/change/${memberId}`, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }

    const systemByGetByMemberInfoById = (memberId: string, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeResponseByMember>>(returnOnRequestConfig({
                url: `/member/edit/${memberId}`, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    const systemByGetByMemberAddressById = (memberId: string, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeResponseByMemberAddress>>(returnOnRequestConfig({
                url: `/member/address/${memberId}`, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    return {
        systemByPostByMember,
        systemByPutByMember,
        systemByPostByMemberByList,
        systemByPutByMemberChange,
        systemByGetByMemberInfoById,
        systemByGetByMemberAddressById
    }


}

export default networkServersByMember