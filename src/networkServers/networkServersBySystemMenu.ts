import {APIByResponse, InterfaceBySystemMenuParamsByAdd, InterfaceBySystemMenuParamsByPut,} from "../typings/typings";
import useRequest from "../config/useRequest";
import {RequestConfigOptions} from "icestalker_request/dist/request/requestType";
import {RequestOptions} from "icestalker_request/src/types/axios";
import {returnOnRequestConfig} from "./utils";

/**
 * 菜单服务接口
 */
const useNetworkServesBySystemMenu = () => {
    /**
     * 新增菜单
     * @param data
     * @param extendConfig
     * @param options
     */
    const systemMenuByAdd = <T>(data: InterfaceBySystemMenuParamsByAdd, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<T>(returnOnRequestConfig({
                url: '/system/menu', data: data, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 修改菜单
     * @param data
     * @param extendConfig
     * @param options
     */
    const systemMenuByPut = (data: InterfaceBySystemMenuParamsByPut, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().put(returnOnRequestConfig({
                url: '/system/menu', data: data, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 获取用户所拥有的菜单和权限
     * @param extendConfig
     * @param options
     */
    const systemMenuByGetUserMenuList = (extendConfig?: RequestConfigOptions, options?: RequestOptions) => {

        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<{
                menuNodes: Array<APIByResponse.TypeByMenuItem>
            }>>(returnOnRequestConfig({
                url: '/system/menu/getUserMenuList', token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 获取路由信息
     * @param extendConfig
     * @param options
     */
    const systemMenuByGetRouterInfo = (extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<APIByResponse.APIByRequestByRouterInfo>>(returnOnRequestConfig({
                url: '/system/menu/getRouters', token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }

    }


    /**
     * 删除菜单
     * @param menuId
     * @param extendConfig
     * @param options
     */
    const systemMenuByDelete = (menuId: number, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().delete(returnOnRequestConfig({
                url: `/system/menu/${menuId}`, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }

    }


    /**
     * 通过菜单名称获取菜单树
     * @param params
     * @param extendConfig
     * @param options
     */

    const systemMenuByGetMenuTreeByMenuName = (params?: {
        menuName: string, status: '1' | '0'
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions): Promise<APIByResponse.TypeByResponseBySuccess<{
        menuNodes: APIByResponse.TypeByMenuTree
    }>> => {

        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<{
                menuNodes: APIByResponse.TypeByMenuTree
            }>>(returnOnRequestConfig({
                url: `/system/menu/getMenuTree`, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    return {
        systemMenuByAdd,
        systemMenuByPut,
        systemMenuByGetUserMenuList,
        systemMenuByGetRouterInfo,
        systemMenuByDelete,
        systemMenuByGetMenuTreeByMenuName
    }


}

export default useNetworkServesBySystemMenu