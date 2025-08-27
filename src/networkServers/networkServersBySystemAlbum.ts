import {APIByParams, APIByResponse,} from "../typings/typings";
import useRequest from "../config/useRequest";
import {RequestConfigOptions} from "icestalker_request/dist/request/requestType";
import {RequestOptions} from "icestalker_request/src/types/axios";
import {returnOnRequestConfig} from "./utils";
import useNetworkByUpload from "../config/useUploadRequest";
import defaultRequestOptions, {getToken} from "../config/defaultRequestOptions";

/**
 * 相册服务接口
 */
const networkServersBySystemAlbum = () => {
    /**
     * 获取相册列表
     * @param extendConfig
     * @param options
     */
    const systemAlbumByGetAlbumList = (extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeResponseByAlbumNodes>>(returnOnRequestConfig({
                url: '/system/album', token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 新增相册
     * @param data
     * @param extendConfig
     * @param options
     */
    const systemAlbumByPostAlbum = (data: {
        parentId: number, name: string, sortIndex: number
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/system/album', token: true,data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 编辑相册
     * @param data
     * @param extendConfig
     * @param options
     */
    const systemAlbumByPutAlbum = (data: {
        id: number, name: string, sortIndex: number
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().put<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/system/album', token: true,data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 编辑图片
     * @param data
     * @param extendConfig
     * @param options
     */
    const systemAlbumByPutAlbumByImg = (data: {
        id: number, name: string,
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().put<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: '/system/album/editImage', token: true, data
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 新增图片
     * @param params
     */
    const systemAlbumByPostAlbumByImg = (params: APIByParams.TypeByUploadByFileParams & {
        albumId: string
    }) => {
        const formData = new FormData();
        formData.append('albumId', params.albumId);
        formData.append('file', params.file);
        const {
            start, cancel
        } = useNetworkByUpload<{
            id: string, imageName: string, isNew: boolean, url: string
        }>({
            data: formData, url: `${defaultRequestOptions.baseURL}/system/album/uploadImage`, headerConfig: {
                'authorization': `Bearer ${getToken()}`
            }, uploadProgressFn: params.uploadProgressFn
        })
        return {
            start, cancel
        }
    }


    /**
     * 获取图片分页
     * @param data
     * @param extendConfig
     * @param options
     */
    const systemAlbumByGetAlbumImageList = (data: {
        pageParams: {
            current: number
            size: number
            sortingFields: Array<{
                sortField: string
                sortOrder: string
            }>
            extra: {}
        }
        name: string
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().post<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeByResponseByPage<{
                id: number
                albumId: number
                name: string
                url: string
                createTime: number
            }>>>(returnOnRequestConfig({
                url: '/system/album/getImagePage', token: true, data,
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 删除相册
     * @param id
     * @param extendConfig
     * @param options
     */
    const systemAlbumByDeleteAlbumById = (id: string, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().delete<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: `/system/album/${id}`, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 删除图片
     * @param id
     * @param extendConfig
     * @param options
     */
    const systemAlbumByDeleteAlbumByImageById = (id: string, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().delete<APIByResponse.TypeByResponseBySuccess<any>>(returnOnRequestConfig({
                url: `/system/album/removeImage/${id}`, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    return {
        systemAlbumByGetAlbumList,
        systemAlbumByPostAlbum,
        systemAlbumByPutAlbum,
        systemAlbumByPutAlbumByImg,
        systemAlbumByPostAlbumByImg,
        systemAlbumByGetAlbumImageList,
        systemAlbumByDeleteAlbumById,
        systemAlbumByDeleteAlbumByImageById
    }


}

export default networkServersBySystemAlbum