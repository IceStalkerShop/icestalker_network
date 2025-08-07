import {APIByResponse} from "../typings/typings";
import {RequestConfigOptions} from "icestalker_request/dist/request/requestType";
import {RequestOptions} from "icestalker_request/src/types/axios";
import useRequest from "../config/useRequest";
import {returnOnRequestConfig} from "./utils";

const useNetworkServesByVerifyCode = () => {


    /**
     * 发送短信验证码
     * @param params
     * @param extendConfig
     * @param options
     */
    const verifyCodeBySendBySms = (params: {
        phone: string
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<Record<any, any>>>(returnOnRequestConfig({
                url: '/resource/send/sms-code', params, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 发送邮件验证码
     * @param params
     * @param extendConfig
     * @param options
     */

    const verifyCodeBySendByEmail = (params: {
        email: string
    }, extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<Record<any, any>>>(returnOnRequestConfig({
                url: '/resource/send/email-code', params, token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    /**
     * 生成图片验证码
     * @param extendConfig
     * @param options
     */

    const verifyCodeByCreateByImg = (extendConfig?: RequestConfigOptions, options?: RequestOptions) => {
        try {
            return useRequest().get<APIByResponse.TypeByResponseBySuccess<APIByResponse.TypeResponseByVerifyCodeByImage>>(returnOnRequestConfig({
                url: '/resource/gen-code', token: true
            }, extendConfig), options)
        } catch (error) {
            throw new Error(error);
        }
    }


    return {
        verifyCodeBySendBySms, verifyCodeBySendByEmail, verifyCodeByCreateByImg
    }

}


export default useNetworkServesByVerifyCode