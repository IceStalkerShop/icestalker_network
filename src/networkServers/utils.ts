import {RequestConfigOptions} from "icestalker_request/dist/request/requestType";

export const returnOnRequestConfig = (defaultConfig: RequestConfigOptions, extendConfig?: RequestConfigOptions): RequestConfigOptions => {
    let _config = {
        ...defaultConfig
    };


    if (defaultConfig) {
        Object.assign(_config, defaultConfig);
    }

    return _config;

}