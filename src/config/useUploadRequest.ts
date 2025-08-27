import {useRequestByUpload} from "icestalker_request"
import {TypeByUploadParams} from "icestalker_request/src/types/axios";
import {APIByResponse} from "../typings/typings";

const useNetworkByUpload = <T>(uploadParams: TypeByUploadParams) => {
    const {useRequest, axiosCancel} = useRequestByUpload(uploadParams);

    const start = async (): Promise<APIByResponse.TypeByResponseBySuccess<T>> => {
        return new Promise((resolve, reject) => {
            const resByError: APIByResponse.TypeByResponseByError = {
                code: '', msg: '上传失败', extraCode: ''
            }
            useRequest().then(res => {
                console.log(res);
                if (res.status === 200) {
                    if ((res.data as APIByResponse.TypeByResponseBySuccess<T>).code === 200) {
                        resolve(res.data);
                    } else {
                        reject(res.data);
                    }
                } else {
                    reject(resByError);
                }
            }).catch(error => {
                reject(resByError);
            })
        })
    }

    const cancel = () => {
        axiosCancel.cancel();
    }

    return {
        start, cancel
    }
}


export default useNetworkByUpload;