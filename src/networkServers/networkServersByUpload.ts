import useNetworkByUpload from "../config/useUploadRequest";
import {APIByParams} from "../typings/typings";
import defaultRequestOptions from "../config/defaultRequestOptions";

const useNetworkServersByUpload = () => {


    const uploadByFile = (params: APIByParams.TypeByUploadByFileParams) => {
        const formData = new FormData();
        formData.append('file', params.file);
        const {
            start, cancel
        } = useNetworkByUpload({
            data: formData,
            url: `${defaultRequestOptions.baseURL}/third/file/upload/file`,
            headerConfig: params.headerConfig,
            uploadProgressFn: params.uploadProgressFn
        })
        return {
            start, cancel
        }
    }


    const uploadByImage = (params: APIByParams.TypeByUploadByImageParams) => {

        const formData = new FormData();
        formData.append('file', params.file);

        if (params.needThumb === 'true') {
            formData.append('needThumb', params.needThumb!);
        }

        if (params.maxWidth) {
            formData.append('maxWidth', params.maxWidth!);
        }

        if (params.maxHeight) {
            formData.append('maxHeight', params.maxHeight)
        }


        const {
            start, cancel
        } = useNetworkByUpload({
            data: formData,
            url: `${defaultRequestOptions.baseURL}/third/file/upload/file`,
            headerConfig: params.headerConfig,
            uploadProgressFn: params.uploadProgressFn
        })
        return {
            start, cancel
        }
    }

    return {
        uploadByFile, uploadByImage
    }


}

export default useNetworkServersByUpload;