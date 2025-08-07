import useRequest from "./useRequest";
import {RequestHooks} from "icestalker_request/dist/request/requestType";
import defaultRequestOptions from "./defaultRequestOptions";


const initNetwork = (baseUrl: string, requestHooks?: RequestHooks) => {
    defaultRequestOptions.baseURL=baseUrl;
    if (requestHooks) {
        defaultRequestOptions.requestHooks = requestHooks;
    }
    useRequest();

}
export default initNetwork