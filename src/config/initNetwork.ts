import useRequest from "./useRequest";
import {RequestHooks} from "icestalker_request/dist/request/requestType";
import defaultRequestOptions from "./defaultRequestOptions";


const initNetwork = (baseUrl: string, requestHooks?: RequestHooks) => {
    return new Promise(resolve => {
        defaultRequestOptions.baseURL = baseUrl;
        if (requestHooks) {
            defaultRequestOptions.requestHooks = requestHooks;
        }
        useRequest();
        resolve();
    })

}
export default initNetwork