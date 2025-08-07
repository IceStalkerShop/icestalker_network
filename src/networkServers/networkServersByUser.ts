import {APIByParams, APIByResponse,} from "../typings/typings";
import {RequestConfigOptions} from "icestalker_request/dist/request/requestType";
import {RequestOptions} from "icestalker_request/src/types/axios";
import useRequest from "../config/useRequest";
import {returnOnRequestConfig} from "./utils";

const userNetworkServersBySystemByUser = () => {


    /**
     * 新增用户
     * @param data
     * @param extendConfig
     * @param options
     */
    const userByAdd = (data: APIByParams.TypeByUserAddParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<number>>(returnOnRequestConfig({
                url: '/system/user', data: data, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 更新用户
     * @param data
     * @param extendConfig
     * @param options
     */
    const userByUpdate = (data: APIByParams.TypeByUserAddParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().put<APIByResponse.TypeByResponseBySuccess<number>>(returnOnRequestConfig({
                url: '/system/user', data: data, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }

    }


    /**
     * 删除用户
     * @param data
     * @param extendConfig
     * @param options
     */
    const userByDelete = (data: {
        userIds: Array<number>
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().delete<APIByResponse.TypeByResponseBySuccess<number>>(returnOnRequestConfig({
                url: '/system/user', data: data, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }

    }

    /**
     * 重置用户密码
     * @param data
     * @param extendConfig
     * @param options
     */
    const userByRestPassword = (data: {
        password: string, newPassword: string
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().delete<APIByResponse.TypeByResponseBySuccess<object>>(returnOnRequestConfig({
                url: '/system/user/resetPwd', data: data, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }

    }

    /**
     * 修改用户状态
     * @param data
     * @param extendConfig
     * @param options
     */
    const userByUpdateStatus = (data: {
        "userIds": Array<number>, "statusEnum": 'ENABLE' | 'DISABLE'
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().delete<APIByResponse.TypeByResponseBySuccess<object>>(returnOnRequestConfig({
                url: '/system/user/changeStatus', data: data, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }

    }


    /**
     * 获取用户表格分页
     * @param data
     * @param extendConfig
     * @param options
     */
    const userByGetUserPage = (data: APIByParams.TypeByUserPageParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeByResponseByUserPage>>(returnOnRequestConfig({
                url: '/system/user/page', data: data, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }

    }

    /**
     *  通过 userId 获取用户信息
     * @param userId
     * @param extendConfig
     * @param options
     */
    const userByGetUserInfoByUserId = (userId: string, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeByResponseByUserInfo>>(returnOnRequestConfig({
                url: `/system/user/getInfo`, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }

    }


    return {
        userByAdd,
        userByUpdate,
        userByDelete,
        userByRestPassword,
        userByUpdateStatus,
        userByGetUserPage,
        userByGetUserInfoByUserId
    }


}


export default userNetworkServersBySystemByUser