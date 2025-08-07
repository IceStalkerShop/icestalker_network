import {Request} from "icestalker_request";
import defaultRequestOptions from "./defaultRequestOptions";


let request: Request | null = null;


const useRequest = (): Request => {
    if (!request) {
        request = new Request(defaultRequestOptions);
    }
    return request;

}

export default useRequest;
