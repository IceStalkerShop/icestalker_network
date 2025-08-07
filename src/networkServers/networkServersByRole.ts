import {APIByParams, APIByResponse} from "../typings/typings";
import {RequestConfigOptions} from "icestalker_request/dist/request/requestType";
import {RequestOptions} from "icestalker_request/src/types/axios";
import useRequest from "../config/useRequest";
import {returnOnRequestConfig} from "./utils";

const useNetworkServesByRole = () => {

    /**
     * 新增角色
     * @param data
     * @param extendConfig
     * @param options
     */

    const roleByAdd = (data: APIByParams.TypeByRoleAddParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<Record<any, any>>>(returnOnRequestConfig({
                url: '/system/role', data: data, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 修改角色
     * @param data
     * @param extendConfig
     * @param options
     */
    const roleByUpdate = (data: APIByParams.TypeByRoleAddParams, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().put<APIByResponse.TypeByResponseBySuccess<Record<any, any>>>(returnOnRequestConfig({
                url: '/system/role', data: data, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 通过角色 id 删除角色
     * @param roleId
     * @param extendConfig
     * @param options
     */
    const roleByDeleteByRoleId = (roleId: string, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().delete<APIByResponse.TypeByResponseBySuccess<Record<any, any>>>(returnOnRequestConfig({
                url: `/system/role/${roleId}`, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    return {
        roleByAdd, roleByUpdate,roleByDeleteByRoleId
    }


}

export default useNetworkServesByRole